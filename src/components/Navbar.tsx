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

const Navbar = ({ isLoggedIn  }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

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
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <Link href="/">Cognify</Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/itemes/About" className="hover:underline">
          About
        </Link>
        {isUserLoggedIn && (
          <Link href="/itemes/Cources" className="hover:underline">
            Catagory
          </Link>
        )}
      </div>

      {status === "loading" ? (
        <Loader className="size-6 animate-spin" />
      ) : isUserLoggedIn ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none relative">
            <div className="flex gap-4 items-center">
              <span>{session?.user?.name || "User"}</span>
              <Avatar className="size-10 hover:opacity-75 transition">
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
            className="w-50 max-w-xs"
          >
            <DropdownMenuItem className="h-10" onClick={handleSignOut}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-4">
          <Link href="/sign-in">
            <Button variant="primary">Sign in</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="secondary">Sign up</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
