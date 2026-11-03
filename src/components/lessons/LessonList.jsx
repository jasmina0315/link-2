import { CheckCircle2, PlayCircle } from 'lucide-react';

export default function LessonList({ lessons, activeLesson, onSelect, completedIndexes = [] }) {
  return (
    <div className="lesson-list card">
      <h3>Course lessons</h3>
      <div className="lesson-items">
        {lessons.map((lesson, index) => {
          const isActive = index === activeLesson;
          const isDone = completedIndexes.includes(index);

          return (
            <button
              key={lesson.id}
              className={`lesson-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelect(index)}
            >
              <div className="lesson-index">{index + 1}</div>
              <div className="lesson-copy">
                <strong>{lesson.title}</strong>
                <span>{lesson.duration}</span>
              </div>

              {isDone ? (
                <CheckCircle2 className="lesson-status done" size={18} />
              ) : (
                <PlayCircle className="lesson-status" size={18} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
