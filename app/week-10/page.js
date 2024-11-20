"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl font-bold mb-6">Shopping List</h1>
      {!user ? (
        <button onClick={gitHubSignIn} className="bg-blue-500 text-white p-3 rounded">
          Login with GitHub
        </button>
      ) : (
        <>
          <p className="text-white">Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut} className="bg-red-500 text-white p-3 rounded mt-4">
            Logout
          </button>
          <Link href="/week-9/shopping-list" className="text-blue-300 mt-4">
            Go to Shopping List
          </Link>
        </>
      )}
    </main>
  );
}
