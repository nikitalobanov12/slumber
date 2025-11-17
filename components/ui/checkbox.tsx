import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random()}`;

    return (
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            type="checkbox"
            className="peer sr-only"
            id={checkboxId}
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "h-5 w-5 rounded-[4px] border-2 border-border bg-background cursor-pointer transition-colors peer-checked:bg-primary peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring",
              className
            )}
            onClick={() => {
              const input = document.getElementById(
                checkboxId
              ) as HTMLInputElement;
              if (input) input.click();
            }}
          >
            <Check
              className="h-4 w-4 text-primary-foreground opacity-0 peer-checked:opacity-100 transition-opacity absolute inset-0"
              strokeWidth={3}
            />
          </div>
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
