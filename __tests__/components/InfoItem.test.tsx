import { render, screen } from "@testing-library/react";
import InfoItem from "@/components/general/InfoItem";

describe("InfoItem", () => {
  const testData = {
    title: "testing heading",
    text: "testing text",
  };

  beforeEach(() => {
    render(<InfoItem key={1} title={testData.title} text={testData.text} />);
  });

  it("renders an Info item title", () => {
    const title = screen.getByRole("heading", { name: /testing heading/i });
    expect(title).toBeInTheDocument();
  });

  it("renders an Info item text", () => {
    const text = screen.getByText(/testing text/i);
    expect(text).toBeInTheDocument();
  });
});
