'use client';

import { useState } from 'react';

export default function RegisterInterestForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setError('');

    const form = new FormData(e.currentTarget);

    const payload = {
      participantName: form.get('participantName')?.toString().trim(),
      participantAge: form.get('participantAge')?.toString().trim(),
      parentGuardian: form.get('parentGuardian')?.toString().trim(),
      phone: form.get('phone')?.toString().trim(),
      email: form.get('email')?.toString().trim(),
      programInterest: form.get('programInterest')?.toString(),
      availability: form.get('availability')?.toString().trim(),
      website: form.get('website')?.toString().trim(), // honeypot
    };

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');

      setStatus('ok');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="spacer-top">
      <div className="form-grid">
        <input className="input" name="participantName" placeholder="Participant name" required />
        <input className="input" name="participantAge" placeholder="Participant age" type="number" />
        <input className="input" name="parentGuardian" placeholder="Parent / Guardian name (if minor)" />
        <input className="input" name="phone" placeholder="Phone number" />
        <input className="input" name="email" placeholder="Email address" type="email" required />

        <select className="input" name="programInterest" defaultValue="" required>
          <option value="" disabled>Select a program</option>
          <option value="XSPA">XSPA (Speed, Performance & Agility)</option>
          <option value="XPT">XPT (Personal Training)</option>
          <option value="XGX">XGX (Group Exercise)</option>
          <option value="Other">Other</option>
        </select>

        {/* Honeypot */}
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          style={{ position: 'absolute', left: '-9999px' }}
          aria-hidden="true"
        />
      </div>

      <div className="spacer-top">
        <textarea
          className="textarea"
          name="availability"
          placeholder="Preferred schedule, availability, goals, or anything helpful for follow-up"
        />
      </div>

      <div className="btn-row spacer-top">
        <button className="btn btn-gold" type="submit" disabled={loading}>
          {loading ? 'Submitting…' : 'Submit Interest'}
        </button>
      </div>

      {status === 'ok' && (
        <p className="price-note spacer-top">Submitted. We’ll follow up with the next steps.</p>
      )}
      {status === 'error' && (
        <p className="price-note spacer-top">{error}</p>
      )}
    </form>
  );
}