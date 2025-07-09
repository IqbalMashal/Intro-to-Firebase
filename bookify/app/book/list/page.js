"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { useFirebase } from '@/context/firebase'

export default function ListingPage () {
    const firebase = useFirebase();
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (data)=>{
    firebase.handleCreateNewBookListing(data)
  }

    return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white border-2 border-blue-100 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Add New Book</h2>
        <p className="text-gray-600">Share your book with the community</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Book Name */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Book Name *
            </label>
            <input
            type="text"
            {...register("name", { required: "Book name is required" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Enter the book title"
            />
            {errors.name && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.name.message}
            </p>
            )}
        </div>

        {/* Author */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Author *
            </label>
            <input
            type="text"
            {...register("author", { required: "Author is required" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Enter author name"
            />
            {errors.author && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.author.message}
            </p>
            )}
        </div>

        {/* ISBN */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            ISBN *
            </label>
            <input
            type="text"
            {...register("isbnNumber", { 
                required: "ISBN number is required",
                pattern: {
                value: /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/,
                message: "Please enter a valid ISBN number"
                }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="e.g., 978-0-123456-78-9"
            />
            {errors.isbnNumber && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.isbnNumber.message}
            </p>
            )}
        </div>

        {/* Genre */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Genre *
            </label>
            <select
            {...register("genre", { required: "Genre is required" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            >
            <option value="">Select a genre</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="self-help">Self-Help</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
            </select>
            {errors.genre && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.genre.message}
            </p>
            )}
        </div>

        {/* Price */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Price *
            </label>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
                type="number"
                step="0.01"
                min="0"
                {...register("price", { 
                required: "Price is required",
                min: { value: 0, message: "Price must be positive" }
                })}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="0.00"
            />
            </div>
            {errors.price && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.price.message}
            </p>
            )}
        </div>

        {/* Description */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
            </label>
            <textarea
            {...register("description", { 
                required: "Description is required",
                minLength: { value: 20, message: "Description must be at least 20 characters" }
            })}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
            placeholder="Describe the book's content, condition, and any other relevant details..."
            />
            {errors.description && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.description.message}
            </p>
            )}
        </div>

        {/* Cover Picture */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Cover Picture *
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition duration-200">
            <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                <label htmlFor="cover-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input
                    id="cover-upload"
                    type="file"
                    accept="image/*"
                    {...register("coverPicture", { required: "Cover picture is required" })}
                    className="sr-only"
                    />
                </label>
                <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
            </div>
            {errors.coverPicture && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.coverPicture.message}
            </p>
            )}
        </div>

        {/* Publication Year */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Publication Year
            </label>
            <input
            type="number"
            min="1000"
            max={new Date().getFullYear()}
            {...register("publicationYear", { 
                min: { value: 1000, message: "Enter a valid year" },
                max: { value: new Date().getFullYear(), message: "Year cannot be in the future" }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="e.g., 2023"
            />
            {errors.publicationYear && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {errors.publicationYear.message}
            </p>
            )}
        </div>

        {/* Publisher */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Publisher
            </label>
            <input
            type="text"
            {...register("publisher")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Enter publisher name"
            />
        </div>

        {/* Language */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Language
            </label>
            <select
            {...register("language")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            >
            <option value="">Select language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="italian">Italian</option>
            <option value="portuguese">Portuguese</option>
            <option value="other">Other</option>
            </select>
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
            isSubmitting
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
                Adding Book...
            </span>
            ) : (
            "Add Book"
            )}
        </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
            Make sure all information is accurate before submitting
        </p>
        </div>
    </div>
   );
}

