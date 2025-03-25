"use client"; // Required for interactive components in Next.js (App Router)

import * as React from "react";
import { cn } from "@/lib/utils";

// Tabs component (manages state)
interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
}

const Tabs: React.FC<TabsProps> = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className="w-full">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<TabsTriggerProps | TabsContentProps>(child)) {
          // Ensure we only pass props to specific components
          if (
            (child.type as React.FC)?.displayName === "TabsTrigger" ||
            (child.type as React.FC)?.displayName === "TabsContent"
          ) {
            return React.cloneElement(child, { activeTab, setActiveTab });
          }
        }
        return child;
      })}
    </div>
  );
};

// TabsList component (container for tab buttons)
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const TabsList: React.FC<TabsListProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("flex border-b border-gray-300", className)} {...props}>
      {children}
    </div>
  );
};

// TabsTrigger (button for each tab)
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  activeTab,
  setActiveTab,
  className,
  ...props
}) => {
  return (
    <button
      onClick={() => setActiveTab?.(value)}
      className={cn(
        "px-4 py-2 text-gray-600 hover:text-black transition-all border-b-2 border-transparent",
        activeTab === value && "border-blue-500 text-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
TabsTrigger.displayName = "TabsTrigger"; // Fix for production build

// TabsContent (content area for each tab)
interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
}

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab }) => {
  return activeTab === value ? <div className="p-4">{children}</div> : null;
};
TabsContent.displayName = "TabsContent"; // Fix for production build

// Export components
export { Tabs, TabsList, TabsTrigger, TabsContent };
