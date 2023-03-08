import { render, screen } from "@testing-library/react";
import NavBar from "@/components/general/Navbar/Navbar";

describe("NavBar", () => {
  const NavProps = {
    isOpen: false,
    handleNavBarOpen: jest.fn(),
  };

  it("should not render nav when openNav is false", () => {
    render(<NavBar isOpen={NavProps.isOpen} handleNavBarOpen={NavProps.handleNavBarOpen} />);
    const responsiveNav = screen.getByRole("navigation", { hidden: true });
    const navIcon = screen.getByTestId("nav-icon");
    expect(navIcon).toBeVisible();
    expect(responsiveNav).toHaveStyle({ "background-color": "none" });
  });

  it("should render nav when openNav is true", () => {
    render(<NavBar isOpen={!NavProps.isOpen} handleNavBarOpen={NavProps.handleNavBarOpen} />);
    const responsiveNav = screen.getByRole("navigation", { hidden: true });
    const navIcon = screen.getByTestId("nav-icon");
    expect(navIcon).toBeVisible();
    expect(responsiveNav).toHaveStyle({ "background-color": "var(--default-background)" });
  });
});
