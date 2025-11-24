"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusBar } from "@/components/layout/status-bar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageContainer } from "@/components/layout/page-container";
import { CircularProgress } from "@/components/features/circular-progress";
import { Clock, TrendingUp, Flame, Target, Moon, Sparkles } from "lucide-react";
import { mockStats, lastNightSession, mockUser } from "@/lib/mock-data";

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

        {/* Streak Card */}
        <Card className="mt-6 p-5 bg-gradient-to-br from-amber/10 to-orange/10 border-amber/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center">
                <Flame className="w-6 h-6 text-amber" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  Current Streak
                </p>
                <p className="text-2xl font-bold text-amber">
                  {mockStats.streak} days
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="mt-4 grid grid-cols-2 gap-4">
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

        {/* Sleep Goal Progress */}
        <Card className="mt-6 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo" />
              <h3 className="font-semibold text-sm">Sleep Goal</h3>
            </div>
            <Link href="/goals" className="text-xs text-indigo font-medium">
              Adjust
            </Link>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Target</span>
              <span className="font-bold">{mockUser.sleepGoal}h per night</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo rounded-full transition-all"
                style={{ 
                  width: `${Math.min(100, (mockStats.averageDuration / 60 / mockUser.sleepGoal) * 100)}%` 
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground text-center">
              You&apos;re averaging {formatDuration(Math.round(mockStats.averageDuration))}
            </p>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="mt-6 space-y-3">
          <h2 className="text-sm font-semibold text-muted-foreground">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/insights">
              <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple" />
                  </div>
                  <span className="text-xs font-medium">View Insights</span>
                </div>
              </Card>
            </Link>
            <Link href="/goals">
              <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center">
                    <Moon className="w-5 h-5 text-blue" />
                  </div>
                  <span className="text-xs font-medium">Sleep Goals</span>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Tonight's Session Section */}
        <div className="mt-6 space-y-3">
          <h2 className="text-base font-semibold">Tonight&apos;s Session</h2>
          <Link href="/track">
            <Button fullWidth className="h-[50px] gap-2">
              <Sparkles className="w-5 h-5" />
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
