import React, { useState } from 'react';
import Button from './Button';
import '../Components.css';

const initialState = {
  name: '',
  email: '',
  password: '',
  interest: '',
  acceptTerms: false
};

function Form() {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleReset = () => {
    setFormData(initialState);
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { name, email, password, interest, acceptTerms } = formData;

    if (!name || !email || !password || !interest) {
      setError('All fields are required.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    if (!acceptTerms) {
      setError('You must accept the terms.');
      return;
    }

    setSuccess('Form submitted successfully!');
  };

  return (
    <form className="premium-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          className="premium-input"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Alice Johnson"
          aria-label="Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className="premium-input"
          value={formData.email}
          onChange={handleChange}
          placeholder="alice@company.com"
          aria-label="Email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="premium-input"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          aria-label="Password"
        />
      </div>

      <div className="form-group">
        <label htmlFor="interest">Interest</label>
        <select
          id="interest"
          name="interest"
          className="premium-select"
          value={formData.interest}
          onChange={handleChange}
          aria-label="Interest"
        >
          <option value="">Choose an option</option>
          <option value="coding">Software Engineering</option>
          <option value="design">UI/UX Design</option>
          <option value="gaming">Game Development</option>
        </select>
      </div>

      <label className="form-group checkbox-group">
        <input
          name="acceptTerms"
          type="checkbox"
          checked={formData.acceptTerms}
          onChange={handleChange}
          aria-label="Accept Terms"
        />
        <span>I accept the terms and conditions</span>
      </label>

      <div className="button-group" style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
        <Button label="Complete Registration" />
        <Button label="Reset" variant="secondary" type="button" onClick={handleReset} />
      </div>

      {error && <div role="alert" className="status-msg" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--error)' }}>{error}</div>}
      {success && <div role="status" className="status-msg" style={{ background: 'rgba(34, 197, 94, 0.1)', color: 'var(--success)' }}>{success}</div>}
    </form>
  );
}

export default Form;
