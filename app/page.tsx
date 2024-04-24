"use client";
// TODO add form validation for email instead of username

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
import { updateSession } from "@/utils/supabase/middleware";

const supabase = createClient();

const formSchema = z.object({
  email: z.string().min(6, {
    message: "Must be a valid email address",
  }),
});

export default function Home() {
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [userCreated, setUserCreated] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //// FORM STUFF
  // Define the form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });
  const { isValid } = form.formState;

  //// GET SESSION FUNCTION
  const getSession = async () => {
    // setLoading(true);
    console.log("getting session...");
    let session = (await supabase.auth.getSession()).data.session;

    if (!session) {
      handleAnonymousSignIn();
    } else {
      console.log("session exists: ", session);
    }

    if (session?.user.email) {
      setUserEmail(session.user.email);
    }
    // setLoading(false);
  };

  //// ANONYMOUS SIGN IN FUNCTION
  const handleAnonymousSignIn = async () => {
    console.log("signing in anonymously...");
    const { data: anonUser, error: anonSignInError } =
      await supabase.auth.signInAnonymously();
    if (anonSignInError) {
      console.error("Error signing in anonymously: ", anonSignInError);
    } else {
      console.log("Signed in as anonymous user: ", anonUser);
    }
  };

  //// AUTHENTICATE EMAIL FUNCTION
  const authenticateEmail = async (values: z.infer<typeof formSchema>) => {
    console.log("checking for duplicate email...");
    setLoading(true); // this may be redundant inside functions that already did this
    setErrorMessage("");
    const { data: existingEmail, error: existingEmailErr } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", values.email.split("@")[0])
      .single();

    if (
      existingEmailErr &&
      existingEmailErr.message !==
        "JSON object requested, multiple (or no) rows returned"
    ) {
      setErrorMessage("An error occurred, please try again.");
      setLoading(false);
      return;
    } else {
      console.log("unique user entered!");
      setLoading(false);
    }

    if (existingEmail) {
      setErrorMessage("Email is already taken.");
      setLoading(false);
      return;
    }
  };

  //// ON SUBMIT FUNCTION
  const handleSubmit = async () => {
    console.log("submitting form...");
    setLoading(true);
    authenticateEmail(form.getValues());
    //don't need to set input field to blank because on click it should render a loading component or the start button
    setUserEmail(form.getValues().email);
    // TODO update session user email with the email from the form
    const { data: updatedUser, error: updatedUserError } =
      await supabase.auth.updateUser({
        email: form.getValues().email,
      });
    if (updatedUserError) {
      console.error("Error updating user email: ", updatedUserError);
      setErrorMessage("An error occurred, please try again.");
      setLoading(false);
      return;
    } else {
      console.log("User email updated: ", updatedUser);
    }
    getSession(); // this *should* reload the session with the new email
  };

  //// ON PAGE LOAD
  useEffect(() => {
    console.log("component did mount ...");
    getSession();
  }); //TODO add a [] dependency here because the page is loading every time I type a new character in the input

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
        {loading ? (
          <p>Loading...</p>
        ) : userEmail.length > 0 ? (
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
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col justify-end items-start gap-4 w-full p-2"
            >
              <FormDescription>
                Enter email to add score to leaderboard
              </FormDescription>
              <div className="flex w-full items-end gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="Email" {...field} />
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
                  aria-label="save email button"
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
