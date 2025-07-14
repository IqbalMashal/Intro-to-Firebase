import React from 'react';
import { useRouter } from 'next/navigation';
import { useFirebase } from '@/context/firebase';

function CardDetails({objectID}) {
    const router = useRouter();
    const firebase = useFirebase()

    
  return (
    <div>
        <div>

        </div>
    </div>
  )
}

export default CardDetails