"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFirebase } from '@/context/firebase';

function Navbar() {

    const router = useRouter();
    const firebase = useFirebase()

  return (
    <div className="w-full h-28 bg-blue-50 flex items-center justify-between px-8 border-2 border-solid border-blue-500 shadow-md shadow-blue-300">
      {/* Left: Logo */}
      <div>
        <Link href="/">
            <Image src="/logo.png" alt="Website logo" width={150} height={100} />
        </Link>
      </div>

      {/* Center: Nav links (placeholder) */}
      <div className="space-x-4 text-white font-semibold">
        <button type="button" onClick={()=>router.push("/")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home</button>
        <button type="button" onClick={()=>router.push("/book")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Books</button>
        <button type="button" onClick={()=>router.push("/book/list")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Listing</button>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Orders</button>
      </div>

      {/* Right: Auth / Buttons (placeholder) */}
      {firebase.isloggedIn ? (<div>
        <button type="button" onClick={firebase.logoutUser} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Log Out</button>
      </div>) : (
        <div>
          <button type="button" onClick={()=>router.push("/register")} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign Up</button>
          <button type="button" onClick={()=>router.push("/login")} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
