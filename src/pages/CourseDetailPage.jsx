import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, UserCircle2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const { courses, getCourseProgress, updateCourseProgress } = useAppContext();

  const course = courses.find((item) => item.id === courseId);
  const progress = getCourseProgress(courseId);

  const completionRate = progress.progress || 0;

  const nextLessonLabel = useMemo(() => {
    if (!course) return 'Course not found';
    return course.lessons[Math.min(progress.lastLesson + 1, course.lessons.length - 1)]?.title || 'Course complete';
  }, [course, progress.lastLesson]);

  if (!course) {
    return (
      <div className="page-content">
        <div className="empty-state">Course not found. Please return to the course catalog.</div>
      </div>
    );
  }

  return (
    <div className="page-content detail-page">
      <div className="course-banner card">
        <div className={`banner-visual ${course.color}`}>
          <span>{course.image}</span>
        </div>
        <div className="banner-copy">
          <div className="badge primary">{course.category}</div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="course-stats-row">
            <span>{course.level}</span>
            <span>{course.duration}</span>
            <span>{course.students.toLocaleString()} students</span>
          </div>
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          <div className="card detail-card">
            <h3>Instructor</h3>
            <div className="instructor-row">
              <UserCircle2 size={42} />
              <div>
                <strong>{course.instructor}</strong>
                <p>Senior mentor & curriculum specialist</p>
              </div>
            </div>
          </div>

          <div className="card detail-card">
            <h3>Course syllabus</h3>
            <div className="lesson-list compact">
              {course.lessons.map((lesson, index) => (
                <Link key={lesson.id} to={`/lessons/${course.id}/${index}`} className="lesson-item detail-lesson-item">
                  <div className="lesson-index">{index + 1}</div>
                  <div className="lesson-copy">
                    <strong>{lesson.title}</strong>
                    <span>{lesson.duration}</span>
                  </div>
                  <CheckCircle size={18} className={progress.completedLessons > index ? 'done' : ''} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-side">
          <div className="card panel-card">
            <div className="panel-head">
              <h3>Progress</h3>
              <span>{completionRate}%</span>
            </div>
            <div className="progress-line"><span style={{ width: `${completionRate}%` }} /></div>
            <p className="next-lesson">Next up: {nextLessonLabel}</p>
            <Link to={`/lessons/${course.id}/${Math.min(progress.lastLesson, course.lessons.length - 1)}`} className="btn primary full-width">
              Continue learning
            </Link>
            <button
              className="btn secondary full-width"
              onClick={() => updateCourseProgress(course.id, course.lessons.length - 1)}
            >
              Complete current course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
