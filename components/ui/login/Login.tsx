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
import { Button } from "../button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../form";
import { Input } from "@/components/ui/input";
import { login, signup } from "@/components/ui/login/action";

const formSchema = z.object({
  username: z.string().min(6),
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

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
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
    <Card className="w-full" aria-label="login component">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {" "}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
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
                aria-label="login button"
                // TODO enable button when username and password meet requirements
                disabled
                // size="xxl"
                className="tracking-[.2rem] w-full md:w-1/2"
                formAction={login}
              >
                LOGIN
              </Button>
              <Button
                aria-label="signup link"
                variant="link"
                className="text-sm tracking-[.2rem] w-full md:w-1/2"
                formAction={signup} // might have to change these to onClick or onSubmit
              >
                SIGN UP
              </Button>
            </div>
          </form>
        </Form>{" "}
      </CardContent>
    </Card>
  );
}
