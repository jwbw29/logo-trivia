import Image from "next/image";
import logo from "@/public/logoTrivia-logo.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
          <SelectGroup>
            <SelectLabel className="text-primary ">NBA</SelectLabel>
            <SelectItem value="nba-all">All</SelectItem>
            <SelectItem value="nba-east">Eastern Conference</SelectItem>
            <SelectItem value="nba-west">Western Conference</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel className="text-primary">NFL</SelectLabel>
            <SelectItem value="nfl-all">All</SelectItem>
            <SelectItem value="nfl-afc">AFC</SelectItem>
            <SelectItem value="nfl-nfc">NFC</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel className="text-primary">MLB</SelectLabel>
            <SelectItem value="mlb-all">All</SelectItem>
            <SelectItem value="mlb-al">American League</SelectItem>
            <SelectItem value="mlb-nl">National League</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel className="text-primary">NHL</SelectLabel>
            <SelectItem value="nhl-all">All</SelectItem>
            <SelectItem value="nhl-east">Eastern Conference</SelectItem>
            <SelectItem value="nhl-west">Western Conference</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel className="text-primary">MLS</SelectLabel>
            <SelectItem value="mls-all">All</SelectItem>
            <SelectItem value="mls-east">Eastern Conference</SelectItem>
            <SelectItem value="mls-west">Western Conference</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel className="text-primary">WNBA</SelectLabel>
            <SelectItem value="wnba-all">All</SelectItem>
            <SelectItem value="wnba-east">Eastern Conference</SelectItem>
            <SelectItem value="wnba-west">Western Conference</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel className="text-primary">NCAA</SelectLabel>
            <SelectItem value="ncaa-all">All</SelectItem>
            <SelectItem value="ncaa-acc">ACC</SelectItem>
            <SelectItem value="ncaa-big10">Big Ten</SelectItem>
            <SelectItem value="ncaa-big12">Big 12</SelectItem>
            <SelectItem value="ncaa-sec">SEC</SelectItem>
          </SelectGroup>

          <SelectGroup>
            <SelectLabel className="text-primary">States</SelectLabel>
            <SelectItem value="states">States</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* //// Pagination */}
    </main>
  );
}
