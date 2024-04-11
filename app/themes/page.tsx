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
  ButtonWithIcon,
  StartButton,
  ButtonLoading,
  ButtonAsChild,
} from "@/components/Buttons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast, toast } from "@/components/ui/use-toast";
import { CustomTab } from "@/components/customTab";

export default function Themes() {
  return (
    <main className="flex flex-col min-h-screen items-center gap-4">
      <Image src={logo} alt="game logo" width={400} className="gameLogo" />
      <div className="w-3/4 rounded-2xl p-2 bg-background text-foreground border border-foreground">
        Background / Foreground
      </div>
      <div className="w-3/4 rounded-2xl p-2 bg-primary text-secondary">
        Primary Color
      </div>
      <div className="w-3/4 rounded-2xl p-2 bg-secondary text-primary">
        Secondary Color
      </div>
      <div className="w-3/4 rounded-2xl p-2 bg-tertiary text-tertiary-foreground">
        Tertiary Color
      </div>
      {/* //// Tabs */}
      <CustomTab />
      {/* //// Buttons */}
      <div className="grid w-full  grid-cols-3 grid-rows-3 gap-4">
        {/* <button className="">Test</button>
        <button className="">Test</button>
        <button className="">Test</button>
        <button className="">Test</button>
        <button className="">Test</button>
        <button className="">Test</button>
        <button className="">Test</button>
        <button className="">Test</button>
        <button className="">Test</button> */}
        <ButtonDemo />
        <ButtonSecondary />
        <ButtonOutline />
        <ButtonLink />
        <ButtonGhost />
        <ButtonWithIcon />
        <StartButton />
        <ButtonLoading />
        <ButtonAsChild />
      </div>
      {/* //// Toast Button (still need this if we're forcing login instead of username submission?) */}
      {/* //// Pagination */}
      {/* //// Select */}
      <Select>
        <SelectTrigger aria-label="category select" className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </main>
  );
}
