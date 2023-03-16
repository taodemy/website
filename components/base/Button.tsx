import styles from "@/styles/Button.module.css";
import { fontRobotoMono } from "@/pages/_app";

type ButtonVariant = "primary" | "secondary";
type ButtonPadding = "normal" | "small";
type ButtonProps = {
  variant?: ButtonVariant;
  isBlock?: boolean;
  padding?: ButtonPadding;
};

const Button = ({
  variant = "primary",
  isBlock = false,
  padding = "normal",
  children,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonBlockStyle = isBlock ? "button-blocked" : "button-unblocked";

  const buttonVariants = {
    primary: "primary_button",
    secondary: "secondary_button",
  };

  const ButtonPadding = {
    normal: "common_button",
    small: "small_button",
  };

  return (
    <button
      className={`${styles.common_button} ${styles[buttonBlockStyle]} ${
        fontRobotoMono.className
      } global__text-meta ${styles[buttonVariants[variant]]} ${styles[ButtonPadding[padding]]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
