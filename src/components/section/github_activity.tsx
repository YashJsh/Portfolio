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
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
          }}
        />
      </div>
    </div>
  );
}