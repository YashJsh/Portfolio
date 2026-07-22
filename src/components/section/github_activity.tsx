"use client"
import React, { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { DATA } from "@/data/resume";
import { useTheme } from "next-themes";

export function GithubActivity() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme === "dark" ? "dark" : "light") : "light";

  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl font-bold">GitHub Activity</h2>
      <div className="border border-dashed border-border rounded-xl p-6 bg-background overflow-x-auto flex justify-center shadow-sm">
        <GitHubCalendar
          username={DATA.contact.social.GitHub.url.split('/').pop() || "YashJsh"}
          colorScheme={currentTheme as "dark" | "light"}
          fontSize={12}
          blockSize={12}
          blockMargin={4}
          theme={{
            light: ['#ebedf0', '#d1d5db', '#9ca3af', '#4b5563', '#1f2937'],
            dark: ['#161b22', '#374151', '#4b5563', '#9ca3af', '#e5e7eb'],
          }}
        />
      </div>
    </div>
  );
}