"use client";

import { cn } from "@/lib/utils";

interface SleepBarChartProps {
  data: {
    day: string;
    duration: number; // in minutes
    score: number;
  }[];
  className?: string;
}

export function SleepBarChart({ data, className }: SleepBarChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className={cn("flex items-center justify-center h-[150px] text-muted-foreground", className)}>
        No data available
      </div>
    );
  }

  const chartHeight = 150; // pixels
  
  // Fixed Y-axis labels (8, 6, 4, 2, 0 hours)
  const yAxisLabels = [8, 6, 4, 2, 0];
  const maxYAxisHours = 8; // Maximum hours on Y-axis

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex gap-2">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between" style={{ height: `${chartHeight}px` }}>
          {yAxisLabels.map((hours, index) => (
            <div
              key={index}
              className="text-[10px] text-muted-foreground font-medium pr-2"
            >
              {hours}h
            </div>
          ))}
        </div>

        {/* Chart bars */}
        <div className="flex-1 flex items-end justify-between gap-2" style={{ height: `${chartHeight}px` }}>
          {data.map((item, index) => {
            // Calculate height in pixels based on 8-hour scale
            const heightRatio = (item.duration / 60) / maxYAxisHours;
            const heightPx = Math.max(30, heightRatio * chartHeight); // Minimum 30px for visibility

            return (
              <div
                key={index}
                className="flex-1 flex flex-col items-center justify-end"
              >
                <div
                  className="w-full rounded-t-[4px] transition-all duration-300 cursor-pointer hover:opacity-80"
                  style={{
                    height: `${heightPx}px`,
                    backgroundColor: 'var(--indigo)'
                  }}
                  title={`${item.day}: ${Math.floor(item.duration / 60)}h ${
                    item.duration % 60
                  }m`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex gap-2 mt-3">
        <div className="pr-2" style={{ width: '32px' }}></div>
        <div className="flex-1 flex items-center justify-between">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-1 text-center text-xs text-muted-foreground font-medium"
            >
              {item.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
