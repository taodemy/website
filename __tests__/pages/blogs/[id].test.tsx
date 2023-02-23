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

  it("should render our value image", () => {
    const img = screen.getByRole("img", { name: /BRANDING1/i });
    expect(img).toBeInTheDocument();
  });
});
