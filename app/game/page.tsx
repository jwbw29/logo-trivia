import { QuitButton } from "../../components/Buttons";

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
      <div className="">
        <div>Team Logo</div>
      </div>
      <div className="">
        <div>Answer 1</div>
        <div>Answer 2</div>
        <div>Answer 3</div>
        <div>Answer 4</div>
      </div>
    </main>
  );
}
