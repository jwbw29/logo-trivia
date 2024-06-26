"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logoTrivia-logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {" "}
      <nav className="flex justify-end p-4">{/* <ProfileNav /> */}</nav>
      <div className="flex flex-col flex-1 justify-start items-center gap-8 mb-[104px] m-12">
        <Image
          src={logo}
          alt="brand logo"
          width={400}
          height={400}
          className="rounded-full border-2 border-tertiary"
        />
        <div className="flex flex-col gap-12">
          <Select>
            <SelectTrigger aria-label="category select" className="w-80">
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
          <Button
            aria-label="start button"
            variant="default"
            size="xl"
            className="text-base tracking-[.2rem] w-full"
            asChild
          >
            <Link href="/play">START</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
