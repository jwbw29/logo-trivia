import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Nav() {
  return (
    <nav className="flex justify-end p-8">
      {/* <Link href="/profile"> */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {/* </Link> */}
    </nav>
  );
}
