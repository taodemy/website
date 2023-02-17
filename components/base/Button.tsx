import styles from "@/styles/Button.module.css";
import { fontRobotoMono } from "@/pages/_app";

type ButtonVariant = "default" | "inverted";
type ButtonProps = {
  variant?: ButtonVariant;
};

const Button = ({
  variant = "default",
  children,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonVariants = {
    default: "default_button",
    inverted: "inverted_button",
  };
  return (
    <button
      className={`${fontRobotoMono.className} global__text-meta ${styles[buttonVariants[variant]]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
