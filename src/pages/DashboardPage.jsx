import { BookOpenCheck, Flame, Target, TrendingUp } from 'lucide-react';
import StatCard from '../components/common/StatCard';
import SectionHeader from '../components/common/SectionHeader';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const { courses, courseProgress, accountStats, profile } = useAppContext();

  const activeCourses = courses.slice(0, 3).map((course) => ({
    ...course,
    progress: courseProgress[course.id]?.progress || 0,
  }));

  const totalProgress = Math.round(
    (Object.values(courseProgress).reduce((sum, item) => sum + (item.progress || 0), 0) /
      Math.max(Object.keys(courseProgress).length, 1)) || 0
  );

  return (
    <div className="page-content dashboard-page">
      <section className="hero-panel card">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h1>Hello, {profile.fullName.split(' ')[0]} 👋</h1>
          <p className="hero-copy">
            Stay focused today and continue building your knowledge with structured lessons and challenges.
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="btn primary">Explore courses</Link>
            <Link to="/quiz" className="btn secondary">Take quiz</Link>
          </div>
        </div>

        <div className="hero-chart card">
          <span className="mini-title">Learning streak</span>
          <div className="hero-score">{profile.streak} days</div>
          <div className="chart-bars" aria-label="streak graph">
            {[42, 55, 48, 62, 74, 70, 90].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard label="Courses" value={accountStats.enrolledCourses} tone="primary" />
        <StatCard label="Lessons" value={accountStats.lessonsCompleted} tone="orange" />
        <StatCard label="Weekly goal" value={`${accountStats.weeklyGoal}%`} tone="green" />
      </section>

      <section className="dashboard-grid">
        <div className="main-column">
          <SectionHeader title="Continue learning" subtitle="Your in-progress lessons and active tracks" action={<Link to="/courses" className="link-btn">See all</Link>} />
          <div className="stack-list">
            {activeCourses.map((course) => (
              <div key={course.id} className="card progress-card">
                <div className="course-strip">
                  <div className={`mini-icon ${course.color}`}>{course.image}</div>
                  <div>
                    <h3>{course.title}</h3>
                    <p>{course.instructor}</p>
                  </div>
                </div>

                <div className="progress-block">
                  <div className="progress-line">
                    <span style={{ width: `${course.progress}%` }} />
                  </div>
                  <strong>{course.progress}%</strong>
                </div>

                <Link to={`/courses/${course.id}`} className="text-link">Resume lesson</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="side-column">
          <SectionHeader title="Daily goal" />
          <div className="card goal-card">
            <div className="goal-row">
              <div className="icon-bubble purple"><Target size={18} /></div>
              <div>
                <strong>Finish 2 lessons</strong>
                <p>Keep your learning streak alive.</p>
              </div>
            </div>
            <div className="goal-progress">
              <div className="progress-line"><span style={{ width: '72%' }} /></div>
              <span>72%</span>
            </div>
          </div>

          <div className="card insight-card">
            <div className="insight-head">
              <div className="icon-bubble orange"><TrendingUp size={18} /></div>
              <span>Performance</span>
            </div>
            <h3>{totalProgress}%</h3>
            <p>Overall course completion rate</p>
          </div>

          <div className="card insight-card">
            <div className="insight-head">
              <div className="icon-bubble blue"><Flame size={18} /></div>
              <span>Motivation</span>
            </div>
            <h3>{profile.streak} Days</h3>
            <p>Current daily streak</p>
          </div>

          <div className="card insight-card">
            <div className="insight-head">
              <div className="icon-bubble green"><BookOpenCheck size={18} /></div>
              <span>XP</span>
            </div>
            <h3>{accountStats.totalXp}</h3>
            <p>Total learning points</p>
          </div>
        </div>
      </section>
    </div>
  );
}
