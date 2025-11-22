import { User, SleepSession, SleepStats, WindDownActivity } from "./types";

export const mockUser: User = {
  id: "1",
  name: "Sarah Chen",
  email: "sarah.chen@example.com",
  sleepGoal: 8,
  bedtime: "23:00",
  wakeTime: "07:00",
  createdAt: new Date("2024-01-01"),
};

// Deterministic random function based on seed for consistent SSR/client rendering
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generate mock sleep sessions for the last 30 days
export const mockSleepSessions: SleepSession[] = Array.from(
  { length: 30 },
  (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    const startTime = new Date(date);
    startTime.setHours(23, 0, 0, 0);

    // More variation in sleep duration (5-9 hours) - using seeded random
    const duration = 300 + Math.floor(seededRandom(i * 3) * 240);
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + duration);

    const sleepScore = 60 + Math.floor(seededRandom(i * 7) * 40); // 60-100

    const moods: ("terrible" | "poor" | "good" | "excellent")[] = [
      "terrible",
      "poor",
      "good",
      "excellent",
    ];
    const mood = moods[Math.floor(seededRandom(i * 11) * moods.length)];

    return {
      id: `session-${i}`,
      userId: "1",
      startTime,
      endTime,
      duration,
      sleepScore,
      mood,
      quality: sleepScore,
      createdAt: endTime,
    };
  }
);

// Get last 7 days for weekly chart
export const getWeeklyData = () => {
  const lastWeek = mockSleepSessions.slice(-7);
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return days.map((day, index) => {
    const session = lastWeek[index];
    return {
      day,
      duration: session ? session.duration : 0,
      score: session ? session.sleepScore : 0,
    };
  });
};

// Get last 4 weeks for monthly chart
export const getMonthlyData = () => {
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const weekSize = 7;

  return weeks.map((week, index) => {
    const startIndex = index * weekSize;
    const weekSessions = mockSleepSessions.slice(startIndex, startIndex + weekSize);
    const avgDuration = weekSessions.reduce((sum, s) => sum + s.duration, 0) / weekSessions.length;
    const avgScore = weekSessions.reduce((sum, s) => sum + s.sleepScore, 0) / weekSessions.length;

    return {
      day: week,
      duration: Math.round(avgDuration),
      score: Math.round(avgScore),
    };
  });
};

// Get last 12 months for yearly chart
export const getYearlyData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return months.map((month, index) => {
    // Generate some variation based on month (5-9 hours) - using seeded random
    const baseDuration = 300 + Math.floor(seededRandom(index * 13) * 240);
    const baseScore = 60 + Math.floor(seededRandom(index * 17) * 40); // 60-100

    return {
      day: month,
      duration: baseDuration,
      score: baseScore,
    };
  });
};

export const mockStats: SleepStats = {
  averageDuration:
    mockSleepSessions.reduce((sum, s) => sum + s.duration, 0) /
    mockSleepSessions.length,
  averageScore:
    mockSleepSessions.reduce((sum, s) => sum + s.sleepScore, 0) /
    mockSleepSessions.length,
  totalSessions: mockSleepSessions.length,
  streak: 7,
  weeklyData: getWeeklyData(),
};

export const mockWindDownActivities: WindDownActivity[] = [
  {
    id: "1",
    name: "Meditation",
    duration: 10,
    icon: "brain",
    enabled: true,
  },
  {
    id: "2",
    name: "Reading",
    duration: 20,
    icon: "book-open",
    enabled: true,
  },
  {
    id: "3",
    name: "Light stretching",
    duration: 15,
    icon: "sparkles",
    enabled: false,
  },
  {
    id: "4",
    name: "Journal writing",
    duration: 10,
    icon: "pencil",
    enabled: false,
  },
];

// Last night's session (most recent)
export const lastNightSession =
  mockSleepSessions[mockSleepSessions.length - 1];

export const mockSleepArticles = [
  {
    id: "1",
    title: "The Science of Sleep Cycles",
    excerpt: "Understanding your sleep cycles can help you wake up feeling more refreshed. Learn how REM and deep sleep stages affect your rest.",
    category: "science" as const,
    readTime: 5,
    imageColor: "bg-gradient-to-br from-indigo/20 to-purple/20",
  },
  {
    id: "2",
    title: "5 Evening Habits for Better Sleep",
    excerpt: "Small changes to your evening routine can dramatically improve sleep quality. Discover proven techniques to wind down effectively.",
    category: "habits" as const,
    readTime: 4,
    imageColor: "bg-gradient-to-br from-blue/20 to-cyan/20",
  },
  {
    id: "3",
    title: "How Light Affects Your Sleep",
    excerpt: "Blue light from screens can disrupt your natural sleep rhythm. Learn how to manage light exposure for optimal rest.",
    category: "tips" as const,
    readTime: 3,
    imageColor: "bg-gradient-to-br from-amber/20 to-orange/20",
  },
  {
    id: "4",
    title: "The Connection Between Exercise and Sleep",
    excerpt: "Regular physical activity can significantly improve sleep quality, but timing matters. Find out when to work out for best results.",
    category: "health" as const,
    readTime: 6,
    imageColor: "bg-gradient-to-br from-green/20 to-emerald/20",
  },
];
