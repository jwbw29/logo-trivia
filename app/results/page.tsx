import { LeaderboardTabs } from "@/components/LeaderboardTabs";
import Login from "@/components/Login";

export default function Results() {
  return (
    <main className="flex flex-col min-h-screen">
      <div>Home Icon</div>
      <div>Nice!</div>
      <div>10/10</div>
      {true ? <Login /> : <LeaderboardTabs />}{" "}
    </main>
  );
}
