import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WorkSinglePage from "@/pages/works/[id]";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/works/[id]",
      query: { id: "1" },
    };
  },
}));

describe("Work single page", () => {
  beforeEach(() => {
    render(<WorkSinglePage />);
  });

  it("should render a heading", () => {
    const heading = screen.getByRole("heading", { name: /dancing stars/i });
    expect(heading).toBeInTheDocument();
  });

  it("should render a intro", () => {
    const intro = screen.getByText(
      /Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, dignissimos ullam eaque excepturi sunt nemo praesentium tenetur et placeat dolores at porro rem autem similique reiciendis ipsum voluptatum possimus. Veritatis possimus voluptate harum eligendi iure accusamus dolores magnam perspiciatis quaerat/i
    );
    expect(intro).toBeInTheDocument();
  });

  it("should render our value image", () => {
    const img = screen.getByRole("img", { name: /our value/i });
    expect(img).toBeInTheDocument();
  });

  it("should render two people praying image", () => {
    const img = screen.getByRole("img", { name: /two people praying/i });
    expect(img).toBeInTheDocument();
  });

  it("should render channel image", () => {
    const img = screen.getByRole("img", { name: /channel/i });
    expect(img).toBeInTheDocument();
  });

  it("should render challenge icon", () => {
    const img = screen.getByRole("img", { name: /challenge/i });
    expect(img).toBeInTheDocument();
  });

  it("should render challenge heading", () => {
    const img = screen.getByRole("heading", { name: /challenge/i });
    expect(img).toBeInTheDocument();
  });

  it("should render solution icon", () => {
    const img = screen.getByRole("img", { name: /solution/i });
    expect(img).toBeInTheDocument();
  });

  it("should render solution icon", () => {
    const img = screen.getByRole("heading", { name: /solution/i });
    expect(img).toBeInTheDocument();
  });

  it("should render result icon", () => {
    const img = screen.getByRole("img", { name: /result/i });
    expect(img).toBeInTheDocument();
  });

  it("should render result heading", () => {
    const img = screen.getByRole("heading", { name: /result/i });
    expect(img).toBeInTheDocument();
  });

  it("should render 3 report texts", () => {
    const texts = screen.getAllByText(
      /Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur ipsam provident laborum illo dolore totam nam voluptatum error ullam, corrupti dolorum voluptas, corporis sapiente/i
    );
    expect(texts).toHaveLength(3);
  });
});
