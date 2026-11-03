import { useMemo, useState } from 'react';
import { quizBank } from '../data/mockData';
import QuizCard from '../components/quiz/QuizCard';
import QuizSummary from '../components/quiz/QuizSummary';
import { useAppContext } from '../context/AppContext';

export default function QuizPage() {
  const { saveQuizResult } = useAppContext();
  const [quizIndex, setQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const quiz = quizBank[quizIndex];

  const currentQuestion = quiz?.questions[currentQuestionIndex];

  const totalScore = useMemo(() => {
    if (!quiz) return 0;
    return quiz.questions.length;
  }, [quiz]);

  const handleSelectAnswer = (questionIndex, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleSubmit = () => {
    if (!currentQuestion || answers[currentQuestionIndex] === undefined) {
      return;
    }

    const isCorrect = answers[currentQuestionIndex] === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      return;
    }

    const finalScore = score + (isCorrect ? 1 : 0);
    saveQuizResult(quiz.id, finalScore, totalScore);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  if (!quiz) {
    return <div className="empty-state">No quiz available right now.</div>;
  }

  if (submitted) {
    return <QuizSummary score={score} total={totalScore} onRestart={handleRestart} />;
  }

  return (
    <div className="page-content quiz-page">
      <div className="section-header">
        <div>
          <p className="eyebrow">Assessment</p>
          <h1>{quiz.title}</h1>
        </div>
        <button className="btn ghost" onClick={() => setQuizIndex((prev) => (prev + 1) % quizBank.length)}>
          Switch quiz
        </button>
      </div>

      <p className="quiz-description">{quiz.description}</p>

      <QuizCard
        quiz={quiz}
        currentIndex={currentQuestionIndex}
        answerState={answers}
        onSelectAnswer={handleSelectAnswer}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
