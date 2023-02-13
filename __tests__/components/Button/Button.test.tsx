import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
  beforeEach(() => {
    render(<Button text="Get in touch" />);
  });

  it("should render button in success", () => {
    const button = screen.getByRole("button", {
      name: /get in touch/i,
    });
    expect(button).toHaveClass("default_button");
  });
});