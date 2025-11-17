"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoonLogo } from "@/components/features/moon-logo";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-12">
      <div className="w-full max-w-md mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <MoonLogo size={60} />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to continue your sleep journey
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" fullWidth variant="default" >
            Login
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">or</span>
            </div>
          </div>

          <Button
            type="button"
            fullWidth
            variant="outline"
            className="gap-2"
          >
            <div className="w-5 h-5 bg-muted rounded"></div>
            Continue with Google
          </Button>

          <div className="text-center">
            <Link
              href="/signup"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Don&apos;t have an account? <span className="font-semibold">Sign Up</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
