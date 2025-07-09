"use client";
import React, { useState, useEffect, use } from "react";
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
    const {name, author, isbnNumber, genre, price, description, coverPicture, publicationYear, publisher, language}  = data

    console.log(data);
    console.log(name, author, isbnNumber, genre, price, description, coverPicture, publicationYear, publisher, language)

    // try {
    // const docRef = await addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // });
    // console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    // console.error("Error adding document: ", e);
    // }
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
