
import React from "react";
import PutData from "@/components/putData";
import AuthUser from "@/components/authUser";
import UserLogin from "@/components/userLogin";
import CloudStorage from "../components/cloudStorage"
import GetCloudStorage from "@/components/getCloudStorage";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-blue-500 text-white flex justify-center items-center w-full h-12">
        <h1>
          Introduction to Firebase 
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full mt-7 mb-7">
        {/* <PutData/>
        <AuthUser/>
        <UserLogin/>
        <CloudStorage/> */}
        <GetCloudStorage/>
      </div>
    </div>
  );
}
