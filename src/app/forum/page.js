"use client";

import React, { useEffect, useState } from "react";
import { get, ref, set, push, update } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth
import { db } from "../firebase/firebaseConfig";

function ForumPage() {
  const [threads, setThreads] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newComment, setNewComment] = useState("");
  const [currentUser, setCurrentUser] = useState(null); // Store the signed-in user

  // Fetch threads from Firebase
  useEffect(() => {
    const fetchThreads = async () => {
      const dbRef = ref(db, "posts");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const threadsData = snapshot.val();
        const formattedThreads = Object.keys(threadsData).map((key) => ({
          id: key,
          ...threadsData[key],
        }));
        // Sort threads based on likes count (descending)
        formattedThreads.sort((a, b) => b.likes - a.likes);
        setThreads(formattedThreads);
      }
    };

    fetchThreads();

    // Check if the user is authenticated
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null); // User is signed out
      }
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);

  // Handle new thread submission
  const handleNewThreadSubmit = async (e) => {
    e.preventDefault();

    if (!newTitle.trim() || !newContent.trim() || !currentUser) return;

    const newThread = {
      title: newTitle,
      content: newContent,
      likes: 0, // New thread starts with 0 likes
      likedBy: [], // Array to track users who liked the thread
      comments: {}, // No comments initially
      author: currentUser.displayName || currentUser.email, // Add the author's name or email
    };

    // Push the new thread to Firebase
    const threadsRef = ref(db, "posts");
    const newThreadRef = push(threadsRef);
    await set(newThreadRef, newThread);

    // Clear form fields
    setNewTitle("");
    setNewContent("");
  };

  // Handle Like button click
  const handleLike = async (threadId) => {
    if (!currentUser) return;

    const threadRef = ref(db, `posts/${threadId}`);
    const snapshot = await get(threadRef);
    if (snapshot.exists()) {
      const threadData = snapshot.val();
      const likedBy = threadData.likedBy || [];
      const currentLikes = threadData.likes || 0;

      // Check if the user has already liked the thread
      if (!likedBy.includes(currentUser.uid)) {
        const newLikes = currentLikes + 1;

        // Update the like count and likedBy array in Firebase
        await update(threadRef, {
          likes: newLikes,
          likedBy: [...likedBy, currentUser.uid], // Add the user's UID to likedBy
        });

        // Optimistically update local state
        setThreads((prevThreads) =>
          prevThreads.map((thread) =>
            thread.id === threadId
              ? { ...thread, likes: newLikes, likedBy: [...likedBy, currentUser.uid] }
              : thread
          )
        );
      }
    }
  };

  // Handle comment submission
  const handleNewCommentSubmit = async (threadId, e) => {
    e.preventDefault();
    if (!newComment.trim() || !currentUser) return;

    const comment = newComment.trim();
    const threadRef = ref(db, `posts/${threadId}/comments`);
    const newCommentRef = push(threadRef);
    await set(newCommentRef, {
      content: comment,
      author: currentUser.displayName || currentUser.email, // Store the author's name
    });

    // Clear comment field
    setNewComment("");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl text-center mb-6 font-bold">Forum</h1>

      {/* New Thread Form */}
      {currentUser ? (
        <form onSubmit={handleNewThreadSubmit} className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              placeholder="Thread Title"
            />
          </div>
          <div className="relative">
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              placeholder="Thread Content"
              rows="5"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            Start New Thread
          </button>
        </form>
      ) : (
        <p className="text-center">You must be signed in to create a thread.</p>
      )}

      {/* List of Threads */}
      {threads.map((thread) => (
        <div key={thread.id} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm">
          <p className="text-xl font-semibold">{thread.title}</p>
          <p className="mb-2">{thread.content}</p>
          <p className="text-sm text-gray-500">Posted by: {thread.author}</p>
          <p className="text-sm text-gray-500 mb-2">Likes: {thread.likes}</p>
          {/* Like Button */}
          {currentUser && thread.likedBy?.includes(currentUser.uid) ? (
            <button
              disabled
              className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow-sm cursor-not-allowed"
            >
              Liked
            </button>
          ) : (
            <button
              onClick={() => handleLike(thread.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              Like
            </button>
          )}

          {/* Display Comments */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Comments:</h3>
            {Object.values(thread.comments || {}).map((comment, index) => (
              <div key={index} className="mt-2 p-2 border-t border-gray-300">
                <p className="italic">{comment.content}</p>
                <p className="text-sm text-gray-500">- {comment.author}</p>
              </div>
            ))}

            {/* New Comment Form */}
            {currentUser && (
              <form
                onSubmit={(e) => handleNewCommentSubmit(thread.id, e)}
                className="mt-4"
              >
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-400"
                  placeholder="Enter your comment"
                  rows="2"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out mt-2"
                >
                  Add Comment
                  
                </button>
              </form>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForumPage;
