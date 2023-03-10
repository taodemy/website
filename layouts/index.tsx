import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page__wrapper">
      <section>
        <Header />
      </section>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
