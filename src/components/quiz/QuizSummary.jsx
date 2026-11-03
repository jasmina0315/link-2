import { Trophy } from 'lucide-react';

export default function QuizSummary({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="card quiz-summary">
      <Trophy size={32} className="summary-icon" />
      <h3>Quiz finished!</h3>
      <p>
        You scored <strong>{score}</strong> out of <strong>{total}</strong>
      </p>
      <div className="score-pill">{percentage}%</div>
      <button className="btn primary" onClick={onRestart}>Try again</button>
    </div>
  );
}
