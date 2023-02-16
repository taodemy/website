import styles from "@/styles/Button.module.css";
import { textFont } from "@/pages/_app";

type ButtonVariant = "primary" | "secondary" | "inverted";
type ButtonProps = {
  variant?: ButtonVariant;
};

const Button = ({
  variant = "primary",
  children,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonVariants = {
    primary: "primary_button",
    secondary: "secondary_button",
    inverted: "inverted_button",
  };
  return (
    <button
      className={`${textFont.className} global__text-meta ${styles[buttonVariants[variant]]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
