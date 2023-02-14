import { render, screen } from "@testing-library/react";
import NavbarLink from "@/components/NavbarLink";

describe("NavbarLink", () => {
    const NavbarLinkProps = {
        placeHolder: "pageName",
    };

    beforeEach(() => {
        render(<NavbarLink placeHolder={NavbarLinkProps.placeHolder} />);
    });

    it("should render navbar link list", () => {
        const placeHolder = screen.getByText("pageName");
        expect(placeHolder).toBeInTheDocument();
    });

})