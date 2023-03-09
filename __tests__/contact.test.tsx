import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../pages/contact";
import "@testing-library/jest-dom";

describe("Contact", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("it should render send message button in success", () => {
    const button = screen.getByText("send message");
    expect(button).toBeInTheDocument();
  });

  it("it should hide username label when username text field is not empty", () => {
    const input = screen.getByLabelText("Your Name");
    const event = {
      target: { value: "test" },
    } as React.ChangeEvent<HTMLInputElement>;
    fireEvent.change(input, event);
    const label = screen.getByText("Your Name");
    expect(label).toHaveStyle("visibility: hidden");
  });

  it("it should render username label when username text field is empty", () => {
    const input = screen.getByLabelText("Your Name");
    const event = {
      target: { value: "test" },
    } as React.ChangeEvent<HTMLInputElement>;
    fireEvent.change(input, event);
    const event2 = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    fireEvent.change(input, event2);
    const label = screen.getByText("Your Name");
    expect(label).toHaveStyle("visibility: visible");
  });

  it("it should hide email label when email text field is not empty", () => {
    const input = screen.getByLabelText("Your Email");
    const event = {
      target: { value: "test" },
    } as React.ChangeEvent<HTMLInputElement>;
    fireEvent.change(input, event);
    const event2 = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    fireEvent.change(input, event2);
    const label = screen.getByText("Your Email");
    expect(label).toHaveStyle("visibility: visible");
  });

  it("it should render email label when email text field is empty", () => {
    const input = screen.getByLabelText("Your Email");
    const event = {
      target: { value: "test" },
    } as React.ChangeEvent<HTMLInputElement>;
    fireEvent.change(input, event);
    const label = screen.getByText("Your Email");
    expect(label).toHaveStyle("visibility: hidden");
  });

  it("it should render message label when message text field is empty", () => {
    const input = screen.getByLabelText("Your Message");
    const event = {
      target: { value: "test" },
    } as React.ChangeEvent<HTMLInputElement>;
    fireEvent.change(input, event);
    const label = screen.getByText("Your Message");
    expect(label).toHaveStyle("visibility: hidden");
  });

  it("it should hide message label when message text field is not empty", () => {
    const input = screen.getByLabelText("Your Message");
    const event = {
      target: { value: "test" },
    } as React.ChangeEvent<HTMLInputElement>;
    fireEvent.change(input, event);
    const event2 = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    fireEvent.change(input, event2);
    const label = screen.getByText("Your Message");
    expect(label).toHaveStyle("visibility: visible");
  });

  it("should render social media list with 3 items on contact section in success", () => {
    const imgs = screen.getAllByRole("img");
    const socialMediaImgs = imgs.slice(0, 3);
    expect(socialMediaImgs[0]).toHaveAttribute("src", "/images/badge-ln.svg");
    expect(socialMediaImgs[0]).toHaveAttribute("alt", "badge");
    expect(socialMediaImgs[1]).toHaveAttribute("src", "/images/badge-in.svg");
    expect(socialMediaImgs[1]).toHaveAttribute("alt", "badge");
    expect(socialMediaImgs[2]).toHaveAttribute("src", "/images/badge-fb.svg");
    expect(socialMediaImgs[2]).toHaveAttribute("alt", "badge");
  });
});
