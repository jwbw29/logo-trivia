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
      <div className="w-3/4 rounded-2xl p-2 bg-primary text-secondary">
        Primary Color
      </div>
      <div className="w-3/4 rounded-2xl p-2 bg-secondary text-primary">
        Secondary Color
      </div>
      <div className="w-3/4 rounded-2xl p-2 bg-tertiary text-primary">
        Tertiary Color
      </div>
      <div className="w-3/4 rounded-2xl p-2 bg-gold text-primary">Gold</div>
      {/* //// Tabs */}
      <CustomTab />
      {/* //// Buttons */}
      {/* //// Toast Button (still need this if we're forcing login instead of username submission?) */}
      {/* //// Pagination */}
      {/* //// Select */}
    </main>
  );
}
