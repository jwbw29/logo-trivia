import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Profile from "@/app/profile/page";

//// NAV
describe("Home: Nav", () => {
  //// Nav renders
  it("renders Nav", () => {
    render(<Profile />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});

//// Proper Renderings
describe("Profile: Proper Renderings", () => {
  // Login renders if not signed in
  it("renders Login component: NOT SIGNED IN", () => {
    render(<Profile />);
    expect(screen.getByLabelText("login component")).toBeInTheDocument();
  });

  // User info renders if signed in
  it("renders Username heading: SIGNED IN", () => {
    render(<Profile />);
    expect(screen.getByLabelText("username heading")).toBeInTheDocument();
  });

  it("renders Username value: SIGNED IN", () => {
    render(<Profile />);
    expect(screen.getByLabelText("username value")).toBeInTheDocument();
  });
});

//// Logout Button
describe("Profile: Logout Button", () => {
  // renders
  it("renders Logout button", () => {
    render(<Profile />);
    expect(screen.getByLabelText("logout button")).toBeInTheDocument();
  });

  //   // logs out
  //   it('', () => {})

  //   // Login component renders upon logout
  //   it('', () => {})
});
