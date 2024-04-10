import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../app/page";

describe("Home Page", () => {
  it("sanity check", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
  it("Game Logo Displays", () => {
    render(<App />);

    const logo = screen.getByAltText("game logo");
    expect(logo).toBeInTheDocument();
  });
  it("Category Dropdown displays", () => {
    render(<App />);

    // this uses the aria-label attribute to find the select element
    const categorySelect = screen.getByLabelText("category select");
    expect(categorySelect).toBeInTheDocument();
  });
  it("Start button displayed", () => {
    render(<App />);

    const startButton = screen.getByLabelText("start button");
    expect(startButton).toBeInTheDocument();
  });
});
