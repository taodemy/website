import { render, screen } from "@testing-library/react";
import MemberCard from "@/components/base/MemberCard";

describe("Card", () => {
  const props = {
    title: "Card Title",
    subtitle: "Card Subtitle",
    image: "/images/number_one_icon.svg",
  };
  beforeEach(() => {
    render(<MemberCard title={props.title} subtitle={props.subtitle} image={props.image} />);
  });

  it("should render title in success", () => {
    const title = screen.getByRole("heading", { name: /Card Title/i });
    expect(title).toBeInTheDocument();
  });

  it("should render subtitle in success", () => {
    const subtitle = screen.getByText("Card Subtitle");
    expect(subtitle).toBeInTheDocument();
  });

  it("should render image in success", () => {
    const image = screen.getByRole("img", { name: /Card Title/i });
    expect(image).toBeInTheDocument();
  });
});
