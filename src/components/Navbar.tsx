"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ isLoggedIn }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/");
    } catch (error) {
      console.error("Sign-out error:", error);
      router.push("/");
    }
  };

  const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();
  const isUserLoggedIn = isLoggedIn || Boolean(session);

  return (
    <nav className="bg-gray-800 text-white">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Hamburger Menu for Sidebar */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Cognify</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/itemes/About" className="hover:underline">
            About
          </Link>
          {isUserLoggedIn && (
            <Link href="/itemes/Cources" className="hover:underline">
              Category
            </Link>
          )}
          {status === "loading" ? (
            <Loader className="h-6 w-6 animate-spin" />
          ) : isUserLoggedIn ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="outline-none relative">
                <div className="flex gap-4 items-center">
                  <span>{session?.user?.name || "User"}</span>
                  <Avatar className="h-8 w-8 hover:opacity-75 transition">
                    <AvatarImage
                      src={session?.user?.image || undefined}
                      alt={session?.user?.name || "User"}
                    />
                    <AvatarFallback className="bg-sky-900 text-white">
                      {avatarFallback || "U"}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                side="bottom"
                className="w-48 max-w-xs"
              >
                <DropdownMenuItem className="h-10" onClick={handleSignOut}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="primary">Sign in</Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="secondary">Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-64 z-50`}
      >
        <div className="flex flex-col p-6 gap-4">
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/itemes/About"
            className="hover:underline"
            onClick={() => setSidebarOpen(false)}
          >
            About
          </Link>
          {isUserLoggedIn && (
            <Link
              href="/itemes/Cources"
              className="hover:underline"
              onClick={() => setSidebarOpen(false)}
            >
              Category
            </Link>
          )}
          {status === "loading" ? (
            <Loader className="h-6 w-6 animate-spin" />
          ) : isUserLoggedIn ? (
            <button
              className="hover:underline text-left"
              onClick={() => {
                setSidebarOpen(false);
                handleSignOut();
              }}
            >
              Log out
            </button>
          ) : (
            <>
              <Link
                href="/sign-in"
                onClick={() => setSidebarOpen(false)}
                className="hover:underline"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setSidebarOpen(false)}
                className="hover:underline"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;