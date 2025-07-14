import React from 'react';
import { useRouter } from 'next/navigation';

export default function Card({ book }) {
    // console.log(book)

    const router = useRouter()
    // Format price
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };
    
    // Format publication year
    const formatYear = (year) => {
        return year ? `Published ${year}` : 'Publication year unknown';
    };
    
    // Capitalize genre
    const capitalizeGenre = (genre) => {
        return genre ? genre.charAt(0).toUpperCase() + genre.slice(1) : 'Unknown Genre';
    };

    const objectID = book.id;
    console.log(objectID)

    return (
        <div className="w-[22rem] m-4 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            {/* Book Cover */}
            <div className="relative">
                <img 
                    className="w-full h-56 object-cover" 
                    src={book.bookCoverImage} 
                    alt={book.bookName} 
                />
                {/* Genre Badge */}
                <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        {capitalizeGenre(book.bookGenre)}
                    </span>
                </div>
                {/* Price Badge */}
                <div className="absolute top-3 right-3">
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                        {formatPrice(book.bookPrice)}
                    </span>
                </div>
            </div>
            
            {/* Book Details */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {book.bookName}
                </h3>
                
                {/* Author */}
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    by {book.bookAuthor}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {book.bookDescription}
                </p>
                
                {/* Book Info Grid */}
                <div className="grid grid-cols-1 gap-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Publisher:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{book.bookPublisher}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Year:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{book.bookPublicationYear}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Language:</span>
                        <span className="text-gray-900 dark:text-white font-medium capitalize">{book.bookLanguage}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">ISBN:</span>
                        <span className="text-gray-900 dark:text-white font-mono text-xs">{book.bookIsbnNumber}</span>
                    </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                    <button onClick={()=>router.push(`/book/list/${objectID}`)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        View Details
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}