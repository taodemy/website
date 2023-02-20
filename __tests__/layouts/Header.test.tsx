import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
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
});
