import { ReactNode } from "react";
import footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div>This is body</div>
      <footer />
    </>
  );
};
export default Layout;
