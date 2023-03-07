import { render, screen } from "@testing-library/react";
import NavBar from "@/components/general/Navbar/FirstPageNavbar";

describe("NavBar", () => {
  const NavProps = {
    openNav: false,
    handleNavBar: jest.fn(),
  };

  it("should not render nav when openNav is false", () => {
    render(<NavBar openNav={NavProps.openNav} handleNavBar={NavProps.handleNavBar} />);
    const responsiveNav = screen.getByRole("navigation", { hidden: true });
    const navIcon = screen.getByTestId("nav-icon");
    expect(navIcon).toBeVisible();
    expect(responsiveNav).toHaveStyle({ "background-color": "none" });
  });

  it("should render nav when openNav is true", () => {
    render(<NavBar openNav={!NavProps.openNav} handleNavBar={NavProps.handleNavBar} />);
    const responsiveNav = screen.getByRole("navigation", { hidden: true });
    const navIcon = screen.getByTestId("nav-icon");
    expect(navIcon).toBeVisible();
    expect(responsiveNav).toHaveStyle({ "background-color": "var(--default-background)" });
  });
});
