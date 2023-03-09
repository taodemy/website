import { render, screen, fireEvent } from "@testing-library/react";
import SocialMedia from "@/components/general/SocialMedia/SocialMedia";
import "@testing-library/jest-dom";

describe("SocialMedia", () => {
  it("should render social media list with default input parameter in success", () => {
    render(<SocialMedia />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("standard");
  });

  it("it should render social media in correct sequence", () => {
    render(<SocialMedia isReverse={false} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("standard");
  });

  it("it should render social media in reverse direction", () => {
    render(<SocialMedia isReverse={true} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("reverse");
  });

  it("should render social media list with 3 items on contact section in success", () => {
    render(<SocialMedia />);
    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toEqual(3);
    expect(imgs[0]).toHaveAttribute("src", "/images/badge-ln.svg");
    expect(imgs[0]).toHaveAttribute("alt", "badge");
    expect(imgs[1]).toHaveAttribute("src", "/images/badge-in.svg");
    expect(imgs[1]).toHaveAttribute("alt", "badge");
    expect(imgs[2]).toHaveAttribute("src", "/images/badge-fb.svg");
    expect(imgs[2]).toHaveAttribute("alt", "badge");
  });
});
