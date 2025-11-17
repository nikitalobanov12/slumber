import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

export const metadata: Metadata = {
  title: "Slumber - Sleep Tracking App",
  description: "Track your sleep, build better habits, and wake up refreshed every day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="light" storageKey="slumber-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
