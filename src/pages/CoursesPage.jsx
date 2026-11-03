import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import CourseCard from '../components/courses/CourseCard';
import CourseFilterBar from '../components/courses/CourseFilterBar';
import { useAppContext } from '../context/AppContext';

export default function CoursesPage() {
  const { courses, courseProgress } = useAppContext();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(courses.map((course) => course.category))];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || course.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [courses, search, category]);

  return (
    <div className="page-content">
      <SectionHeader
        title="Explore courses"
        subtitle="Find programs that match your goals and learning pace"
        action={<Link to="/" className="link-btn">Back to home</Link>}
      />

      <CourseFilterBar
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        categories={categories.filter((item) => item !== 'All')}
      />

      {filteredCourses.length === 0 ? (
        <div className="empty-state">No courses match your search. Try another keyword or category.</div>
      ) : (
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              progress={courseProgress[course.id]?.progress || 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}
