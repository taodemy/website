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
});
