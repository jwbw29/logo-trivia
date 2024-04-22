"use client";

import { useState, useEffect } from "react";
import { LeaderboardTabs } from "@/components/LeaderboardTabs";
import { HomeNav, ProfileNav } from "@/components/Nav";
import Username from "@/components/Username";
import { createClient } from "@/utils/supabase/client";

// TODO
// - on page load, check to see if current user has a username associated w/ their account in the `profiles` table
//   - if they do, display normal page w/ score and leaderboard
//   - if they don't, display the username submission modal below the score, and above the leaderboard (see mockup)

export default function Results() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  let score = 26; // TODO fetch this from game session
  let attempts = 28; // TODO fetch this from game session
  let percent = score / attempts;
  let percentString = (percent * 100).toFixed(2) + "%";
  let message = "";

  // Message based on score
  switch (true) {
    case percent >= 0 && percent <= 0.1:
      message = "Uh...";
      break;
    case percent >= 0.2 && percent <= 0.4:
      message = "Try again, maybe?";
      break;
    case percent >= 0.5 && percent <= 0.7:
      message = "Not bad!";
      break;
    case percent >= 0.8 && percent <= 1:
      message = "Nice!";
      break;
    default:
      message = "Invalid score";
      break;
  }

  // 1. Find the current user
  // 2. Check if the current user has a profile
  // 3. If they do, display the normal page
  // 4. If they don't, display the username submission modal
  // 5. After the user submits their username, update the profile table with the username
  // 6. Display the normal page

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     setLoading(true);
  //     const session = (await supabase.auth.getSession()).data.session;
  //     const userId = session?.user.id;

  //     // const { data: profile, error: profileError } = await supabase
  //     //   .from("profiles")
  //     //   .select("*")
  //     //   .eq("id", user.id) // BUG Need to change this to something but not sure what yet
  //     //   .single();

  //     // if (profileError) {
  //     //   console.error("Error fetching profile:", profileError);
  //     // } else {
  //     //   setProfile(profile);
  //     // }
  //     setLoading(false);
  //   };

  //   // if (!user) {
  //   fetchProfile();
  //   // }
  // }, [supabase.auth, user]);

  return (
    <main className="flex flex-col min-h-screen ">
      <nav className="flex justify-end p-4">
        <HomeNav />
        <ProfileNav />
      </nav>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <div aria-label="result message">
          <h1 className="text-6xl font-caveat text-primary">{message}</h1>
        </div>
        <div
          aria-label="result score"
          className="flex flex-col items-center justify-center "
        >
          {" "}
          <h1 className="text-4xl md:text-6xl font-caveat ">
            {score} / {attempts}{" "}
          </h1>
          <h1 className="text-8xl font-caveat ">{percentString} </h1>
        </div>
      </div>
      <div className="flex self-center justify-center items-center my-8 w-5/6">
        <LeaderboardTabs />
      </div>
    </main>
  );
}
