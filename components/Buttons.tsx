import { Button } from "@/components/ui/button";
import { LuBrain } from "react-icons/lu";
import { LuLoader2 } from "react-icons/lu";
import Link from "next/link";

// rename and duplicate these as much as needed, then just import the named button to your component

//// Primary Button
export function StartButton() {
  return (
    <Button aria-label="start button" className="min-w-36 text-lg">
      Start
    </Button>
  );
}

//// Secondary Button
export function ButtonSecondary() {
  return (
    <Button
      aria-label="secondary button"
      className="min-w-36 "
      variant="secondary"
    >
      Secondary
    </Button>
  );
}

//// Outline Button
export function ButtonOutline() {
  return (
    <Button aria-label="outline button" className="min-w-36 " variant="outline">
      Outline
    </Button>
  );
}

//// Link Button
export function ButtonLink() {
  return (
    <Button aria-label="link button" className="min-w-36 " variant="link">
      Link
    </Button>
  );
}

//// Ghost Button
export function ButtonGhost() {
  return (
    <Button aria-label="ghost button" className="min-w-36 " variant="ghost">
      Ghost
    </Button>
  );
}

//// Button with Icon
export function ButtonWithIcon() {
  return (
    <Button aria-label="icon button" className="min-w-36 gap-2 ">
      <LuBrain className="mr-2 h-4 w-4" />
      Start
    </Button>
  );
}

//// Loading Button
export function ButtonLoading() {
  return (
    <Button aria-label="loading button" className="min-w-36 " disabled>
      <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}

//// Button as Child
export function ButtonAsChild() {
  return (
    <Button aria-label="button as child" className="min-w-36 " asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
