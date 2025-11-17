"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { StatusBar } from "@/components/layout/status-bar";
import { PageContainer } from "@/components/layout/page-container";
import { SLEEP_ISSUES } from "@/lib/types";

export default function SleepProfilePage() {
  const router = useRouter();
  const [bedtime, setBedtime] = useState(23); // 23:00 (11 PM)
  const [wakeTime, setWakeTime] = useState(7); // 07:00 (7 AM)
  const [sleepIssues, setSleepIssues] = useState<string[]>([]);

  const formatTime = (hour: number) => {
    const isPM = hour >= 12;
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour} ${isPM ? "PM" : "AM"}`;
  };

  const toggleIssue = (issue: string) => {
    setSleepIssues((prev) =>
      prev.includes(issue)
        ? prev.filter((i) => i !== issue)
        : [...prev, issue]
    );
  };

  const handleContinue = () => {
    // In a real app, save this data
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen">
      <PageContainer withStatusBar className="py-8">
        <StatusBar />

        <div className="mt-8 space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-center">Let&apos;s Personalize Your Sleep</h1>
            <p className="text-sm text-muted-foreground text-center">
              Help us understand your sleep patterns
            </p>
          </div>

          {/* Sleep Schedule */}
          <div className="space-y-6">
            {/* Bedtime */}
            <div className="space-y-4">
              <h3 className="font-medium">When do you usually go to bed?</h3>
              <Slider
                min={21}
                max={27} // 9 PM to 3 AM (next day, using 24+ for hours past midnight)
                defaultValue={[bedtime]}
                value={[bedtime]}
                onValueChange={setBedtime}
                step={1}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>9 PM</span>
                <span className="font-semibold text-foreground text-base">
                  {formatTime(bedtime >= 24 ? bedtime - 24 : bedtime)}
                </span>
                <span>3 AM</span>
              </div>
            </div>

            {/* Wake Time */}
            <div className="space-y-4">
              <h3 className="font-medium">When do you usually wake up?</h3>
              <Slider
                min={5}
                max={11} // 5 AM to 11 AM
                defaultValue={[wakeTime]}
                value={[wakeTime]}
                onValueChange={setWakeTime}
                step={1}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5 AM</span>
                <span className="font-semibold text-foreground text-base">
                  {formatTime(wakeTime)}
                </span>
                <span>11 AM</span>
              </div>
            </div>

            {/* Sleep Issues */}
            <div className="space-y-4">
              <h3 className="font-medium">Any sleep challenges? (Optional)</h3>
              <div className="border-2 border-border rounded-[12px] p-6 space-y-4">
                {SLEEP_ISSUES.map((issue) => (
                  <Checkbox
                    key={issue}
                    label={issue}
                    checked={sleepIssues.includes(issue)}
                    onChange={() => toggleIssue(issue)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="pt-8">
            <Button
              fullWidth
              onClick={handleContinue}
              
            >
              Continue
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
