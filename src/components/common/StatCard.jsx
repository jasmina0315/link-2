import { ArrowUpRight } from 'lucide-react';

export default function StatCard({ label, value, tone = 'primary' }) {
  return (
    <div className="card stat-card">
      <div className={`badge ${tone}`}>{label}</div>
      <h3>{value}</h3>
      <div className="stat-foot">
        <span>vs previous</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}
