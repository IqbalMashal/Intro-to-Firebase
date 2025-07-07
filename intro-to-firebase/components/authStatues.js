"use client";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/app/firebase"; // adjust the import if needed

const auth = getAuth(app);

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("User is signed in:", currentUser.email);
      } else {
        setUser(null);
        console.log("No user is signed in");
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-3xl font-bold text-center">Hello World</h1>

      {/* Show user info or login state */}
      <div className="text-center text-lg">
        {user ? (
          <p className="text-green-600">✅ Logged in as: {user.email}</p>
        ) : (
          <p className="text-red-500">❌ Not logged in</p>
        )}
      </div>
    </div>
  );
}
