import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page Components", () => {
  //// Nav renders
  it("renders Nav", () => {
    render(<Home />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  //// Logo Displays
  it("renders Game Logo", () => {
    render(<Home />);
    expect(screen.getByText("Next.js Image stub")).toBeInTheDocument();
  });

  //// Dropdown Displays
  it("renders Category Dropdown", () => {
    render(<Home />);

    const categorySelect = screen.getByLabelText("category select");
    expect(categorySelect).toBeInTheDocument();
  });

  //// Start Button Displays
  it("renders Start button", () => {
    render(<Home />);

    const startButton = screen.getByLabelText("start button");
    expect(startButton).toBeInTheDocument();
  });
});

// TODO add functionality testing
