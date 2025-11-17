"use client";

import { Home, TrendingUp, Target, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

const navItems: {
  id: NavItem;
  label: string;
  icon: React.ComponentType<any>;
  href: string;
}[] = [
  { id: "home", label: "Home", icon: Home, href: "/dashboard" },
  { id: "insights", label: "Insights", icon: TrendingUp, href: "/insights" },
  { id: "goals", label: "Goals", icon: Target, href: "/goals" },
  { id: "profile", label: "Profile", icon: User, href: "/profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] bg-background border-t-2 border-border h-20 px-4">
      <div className="flex items-center justify-around h-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 min-w-[60px] transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-lg flex items-center justify-center",
                  active && "bg-indigo/10"
                )}
              >
                <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 2} />
              </div>
              <span className="text-[9px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
