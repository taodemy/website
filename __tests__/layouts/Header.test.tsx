import "@testing-library/jest-dom";
import { getByTestId, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "../../layouts/Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render arrow image in success", () => {
    const arrowImage = screen.getByRole("img", { name: "Page Arrow" });
    expect(arrowImage).toBeInTheDocument();
    expect(arrowImage).toHaveAttribute("src", "/images/arrow.png");
    expect(arrowImage).toHaveAttribute("alt", "Page Arrow");
  });

  it("should renders logo name", () => {
    const logoName = screen.getByText("TAOTECH");
    expect(logoName).toBeInTheDocument();
  });

  it("should render logo image in success", () => {
    const logoImage = screen.getByRole("img", { name: "Website Icon" });
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/images/logo.png");
    expect(logoImage).toHaveAttribute("alt", "Website Icon");
  });

  it("should not render nav when showNav is false", async () => {
    const responsiveNav = screen.getByRole("navigation", { hidden: true });
    const navIcon = screen.getByTestId("nav-icon");
    const bar2 = screen.getByTestId("nav-bar2");

    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 720,
    });
    expect(navIcon).toBeVisible();
    user.click(navIcon);
    expect(responsiveNav).toHaveStyle({ "background-color": "var(--default-background)" });
    expect(responsiveNav).toHaveStyle({ position: "fixed" });
  });
});
