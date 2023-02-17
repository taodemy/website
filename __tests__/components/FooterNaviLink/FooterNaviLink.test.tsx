import { render, screen } from "@testing-library/react";
import FooterNaviLink from "@/components/general/FooterNaviLink";

describe("FooterNaviLink", () => {
  const Item = {
    id: 1,
    content: "HOME",
  };

  beforeEach(() => {
    render(<FooterNaviLink content={Item.content} />);
  });

  it("should render content in success", () => {
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });
});
