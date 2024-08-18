"use client";

import { useUser } from "@/hooks/useUser";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  const { user } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-5xl font-extrabold">Fitrio</h1>
        <p className="text-xl font-medium text-gray-500">
          Track your fitness journey and connect with other enthusiasts.
        </p>
        {!session && (
          <Link href="/auth/login" className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-300">
            Login
          </Link>
        )}
        {session && (
          <Link href="/dashboard" className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-300">
            Go to Dashboard
          </Link>
        )}
      </div>
    </main>
  );
}