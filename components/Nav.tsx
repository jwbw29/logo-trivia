import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuUser2, LuHome } from "react-icons/lu";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-end p-8">
      {/* <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
      <div className="flex flex-col gap-1">
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
      </div>
    </nav>
  );
}
