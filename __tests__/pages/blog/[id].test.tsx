import "@testing-library/jest-dom";
import { render, RenderResult, screen } from "@testing-library/react";
import Blog from "@/pages/blog/[id]";
import { mockBlogPageData } from "@/components/mockData/MockBlogData";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/blogs/[id]",
      query: {
        id: "1",
      },
    };
  },
}));

describe("Blog single page", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<Blog blogsData={mockBlogPageData.BlogPage.BlogsData} />);
  });

  it("should render title", () => {
    const heading = screen.getByRole("heading", { name: /Branding Alternatives/i });
    expect(heading).toBeInTheDocument();
  });

  it("should render subtitle", () => {
    const subtitle = screen.getByText(/The Battle for the Future of the Universe/i);
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
    const socialMediaImg = screen.getByRole("img", { name: "First social media" });
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveAttribute("src", "/images/badge-ln.svg");
    expect(socialMediaImg).toHaveAttribute("alt", "badge");
  });

  it("should render social media IN in success", () => {
    const socialMediaImg = screen.getByRole("img", { name: "Second social media" });
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveAttribute("src", "/images/badge-in.svg");
    expect(socialMediaImg).toHaveAttribute("alt", "badge");
  });

  it("should render social media FB in success", () => {
    const socialMediaImg = screen.getByRole("img", { name: "Third social media" });
    expect(socialMediaImg).toBeInTheDocument();
    expect(socialMediaImg).toHaveAttribute("src", "/images/badge-fb.svg");
    expect(socialMediaImg).toHaveAttribute("alt", "badge");
  });
  it("should render the right font when match is true", () => {
    // dismount the component.
    component.unmount();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    component = render(<Blog blogsData={mockBlogPageData.BlogPage.BlogsData} />);
    const heading = screen.getByRole("heading", { name: /Branding Alternatives/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("global__heading-h2");
  });

  it("should render the right font when match is false", () => {
    // dismount the component.
    component.unmount();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    component = render(<Blog blogsData={mockBlogPageData.BlogPage.BlogsData} />);
    const heading = screen.getByRole("heading", { name: /Branding Alternatives/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("global__heading--medium");
  });
});
