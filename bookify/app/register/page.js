"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFirebase } from "@/context/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [signedUp, setSignedUp] = useState(false);
  const router = useRouter();
  const firebase = useFirebase()

  useEffect(()=>{
    if(firebase.isloggedIn){
        router.push("/")
    }
  },[firebase, router])

  const onSubmit = async (data) => {
    const {email, password} = data;
    await firebase.signupUser(email,password)
    setSignedUp(true)
  };

 return (
  <div className="max-w-md mx-auto mt-20 p-8 bg-white border-2 border-blue-100 rounded-2xl shadow-2xl">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
      <p className="text-gray-600">Join us and get started today</p>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          placeholder="Choose a strong password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {errors.password.message}
          </p>
        )}
        <p className="text-gray-500 text-xs mt-1">
          Password must be at least 6 characters long
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || signedUp}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
          signedUp
            ? "bg-green-500 text-white cursor-default"
            : isSubmitting
            ? "bg-blue-400 text-white cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:scale-105"
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Creating account...
          </span>
        ) : signedUp ? (
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Account created!
          </span>
        ) : (
          "Create Account"
        )}
      </button>
    </form>

    {/* Divider */}
    <div className="my-6 flex items-center">
      <div className="flex-1 border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500 text-sm">or</span>
      <div className="flex-1 border-t border-gray-300"></div>
    </div>

    {/* Google Sign Up */}
    <div>
      <button
        onClick={firebase.signinwithGoogle}
        className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition duration-200 group"
      >
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-gray-700 font-medium group-hover:text-gray-900">
          Sign up with Google
        </span>
      </button>
    </div>

    {/* Footer */}
    <div className="mt-6 text-center">
      <p className="text-gray-600 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
          Sign in
        </Link>
      </p>
    </div>
  </div>
);
}
