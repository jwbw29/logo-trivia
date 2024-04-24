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
  email: z.string().min(6, {
    message: "Must be a valid email address",
  }),
});

export default function Username() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Define the form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
  );
}
