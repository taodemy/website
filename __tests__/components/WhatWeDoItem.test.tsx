import { render, screen } from "@testing-library/react";
import WhatWeDoItem from "@/components/general/WhatWeDoItem";

describe("WhatWeDoItem", () => {
  const testData = {
    id: 1,
    title: "BRANDING",
    content: "This is a what we do item testing.",
    icon: "/images/branding_icon.png",
    alt: "Branding icon",
  };

  beforeEach(() => {
    render(
      <WhatWeDoItem
        key={testData.id}
        title={testData.title}
        content={testData.content}
        icon={testData.icon}
        alt={testData.alt}
      />
    );
  });

  it("renders an item title", () => {
    const title = screen.getByRole("heading", { name: "BRANDING" });
    expect(title).toBeInTheDocument();
  });

  it("renders an item content", () => {
    const content = screen.getByText("This is a what we do item testing.");
    expect(content).toBeInTheDocument();
  });

  it("renders an item icon with right src and alt", () => {
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/images/branding_icon.png");
    expect(img).toHaveAttribute("alt", "Branding icon");
  });
});
