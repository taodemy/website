import styles from "@/styles/Button.module.css";
import { textFont } from "@/pages/_app";

const Button = ({ children, ...otherProps }: { children: any }) => {
  return (
    <>
      <button
        className={`${textFont.className} global__text-meta ${styles.default_button} `}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
