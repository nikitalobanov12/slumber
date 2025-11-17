"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { StatusBar } from "@/components/layout/status-bar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageContainer } from "@/components/layout/page-container";
import { SleepBarChart } from "@/components/features/sleep-bar-chart";
import { Clock, TrendingUp } from "lucide-react";
import { getWeeklyData, getMonthlyData, getYearlyData } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type Period = "week" | "month" | "year";

export default function InsightsPage() {
  const [period, setPeriod] = useState<Period>("week");

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  // Get data based on selected period
  const getData = () => {
    switch (period) {
      case "week":
        return getWeeklyData();
      case "month":
        return getMonthlyData();
      case "year":
        return getYearlyData();
      default:
        return getWeeklyData();
    }
  };

  const chartData = getData();

  // Calculate stats based on current period data
  const periodStats = {
    averageDuration: chartData.reduce((sum, d) => sum + d.duration, 0) / chartData.length,
    averageScore: chartData.reduce((sum, d) => sum + d.score, 0) / chartData.length,
  };

  const getChartTitle = () => {
    switch (period) {
      case "week":
        return "Weekly Sleep Pattern";
      case "month":
        return "Monthly Sleep Pattern";
      case "year":
        return "Yearly Sleep Pattern";
      default:
        return "Weekly Sleep Pattern";
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <PageContainer withStatusBar withNav className="py-8">
        <StatusBar />

        {/* Header */}
        <div className="mt-8">
          <h1 className="text-xl font-bold text-center">Sleep Insights</h1>
        </div>

        {/* Period Tabs */}
        <div className="mt-6 flex gap-2 justify-center">
          {(["week", "month", "year"] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors capitalize",
                period === p
                  ? "bg-indigo text-white"
                  : "bg-background border-2 border-border text-foreground hover:border-indigo/50"
              )}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Chart Card */}
        <Card className="mt-6 p-6">
          <h2 className="text-sm font-semibold text-center mb-4">
            {getChartTitle()}
          </h2>
          <SleepBarChart data={chartData} />
        </Card>

        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <Card className="p-6 space-y-4">
            <div className="w-8 h-8 rounded-lg bg-indigo/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-indigo" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">
                Average Sleep
              </p>
              <p className="text-2xl font-bold mt-2">
                {formatDuration(Math.round(periodStats.averageDuration))}
              </p>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="w-8 h-8 rounded-lg bg-indigo/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-indigo" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">
                Sleep Score
              </p>
              <p className="text-2xl font-bold mt-2">
                {Math.round(periodStats.averageScore)}
              </p>
            </div>
          </Card>
        </div>
      </PageContainer>

      <BottomNav />
    </div>
  );
}
