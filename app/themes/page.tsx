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
  ButtonSecondary,
  ButtonOutline,
  ButtonLink,
  QuitButton,
  ButtonDefault,
  ButtonLoading,
  ButtonAsChild,
  ButtonWithIcon,
} from "@/components/Buttons";
import { Button } from "@/components/ui/button";
import { LeaderboardTabs } from "@/components/LeaderboardTabs";
import { HomeNav, ProfileNav } from "@/components/Nav";
import Username from "@/components/Username";

export default function Themes() {
  return (
    <main className="flex flex-col min-h-screen items-center gap-4">
      <nav className="flex justify-end p-4">
        <HomeNav />
        <ProfileNav />
      </nav>
      <Username />
      <Image
        src={logo}
        alt="brand logo"
        width={400}
        height={400}
        className="gameLogo"
      />
      {/* //// Select */}
      <Select>
        <SelectTrigger aria-label="category select" className="w-[180px]">
          <SelectValue placeholder="Choose Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Teams</SelectItem>
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
      <div className="w-3/4 grid grid-cols-2">
        <div className="my-4">
          <ButtonDefault />
        </div>
        <div className="my-4">
          <Button disabled>Disabled</Button>
        </div>
        <div className="my-4">
          <ButtonSecondary />
        </div>
        <div className="my-4">
          <ButtonOutline />
        </div>
        <div className="my-4">
          <ButtonLink />
        </div>
        <div className="my-4">
          <QuitButton />
        </div>
        <div className="my-4">
          <ButtonWithIcon />
        </div>
        <div className="my-4">
          <ButtonLoading />
        </div>
        <div className="my-4">
          <ButtonAsChild />
        </div>
      </div>
    </main>
  );
}
