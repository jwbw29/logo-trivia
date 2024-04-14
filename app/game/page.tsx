import Image from "next/image";
import Link from "next/link";
import mizzou from "@/public/mockData/mizzouLogo.png";
import { Button } from "@/components/ui/button";
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

export default function Game() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex justify-end p-2 pt-4">
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
      </div>
      <div className="flex justify-between text-3xl font-oxanium p-10">
        <div className="border border-border rounded-sm py-4 px-6">0 / 0</div>
        <div className="border border-border rounded-sm py-4 px-6">:30</div>
      </div>
      <div className="flex flex-col items-center justify-between pt-4 gap-12 ">
        <div className="">
          <Image src={mizzou} alt="question logo" width={500} height={500} />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 w-full gap-8 px-2 mb-8">
          <Button variant="outline" size="xxl" className="text-lg">
            Answer 1
          </Button>
          <Button variant="outline" size="xxl" className="text-lg">
            Answer 2
          </Button>
          <Button variant="outline" size="xxl" className="text-lg">
            Answer 3
          </Button>
          <Button variant="outline" size="xxl" className="text-lg">
            Answer 4
          </Button>
        </div>
        {/*//* TODO If any answer button is active, show the default submit button, else show the disabled button */}
        <Button disabled size="xl" className="w-full md:w-1/2">
          Submit
        </Button>
      </div>
    </main>
  );
}
