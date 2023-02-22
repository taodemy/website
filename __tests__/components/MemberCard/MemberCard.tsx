import { render, screen } from "@testing-library/react";
import MemberCard from "@/components/base/MemberCard";

describe("Card", () => {
  const props = {
    title: "Card1",
    subtitle: "string",
    image: "/images/number_one_icon.svg",
    direction: "column",
  };
  beforeEach(() => {
    render(
      <MemberCard
        title={props.title}
        subtitle={props.subtitle}
        image={props.image}
        direction={props.direction}
      />
    );
  });
});
