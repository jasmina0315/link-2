import { useState } from 'react';
import { Camera, PencilLine, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ProfilePage() {
  const { profile, setProfile, accountStats } = useAppContext();
  const [form, setForm] = useState(profile);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProfile(form);
  };

  return (
    <div className="page-content">
      <div className="profile-header card">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar">{profile.avatar}</div>
          <button className="avatar-button"><Camera size={16} /></button>
        </div>

        <div className="profile-summary">
          <p className="eyebrow">Profile</p>
          <h1>{profile.fullName}</h1>
          <p>{profile.role} • {profile.grade}</p>
        </div>
      </div>

      <div className="profile-grid">
        <form className="card profile-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h3>Edit profile</h3>
            <span className="badge green"><ShieldCheck size={14} /> Verified</span>
          </div>

          <div className="form-grid">
            <label>
              <span>Full name</span>
              <input name="fullName" value={form.fullName} onChange={handleChange} required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              <span>Grade</span>
              <input name="grade" value={form.grade} onChange={handleChange} required />
            </label>
            <label>
              <span>Role</span>
              <input name="role" value={form.role} onChange={handleChange} required />
            </label>
          </div>

          <label>
            <span>Bio</span>
            <textarea name="bio" value={form.bio} onChange={handleChange} rows={4} />
          </label>

          <button className="btn primary" type="submit">
            <PencilLine size={16} />
            Save changes
          </button>
        </form>

        <div className="card stats-panel">
          <h3>Student statistics</h3>
          <div className="mini-stats">
            <div>
              <strong>{accountStats.enrolledCourses}</strong>
              <span>Courses</span>
            </div>
            <div>
              <strong>{accountStats.lessonsCompleted}</strong>
              <span>Lessons</span>
            </div>
            <div>
              <strong>{accountStats.totalXp}</strong>
              <span>XP</span>
            </div>
            <div>
              <strong>{profile.streak}</strong>
              <span>Streak</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
