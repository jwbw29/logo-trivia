"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(6),
  password: z
    .string()
    .min(8)
    .regex(/[a-z]/, {
      message: "Password must include at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must include at least one number" })
    .regex(/[\W_]/, {
      message: "Password must include at least one special character",
    }),
});

export default function Signup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className="w-full" aria-label="signup component">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {" "}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2">
              <Button
                aria-label="signup button"
                // TODO enable button when email and password meet requirements
                disabled
                // size="xxl"
                className="tracking-[.2rem] w-full md:w-1/2"
              >
                SIGN UP
              </Button>
              <Button
                aria-label="login route"
                variant="link"
                className="text-sm tracking-[.2rem] w-full md:w-1/2"
                asChild
              >
                <Link href="/login">LOGIN</Link>
              </Button>
            </div>
          </form>
        </Form>{" "}
      </CardContent>
    </Card>
  );
}
