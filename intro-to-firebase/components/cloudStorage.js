"use client"

import React, {useState} from 'react'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { useForm } from "react-hook-form";
import {app} from "../app/firebase"


const db = getFirestore(app)

export default function CloudStorage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const [authError, setAuthError] = useState("");


return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Upload data to Cloud Storage</h2>

        <form
            onSubmit={handleSubmit(async (data) => {
                setAuthError("");
                try {
                    const docRef = await addDoc(collection(db, "users"), {
                        first: data.firstname,
                        last: data.lastname,
                        born: Number(data.dateofbirth),
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    setAuthError("Error adding document: " + e.message);
                    console.error("Error adding document: ", e);
                }
            })}
            className="space-y-4"
        >
            <div>
                <label className="block text-gray-700">First Name</label>
                <input
                    type="text"
                    {...register("firstname", { required: "First name is required" })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.firstname && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                    type="text"
                    {...register("lastname", {
                        required: "Last name is required",
                        minLength: { value: 2, message: "Minimum 2 characters" },
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.lastname && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">Date of Birth (Year)</label>
                <input
                    type="number"
                    {...register("dateofbirth", {
                        required: "Date of birth is required",
                        min: { value: 1900, message: "Year must be 1900 or later" },
                        max: { value: 2025, message: "Year must be 2025 or earlier" },
                    })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.dateofbirth && (
                    <p className="text-red-500 text-sm mt-1">{errors.dateofbirth.message}</p>
                )}
            </div>

            {authError && <p className="text-red-600 text-sm">{authError}</p>}

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
                Upload Data
            </button>
        </form>
    </div>
);
}

