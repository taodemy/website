import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
