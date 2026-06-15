"use client";

import { useEffect, useState } from "react";
import { Trophy, Target, Code, TrendingUp, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { codingProfilesFallback } from "@/data/portfolio";

const platformStyles = {
  Codeforces: {
    line: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-600 dark:text-blue-400",
  },
  LeetCode: {
    line: "from-orange-500 to-yellow-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    text: "text-orange-600 dark:text-orange-400",
  },
  CodeChef: {
    line: "from-amber-600 to-orange-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    text: "text-amber-700 dark:text-amber-400",
  },
};

function getFallbackProfiles() {
  return [
    codingProfilesFallback.codeforces,
    codingProfilesFallback.leetcode,
    codingProfilesFallback.codechef,
  ];
}

function normalizeProfiles(data) {
  return [
    data.codeforces || codingProfilesFallback.codeforces,
    data.leetcode || codingProfilesFallback.leetcode,
    data.codechef || codingProfilesFallback.codechef,
  ];
}

export default function CodingProfilesPage() {
  const [profiles, setProfiles] = useState(getFallbackProfiles());
  const [loading, setLoading] = useState(true);
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const res = await fetch("/api/coding-profiles");

        if (!res.ok) {
          throw new Error("Failed to fetch coding profiles");
        }

        const data = await res.json();
        setProfiles(normalizeProfiles(data));
        setUpdatedAt(data.updatedAt || "");
      } catch {
        setProfiles(getFallbackProfiles());
      } finally {
        setLoading(false);
      }
    }

    fetchProfiles();
  }, []);

  return (
    <main className="pt-16 min-h-screen bg-white dark:bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Competitive Programming
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Coding Profiles
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              My competitive programming and DSA profiles across Codeforces,
              LeetCode, and CodeChef.
            </p>

            <p className="text-sm text-slate-500 dark:text-gray-500">
              {loading
                ? "Fetching latest data..."
                : updatedAt
                ? `Last updated: ${new Date(updatedAt).toLocaleString()}`
                : "Showing fallback data"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile) => {
              const style = platformStyles[profile.platform];

              return (
                <Card
                  key={profile.platform}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 dark:bg-zinc-900 dark:border-zinc-800"
                >
                  <div className={`h-2 bg-gradient-to-r ${style.line}`} />

                  <CardHeader className={style.bg}>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-1 dark:text-white">
                          {profile.platform}
                        </CardTitle>

                        <p className="text-sm text-slate-600 dark:text-gray-400">
                          @{profile.username}
                        </p>
                      </div>

                      <div className="p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                        <Trophy className={`w-6 h-6 ${style.text}`} />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4 text-slate-400" />
                          <p className="text-xs text-slate-500">
                            Current Status
                          </p>
                        </div>

                        <p className={`text-xl font-bold ${style.text}`}>
                          {profile.platform === "Codeforces" &&
                            `${profile.rating} • ${profile.rank}`}
                          {profile.platform === "LeetCode" &&
                            `${profile.rating} • ${profile.level}`}
                          {profile.platform === "CodeChef" &&
                            `${profile.rating} • ${profile.stars}`}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {profile.platform === "Codeforces" && (
                          <>
                            <Stat label="Max Rating" value={profile.maxRating} />
                            <Stat label="Max Rank" value={profile.maxRank} />
                            <Stat label="Problems Solved" value={`${profile.solved}+`} />
                            <Stat label="Contests" value={profile.contests ?? "Live"} />
                          </>
                        )}

                        {profile.platform === "LeetCode" && (
                          <>
                            <Stat label="Solved" value={profile.totalSolved} />
                            <Stat label="Easy" value={profile.easySolved} />
                            <Stat label="Medium" value={profile.mediumSolved} />
                            <Stat label="Hard" value={profile.hardSolved} />
                            <Stat label="Contests" value={profile.attendedContests} />
                            <Stat label="Top" value={`${profile.topPercentage}%`} />
                          </>
                        )}

                        {profile.platform === "CodeChef" && (
                          <>
                            <Stat label="Max Rating" value={profile.maxRating} />
                            <Stat label="Division" value={profile.division} />
                            <Stat label="Global Rank" value={profile.globalRank} />
                            <Stat label="Country Rank" value={profile.countryRank} />
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="secondary">
                        {profile.platform === "Codeforces" && profile.rank}
                        {profile.platform === "LeetCode" && profile.level}
                        {profile.platform === "CodeChef" && profile.stars}
                      </Badge>

                      <Badge variant="outline">
                        <Code className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    </div>

                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium hover:underline ${style.text}`}
                    >
                      View Full Profile
                      <TrendingUp className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-2">
      <span className="text-sm text-slate-500 flex items-center gap-2">
        <Target className="w-4 h-4" />
        {label}
      </span>

      <span className="text-sm font-semibold text-slate-800 dark:text-gray-200">
        {value}
      </span>
    </div>
  );
}