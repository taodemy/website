import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../../layouts/Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render arrow image in success", () => {
    const ourValuesImage = screen.getByRole("img", { name: "Page Arrow" });
    expect(ourValuesImage).toBeInTheDocument();
    expect(ourValuesImage).toHaveAttribute("src", "/images/arrow.png");
    expect(ourValuesImage).toHaveAttribute("alt", "Page Arrow");
  });

});
