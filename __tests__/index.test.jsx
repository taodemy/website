import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Featured Work section renders went wrong", () => {
  beforeEach(() => {
    render(<Home />);
  });
  it("renders the component of featured work section failed", () => {
    const FeaturedWorkSection = screen.getByRole("main");
    expect(FeaturedWorkSection).toBeInTheDocument();
  });
});
