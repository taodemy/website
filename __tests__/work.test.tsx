import { render, screen } from "@testing-library/react";
import Work from "@/pages/works/work";
import "@testing-library/jest-dom";

describe("Work Page", () => {
  beforeEach(() => {
    render(<Work />);
  });

  it("should render work title section in success", () => {
    const work_block__heading = screen.getByText(/work/i);
    const work_block__title_text = screen.getByRole("heading", {
      name: /our branding success stories\./i,
    });
    expect(work_block__heading).toBeInTheDocument();
    expect(work_block__title_text).toBeInTheDocument();
  });
});
