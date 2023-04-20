import { render, screen } from "@testing-library/react";
import Hero, { IHero } from "@/components/general/Hero";
import { mockIndexPageData } from "@/components/mockData/MockIndexData";

describe("Hero section", () => {
  it("conditionally pick the font size class", () => {
    render(<Hero {...mockIndexPageData.indexPage.hero} isPhoneSize={true} />);
    const text = screen.getByText(/we are a digital agency from melbourne/i);
    expect(text).toHaveClass("global__heading-h2");
  });
});
