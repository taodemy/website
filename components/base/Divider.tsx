import styles from "@/styles/Divider.module.css";

type DividerProps = {
  style?: React.CSSProperties;
};

const Divider = ({ style }: DividerProps) => {
  return <div data-testid="divider" className={styles.divider} style={style} />;
};

export default Divider;
