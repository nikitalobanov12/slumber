"use client";

import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoonLogo } from "@/components/features/moon-logo";
import { Moon, TrendingUp, Target } from "lucide-react";
import Link from "next/link";

const onboardingSteps = [
  {
    step: 1,
    icon: Moon,
    title: "Track Your Sleep",
    description:
      "Monitor your sleep patterns with easy-to-use tracking. Start and stop with a single tap when you're ready for bed.",
  },
  {
    step: 2,
    title: "Build Better Habits",
    features: [
      {
        icon: Moon,
        title: "Smart Sleep Schedule",
        description: "Get personalized bedtime reminders",
      },
      {
        icon: TrendingUp,
        title: "Progress Insights",
        description: "Track your sleep quality over time",
      },
      {
        icon: Target,
        title: "Custom Goals",
        description: "Set and achieve your sleep targets",
      },
    ],
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const params = useParams();
  const currentStep = parseInt(params.step as string);
  const stepData = onboardingSteps[currentStep - 1];

  const handleNext = () => {
    if (currentStep < onboardingSteps.length) {
      router.push(`/onboarding/${currentStep + 1}`);
    } else {
      router.push("/signup");
    }
  };

  const handleSkip = () => {
    router.push("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-8">
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col">
        {/* Skip button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={handleSkip}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          {stepData.step === 1 ? (
            <>
              <MoonLogo size={120} />
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {stepData.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed px-4">
                  {stepData.description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  {stepData.title}
                </h2>
              </div>

              <div className="w-full space-y-6">
                {stepData.features?.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-[60px] h-[60px] rounded-full bg-indigo/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-indigo" />
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Progress dots */}
          <div className="flex gap-2">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index + 1 === currentStep ? "bg-gold" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next button */}
        <div className="mt-8">
          <Button fullWidth onClick={handleNext} variant="default" >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
