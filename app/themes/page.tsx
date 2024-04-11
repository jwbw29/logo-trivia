import Image from "next/image";
import logo from "@/public/logoTrivia-logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ButtonDemo,
  ButtonSecondary,
  ButtonOutline,
  ButtonLink,
  ButtonGhost,
  StartButton,
  ButtonLoading,
  ButtonAsChild,
} from "@/components/Buttons";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast, toast } from "@/components/ui/use-toast";
import { LeaderboardTabs } from "@/components/LeaderboardTabs";

export default function Themes() {
  return (
    <main className="flex flex-col min-h-screen items-center gap-4">
      <Image src={logo} alt="game logo" width={400} className="gameLogo" />
      <div className="border-4 border-border w-3/4 rounded-2xl p-2 bg-slate-500 ">
        <span className="text-background">Background</span>{" "}
        <span className="text-foreground">Foreground</span>
      </div>
      <div className="border border-border w-3/4 rounded-2xl p-2 bg-primary text-primary-foreground">
        Primary Color
      </div>
      <div className="border border-border w-3/4 rounded-2xl p-2 bg-secondary text-secondary-foreground">
        Secondary Color
      </div>
      <div className="border border-border w-3/4 rounded-2xl p-2 bg-tertiary text-tertiary-foreground">
        Tertiary Color
      </div>
      {/* //// Tabs */}
      <LeaderboardTabs />
      {/* //// Buttons */}
      <div className="grid w-full grid-cols-3 grid-flow-row-dense gap-4">
        <div>
          <ButtonDemo />
        </div>
        <div>
          <ButtonSecondary />
        </div>
        <div>
          <ButtonOutline />
        </div>
        <div>
          <ButtonLink />
        </div>
        <div>
          <ButtonGhost />
        </div>
        <div>
          <StartButton />
        </div>
        <div>
          <ButtonLoading />
        </div>
        <div>
          <ButtonAsChild />
        </div>
      </div>
      {/* //// Toast Button (still need this if we're forcing login instead of username submission?) */}
      {/* //// Select */}
      <Select>
        <SelectTrigger aria-label="category select" className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nba-all">NBA: All</SelectItem>
          <SelectItem value="nba-east">NBA: Western Conference</SelectItem>
          <SelectItem value="nba-west">NBA: Eastern Conference</SelectItem>
          <SelectItem value="nfl-all">NFL: All</SelectItem>
          <SelectItem value="nfl-afc">NFL: AFC</SelectItem>
          <SelectItem value="nfl-nfc">NFL: NFC</SelectItem>
          <SelectItem value="mlb-all">MLB: All</SelectItem>
          <SelectItem value="mlb-nl">MLB: American League</SelectItem>
          <SelectItem value="mlb-al">MLB: National League</SelectItem>
          <SelectItem value="nhl-all">NHL: All</SelectItem>
          <SelectItem value="nhl-east">NHL: Eastern Conference</SelectItem>
          <SelectItem value="nhl-west">NHL: Western Conference</SelectItem>
          <SelectItem value="mls-all">MLS: All</SelectItem>
          <SelectItem value="mls-east">MLS: Eastern Conference</SelectItem>
          <SelectItem value="mls-west">MLS: Western Conference</SelectItem>
          <SelectItem value="wnba-all">WNBA: All</SelectItem>
          <SelectItem value="wnba-east">WNBA: Eastern Conference</SelectItem>
          <SelectItem value="wnba-west">WNBA: Western Conference</SelectItem>
          <SelectItem value="ncaa-all">NCAA: All</SelectItem>
          <SelectItem value="ncaa-acc">NCAA: ACC</SelectItem>
          <SelectItem value="ncaa-big10">NCAA: Big Ten</SelectItem>
          <SelectItem value="ncaa-big12">NCAA: Big 12</SelectItem>
          <SelectItem value="ncaa-sec">NCAA: SEC</SelectItem>
          <SelectItem value="states">States</SelectItem>
        </SelectContent>
      </Select>
      {/* //// Pagination */}
    </main>
  );
}
