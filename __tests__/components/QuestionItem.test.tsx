import { render, screen, fireEvent } from "@testing-library/react";
import QuestionItem from "@/components/general/QuestionItem";

describe("QuestionItem", () => {
  const test1 = {
    isExpanded: true,
    question: "test1",
    answer: "test1 answer",
  };
  const test2 = {
    isExpanded: false,
    question: "test2",
    answer: "test2 answer",
  };

  it("should render question item's expand part in success", () => {
    render(
      <QuestionItem isExpanded={test1.isExpanded} question={test1.question} answer={test1.answer} />
    );
    const text = screen.getByText("test1 answer");
    expect(text).toBeInTheDocument();
  });

  it("should folder question item's expand part in success", () => {
    render(
      <QuestionItem isExpanded={test2.isExpanded} question={test2.question} answer={test2.answer} />
    );
    expect(screen.queryByText("test2 answer")).not.toBeInTheDocument();
  });

  it("should folder question item's expand part when click button in success", () => {
    render(
      <QuestionItem isExpanded={test1.isExpanded} question={test1.question} answer={test1.answer} />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.queryByText("test1 answer")).not.toBeInTheDocument();
  });
});
