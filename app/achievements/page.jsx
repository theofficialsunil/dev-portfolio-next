// app/achievements/page.jsx

import { Trophy, Medal, Award, Users, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { achievements } from "@/data/portfolio";

const icons = [Trophy, Medal, Award, Users, Trophy];

export default function AchievementsPage() {
  const firstPlaceCount = achievements.filter((item) =>
    item.position.includes("1st")
  ).length;

  const podiumCount = achievements.length;

  const individualCount = achievements.filter((item) =>
    item.type.includes("Individual")
  ).length;

  return (
    <main className="pt-16 min-h-screen bg-white dark:bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Competitive Programming
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Achievements
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Contest results and campus-level competitive programming
              recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <StatCard
              title="Podium Finishes"
              value={`${podiumCount}`}
              description="Across coding contests"
            />

            <StatCard
              title="First Place"
              value={`${firstPlaceCount}`}
              description="Winner result"
            />

            <StatCard
              title="Individual Results"
              value={`${individualCount}`}
              description="Solo contest podiums"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = icons[index] || Trophy;

              return (
                <Card
                  key={achievement.title}
                  className="dark:bg-zinc-900 dark:border-zinc-800 hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <CardTitle className="text-xl dark:text-white">
                            {achievement.title}
                          </CardTitle>

                          <Badge variant="secondary">{achievement.year}</Badge>
                        </div>

                        <CardDescription className="dark:text-gray-400">
                          {achievement.organization}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-600">
                        {achievement.position}
                      </Badge>

                      <Badge variant="outline">{achievement.type}</Badge>

                      <Badge variant="secondary">
                        {achievement.category}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.year}</span>
                    </div>
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

function StatCard({ title, value, description }) {
  return (
    <Card className="dark:bg-zinc-900 dark:border-zinc-800">
      <CardContent className="p-6 text-center">
        <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {value}
        </p>

        <h3 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}