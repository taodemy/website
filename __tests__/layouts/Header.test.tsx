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
});
