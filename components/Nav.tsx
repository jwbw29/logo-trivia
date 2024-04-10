import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Nav() {
  return (
    <nav>
      {" "}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      ;
    </nav>
  );
}
