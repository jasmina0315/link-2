import { CheckCircle2, XCircle } from 'lucide-react';

export default function QuizCard({ quiz, currentIndex, answerState, onSelectAnswer, onSubmit }) {
  const question = quiz.questions[currentIndex];

  if (!question) return null;

  return (
    <div className="card quiz-card">
      <div className="quiz-card-header">
        <div>
          <p className="eyebrow">Question {currentIndex + 1}</p>
          <h3>{quiz.title}</h3>
        </div>
        <span className="badge primary">{quiz.questions.length} questions</span>
      </div>

      <h4>{question.prompt}</h4>

      <div className="quiz-options">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctIndex;
          const selected = answerState[currentIndex] === index;

          return (
            <button
              key={option}
              className={`quiz-option ${selected ? 'selected' : ''} ${
                answerState[currentIndex] !== undefined && isCorrect ? 'correct' : ''
              } ${
                answerState[currentIndex] !== undefined && selected && !isCorrect ? 'wrong' : ''
              }`}
              onClick={() => onSelectAnswer(currentIndex, index)}
              disabled={answerState[currentIndex] !== undefined}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              <span>{option}</span>
              {answerState[currentIndex] !== undefined && isCorrect && <CheckCircle2 size={18} />}
              {answerState[currentIndex] !== undefined && selected && !isCorrect && <XCircle size={18} />}
            </button>
          );
        })}
      </div>

      <div className="quiz-footer">
        <button className="btn primary" onClick={onSubmit}>
          Submit answer
        </button>
      </div>
    </div>
  );
}
