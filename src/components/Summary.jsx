import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../Questions";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnsPercentage = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnsPercentage = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  return (
    <div id="summary">
      <img src={QuizCompleteImg} alt="quiz completed image" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span>{skippedAnsPercentage}%</span>
          <span>Skipped</span>
        </p>
        <p>
          <span>{correctAnsPercentage}%</span>
          <span>answered correctly</span>
        </p>
        <p>
          <span>{100 - skippedAnsPercentage - correctAnsPercentage}</span>
          <span>answered wrongly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += "skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
