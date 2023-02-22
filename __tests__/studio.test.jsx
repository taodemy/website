import Studio from "../pages/studio";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Studio Page", () => {
  beforeEach(() => {
    render(<Studio />);
  });
});
