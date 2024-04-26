"use client";

import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";
import { LuLoader2 } from "react-icons/lu";

const supabase = createClient();

interface Team {
  id: number;
  name1: string;
  name2: string;
  league_id: number;
  conference_id: number | null;
  division_id: number | null;
  location: string;
  logo: string | null;
}

export default function Results() {
  console.log("Results component function is executing"); // Immediate log

  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("component mounted");
    async function fetchTeamDetails() {
      setLoading(true);
      console.log("fetching data");
      const { data: fetchedTeams, error } = await supabase
        .from("teams")
        .select(`*`)
        .limit(50);
      console.log("fetched data", fetchedTeams);

      if (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } else {
        setTeams(fetchedTeams);
      }
      setLoading(false);
    }
    fetchTeamDetails();
  }, []);

  if (loading) {
    console.log("Loading data..."); // Check loading state
    return (
      <div className="my-12 gap-4">
        <LuLoader2 className="mr-2 h-28 w-28 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main className="container flex flex-col min-h-screen ">
      <div className="container flex flex-col justify-start">
        <div className="container flex flex-col">
          <h1>Teams</h1>
          {error && <p>Error loading teams: {error}</p>}
          {teams.map((team, i) => (
            <div key={i} className="testBorder flex gap-2">
              <p>{team.name1}</p>
              <p>{team.name2}</p>
              <p>{team.league_id}</p>
              <p>{team.conference_id}</p>
              <p>{team.division_id}</p>
              <p>{team.location}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
