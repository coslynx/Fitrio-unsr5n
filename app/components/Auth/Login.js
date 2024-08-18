"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-5xl font-extrabold">Login</h1>
        <p className="text-xl font-medium text-gray-500">
          Sign in to access your fitness journey.
        </p>

        <div className="grid grid-cols-1 gap-4 mt-8">
          <button
            className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-300"
            onClick={() => {
              signIn("google");
            }}
          >
            <span className="flex items-center space-x-2">
              <img src="/icons/google.svg" alt="Google" className="w-6 h-6" />
              Sign in with Google
            </span>
          </button>

          <button
            className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-300"
            onClick={() => {
              signIn("github");
            }}
          >
            <span className="flex items-center space-x-2">
              <img src="/icons/github.svg" alt="Github" className="w-6 h-6" />
              Sign in with Github
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}

const signIn = (provider) => {
  const { data: session } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/dashboard");
  } else {
    signIn(provider);
  }
};