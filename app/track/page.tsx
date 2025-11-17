"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { StatusBar } from "@/components/layout/status-bar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageContainer } from "@/components/layout/page-container";
import { SleepTimer, SleepIndicator } from "@/components/features/sleep-timer";

export default function TrackPage() {
  const router = useRouter();
  const [startTime] = useState(new Date());

  const handleStop = () => {
    // Mock - in real app, save the session
    router.push("/checkin");
  };

  return (
    <div className="min-h-screen pb-20">
      <PageContainer withStatusBar withNav className="py-8">
        <StatusBar />

        <div className="mt-12 flex flex-col items-center space-y-12">
          {/* Title */}
          <h1 className="text-xl font-bold text-center">Sleep Tracking Active</h1>

          {/* Sleep Indicator */}
          <SleepIndicator />

          {/* Timer */}
          <div className="space-y-2">
            <SleepTimer startTime={startTime} />
            <p className="text-sm text-muted-foreground text-center">
              Time elapsed
            </p>
          </div>

          {/* Stop Button */}
          <div className="w-full max-w-sm space-y-3">
            <button
              onClick={handleStop}
              className="mx-auto w-20 h-20 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm transition-all flex items-center justify-center shadow-lg active:scale-95"
            >
              STOP
            </button>
            <p className="text-xs text-center text-muted-foreground">
              Tap to end session
            </p>
          </div>
        </div>
      </PageContainer>

      <BottomNav />
    </div>
  );
}
