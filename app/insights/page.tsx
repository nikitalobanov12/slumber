"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { StatusBar } from "@/components/layout/status-bar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageContainer } from "@/components/layout/page-container";
import { SleepBarChart } from "@/components/features/sleep-bar-chart";
import { Clock, TrendingUp, BookOpen, ArrowRight } from "lucide-react";
import { getWeeklyData, getMonthlyData, getYearlyData, mockSleepArticles } from "@/lib/mock-data";
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "science":
        return "text-purple";
      case "habits":
        return "text-blue";
      case "tips":
        return "text-amber";
      case "health":
        return "text-green";
      default:
        return "text-indigo";
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <PageContainer withStatusBar withNav className="py-8">
        <StatusBar />

        {/* Header */}
        <div className="mt-8">
          <h1 className="text-xl font-bold">Sleep Insights</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track your progress and learn more
          </p>
        </div>

        {/* Period Tabs */}
        <div className="mt-6 flex gap-2">
          {(["week", "month", "year"] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cn(
                "px-5 py-1.5 rounded-full text-xs font-medium transition-colors capitalize",
                period === p
                  ? "bg-indigo text-white"
                  : "bg-muted text-foreground hover:bg-muted/70"
              )}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Chart Card */}
        <Card className="mt-4 p-5">
          <h2 className="text-sm font-semibold mb-4">
            {getChartTitle()}
          </h2>
          <SleepBarChart data={chartData} />
        </Card>

        {/* Stats Summary - Horizontal Layout */}
        <div className="mt-4 flex gap-3">
          <Card className="flex-1 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-indigo" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Avg Sleep</p>
              <p className="text-lg font-bold">
                {formatDuration(Math.round(periodStats.averageDuration))}
              </p>
            </div>
          </Card>

          <Card className="flex-1 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-indigo" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Avg Score</p>
              <p className="text-lg font-bold">
                {Math.round(periodStats.averageScore)}
              </p>
            </div>
          </Card>
        </div>

        {/* Learning Section */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold">Learn About Sleep</h2>
            <BookOpen className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Article Cards */}
          <div className="space-y-3">
            {mockSleepArticles.map((article) => (
              <Card
                key={article.id}
                className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => alert("Article detail page would open here")}
              >
                <div className="flex gap-4">
                  <div className={cn("w-20 h-20 rounded-lg flex-shrink-0", article.imageColor)} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={cn("text-xs font-semibold capitalize", getCategoryColor(article.category))}>
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        · {article.readTime} min read
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </PageContainer>

      <BottomNav />
    </div>
  );
}
