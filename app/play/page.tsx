import Image from "next/image";
import mizzou from "@/public/mockData/mizzouLogo.png";
import { Button } from "@/components/ui/button";
import { ExitGame } from "@/components/Nav";

export default function Game() {
  return (
    <main className="flex flex-col min-h-screen">
      <ExitGame />
      <div className="flex justify-between text-3xl font-oxanium p-10">
        <div
          aria-label="score tracker"
          className="border border-border rounded-sm py-4 px-6"
        >
          0 / 0
        </div>
        <div
          aria-label="timer"
          className="border border-border rounded-sm py-4 px-6"
        >
          :30
        </div>
      </div>
      <div
        aria-label="game play"
        className="flex flex-col items-center justify-between pt-4 gap-12 "
      >
        <div aria-label="question logo" className="">
          <Image src={mizzou} alt="question logo" width={500} height={500} />
        </div>
        <div aria-label="answers and submission" className="flex flex-col">
          <div
            aria-label="answer choices"
            className="grid grid-cols-2 grid-rows-2 w-full gap-8 px-2 mb-8"
          >
            <Button
              aria-label="choice one"
              variant="outline"
              size="xxl"
              className="text-lg"
            >
              Answer 1
            </Button>
            <Button
              aria-label="choice two"
              variant="outline"
              size="xxl"
              className="text-lg"
            >
              Answer 2
            </Button>
            <Button
              aria-label="choice three"
              variant="outline"
              size="xxl"
              className="text-lg"
            >
              Answer 3
            </Button>
            <Button
              aria-label="choice four"
              variant="outline"
              size="xxl"
              className="text-lg"
            >
              Answer 4
            </Button>
          </div>
          {/*//* TODO If any answer button is active, show the default submit button, else show the disabled button */}
          <Button
            aria-label="disabled submit"
            disabled
            size="lg"
            className="text-base tracking-[.2rem] w-full md:w-1/2"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </main>
  );
}
