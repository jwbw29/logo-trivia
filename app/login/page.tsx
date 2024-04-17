import Login from "@/components/Login";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuHome } from "react-icons/lu";
import { HomeNav } from "@/components/Nav";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center ">
      <HomeNav />
      <div className="flex justify-center items-center mt-20 w-3/4">
        <Login />{" "}
      </div>
    </main>
  );
}
