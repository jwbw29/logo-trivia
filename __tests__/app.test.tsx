import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../app/page";

describe("Home Page", () => {
  //// Nav renders
  it("Nav renders", () => {
    render(<App />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
  //// Logo Displays
  it("Game Logo Displays", () => {
    render(<App />);

    const logo = screen.getByAltText("game logo");
    expect(logo).toBeInTheDocument();
  });

  //// Dropdown Displays
  it("Category Dropdown displays", () => {
    render(<App />);

    // this uses the aria-label attribute to find the select element
    const categorySelect = screen.getByLabelText("category select");
    expect(categorySelect).toBeInTheDocument();
  });

  //// Start Button Displays
  it("Start button displayed", () => {
    render(<App />);

    const startButton = screen.getByLabelText("start button");
    expect(startButton).toBeInTheDocument();
  });
});
