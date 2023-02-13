import styles from "@/styles/Button.module.css";
import { textFont } from "@/pages/_app";

const Button = ({ text }: { text: string }) => {
  return (
    <>
      <button className={`${textFont.className} global__text-meta ${styles.default_button} `}>
        {text}
      </button>
    </>
  );
};

export default Button;
