"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { StatusBar } from "@/components/layout/status-bar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageContainer } from "@/components/layout/page-container";
import { EmojiSelector } from "@/components/features/emoji-selector";

export default function CheckinPage() {
  const router = useRouter();
  const [mood, setMood] = useState("good");
  const [quality, setQuality] = useState(75);
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    // Mock - in real app, save the check-in data
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen pb-32">
      <PageContainer withStatusBar withNav className="py-8">
        <StatusBar />

        <div className="mt-8 space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-center">How Did You Sleep?</h1>
            <p className="text-sm text-muted-foreground text-center">
              Share your morning check-in
            </p>
          </div>

          {/* Mood Selection */}
          <div className="space-y-4">
            <h3 className="font-medium">How do you feel?</h3>
            <EmojiSelector value={mood} onChange={setMood} />
          </div>

          {/* Quality Slider */}
          <div className="space-y-4">
            <h3 className="font-medium">Sleep quality</h3>
            <Slider min={0} max={100} defaultValue={[quality]} value={[quality]} onValueChange={setQuality} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-4">
            <h3 className="font-medium">Any notes?</h3>
            <Textarea
              placeholder="Notes (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <Button
              fullWidth
              onClick={handleSave}
              
            >
              Save Check-in
            </Button>
          </div>
        </div>
      </PageContainer>

      <BottomNav />
    </div>
  );
}
