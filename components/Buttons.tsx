import { Button } from "@/components/ui/button";
import { LuBrain } from "react-icons/lu";
import { LuLoader2 } from "react-icons/lu";
import Link from "next/link";

// rename and duplicate these as much as needed, then just import the named button to your component

//// Primary Button
export function StartButton() {
  return <Button className="min-w-36 text-lg">Start</Button>;
}

//// Secondary Button
export function ButtonSecondary() {
  return (
    <Button className="min-w-36 " variant="secondary">
      Secondary
    </Button>
  );
}

//// Outline Button
export function ButtonOutline() {
  return (
    <Button className="min-w-36 " variant="outline">
      Outline
    </Button>
  );
}

//// Link Button
export function ButtonLink() {
  return (
    <Button className="min-w-36 " variant="link">
      Link
    </Button>
  );
}

//// Ghost Button
export function ButtonGhost() {
  return (
    <Button className="min-w-36 " variant="ghost">
      Ghost
    </Button>
  );
}

//// Button with Icon
export function ButtonWithIcon() {
  return (
    <Button className="min-w-36 gap-2 " aria-label="start button">
      <LuBrain className="mr-2 h-4 w-4" />
      Start
    </Button>
  );
}

//// Loading Button
export function ButtonLoading() {
  return (
    <Button className="min-w-36 " disabled>
      <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}

//// Button as Child
export function ButtonAsChild() {
  return (
    <Button className="min-w-36 " asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
