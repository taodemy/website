import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/layouts/Footer";

describe("Header", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("should render logo image in success", () => {
    const logoImage = screen.getByRole("img", { name: "icon__fylla" });
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/images/fyllaIcon.png");
    expect(logoImage).toHaveAttribute("alt", "icon");
  });

  it("should render social media list with 3 items in success", () => {
    const imgs = screen.getAllByRole("img");
    const socialMediaImgs = imgs.slice(1);
    expect(socialMediaImgs.length).toEqual(3);
  });

  it("should render social media LN in success", () => {
    const socialMediaImg = screen.getByRole("img", { name: "badge__ln" });
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveAttribute("src", "/images/badge-ln.svg");
    expect(socialMediaImg).toHaveAttribute("alt", "badge");
  });

  it("should render social media IN in success", () => {
    const socialMediaImg = screen.getByRole("img", { name: "badge__in" });
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveAttribute("src", "/images/badge-in.svg");
    expect(socialMediaImg).toHaveAttribute("alt", "badge");
  });

  it("should render social media FB in success", () => {
    const socialMediaImg = screen.getByRole("img", { name: "badge__fb" });
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveAttribute("src", "/images/badge-fb.svg");
    expect(socialMediaImg).toHaveAttribute("alt", "badge");
  });

  it("should render footer button in success", () => {
    const socialMediaImg = screen.getByRole("button");
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveTextContent("more template");
  });
});
