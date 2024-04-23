"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProfileNav } from "@/components/Nav";
import logo from "@/public/logoTrivia-logo.png";
import Username from "@/components/Username";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export default function Home() {
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Anonymous sign in function
  const handleAnonymousSignIn = async () => {
    let session = (await supabase.auth.getSession()).data.session;
    console.log("1st session check:", session);

    if (!session) {
      console.log("no session, lets sign in anonymously");
      const { data: anonUser, error: anonError } =
        await supabase.auth.signInAnonymously();
      if (anonError) {
        console.error("Error signing in anonymously: ", anonError);
      } else {
        console.log("Signed in as anonymous user", anonUser);
        session = (await supabase.auth.getSession()).data.session;
      }
    }
    console.log("Current session:", session);
    console.log("User's email: ", session?.user.email);
    // TODO setUserEmail(session.user.email);
  };

  // ** At this point, we have a session **
  // if session && !username,
  //    prompt for email
  // if session && username
  //    display username
  //    display category
  //    display start button
  // 2. Check if the current user has a profile
  // 3. If they do, display the normal page
  // 4. If they don't, display the username submission modal
  // 5. After the user submits their username, update the profile table with the username
  // 6. Display the normal page

  useEffect(() => {
    setLoading(true);
    handleAnonymousSignIn();
    setLoading(false);
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      {" "}
      <nav className="flex justify-end p-4">
        <ProfileNav />
      </nav>
      <div className="flex flex-col flex-1 justify-start items-center gap-8 mb-[104px] m-12">
        <Image
          src={logo}
          alt="brand logo"
          width={400}
          height={400}
          className="rounded-full border-2 border-tertiary"
        />
        {loading ? <p>...Loading</p> : <Username />}
      </div>
    </main>
  );
}
