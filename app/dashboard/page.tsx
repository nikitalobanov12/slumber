"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusBar } from "@/components/layout/status-bar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageContainer } from "@/components/layout/page-container";
import { CircularProgress } from "@/components/features/circular-progress";
import { Clock, TrendingUp } from "lucide-react";
import { mockStats, lastNightSession } from "@/lib/mock-data";

export default function DashboardPage() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="min-h-screen pb-20">
      <PageContainer withStatusBar withNav className="py-8">
        <StatusBar />

        {/* Greeting */}
        <div className="mt-8 text-center space-y-2">
          <h1 className="text-xl font-bold">{getGreeting()}</h1>
          <p className="text-sm text-muted-foreground">
            Ready for a restful night?
          </p>
        </div>

        {/* Sleep Score Card */}
        <Card className="mt-8 p-6">
          <div className="text-center space-y-4">
            <h2 className="text-base font-semibold">Last Night</h2>
            <CircularProgress
              value={lastNightSession?.sleepScore || 0}
              size={150}
              strokeWidth={8}
              label="Sleep Score"
            />
            <p className="text-sm text-muted-foreground">
              {lastNightSession
                ? `You slept for ${formatDuration(lastNightSession.duration)}`
                : "No sleep data yet"}
            </p>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <Card className="p-5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-indigo" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">
                Avg Duration
              </p>
              <p className="text-lg font-bold mt-1">
                {formatDuration(Math.round(mockStats.averageDuration))}
              </p>
            </div>
          </Card>

          <Card className="p-5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-indigo" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">
                Sleep Score
              </p>
              <p className="text-lg font-bold mt-1">
                {Math.round(mockStats.averageScore)}
              </p>
            </div>
          </Card>
        </div>

        {/* Tonight's Session Section */}
        <div className="mt-8 space-y-3">
          <h2 className="text-base font-semibold">Tonight&apos;s Session</h2>
          <Link href="/track">
            <Button fullWidth className="h-[50px]">
              Start Sleep Tracking
            </Button>
          </Link>
          <p className="text-xs text-center text-muted-foreground">
            Track tonight&apos;s sleep when you&apos;re ready for bed
          </p>
        </div>
      </PageContainer>

      <BottomNav />
    </div>
  );
}
