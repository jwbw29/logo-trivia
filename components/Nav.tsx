import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TempNav from "./tempNav";

export default function Nav() {
  return (
    <nav className="flex justify-end p-8">
      {/* <Link href="/profile"> */}
      {/* TODO Remove TempNav everywhere */}
      <TempNav />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {/* </Link> */}
    </nav>
  );
}
