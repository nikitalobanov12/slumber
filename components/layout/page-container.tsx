import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  withNav?: boolean;
  withStatusBar?: boolean;
}

export function PageContainer({
  children,
  className,
  withNav = false,
  withStatusBar = false,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "min-h-screen px-[23px]",
        withStatusBar && "pt-[23px]",
        withNav && "pb-20",
        className
      )}
    >
      {children}
    </div>
  );
}
