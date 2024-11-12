"use client";  

import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen bg-[#301934] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1> 
      
      {!user ? (
        <button onClick={gitHubSignIn} className="text-white bg-blue-500 p-2 rounded">
          Log in with GitHub
        </button>
      ) : (
        <div className="text-center">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut} className="text-white bg-red-500 p-2 rounded mt-2">
            Log out
          </button>
          <Link href="/week-9/shopping-list" legacyBehavior>
            <a className="text-white underline mt-4 block">Go to Shopping List</a>
          </Link>
        </div>
      )}
    </main>
  );
}
