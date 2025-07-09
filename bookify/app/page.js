"use client"; 
import React from "react";
import { useRouter } from "next/navigation";
import { useFirebase } from "@/context/firebase";

export default function Home() {
  const router = useRouter();
  const firebase = useFirebase();

  return (
    <div>
      <h1>
        Hello World
      </h1>
    </div>
  );
}
