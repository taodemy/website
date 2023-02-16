import { render, screen } from "@testing-library/react";
import Card from "@/components/base/Card";

describe("CardList", () => {
  const cardProps = {
    id: 1,
    image: "/images/two_people_praying.png",
    cornerMakerLeft: "Branding, Design",
    title: "Things to Look for When Comparing Branding Alternatives",
  };

  beforeEach(() => {
    render(
      <Card
        image={cardProps.image}
        cornerMakerLeft={cardProps.cornerMakerLeft}
        title={cardProps.title}
      />
    );
  });

  it("should render the card title in success", () => {
    const title = screen.getByText("Things to Look for When Comparing Branding Alternatives");
    expect(title).toBeInTheDocument();
  });

  it("should render the card left corner mark in success", () => {
    const cornerMakerLeft = screen.getByText("Branding, Design");
    expect(cornerMakerLeft).toBeInTheDocument();
  });
});
