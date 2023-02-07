import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Homepage renders properly", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders a hero heading with the right content", () => {
    const heading = screen.getByTestId("hero__slogan");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("We are a digital agency from Melbourne.");
  });

  it("renders a hero text with the right content", () => {
    const text = screen.getByTestId("hero__txt");
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    );
  });

  it("renders a hero photo with the right src and alt", () => {
    const heroPhoto = screen.getByTestId("hero__photo");
    expect(heroPhoto).toBeInTheDocument();
    expect(heroPhoto).toHaveAttribute("src", "/images/hero.png");
    expect(heroPhoto).toHaveAttribute("alt", "hero photo");
  });

  it("renders a hero icon with the right src and alt", () => {
    const heroIcon = screen.getByTestId("hero__icon");
    expect(heroIcon).toBeInTheDocument();
    expect(heroIcon).toHaveAttribute("src", "/images/vector.png");
    expect(heroIcon).toHaveAttribute("alt", "hero icon");
  });
});
