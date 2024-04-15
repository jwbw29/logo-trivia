import Link from "next/link";

export default function TempNav() {
  return (
    <nav aria-label="temp nav" className="flex gap-2 mr-8 self-center">
      <Link href="/">Home</Link>
      <Link href="/game">game</Link>
      <Link href="/results">results</Link>
      <Link href="/themes">themes</Link>
    </nav>
  );
}
