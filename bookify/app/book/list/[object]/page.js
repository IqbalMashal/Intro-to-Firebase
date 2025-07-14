"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import CardDetails from '@/components/CardDetails'; // Renamed to avoid conflict

export default function ArtworkDetailsPage() {
  const params = useParams()
 
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  const id = params.object;
  console.log("id is ", id)
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {id ? (
        <CardDetails objectID={id} />
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
}
