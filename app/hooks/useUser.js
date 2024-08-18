"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";

export const useUser = () => {
  const { data: session } = useSession();
  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (session?.user) {
      setUser({
        id: session.user.id,
        firstName: session.user.name.split(" ")[0],
        lastName: session.user.name.split(" ")[1],
        email: session.user.email,
        imageUrl: session.user.image,
      });
    }
  }, [session, setUser]);

  return { user };
};