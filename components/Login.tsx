"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
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
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Please enter your username and password to login.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">content </CardContent>
      <CardFooter>footer / sign in / sign up buttons</CardFooter>
    </Card>
  );
}
// <div>
//   <div>Log in to submit score</div>
//   <div>email</div>
//   <div>password</div>
//   <div>login button</div>
//   <div>signup</div>
// </div>
