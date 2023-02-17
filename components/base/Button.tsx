import styles from "@/styles/Button.module.css";
import { textFont } from "@/pages/_app";

type ButtonVariant = "default" | "inverted";
type ButtonProps = {
  variant?: ButtonVariant;
  buttonWidth?: number;
};

const Button = ({
  variant = "default",
  buttonWidth = 152,
  children,
  ...otherProps
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonVariants = {
    default: "default_button",
    inverted: "inverted_button",
  };
  const buttonStyle = {
    width: `${buttonWidth}px`,
  };
  return (
    <button
      style={buttonStyle}
      className={`${textFont.className} global__text-meta ${styles[buttonVariants[variant]]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
