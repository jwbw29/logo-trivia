"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProfileNav } from "@/components/Nav";
import logo from "@/public/logoTrivia-logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

const formSchema = z.object({
  username: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export default function Home() {
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [userCreated, setUserCreated] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //// Anonymous sign in function
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

  useEffect(() => {
    setLoading(true);
    handleAnonymousSignIn();
    setLoading(false);
  }, []);

  /* // ** At this point, we have a session **
   if session && !username,
      prompt for email
   if session && username
      display username
      display category
      display start button
   2. Check if the current user has a profile
   3. If they do, display the normal page
   4. If they don't, display the username submission modal
   5. After the user submits their username, update the profile table with the username
   6. Display the normal page*/

  //// FORM STUFF
  //// Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  });
  const { isValid } = form.formState;

  //// Define a submit handler.
  async function authenticateAndSaveUsername(
    values: z.infer<typeof formSchema>
  ) {
    setLoading(true);
    setErrorMessage("");

    //// Fetch users to check if username is already taken
    const { data: existingUser, error: usernameError } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", values.username)
      .single();

    existingUser
      ? console.log("existing user", existingUser)
      : console.log("existing user is null");

    //// if we get an error and that error is NOT "JSON object requested, multiple (or no) rows returned", then we have a problem
    //// otherwise we have a unique user
    if (
      usernameError &&
      usernameError.message !==
        "JSON object requested, multiple (or no) rows returned"
    ) {
      setErrorMessage("An error occurred, please try again.");
      setLoading(false);
      return;
    } else {
      console.log("unique user entered!");
    }

    if (!existingUser) {
      //// if user doesn't exist create one with the username provided and tie it to the current session user, then update the state so that username shows at the top instead of the username component
      const session = (await supabase.auth.getSession()).data.session;
      const userId = session?.user.id;
      const { data: newUser, error: newUserError } = await supabase
        .from("profiles")
        .insert([{ username: values.username, id: userId }]);

      if (newUserError) {
        setErrorMessage("An error occurred, please try again.");
        setLoading(false);
        return;
      }

      //// clear input box
      form.setValue("username", "");

      setUserCreated(true);
    } else {
      setErrorMessage("Username is already taken.");
      setLoading(false);
      return;
    }

    // TODO once we have a username, push it to the leaderboard database
    console.log("userCreated: ", userCreated);

    setLoading(false);
  }

  /* //// What I'd like handleSubmit() to look like
     async function handleSubmit(){
       setLoading(true);
       setErrorMessage("");
       await authenticateAndSaveUsername();
       await updateAnonUser();
       await linkAnonUserToProfile();
       setLoading(false);
     }
     */

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
        {userCreated && !loading ? (
          <div className="flex flex-col gap-12">
            <Select>
              <SelectTrigger aria-label="category select" className="w-80">
                <SelectValue placeholder="Choose Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                <SelectGroup>
                  <SelectLabel className="text-primary ">NBA</SelectLabel>
                  <SelectItem value="nba-all">All</SelectItem>
                  <SelectItem value="nba-east">Eastern Conference</SelectItem>
                  <SelectItem value="nba-west">Western Conference</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-primary">NFL</SelectLabel>
                  <SelectItem value="nfl-all">All</SelectItem>
                  <SelectItem value="nfl-afc">AFC</SelectItem>
                  <SelectItem value="nfl-nfc">NFC</SelectItem>
                </SelectGroup>
                so
                <SelectGroup>
                  <SelectLabel className="text-primary">MLB</SelectLabel>
                  <SelectItem value="mlb-all">All</SelectItem>
                  <SelectItem value="mlb-al">American League</SelectItem>
                  <SelectItem value="mlb-nl">National League</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-primary">NHL</SelectLabel>
                  <SelectItem value="nhl-all">All</SelectItem>
                  <SelectItem value="nhl-east">Eastern Conference</SelectItem>
                  <SelectItem value="nhl-west">Western Conference</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-primary">MLS</SelectLabel>
                  <SelectItem value="mls-all">All</SelectItem>
                  <SelectItem value="mls-east">Eastern Conference</SelectItem>
                  <SelectItem value="mls-west">Western Conference</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-primary">WNBA</SelectLabel>
                  <SelectItem value="wnba-all">All</SelectItem>
                  <SelectItem value="wnba-east">Eastern Conference</SelectItem>
                  <SelectItem value="wnba-west">Western Conference</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-primary">NCAA</SelectLabel>
                  <SelectItem value="ncaa-all">All</SelectItem>
                  <SelectItem value="ncaa-acc">ACC</SelectItem>
                  <SelectItem value="ncaa-big10">Big Ten</SelectItem>
                  <SelectItem value="ncaa-big12">Big 12</SelectItem>
                  <SelectItem value="ncaa-sec">SEC</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-primary">States</SelectLabel>
                  <SelectItem value="states">States</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              aria-label="start button"
              variant="default"
              size="xl"
              className="text-base tracking-[.2rem] w-full"
              asChild
            >
              <Link href="/play">START</Link>
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(authenticateAndSaveUsername)}
              className="flex flex-col justify-end items-start gap-4 w-full p-2"
            >
              <FormDescription>
                Enter email to add score to leaderboard
              </FormDescription>
              <div className="flex w-full items-end gap-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="Username" {...field} />
                      </FormControl>
                      <FormMessage />
                      {errorMessage && (
                        <div className="text-sm font-medium text-destructive">
                          {errorMessage}
                        </div>
                      )}
                    </FormItem>
                  )}
                />
                <Button
                  aria-label="save username button"
                  disabled={!isValid || loading} // TODO is this right? or should it be based off length requirement being met?
                  // size="xxl"
                  className="tracking-[.2rem] self-start"
                >
                  SAVE
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </main>
  );
}
