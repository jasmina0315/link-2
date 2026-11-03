import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import LessonList from '../components/lessons/LessonList';
import LessonPlayer from '../components/lessons/LessonPlayer';
import { useAppContext } from '../context/AppContext';

export default function LessonsPage() {
  const { courseId, lessonIndex } = useParams();
  const { courses, updateCourseProgress, getCourseProgress } = useAppContext();
  const course = courses.find((item) => item.id === courseId);

  const parsedLessonIndex = Number(lessonIndex || 0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(Number.isNaN(parsedLessonIndex) ? 0 : parsedLessonIndex);

  const progress = useMemo(() => getCourseProgress(courseId), [courseId, getCourseProgress]);

  useEffect(() => {
    setCurrentLessonIndex(Number.isNaN(parsedLessonIndex) ? 0 : parsedLessonIndex);
  }, [parsedLessonIndex]);

  if (!course) {
    return <div className="empty-state">Lesson course not found.</div>;
  }

  const lesson = course.lessons[currentLessonIndex] || course.lessons[0];
  const completedIndexes = progress.completedLessons ? Array.from({ length: progress.completedLessons }, (_, i) => i) : [];

  const goToLesson = (index) => {
    const safeIndex = Math.max(0, Math.min(index, course.lessons.length - 1));
    setCurrentLessonIndex(safeIndex);
  };

  const handleNext = () => {
    goToLesson(currentLessonIndex + 1);
  };

  const handlePrev = () => {
    goToLesson(currentLessonIndex - 1);
  };

  const handleMarkComplete = () => {
    updateCourseProgress(course.id, currentLessonIndex);
  };

  return (
    <div className="page-content lesson-page">
      <div className="lesson-layout">
        <LessonPlayer
          lesson={lesson}
          onPrev={handlePrev}
          onNext={handleNext}
          onComplete={handleMarkComplete}
          completed={completedIndexes.includes(currentLessonIndex)}
        />
        <LessonList
          lessons={course.lessons}
          activeLesson={currentLessonIndex}
          onSelect={goToLesson}
          completedIndexes={completedIndexes}
        />
      </div>
    </div>
  );
}
