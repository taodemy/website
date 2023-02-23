import { render, screen } from "@testing-library/react";
import Blog from "../pages/blog";
import "@testing-library/jest-dom";

describe("Blog", () => {
  beforeEach(() => {
    render(<Blog />);
  });

  it("should render subscription section title in success", () => {
    const subscriptionTitle = screen.getByRole("heading", {
      name: /get the latest news into your inbox/i,
    });
    expect(subscriptionTitle).toBeInTheDocument();
  });

  it("should render icon in subscription section success", () => {
    const subscriptionIcon = screen.getByRole("img", {
      name: /get the latest news into your inboxicon/i,
    });
    expect(subscriptionIcon).toBeInTheDocument();
    expect(subscriptionIcon).toHaveAttribute("src", "/images/star.svg");
  });

  it("should render subscription content text in success", () => {
    const subscriptionContent = screen.getByText(
      "Design your own brand, one click at a time. --Subscribe to our newsletter to get the most up-to-date information."
    );
    expect(subscriptionContent).toBeInTheDocument();
  });

  it("should render input in subscription section in success", () => {
    const subscriptionInput = screen.getByRole("textbox");
    expect(subscriptionInput).toBeInTheDocument();
    expect(subscriptionInput).toHaveAttribute("type", "email");
    expect(subscriptionInput).toHaveAttribute("value", "YOUR EMAIL");
  });

  it("should render button in subscription section in success", () => {
    const subscriptionButton = screen.getByRole("button", { name: /sign up/i });
    expect(subscriptionButton).toBeInTheDocument();
  });
});
