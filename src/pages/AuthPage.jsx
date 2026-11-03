import { useState } from 'react';
import { ArrowRight, LockKeyhole, UserPlus } from 'lucide-react';

export default function AuthPage() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};

    if (mode === 'register' && form.name.trim().length < 3) {
      nextErrors.name = 'Name must be at least 3 characters';
    }

    if (!form.email.includes('@')) {
      nextErrors.email = 'Please enter a valid email';
    }

    if (form.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    alert(mode === 'login' ? 'Login successful! Demo mode enabled.' : 'Account created successfully! Demo mode enabled.');
  };

  return (
    <div className="page-content auth-page">
      <div className="auth-grid">
        <div className="auth-visual card">
          <div className="auth-badge">Interactive learning</div>
          <h1>Grow faster with EduSpark</h1>
          <p>Track progress, climb rankings, and build real confidence with every lesson.</p>
          <ul>
            <li>Personalized roadmap</li>
            <li>Smart quizzes and assessments</li>
            <li>Expert-designed lessons</li>
          </ul>
        </div>

        <div className="card auth-form-card">
          <div className="auth-toggle">
            <button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>
              <LockKeyhole size={16} /> Login
            </button>
            <button className={mode === 'register' ? 'active' : ''} onClick={() => setMode('register')}>
              <UserPlus size={16} /> Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === 'register' && (
              <label>
                <span>Full name</span>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                {errors.name && <small>{errors.name}</small>}
              </label>
            )}

            <label>
              <span>Email</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              {errors.email && <small>{errors.email}</small>}
            </label>

            <label>
              <span>Password</span>
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="********" />
              {errors.password && <small>{errors.password}</small>}
            </label>

            <button type="submit" className="btn primary full-width">
              {mode === 'login' ? 'Log in' : 'Create account'}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
