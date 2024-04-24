"use client";

import { useState, useEffect } from "react";
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

const formSchema = z.object({
  username: z.string().min(6, {
    message: "Must be at least 6 characters",
  }),
});

export default function Username() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Define the form.
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
    console.log("onSave was clicked");
    // setLoading(true);
    // setErrorMessage("");
    // insert into leaderboard
    // refresh leaderboard (this may be done somewhere else)
  };

  return (
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
  );
}
