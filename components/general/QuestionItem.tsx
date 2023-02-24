import styles from "@/styles/QuestionItem.module.css";
import { fontSyne } from "@/pages/_app";
interface QuestionItemProps {
  question: string;
}

const QuestionItem = ({ question }: QuestionItemProps) => {
  return (
    <div className={styles.question_card}>
      <h2 className={`global__heading-h3 ${fontSyne.className}`}>{question}</h2>
      <button className={styles.question__button}>+</button>
    </div>
  );
};
export default QuestionItem;
