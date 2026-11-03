export default function SectionHeader({ title, subtitle, action, align = 'between' }) {
  return (
    <div className={`section-header ${align}`}>
      <div>
        <p className="eyebrow">Overview</p>
        <h2>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {action && <div className="header-action">{action}</div>}
    </div>
  );
}
