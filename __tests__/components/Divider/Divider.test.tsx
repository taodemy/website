import { getByTestId, render, screen } from "@testing-library/react";
import Divider from "@/components/base/Divider";

describe("Divider", () => {
  beforeEach(() => {
    render(<Divider />);
  });

  it("should render Divider in success", () => {
    const divider = screen.getByTestId("divider");
    expect(divider).toBeInTheDocument();
  });
});
