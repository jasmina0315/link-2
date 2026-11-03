import { CheckCircle, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function LessonPlayer({ lesson, onPrev, onNext, onComplete, completed }) {
  return (
    <div className="card lesson-player-wrap">
      <div className="lesson-video">
        <div className="lesson-video-overlay">
          <Play size={42} />
        </div>
        <div className="video-label">Video lesson</div>
      </div>

      <div className="lesson-player-body">
        <div className="lesson-player-top">
          <div>
            <p className="eyebrow">Lesson</p>
            <h2>{lesson.title}</h2>
          </div>
          {completed ? <span className="badge green">Completed</span> : <span className="badge orange">In Progress</span>}
        </div>

        <p className="lesson-summary">{lesson.summary}</p>

        <div className="lesson-content-box">
          <p>{lesson.content}</p>
        </div>

        <div className="lesson-actions">
          <button className="btn ghost" onClick={onPrev}>
            <ChevronLeft size={16} />
            Previous
          </button>
          <button className="btn primary" onClick={onComplete}>
            <CheckCircle size={16} />
            {completed ? 'Marked complete' : 'Mark as complete'}
          </button>
          <button className="btn secondary" onClick={onNext}>
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
