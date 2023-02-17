import { render, screen } from "@testing-library/react";
import Button from "@/components/base/Button";

describe("Button", () => {
  beforeEach(() => {
    render(<Button>Get in touch1</Button>);
  });

  it("should render button in success", () => {
    const button = screen.getByRole("button", {
      name: /get in touch1/i,
    });
    expect(button).toHaveClass("default_button");
  });
});
