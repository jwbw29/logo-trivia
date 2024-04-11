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
import { CustomTab } from "@/components/customTab";

export default function Themes() {
  return (
    <main className="flex flex-col min-h-screen items-center gap-4">
      <Image src={logo} alt="game logo" width={400} className="gameLogo" />
      <div className="w-3/4 rounded-2xl p-2 bg-slate-500 ">
        <span className="text-background">Background</span>{" "}
        <span className="text-foreground">Foreground</span>
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
