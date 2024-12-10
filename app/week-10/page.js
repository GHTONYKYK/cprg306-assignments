"use client";

import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context"; // Corrected import path

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="container mx-auto p-4 bg-slate-950">
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleSignOut}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Sign Out
          </button>
          <Link href="/week-9/shopping-list">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Go to Shopping List
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <p>Please sign in to access the shopping list.</p>
          <button
            onClick={handleSignIn}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Sign In with GitHub
          </button>
        </div>
      )}
    </main>
  );
}
