"use client"

import React from 'react'
import {app} from "../app/firebase"
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app)

const putdata = ()=>{
    set(ref(db,"user/iqbal"),{
        name: "Iqbal the Boss",
        age:19,
        height: 6.2
    })
}

function PutData() {
  return (
    <div>
        <button onClick={putdata} className='bg-blue-400 text-white h-14 w-24 hover:bg-blue-600 hover:space-y-3 rounded-lg cursor-pointer'>
            put data
        </button>
    </div>
  )
}

export default PutData