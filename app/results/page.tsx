import { LeaderboardTabs } from "@/components/LeaderboardTabs";
import Login from "@/components/Login";
import { LuHome } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Results() {
  let signedIn = true;

  let score = 10;
  let attempts = 10;
  let message = "";

  switch (true) {
    case score >= 0 && score <= 1:
      message = "Uh...";
      break;
    case score >= 2 && score <= 4:
      message = "Try again, maybe?";
      break;
    case score >= 5 && score <= 7:
      message = "Not bad!";
      break;
    case score >= 8 && score <= 10:
      message = "Nice!";
      break;
    default:
      message = "Invalid score";
      break;
  }

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
          <h1 className="text-6xl font-caveat text-primary">{message}</h1>
        </div>
        <div
          aria-label="result score"
          className="flex items-center justify-center "
        >
          {" "}
          <h1 className="text-8xl font-caveat ">
            {score} / {attempts}{" "}
          </h1>
        </div>
      </div>
      <div className="flex self-center justify-center items-center my-8 w-5/6">
        {signedIn ? <Login /> : <LeaderboardTabs />}{" "}
      </div>
    </main>
  );
}
