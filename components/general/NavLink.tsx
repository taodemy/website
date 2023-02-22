import Styles from "@/styles/Footer.module.css";

interface Item {
  content: string;
}

const NavLink = ({ content }: Item) => {
  return (
    <li>
      <a className={Styles.footer_main_link__a} href="">
        {content}
      </a>
    </li>
  );
};

export default NavLink;
