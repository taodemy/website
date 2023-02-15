import Styles from "@/styles/Footer.module.css";

interface Item {
  content: string;
}

const FooterNaviLink = ({ content }: Item) => {
  return (
    <li>
      <a className={Styles["footer____main__link__a"]} href="">
        {content}
      </a>
    </li>
  );
};

export default FooterNaviLink;
