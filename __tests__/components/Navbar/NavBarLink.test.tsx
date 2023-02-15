import { render, screen } from "@testing-library/react";
import NavbarLink from "@/components/general/Navbar/NavbarLink";

describe("NavbarLink", () => {
  const NavbarLinkProps = {
    linkName: "pageName",
  };

  beforeEach(() => {
    render(<NavbarLink linkName={NavbarLinkProps.linkName} />);
  });

  it("should render navbar link list", () => {
    const linkName = screen.getByText("pageName");
    expect(linkName).toBeInTheDocument();
  });
});
