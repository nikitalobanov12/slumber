"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SleepTimerProps {
  startTime: Date;
  className?: string;
}

export function SleepTimer({ startTime, className }: SleepTimerProps) {
  const [elapsed, setElapsed] = useState("0:00");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startTime.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setElapsed(`${hours}:${minutes.toString().padStart(2, "0")}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="text-6xl font-bold text-foreground tracking-tight">
        {elapsed}
      </div>
    </div>
  );
}

export function SleepIndicator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[180px] h-[180px] rounded-full border-2 border-border flex items-center justify-center bg-muted/20",
        className
      )}
    >
      <span className="text-[80px] leading-none select-none">Z</span>
    </div>
  );
}
