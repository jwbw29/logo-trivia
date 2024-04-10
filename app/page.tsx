import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StartButton } from "@/components/Buttons";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2">
      <Nav />
      <Image src="/logo.png" alt="game logo" width={200} height={200} />
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
      <StartButton></StartButton>
    </main>
  );
}
