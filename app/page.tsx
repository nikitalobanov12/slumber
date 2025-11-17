import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoonLogo } from "@/components/features/moon-logo";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <MoonLogo size={80} />
        </div>

        {/* Welcome Text */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome to Slumber
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Track your sleep, build better habits, and wake up refreshed every day
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4 pt-8">
          <Link href="/onboarding/1" className="block">
            <Button fullWidth variant="default" >
              Get Started
            </Button>
          </Link>
          <Link href="/login" className="block">
            <Button fullWidth variant="outline">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Branding */}
        <div className="text-center pt-8">
          <p className="text-xs text-muted-foreground">
            Your journey to better sleep starts here
          </p>
        </div>
      </div>
    </div>
  );
}
