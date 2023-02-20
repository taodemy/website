import styles from "@/styles/Button.module.css";
import { fontRobotoMono } from "@/pages/_app";

type ButtonVariant = "primary" | "secondary";
type ButtonProps = {
  variant?: ButtonVariant;
  isBlock?: boolean;
};

const Button = ({
  variant = "primary",
  isBlock = false,
  children,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonBlockStyle = isBlock ? "button-blocked" : "button-unblocked";

  const buttonVariants = {
    primary: "primary_button",
    secondary: "secondary_button",
  };

  return (
    <button
      className={`${styles.common_button} ${styles[buttonBlockStyle]} ${
        fontRobotoMono.className
      } global__text-meta ${styles[buttonVariants[variant]]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
