import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-md text-white font-medium transition-all",
          size === "sm" && "px-2 py-1 text-sm",
          size === "md" && "px-4 py-2",
          size === "lg" && "px-6 py-3 text-lg",
          size === "icon" && "p-2 flex items-center justify-center",
          variant === "default" && "bg-blue-500 hover:bg-blue-600",
          variant === "outline" && "border border-gray-300 text-gray-700 hover:bg-gray-100",
          variant === "ghost" && "text-gray-500 hover:bg-gray-200",
          variant === "secondary" && "bg-gray-500 hover:bg-gray-600 text-white",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };