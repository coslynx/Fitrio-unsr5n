"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useSession } from "next-auth/react";
import NavBar from "@/components/Navigation/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const { user } = useUser();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 font-sans">
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}