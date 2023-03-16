import styles from "@/styles/FAQ.module.css";
import QuestionItem from "./QuestionItem";

const FAQ = () => {
  const QuestionList = [
    {
      id: 1,
      question: "Integer vitae justo eget magna?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.",
    },
    {
      id: 2,
      question: "Dolor magna eget est lorem ipsum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.",
    },
    {
      id: 3,
      question: "Ac tincidunt vitae semper quis lectus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.",
    },
    {
      id: 4,
      question: "Sagittis orci a scelerisque?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.",
    },
  ];
  return (
    <div className={styles.questions__container}>
      {QuestionList.map((questionItem) => (
        <QuestionItem
          key={questionItem.id}
          isExpanded={questionItem.id === 1 ? true : false}
          question={questionItem.question}
          answer={questionItem.answer}
        />
      ))}
    </div>
  );
};
export default FAQ;
