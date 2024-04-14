import { Button } from "@/components/ui/button";
import { LuBrain } from "react-icons/lu";
import { LuLoader2 } from "react-icons/lu";
import { LuArrowBigLeft } from "react-icons/lu";

import Link from "next/link";

// rename and duplicate these as much as needed, then just import the named button to your component

//// Start Button
export function ButtonDefault() {
  return <Button variant="default">Default</Button>;
}

//// Secondary Button
export function ButtonSecondary() {
  return (
    <Button aria-label="secondary button" variant="secondary">
      Secondary
    </Button>
  );
}

//// Outline Button
export function ButtonOutline() {
  return (
    <Button aria-label="outline button" variant="outline">
      Outline
    </Button>
  );
}

//// Link Button
export function ButtonLink() {
  return (
    <Button aria-label="link button" variant="link">
      Link
    </Button>
  );
}

//// Quit Button
export function QuitButton() {
  return (
    <Button
      aria-label="quit button"
      className="min-w-36 gap-2 p-4"
      variant="ghost"
    >
      <LuArrowBigLeft className="text-2xl" /> <p>Quit</p>
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
    <Button aria-label="loading button" disabled>
      <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}

//// Button as Child
export function ButtonAsChild() {
  return (
    <Button aria-label="button as child" asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
