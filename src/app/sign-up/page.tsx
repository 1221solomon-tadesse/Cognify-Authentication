"use client";

// shadcn ui
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; 

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    // Ensure passwords match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      setPending(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Account created successfully!");
        router.push("/sign-in");
      } else {
        setError(data.message || "Failed to create an account.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  const handleGoogleSignIn = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (err) {
      toast.error("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8 bg-violet-600">
        <CardHeader>
          <CardTitle className="text-center">Sign up</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground">
            Use email or Google to create an account
          </CardDescription>
        </CardHeader>
        {!!error && (
          <div className="bg-red-200 text-red-800 p-3 rounded-md text-sm mb-6">
            {error}
          </div>
        )}
        <CardContent className="px-2 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="text"
              disabled={pending}
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              disabled={pending}
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              type="password"
              disabled={pending}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <Input
              type="password"
              disabled={pending}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              required
            />
            <Button className="w-full" size="lg" disabled={pending}>
              {pending ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>

          <Separator />
          <div className="flex justify-center mt-4">
            <Button
              disabled={pending}
              onClick={handleGoogleSignIn}
              variant="outline"
              size="lg"
              className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
            >
              <FcGoogle className="mr-2" />
              Continue with Google
            </Button>
          </div>
          <p className="text-center text-sm mt-4">
            Already have an account?
            <Link href="/sign-in" className="text-sky-700 ml-2 hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
