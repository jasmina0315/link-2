import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course, progress = 0 }) {
  return (
    <article className="card course-card">
      <div className={`course-visual ${course.color}`}>
        <span>{course.image}</span>
      </div>

      <div className="course-card-body">
        <div className="course-meta-row">
          <span className="badge primary">{course.category}</span>
          <span className="rating">
            <Star size={14} fill="currentColor" /> {course.rating}
          </span>
        </div>

        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-details">
          <span>{course.duration}</span>
          <span>{course.level}</span>
          <span>{course.students.toLocaleString()} students</span>
        </div>

        <div className="course-progress-row">
          <div className="progress-line">
            <span style={{ width: `${Math.min(progress, 100)}%` }} />
          </div>
          <strong>{progress}%</strong>
        </div>

        <div className="course-footer">
          <div>
            <div className="label-small">Instructor</div>
            <strong>{course.instructor}</strong>
          </div>
          <Link to={`/courses/${course.id}`} className="btn primary small-btn">
            View course
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
