import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { courses, userProfile, leaderboard, accountStats } from '../data/mockData';

const AppContext = createContext(null);

const STORAGE_KEYS = {
  profile: 'eduspark-profile',
  progress: 'eduspark-course-progress',
  completedLessons: 'eduspark-completed-lessons',
  quizResults: 'eduspark-quiz-results',
};

const defaultProgress = Object.fromEntries(courses.map((course) => [course.id, { completedLessons: 0, lastLesson: 0, progress: 0 }]));

export function AppProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.profile);
    return saved ? JSON.parse(saved) : userProfile;
  });

  const [courseProgress, setCourseProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.progress);
    return saved ? JSON.parse(saved) : defaultProgress;
  });

  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.completedLessons);
    return saved ? JSON.parse(saved) : {};
  });

  const [quizResults, setQuizResults] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.quizResults);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(courseProgress));
  }, [courseProgress]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.completedLessons, JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.quizResults, JSON.stringify(quizResults));
  }, [quizResults]);

  const updateCourseProgress = (courseId, lessonIndex) => {
    setCourseProgress((prev) => {
      const course = courses.find((item) => item.id === courseId);
      const totalLessons = course ? course.lessons.length : 0;
      const current = prev[courseId] || { completedLessons: 0, lastLesson: 0, progress: 0 };
      const nextCompleted = Math.max(current.completedLessons, lessonIndex + 1);
      const progress = Math.round((nextCompleted / totalLessons) * 100);

      return {
        ...prev,
        [courseId]: {
          completedLessons: nextCompleted,
          lastLesson: lessonIndex,
          progress,
        },
      };
    });

    setCompletedLessons((prev) => ({
      ...prev,
      [courseId]: [...new Set([...(prev[courseId] || []), lessonIndex])],
    }));
  };

  const getCourseProgress = (courseId) => {
    return courseProgress[courseId] || { completedLessons: 0, lastLesson: 0, progress: 0 };
  };

  const saveQuizResult = (quizId, score, total) => {
    setQuizResults((prev) => [{ id: quizId, score, total, date: new Date().toISOString() }, ...prev].slice(0, 10));
  };

  const value = useMemo(
    () => ({
      profile,
      setProfile,
      courseProgress,
      updateCourseProgress,
      getCourseProgress,
      completedLessons,
      quizResults,
      saveQuizResult,
      leaderboard,
      accountStats,
      courses,
    }),
    [profile, courseProgress, completedLessons, quizResults]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
