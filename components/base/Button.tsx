import styles from "@/styles/Button.module.css";
import { textFont } from "@/pages/_app";

type ButtonVariant = "default" | "inverted";
type ButtonBlockVariants = "unblocked" | "blocked";
type ButtonProps = {
  variant?: ButtonVariant;
  blockVariant?: ButtonBlockVariants;
};

const Button = ({
  variant = "default",
  blockVariant = "unblocked",
  children,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonBlockVariants = {
    unblocked: "button-unblocked",
    blocked: "button-blocked",
  };

  const buttonVariants = {
    default: "default_button",
    inverted: "inverted_button",
  };

  return (
    <button
      className={`${styles[buttonBlockVariants[blockVariant]]} ${styles.common_button} ${
        textFont.className
      } global__text-meta ${styles[buttonVariants[variant]]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
