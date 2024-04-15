import { LeaderboardTabs } from "@/components/LeaderboardTabs";
import Login from "@/components/Login";
import { LuHome } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TempNav from "@/components/tempNav";

export default function Results() {
  return (
    <main className="flex flex-col min-h-screen">
      <nav className="flex justify-end p-8 ">
        <TempNav />
        <Button variant="ghost" size="icon" className="text-2xl">
          <Link href="/">
            <LuHome />
          </Link>
        </Button>
      </nav>
      <div>Nice!</div>
      <div>10/10</div>
      {true ? <Login /> : <LeaderboardTabs />}{" "}
    </main>
  );
}
