"use client"; // Make sure this is a client-side component in Next.js

import React, { useState, useEffect } from "react";
import { db, fs, auth } from "../firebase/firebaseConfig"; // Import the Firebase config
import { collection, getDocs } from "firebase/firestore"; // Firestore functions
import { ref, set, get } from "firebase/database"; // Realtime Database functions
import { onAuthStateChanged } from "firebase/auth"; // To handle user auth state

const CollaborationPage = () => {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [newIdea, setNewIdea] = useState("");
  const [submittedIdeas, setSubmittedIdeas] = useState([]); // New state to store submitted ideas

  // Fetch Projects
  const fetchProjects = async () => {
    try {
      // Firestore: Fetching projects collection from Firestore
      const projectsCollection = collection(fs, "projects"); // Correct Firestore collection
      const querySnapshot = await getDocs(projectsCollection);
      const projectData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectData); // Set the fetched projects
    } catch (error) {
      console.error("Error fetching projects: ", error); // Error handling
    }
  };

  // Fetch Submitted Ideas
  const fetchSubmittedIdeas = async () => {
    try {
      // Firebase Realtime Database: Fetch submitted ideas
      const ideasRef = ref(db, "projects"); // Reference to the projects node in Realtime Database
      const snapshot = await get(ideasRef); // Get all data from the "projects" node
      if (snapshot.exists()) {
        const ideasData = snapshot.val();
        const ideasArray = Object.keys(ideasData).map((key) => ({
          id: key,
          ...ideasData[key],
        }));
        setSubmittedIdeas(ideasArray); // Set the fetched submitted ideas
      } else {
        console.log("No ideas found.");
      }
    } catch (error) {
      console.error("Error fetching submitted ideas: ", error); // Error handling
    }
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user if logged in
      } else {
        setUser(null); // Clear user if logged out
      }
    });

    fetchProjects(); // Fetch projects when the component mounts
    fetchSubmittedIdeas(); // Fetch submitted ideas when the component mounts

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const handleSubmitIdea = async (e) => {
    e.preventDefault();
    if (user && newIdea.trim()) {
      try {
        // Firebase Realtime Database: Store new idea
        const projectRef = ref(db, "projects/" + new Date().getTime()); // Create a unique key
        await set(projectRef, {
          name: user.displayName || user.email, // User's name or email
          idea: newIdea, // The project idea
          timestamp: new Date().toISOString(), // Timestamp
        });
        setNewIdea(""); // Clear the idea input after submission
        fetchSubmittedIdeas(); // Refresh the list of submitted ideas
        alert("Project idea submitted successfully!");
      } catch (error) {
        console.error("Error submitting idea: ", error); // Error handling
      }
    } else {
      alert("You need to be logged in and provide a valid idea!");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Collaborate with Us
        </h1>
        <p className="text-gray-700 text-center mb-10">
          Join hands with like-minded individuals, explore exciting projects, and make an impact together!
        </p>

        {/* Explore Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Explore Projects
          </h2>
          <p className="text-gray-600 mb-6">
            Check out ongoing projects and find one that interests you. Collaborate with peers to bring innovative ideas to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...projects, 
              { title: "Campus Directory App", description: "A one-stop app for campus navigation and student resources." },
              { title: "Mental Health Support Platform", description: "Connect students with counselors and peer mentors." },
              { title: "Event Management System", description: "Simplify event planning and participation on campus." }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Submit Your Ideas Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Submit Your Ideas
          </h2>
          <p className="text-gray-600 mb-6">
            Got an idea for a project? Share it with us, and we’ll help you find collaborators to make it a reality.
          </p>
          <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto" onSubmit={handleSubmitIdea}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={user ? user.displayName || user.email : ""}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="idea"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Idea
              </label>
              <textarea
                id="idea"
                placeholder="Describe your idea"
                value={newIdea}
                onChange={(e) => setNewIdea(e.target.value)}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Idea
            </button>
          </form>
        </section>

        {/* Display Submitted Ideas */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Submitted Ideas
          </h2>
          <p className="text-gray-600 mb-6">
            Here are the amazing ideas shared by fellow collaborators.
          </p>
          <div className="space-y-6">
            {submittedIdeas.map((idea, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-2">
                  {idea.name}
                </h3>
                <p className="text-gray-700">{idea.idea}</p>
                <p className="text-sm text-gray-500">{new Date(idea.timestamp).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollaborationPage;
