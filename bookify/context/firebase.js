"use client";
import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { 
    getFirestore,
    collection,
    addDoc,

} from "firebase/firestore";
import axios from "axios";



// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA0pVqF58VCRHuAA3XhvKa3eGbmZNdFLNg",
  authDomain: "bookify-4753e.firebaseapp.com",
  projectId: "bookify-4753e",
  storageBucket: "bookify-4753e.firebasestorage.app",
  messagingSenderId: "84623326061",
  appId: "1:84623326061:web:a11cca9878fc787b4b7864",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const db = getFirestore(app)

// Create context and hook
const FireBaseContext = createContext(null);
export const useFirebase = () => useContext(FireBaseContext);

// Context Provider
export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else setUser(null);
    });
  }, []);

  const signupUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signinwithGoogle = () => signInWithPopup(auth, googleprovider);
  const isloggedIn = user ? true : false;

  const logoutUser = () => signOut(auth);

  const handleCreateNewBookListing = async (data)=>{
    // Upload image to Cloudinary first
          let imageUrl = ''
          if (data.coverPicture) {
            const imageData = new FormData()
            imageData.append("file", data.coverPicture)
            imageData.append("upload_preset", "Bookify")
            imageData.append("cloud_name", "dios4qc67")
            
            const response = await axios.post(
              "https://api.cloudinary.com/v1_1/dios4qc67/image/upload",
              imageData
            )
            
            imageUrl = response.data.secure_url
          }
    
          // Save to Firebase
          const docRef = await addDoc(collection(db, "books"), {
            bookName: data.name,
            bookAuthor: data.author,
            bookIsbnNumber: data.isbnNumber,
            bookGenre: data.genre,
            bookPrice: parseFloat(data.price),
            bookDescription: data.description,
            bookCoverImage: imageUrl,
            bookPublicationYear: data.publicationYear ? parseInt(data.publicationYear) : null,
            bookPublisher: data.publisher || '',
            bookLanguage: data.language || '',
            createdAt: new Date(),
            // userId: user?.uid // Assuming you have user context
          })
    
          console.log("Document written with ID: ", docRef.id)
  }

  return (
    <FireBaseContext.Provider
      value={{ 
        signupUser,
        loginUser,
        signinwithGoogle, 
        logoutUser,
        handleCreateNewBookListing,
        isloggedIn,
     }}
    >
      {children}
    </FireBaseContext.Provider>
  );
};
