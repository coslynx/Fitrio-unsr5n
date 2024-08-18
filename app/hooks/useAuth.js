"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const login = async (provider: string) => {
    const signInResponse = await signIn(provider);
    if (signInResponse?.error) {
      // Handle error
      console.error(signInResponse.error);
      return;
    }
  };

  const logout = async () => {
    const signOutResponse = await signOut();
    if (signOutResponse?.error) {
      // Handle error
      console.error(signOutResponse.error);
      return;
    }
  };

  const isAuthenticated = status === "authenticated";

  return {
    session,
    login,
    logout,
    isAuthenticated,
  };
};