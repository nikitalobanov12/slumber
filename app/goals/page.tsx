"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { StatusBar } from "@/components/layout/status-bar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageContainer } from "@/components/layout/page-container";
import { ChevronRight, Moon, Sun } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function GoalsPage() {
  const router = useRouter();
  const [sleepGoal, setSleepGoal] = useState(8);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    // Mock - save goal
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen pb-32">
      <PageContainer withStatusBar withNav className="py-8">
        <StatusBar />

        {/* Header with Back Button */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="w-8 h-8 flex items-center justify-center hover:bg-muted rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Sleep Goals</h1>
        </div>

        <div className="mt-8 space-y-6">
          {/* Goal Setting Card */}
          <Card className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Daily Sleep Goal</h3>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div className="text-center py-4">
              <p className="text-5xl font-bold">{sleepGoal} hours</p>
            </div>

            <div className="space-y-4">
              <Slider
                min={5}
                max={10}
                defaultValue={[sleepGoal]}
                value={[sleepGoal]}
                onValueChange={setSleepGoal}
                step={1}
              />
              <p className="text-xs text-center text-muted-foreground">
                Adjust your target to build better sleep habits
              </p>
            </div>
          </Card>

          {/* Suggested Schedule Card */}
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold">Suggested Schedule</h3>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 hover:bg-muted rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo/10 flex items-center justify-center">
                    <Moon className="w-4 h-4 text-indigo" />
                  </div>
                  <span className="text-sm font-medium">Bedtime: 11:00 PM</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-muted rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo/10 flex items-center justify-center">
                    <Sun className="w-4 h-4 text-indigo" />
                  </div>
                  <span className="text-sm font-medium">Wake up: 7:00 AM</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </Card>

          {/* Save Button */}
          <div className="pt-4">
            <Button
              fullWidth
              onClick={handleSave}
              
            >
              Save Goal
            </Button>
          </div>
        </div>
      </PageContainer>

      <BottomNav />
    </div>
  );
}
