import { LeaderboardTabs } from "@/components/LeaderboardTabs";
import Login from "@/components/Login";
import { LuHome } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Results() {
  return (
    <main className="flex flex-col min-h-screen ">
      <nav className="flex justify-end p-8 ">
        <Button variant="ghost" size="icon" className="text-2xl">
          <Link href="/">
            <LuHome />
          </Link>
        </Button>
      </nav>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <div aria-label="result message">
          {/* 
          - if score = 0-1, message = 'Uh...'
          - if score = 2-4, message = 'Try again, maybe?'
          - if score = 5-7, message = 'Not bad!'
          - if score = 8-10, message = 'Nice!' */}
          <h1 className="text-6xl font-caveat text-primary">Nice!</h1>
        </div>
        <div
          aria-label="result score"
          className="flex items-center justify-center "
        >
          {" "}
          <h1 className="text-8xl font-caveat ">10/10 </h1>
        </div>
      </div>
      <div className="flex self-center justify-center items-center my-8 w-5/6">
        {true ? <Login /> : <LeaderboardTabs />}{" "}
      </div>
    </main>
  );
}
