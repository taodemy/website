import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../layouts/Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render logo image success", () => {
    const logo = screen.getAllByRole("img", { name: "Website Icon" });
    expect(logo).toBeInTheDocument();
  });

  it("should render navbar", () => {
    const button = screen.getAllByRole("button");
    expect(button).toBeInTheDocument();
  });
});
