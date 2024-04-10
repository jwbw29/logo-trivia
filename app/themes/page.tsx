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
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast, toast } from "@/components/ui/use-toast";

export default function Themes() {
  return (
    <main className="flex flex-col min-h-screen items-center gap-4">
      <Image src={logo} width={400} alt="game logo" className="gameLogo" />
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
    </main>
  );
}
