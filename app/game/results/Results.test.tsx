import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Results from "@/app/game/results/page";

describe("Results: Message & Score", () => {
  // Message renders
  it("Message renders", () => {
    render(<Results />);
    const message = screen.getByLabelText("result message");
    expect(message).toBeInTheDocument();
  });

  // Score renders
  it("Score renders", () => {
    render(<Results />);
    const score = screen.getByLabelText("result score");
    expect(score).toBeInTheDocument();
  });
});

//// Home Icon
describe("Results: Home Icon", () => {
  // renders
  it("Home icon renders", () => {
    render(<Results />);

    const homeIcon = screen.getByLabelText("home icon");
    expect(homeIcon).toBeInTheDocument();
  });

  // // routes to home on click
  // it("Routes to home on click", () => {
  //   render(<Results />);
  //   expect(false).toBe(true);
  // });
});

//// Login component
describe("Results: Login Component if not logged in", () => {
  // renders if user not logged in
  it("Log in to submit score message renders", () => {
    render(<Results />);

    const login = screen.getByLabelText("login component");
    expect(login).toBeInTheDocument();
  });

  // // logs user in on Login click
  // it("Logs user in on Login click", () => {
  //   render(<Results />);
  //   expect(false).toBe(true);
  // });
});

//// Leaderboard component
// describe("Results: Leaderboard Component if logged in", () => {
//   // renders if user logged in
//   it("Leaderboard renders if user logged in", () => {
//     render(<Results />);

//     const leaderboard = screen.getByLabelText("leaderboard");
//     expect(leaderboard).toBeInTheDocument();
//   });
// });
