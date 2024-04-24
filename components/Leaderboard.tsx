"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

interface LeaderboardEntry {
  id: number;
  username: string;
  correct_answers: number;
  attempts: number;
}

export const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      const { data: leaderboard, error: fetchError } = await supabase
        .from("leaderboard")
        .select("*")
        .order("correct_answers", { ascending: false })
        .limit(10);

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setLeaderboard(leaderboard);
      }
      setLoading(false);
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Tabs defaultValue="all-time" className="w-full" aria-label="leaderboard">
      <TabsList className="grid grid-cols-2 bg-muted">
        <TabsTrigger value="all-time" className=" col-span-2 ">
          Leaderboard
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all-time">
        <Card>
          <CardHeader>
            <CardTitle>Top 10 Scores</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {leaderboard.length > 0 ? (
              leaderboard.map((user, index) => (
                <div key={index} className="flex justify-between">
                  <p>{user.username}</p>
                  <p>{user.correct_answers}</p>{" "}
                </div>
              ))
            ) : (
              <p>No leaderboard entries found.</p>
            )}
            {error && (
              <p className="text-destructive">
                Error loading leaderboard: {error}
              </p>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
