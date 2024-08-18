"use client";

import Link from "next/link";
import { useUser } from "@/hooks/useUser";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  const { user } = useUser();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-800">Fitrio</h1>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/goals" className="hover:text-gray-600">
              Goals
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-gray-600">
              Dashboard
            </Link>
          </li>
          {session && (
            <li>
              <Link href="/profile" className="hover:text-gray-600">
                Profile
              </Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/social-feed" className="hover:text-gray-600">
                Social Feed
              </Link>
            </li>
          )}
          {!session && (
            <li>
              <Link href="/auth/login" className="hover:text-gray-600">
                Login
              </Link>
            </li>
          )}
          {session && (
            <li className="relative">
              <button className="hover:text-gray-600">
                <span>{user?.firstName || "User"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/profile">Profile</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/auth/signout">Logout</Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}