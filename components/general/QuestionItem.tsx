import styles from "@/styles/QuestionItem.module.css";
import { fontSyne, fontSatoshi } from "@/pages/_app";
import { useState } from "react";
interface QuestionItemProps {
  isExpanded: boolean;
  question: string;
  answer: string;
}

const QuestionItem = ({ isExpanded, question, answer }: QuestionItemProps) => {
  const [isExpand, setIsExpand] = useState(isExpanded);
  const handleClick = () => {
    setIsExpand(!isExpand);
  };
  return (
    <div className={styles.faq}>
      <div className={styles.question_card}>
        <h2 className={`global__heading-h3 ${fontSyne.className}`}>{question}</h2>
        <button onClick={handleClick} className={styles.question__button}>
          {!isExpand ? "+" : "-"}
        </button>
      </div>
      {isExpand && (
        <p className={`${fontSatoshi.className} global__text-default ${styles.question__text}`}>
          {answer}
        </p>
      )}
    </div>
  );
};
export default QuestionItem;
