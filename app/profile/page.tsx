"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { StatusBar } from "@/components/layout/status-bar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageContainer } from "@/components/layout/page-container";
import { User, Settings, Bell, Moon, ChevronRight, LogOut } from "lucide-react";
import { mockUser } from "@/lib/mock-data";
import { useTheme } from "@/lib/theme-provider";

export default function ProfilePage() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen pb-20">
      <PageContainer withStatusBar withNav className="py-8">
        <StatusBar />

        {/* Header */}
        <div className="mt-8">
          <h1 className="text-xl font-bold text-center">Profile</h1>
        </div>

        {/* User Info */}
        <div className="mt-8 flex flex-col items-center space-y-3">
          <div className="w-20 h-20 rounded-full border-2 border-gold bg-gradient-to-br from-gold/20 to-sunset/20 flex items-center justify-center">
            <User className="w-10 h-10 text-gold" />
          </div>
          <div className="text-center">
            <p className="font-bold">{mockUser.name}</p>
            <p className="text-sm text-muted-foreground">{mockUser.email}</p>
          </div>
        </div>

        {/* Account Section */}
        <Card className="mt-8 p-6 space-y-1">
          <h3 className="text-sm font-semibold mb-4">Account</h3>

          <button className="w-full flex items-center justify-between p-4 -mx-4 hover:bg-muted rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span className="text-sm">Edit Profile</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>

          <button className="w-full flex items-center justify-between p-4 -mx-4 hover:bg-muted rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <Settings className="w-4 h-4" />
              </div>
              <span className="text-sm">Sleep Preferences</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>

          <button className="w-full flex items-center justify-between p-4 -mx-4 hover:bg-muted rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <Bell className="w-4 h-4" />
              </div>
              <span className="text-sm">Notifications</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </Card>

        {/* Preferences Section */}
        <Card className="mt-6 p-6 space-y-1">
          <h3 className="text-sm font-semibold mb-4">Preferences</h3>

          <button className="w-full flex items-center justify-between p-4 -mx-4 hover:bg-muted rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <Moon className="w-4 h-4" />
              </div>
              <span className="text-sm">Dark Mode</span>
            </div>
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
          </button>

          <button className="w-full flex items-center justify-between p-4 -mx-4 hover:bg-muted rounded-lg transition-colors text-destructive">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                <LogOut className="w-4 h-4 text-destructive" />
              </div>
              <span className="text-sm font-medium">Log Out</span>
            </div>
          </button>
        </Card>
      </PageContainer>

      <BottomNav />
    </div>
  );
}
