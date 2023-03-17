import { render, screen } from "@testing-library/react";
import Hero from "@/components/general/Hero";

describe("Hero section", () => {
  it("conditionally pick the font size class", () => {
    render(<Hero isPhoneSize={true} />);
    const text = screen.getByText(/we are a digital agency from melbourne/i);
    expect(text).toHaveClass("global__heading-h2");
  });
});
