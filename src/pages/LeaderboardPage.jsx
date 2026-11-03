import { Crown, Medal, TrendingUp } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { leaderboard } from '../data/mockData';

export default function LeaderboardPage() {
  return (
    <div className="page-content">
      <SectionHeader title="Leaderboard" subtitle="See how you rank among your peers this week" />

      <div className="card leaderboard-card">
        <div className="leaderboard-header">
          <div className="leaderboard-rank">#</div>
          <div className="leaderboard-name">Student</div>
          <div className="leaderboard-points">Points</div>
          <div className="leaderboard-streak">Streak</div>
        </div>

        {leaderboard.map((student, index) => (
          <div key={student.id} className="leaderboard-row">
            <div className="leaderboard-rank">
              {index === 0 ? <Crown size={18} /> : index + 1}
            </div>
            <div className="leaderboard-name">
              <div className="avatar mini">{student.name.slice(0, 2).toUpperCase()}</div>
              <span>{student.name}</span>
            </div>
            <div className="leaderboard-points">{student.points}</div>
            <div className="leaderboard-streak">
              <TrendingUp size={16} /> {student.streak}d
            </div>
          </div>
        ))}
      </div>

      <div className="top-students">
        <div className="card podium-card">
          <Medal size={20} />
          <h3>Top performer</h3>
          <p>{leaderboard[0].name}</p>
        </div>
        <div className="card podium-card">
          <Medal size={20} />
          <h3>Best streak</h3>
          <p>{leaderboard[0].streak} days</p>
        </div>
      </div>
    </div>
  );
}
