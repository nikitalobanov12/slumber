// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  sleepGoal: number; // hours
  bedtime: string; // "23:00"
  wakeTime: string; // "07:00"
  createdAt: Date;
}

// Sleep session types
export interface SleepSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  duration: number; // minutes
  sleepScore: number; // 0-100
  mood?: "terrible" | "poor" | "good" | "excellent";
  quality?: number; // 0-100
  notes?: string;
  createdAt: Date;
}

// Sleep profile quiz types
export interface SleepProfile {
  bedtime: string;
  wakeTime: string;
  sleepIssues: string[];
}

export const SLEEP_ISSUES = [
  "Difficulty falling asleep",
  "Waking up frequently",
  "Not feeling rested",
] as const;

// Wind-down routine types
export interface WindDownActivity {
  id: string;
  name: string;
  duration: number; // minutes
  icon: string;
  enabled: boolean;
}

// Stats types
export interface SleepStats {
  averageDuration: number; // minutes
  averageScore: number; // 0-100
  totalSessions: number;
  streak: number; // consecutive days
  weeklyData: {
    day: string;
    duration: number; // minutes
    score: number;
  }[];
}

// Article types
export interface SleepArticle {
  id: string;
  title: string;
  excerpt: string;
  category: "tips" | "science" | "habits" | "health";
  readTime: number; // minutes
  imageColor: string;
}

// Navigation types
export type NavItem = "home" | "insights" | "goals" | "profile";
