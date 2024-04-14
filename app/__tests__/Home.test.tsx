import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

//// NAV
describe("Home: Nav", () => {
  //// Nav renders
  it("renders Nav", () => {
    render(<Home />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});

//// Logo
describe("Home: Logo", () => {
  //// Logo Displays
  it("renders Brand Logo", () => {
    render(<Home />);
    expect(screen.getByText("Next.js Image stub")).toBeInTheDocument();
  });
});

//// Dropdown
describe("Home: Category Selector", () => {
  //// Dropdown Displays
  it("renders Category Dropdown", () => {
    render(<Home />);

    const categorySelect = screen.getByLabelText("category select");
    expect(categorySelect).toBeInTheDocument();
  });
});

//// Start Button
describe("Home: Start Button", () => {
  //// Start Button Displays
  it("renders Start button", () => {
    render(<Home />);

    const startButton = screen.getByLabelText("start button");
    expect(startButton).toBeInTheDocument();
  });

  //// Start Button starts game
  // it('', () => {})

  //// Start Button routes to '/game'
  // it('', () => {})
});

// TODO add functionality testing
