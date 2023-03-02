import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Blog from "@/pages/blogs/[id]";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/blogs/[id]",
      query: { id: "1" },
    };
  },
}));

describe("Blog single page", () => {
  beforeEach(() => {
    render(<Blog />);
  });

  it("should render title", () => {
    const heading = screen.getByRole("heading", { name: /Branding Alternatives/i });
    expect(heading).toBeInTheDocument();
  });

  it("should render subtitle", () => {
    const subtitle = screen.getByText(/Branding is the process of creating a distinct identity/i);
    expect(subtitle).toBeInTheDocument();
  });

  it("should render our value image", () => {
    const img = screen.getByRole("img", { name: /Branding Alternatives/i });
    expect(img).toBeInTheDocument();
  });

  it("should render the button in single blog title section in success.", () => {
    const GoBackButton = screen.getByRole("button", { name: /GO BACK/i });
    expect(GoBackButton).toBeInTheDocument();
  });

  it("should render infoItem", () => {
    const infoItem = screen.getByText(/READING TIME/i);
    expect(infoItem).toBeInTheDocument();
  });

  it("should render author", () => {
    const author = screen.getByText(/author/i);
    expect(author).toBeInTheDocument();
  });

  it("should render Divider in success", () => {
    const divider = screen.getAllByTestId("divider");
    expect(divider[0]).toBeInTheDocument();
    expect(divider[1]).toBeInTheDocument();
  });

  it("should render social media LN in success", () => {
    const socialMediaImg = screen.getByRole("img", { name: "badge__ln" });
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveAttribute("src", "/images/badge-ln.svg");
    expect(socialMediaImg).toHaveAttribute("alt", "badge");
  });

  it("should render social media IN in success", () => {
    const socialMediaImg = screen.getByRole("img", { name: "badge__in" });
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveAttribute("src", "/images/badge-in.svg");
    expect(socialMediaImg).toHaveAttribute("alt", "badge");
  });

  it("should render social media FB in success", () => {
    const socialMediaImg = screen.getByRole("img", { name: "badge__fb" });
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveAttribute("src", "/images/badge-fb.svg");
    expect(socialMediaImg).toHaveAttribute("alt", "badge");
  });
});
