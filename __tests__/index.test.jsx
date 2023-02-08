import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render our values section in success", () => {
    render(<Home />);
    const ourValuesTitle = screen.getByText("OUR VALUES");
    expect(ourValuesTitle).toBeInTheDocument();
  });
});
