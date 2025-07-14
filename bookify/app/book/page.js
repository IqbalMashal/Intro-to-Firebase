"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFirebase } from "@/context/firebase";
import Card from "@/components/Card";

export default function Home() {
  const router = useRouter();
  const firebase = useFirebase();

  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksList = await firebase.getListAll();
      setBooks(booksList);
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Book Collection</h1>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
        {books &&
          books.map((book, index) => (
            <Card key={index} book={book} />
          ))}
      </div>

    </div>
  );
}
