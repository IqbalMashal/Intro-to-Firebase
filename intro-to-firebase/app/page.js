
import React from "react";

import PutData from "@/components/putData";
import AuthUser from "@/components/authUser";

export default function Home() {
  return (
    <div>
      <h1>
        Hello World
      </h1>
      <PutData/>

      <AuthUser/>
    </div>
  );
}
