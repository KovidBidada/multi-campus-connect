"use client";

import React, { useEffect, useState } from "react";
import { get, ref, set, push, update } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import { db } from "../firebase/firebaseConfig";
import { FaThumbsUp } from "react-icons/fa"; 

function ForumPage() {
  const [threads, setThreads] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newComment, setNewComment] = useState("");
  const [currentUser, setCurrentUser] = useState(null); 
  const [loading, setLoading] = useState(true); 


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
       
        formattedThreads.sort((a, b) => b.likes - a.likes);
        setThreads(formattedThreads);
      }
      setLoading(false); 
    };

    fetchThreads();

  
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null); 
      }
    });

   
    return () => unsubscribe();
  }, []);

  
  const handleNewThreadSubmit = async (e) => {
    e.preventDefault();

    if (!newTitle.trim() || !newContent.trim() || !currentUser) return;

    const newThread = {
      title: newTitle,
      content: newContent,
      likes: 0, 
      likedBy: [], 
      comments: {}, 
      author: currentUser.displayName || currentUser.email, 
    };

   
    const threadsRef = ref(db, "posts");
    const newThreadRef = push(threadsRef);
    await set(newThreadRef, newThread);

   
    setNewTitle("");
    setNewContent("");
  };

 
  const handleLike = async (threadId) => {
    if (!currentUser) return;

    const threadRef = ref(db, `posts/${threadId}`);
    const snapshot = await get(threadRef);
    if (snapshot.exists()) {
      const threadData = snapshot.val();
      const likedBy = threadData.likedBy || [];
      const currentLikes = threadData.likes || 0;

     
      if (!likedBy.includes(currentUser.uid)) {
        const newLikes = currentLikes + 1;

        
        await update(threadRef, {
          likes: newLikes,
          likedBy: [...likedBy, currentUser.uid], 
        });

        
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


  const handleNewCommentSubmit = async (threadId, e) => {
    e.preventDefault();
    if (!newComment.trim() || !currentUser) return;

    const comment = newComment.trim();
    const threadRef = ref(db, `posts/${threadId}/comments`);
    const newCommentRef = push(threadRef);
    await set(newCommentRef, {
      content: comment,
      author: currentUser.displayName || currentUser.email, 
    });

    
    setNewComment("");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl text-center mb-6 font-bold text-blue-700">Forum</h1>

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
        <p className="text-center text-lg text-gray-600">You must be Signed In to create or interact with a thread.</p>
      )}

    
      {loading && <div className="text-center text-gray-600">Loading threads...</div>}

     
      {threads.map((thread) => (
        <div
          key={thread.id}
          className="mb-4 p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <p className="text-2xl font-semibold text-blue-700">{thread.title}</p>
          <p className="text-gray-600 mb-2">{thread.content}</p>
          <p className="text-sm text-gray-500">Posted by: {thread.author}</p>
          <p className="text-sm text-gray-500 mb-4">Likes: {thread.likes}</p>
       
          {currentUser && thread.likedBy?.includes(currentUser.uid) ? (
            <button
              disabled
              className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow-sm cursor-not-allowed"
            >
              <FaThumbsUp className="inline mr-2" />
              Liked
            </button>
          ) : (
            <button
              onClick={() => handleLike(thread.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              <FaThumbsUp className="inline mr-2" />
              Like
            </button>
          )}

         
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Comments:</h3>
            {Object.values(thread.comments || {}).map((comment, index) => (
              <div key={index} className="mt-2 p-2 border-t border-gray-300">
                <p className="italic">{comment.content}</p>
                <p className="text-sm text-gray-500">- {comment.author}</p>
              </div>
            ))}

            
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
                  className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out"
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
