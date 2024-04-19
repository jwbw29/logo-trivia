"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";

const formSchema = z.object({
  username: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export default function Username() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userCreated, setUserCreated] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  });
  const { isValid } = form.formState;

  // 2. Define a submit handler.
  async function authenticateAndSaveUsername(
    values: z.infer<typeof formSchema>
  ) {
    setLoading(true);
    setErrorMessage("");
    const supabase = createClient();

    // Fetch users to check if username is already taken
    const { data: existingUser, error: usernameError } = await supabase
      .from("users")
      .select("username")
      .eq("username", values.username)
      .single();

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

    if (existingUser) {
      setErrorMessage("Username is already taken.");
      setLoading(false);
      return;
    }

    // Username is unique, proceed to sign in anonymously
    // const { data: anonUser, error: anonUserError } =
    //   await supabase.auth.signInAnonymously();

    // // Insert username into the database
    // const { error: insertError } = await supabase
    //   .from("users")
    //   .insert([{ username: values.username }]);

    // if (insertError) {
    //   setErrorMessage(insertError.message);
    //   setLoading(false);
    // } else {
    //   // User is created successfully
    //   //// Think I need to do more here. Maybe this is where I call signInAnonymously?
    //   setUserCreated(true);
    //   console.log("Username registered successfully!");
    //   // Optionally, redirect or perform other actions
    // }

    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(authenticateAndSaveUsername)}
        className="flex w-full justify-end gap-2 mt-16"
      >
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
      </form>
    </Form>
  );
}
