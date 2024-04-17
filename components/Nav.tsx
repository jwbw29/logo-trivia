import { LuUser2, LuHome } from "react-icons/lu";
import { Button } from "./ui/button";
import Link from "next/link";
import { LuSettings } from "react-icons/lu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function HomeNav() {
  return (
    <nav className="flex justify-end p-8">
      <Button
        aria-label="home icon"
        variant="ghost"
        size="icon"
        className="text-2xl"
        asChild
      >
        <Link href="/">
          <LuHome />
        </Link>
      </Button>
    </nav>
  );
}

export function ProfileNav() {
  return (
    <nav className="flex justify-end px-8 pb-8 mt-[-2rem]">
      <Button
        aria-label="profile icon"
        variant="ghost"
        size="icon"
        className="text-2xl"
        asChild
      >
        <Link href="/profile">
          <LuUser2 />
        </Link>
      </Button>
    </nav>
  );
}

export function ExitGame() {
  return (
    <nav aria-label="settings" className="flex justify-end p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <LuSettings className="text-2xl" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-left text-2xl">
              Exit and abandon score?
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-row justify-end gap-4">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Nevermind
              </Button>
            </DialogClose>
            <Link href="/">
              <Button type="button" variant="default">
                Yes, please
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
