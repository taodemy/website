import { render, screen } from "@testing-library/react";
import ReportItem from "@/components/general/ReportItem";

describe("ReportItem", () => {
  const testData = {
    icons: {
      solution: "/images/logo.png",
    },
    icon: "solution",
    text: "testing text",
  };

  beforeEach(() => {
    render(<ReportItem key={1} icons={testData.icons} icon={testData.icon} text={testData.text} />);
  });

  it("renders an report item heading", () => {
    const title = screen.getByRole("heading", { name: /solution/i });
    expect(title).toBeInTheDocument();
  });

  it("renders an report item text", () => {
    const text = screen.getByText(/testing text/i);
    expect(text).toBeInTheDocument();
  });

  it("renders an report item icon", () => {
    const icon = screen.getByRole("img", { name: /solution/i });
    expect(icon).toBeInTheDocument();
  });
});
