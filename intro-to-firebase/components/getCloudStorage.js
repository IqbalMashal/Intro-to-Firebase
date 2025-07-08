"use client";

import React, { useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../app/firebase";

export default function GetCloudStorage() {
  const db = getFirestore(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const getDocument = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "users", "R4TVPYZsjytNHZMcP0c2");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        setUser({ error: "No such document!" });
      }
    } catch (error) {
      console.error("Error fetching document:", error);
      setUser({ error: "Something went wrong" });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-center">Fetch User Data</h2>

      <button
        onClick={getDocument}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        {loading ? "Loading..." : "Get Data"}
      </button>

      {user && (
        <div className="mt-4 bg-gray-100 p-4 rounded-md">
          {user.error ? (
            <p className="text-red-500">{user.error}</p>
          ) : (
            <pre className="text-sm text-gray-800">{JSON.stringify(user, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
}
