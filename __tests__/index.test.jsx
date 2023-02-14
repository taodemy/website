import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  //test hero section
  it("renders a hero heading with the right content", () => {
    const heading = screen.getByText("We are a digital agency from Melbourne.");
    expect(heading).toBeInTheDocument();
  });

  it("renders a hero text with the right content", () => {
    const text = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    );
    expect(text).toBeInTheDocument();
  });

  it("renders a hero photo with the right src and alt", () => {
    const heroPhoto = screen.getByRole("img", { name: "hero__photo" });
    expect(heroPhoto).toBeInTheDocument();
    expect(heroPhoto).toHaveAttribute("src", "/images/hero.png");
    expect(heroPhoto).toHaveAttribute("alt", "hero photo");
  });

  it("renders a hero icon with the right src and alt", () => {
    const heroIcon = screen.getByRole("img", { name: "hero__icon" });
    expect(heroIcon).toBeInTheDocument();
    expect(heroIcon).toHaveAttribute("src", "/images/vector.png");
    expect(heroIcon).toHaveAttribute("alt", "hero icon");
  });

  //test our values section
  it("should render our values section in success", () => {
    const ourValuesTitle = screen.getByText("OUR VALUES");
    expect(ourValuesTitle).toBeInTheDocument();
  });

  it("should render our values image in success", () => {
    const ourValuesImage = screen.getByRole("img", { name: "our_values_image" });
    expect(ourValuesImage).toBeInTheDocument();
    expect(ourValuesImage).toHaveAttribute("src", "/images/our_value.jpeg");
    expect(ourValuesImage).toHaveAttribute("alt", "our values image");
  });

  //test header section
  it("should renders logo name", () => {
    const logoName = screen.getByText("TAOTECH");
    expect(logoName).toBeInTheDocument();
  });

  it("should render logo image in success", () => {
    const logoImage = screen.getByRole("img", { name: "Website Icon" });
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/images/Icon.png");
    expect(logoImage).toHaveAttribute("alt", "Website Icon");
  });

});
