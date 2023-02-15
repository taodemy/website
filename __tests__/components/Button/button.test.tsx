import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
  const ButtonProps1 = {
    width: "175px",
    height: "35px",
    isBlack: true,
    placeHolder: "Test Button Black",
  };
  const ButtonProps2 = {
    width: "175px",
    height: "35px",
    isBlack: false,
    placeHolder: "Test Button White",
  };

  beforeEach(() => {
    render(
      <div>
        <Button
          buttonHeight={ButtonProps1.height}
          buttonWidth={ButtonProps1.width}
          isBlack={ButtonProps1.isBlack}
          placeHolder={ButtonProps1.placeHolder}
        />
        <Button
          buttonHeight={ButtonProps2.height}
          buttonWidth={ButtonProps2.width}
          isBlack={ButtonProps2.isBlack}
          placeHolder={ButtonProps2.placeHolder}
        />
      </div>
    );
  });

  it("should render black button in success", () => {
    const button = screen.getByText("Test Button Black");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background: #000000`);
    expect(button).toHaveStyle(`color: #FFFFFF`);
  });

  it("should render white button in success", () => {
    const button = screen.getByText("Test Button Black");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background: #000000`);
    expect(button).toHaveStyle(`color: #FFFFFF`);
  });
});
