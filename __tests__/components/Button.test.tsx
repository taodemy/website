import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button", () => {
    const NavbarLinkProps = {
        buttonName: "ButtonTest",
    };

    beforeEach(() => {
        render(<Button buttonName={NavbarLinkProps.buttonName} />);
    });

    it("should render navbar link list", () => {
        const button = screen.getByText("ButtonTest");
        expect(button).toBeInTheDocument();
    });

})