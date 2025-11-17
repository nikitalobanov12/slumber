"use client";

import { cn } from "@/lib/utils";

const moods = [
  { emoji: "😴", label: "Terrible", value: "terrible" },
  { emoji: "😐", label: "Poor", value: "poor" },
  { emoji: "😊", label: "Good", value: "good" },
  { emoji: "😁", label: "Excellent", value: "excellent" },
] as const;

interface EmojiSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function EmojiSelector({ value, onChange, className }: EmojiSelectorProps) {
  return (
    <div className={cn("flex items-center justify-between gap-2", className)}>
      {moods.map((mood) => (
        <button
          key={mood.value}
          type="button"
          onClick={() => onChange?.(mood.value)}
          className={cn(
            "flex-1 h-[50px] rounded-[8px] border-2 border-border bg-background transition-all hover:border-indigo hover:bg-indigo/5",
            value === mood.value && "border-indigo bg-indigo/10"
          )}
          aria-label={mood.label}
          title={mood.label}
        >
          <span className="text-2xl">{mood.emoji}</span>
        </button>
      ))}
    </div>
  );
}
