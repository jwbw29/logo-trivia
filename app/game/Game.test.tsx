import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Game from "@/app/game/page";

//// Score Tracker
describe("Game: Score Tracker", () => {
  // renders
  it("score tracker renders", () => {
    render(<Game />);

    const scoreTracker = screen.getByLabelText("score tracker");
    expect(scoreTracker).toBeInTheDocument();
  });
});

//// Timer
describe("Game: Timer", () => {
  // renders
  it("timer renders", () => {
    render(<Game />);

    const timer = screen.getByLabelText("timer");
    expect(timer).toBeInTheDocument();
  });

  // timer counts down
  // it("timer counts down", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });
});

//// Settings
describe("Game: Settings", () => {
  // renders
  it("settings icon renders", () => {
    render(<Game />);

    const settings = screen.getByLabelText("settings");
    expect(settings).toBeInTheDocument();
  });

  // // settings dialog opens
  // it("settings dialog opens", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });

  // // settings dialog closes
  // it("settings dialog closes", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });

  //   // timer pauses when opened
  //   it("timer pauses when opened", () => {
  //     render(<Game />);
  //     expect(false).toBe(true);
  //   });

  //   // timer resumes when closed
  //   it("timer resumes when closed", () => {
  //     render(<Game />);
  //     expect(false).toBe(true);
  //   });
});

//// Team Logo
describe("Game: Team Logo", () => {
  // renders
  it("team logo renders", () => {
    render(<Game />);

    expect(screen.getByText("Next.js Image stub")).toBeInTheDocument();
  });
});

//// Answer Buttons
describe("Game: Answer Buttons Render", () => {
  // Answer 1 renders
  it("answer 1 renders", () => {
    render(<Game />);

    const choice1 = screen.getByLabelText("choice one");
    expect(choice1).toBeInTheDocument();
  });

  // Answer 2 renders
  it("answer 2 renders", () => {
    render(<Game />);

    const choice2 = screen.getByLabelText("choice two");
    expect(choice2).toBeInTheDocument();
  });

  // Answer 3 renders
  it("answer 3 renders", () => {
    render(<Game />);

    const choice3 = screen.getByLabelText("choice three");
    expect(choice3).toBeInTheDocument();
  });

  // Answer 4 renders
  it("answer 4 renders", () => {
    render(<Game />);

    const choice4 = screen.getByLabelText("choice four");
    expect(choice4).toBeInTheDocument();
  });
});

//// Answer Selected
describe("Game: Answer Selected", () => {
  // // active answer changes to primary button
  // it("active answer changes to primary button", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });
  // // submit button is enabled
  // it("submit button is enabled", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });
});

//// Submit Button
describe("Game: Submit Button", () => {
  // renders disabled if no answer selected
  it("renders disabled if no answer selected", () => {
    render(<Game />);

    const disabledSubmit = screen.getByLabelText("disabled submit");
    expect(disabledSubmit).toBeInTheDocument();
  });

  // // enabled if answer selected
  // it("renders enabled if answer selected", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });

  // // on submit, if correct, answer flashes green before loading next question
  // it("on submit, if correct, answer flashes green before loading next question", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });

  // // on submit, if incorrect, answer flashes red before loading next question
  // it("on submit, if incorrect, answer flashes red before loading next question", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });

  // // on submit, score increments if correct
  // it("on submit, score increments if correct", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });

  // // on submit, attempts increment
  // it("on submit, attempts increment", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });

  // // on submit, next question and answers load
  // it("on submit, next question and answers load", () => {
  //   render(<Game />);
  //   expect(false).toBe(true);
  // });
});
