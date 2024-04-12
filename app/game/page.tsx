import { QuitButton } from "../../components/Buttons";
import Image from "next/image";
import mizzou from "@/public/mockData/mizzouLogo.png";
import { Button } from "@/components/ui/button";

export default function Game() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex justify-end p-2 pt-4">
        <QuitButton />{" "}
      </div>
      <div className="flex justify-between text-3xl font-oxanium p-10">
        <div className="border border-border rounded-sm py-4 px-6">0 / 0</div>
        <div className="border border-border rounded-sm py-4 px-6">:30</div>
      </div>
      <div className="flex flex-col items-center justify-between flex-1 mt-8 pt-4 gap-12 md:justify-start md:my-16 md:gap-36">
        <div className="p-8 mt-8">
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
      </div>
    </main>
  );
}
