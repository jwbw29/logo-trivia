"use client";

import { useState } from "react";
import { Leaderboard } from "@/components/Leaderboard";
import { HomeNav } from "@/components/Nav";
import { createClient } from "@/utils/supabase/client";
// import Username from "@/components/Username";
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
import { Input } from "@/components/ui/input";
import { LuLoader2 } from "react-icons/lu";

const supabase = createClient();

const formSchema = z.object({
  username: z.string().min(6, {
    message: "Must be at least 6 characters",
  }),
});

export default function Results() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //// Declare variables
  let correct = 27; // TODO fetch this from game session
  let attempts = 28; // TODO fetch this from game session
  let percent = correct / attempts;
  let percentString = (percent * 100).toFixed(2) + "%";
  let message = "Your Score:";

  // Message based on score
  // Remove this until I figure out for sure which score I want to display
  // switch (true) {
  //   case percent >= 0 && percent <= 0.1:
  //     message = "Uh...";
  //     break;
  //   case percent >= 0.2 && percent <= 0.4:
  //     message = "Try again, maybe?";
  //     break;
  //   case percent >= 0.5 && percent <= 0.7:
  //     message = "Not bad!";
  //     break;
  //   case percent >= 0.8 && percent <= 1:
  //     message = "Nice!";
  //     break;
  //   default:
  //     message = "Invalid score";
  //     break;
  // }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  });
  const { isValid } = form.formState;

  //// ON SAVE
  const onSave = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    setErrorMessage("");
    setUsername(data.username);

    try {
      const { error } = await supabase.from("leaderboard").insert({
        username: data.username,
        correct_answers: correct,
        attempts: attempts,
      });

      if (error) throw new Error(error.message);
    } catch (err) {
      console.error("Error submitting username: ", err);
      setErrorMessage("Error submitting username. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen ">
      <nav className="flex justify-end p-4">
        <HomeNav />
      </nav>
      {loading ? (
        <div className="flex flex-1 justify-center items-center mb-[72px]">
          <LuLoader2 className="mr-2 h-28 w-28 animate-spin text-primary" />
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <div aria-label="result message">
              <h1 className="text-5xl font-orbitron">{message}</h1>
            </div>
            <div
              aria-label="result score"
              className="flex flex-col items-center justify-center "
            >
              {" "}
              <h1 className="text-9xl font-caveat text-primary">{correct}</h1>
              <h1 className="text-3xl md:text-5xl font-caveat ">
                {percentString}
              </h1>
            </div>
          </div>
          <div className="flex flex-col self-center justify-center items-center my-4 w-5/6 gap-8">
            {username ? (
              <p>
                Added <span className="text-primary">{username}</span> to
                Leaderboard
              </p>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSave)}
                  className="flex flex-col items-start gap-4 w-full py-2"
                >
                  <FormDescription>
                    Enter username to add score to leaderboard
                  </FormDescription>
                  <div className="flex w-full items-end gap-2">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Username"
                              {...field}
                              disabled={loading}
                            />
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
            )}{" "}
            <Leaderboard />
          </div>
        </>
      )}{" "}
    </main>
  );
}
