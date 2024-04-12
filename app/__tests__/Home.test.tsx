import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  //// Nav renders
  it("Nav renders", () => {
    render(<Home />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
  //// Logo Displays
  it("Game Logo Displays", () => {
    render(<Home />);

    const logo = screen.getByAltText("game logo");
    expect(logo).toBeInTheDocument();
  });

  //// Dropdown Displays
  it("Category Dropdown displays", () => {
    render(<Home />);

    // this uses the aria-label attribute to find the select element
    const categorySelect = screen.getByLabelText("category select");
    expect(categorySelect).toBeInTheDocument();
  });

  //// Start Button Displays
  it("Start button displayed", () => {
    render(<Home />);

    const startButton = screen.getByLabelText("start button");
    expect(startButton).toBeInTheDocument();
  });
});
