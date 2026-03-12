'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'ok' | 'error'
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setError('');

    const form = new FormData(e.currentTarget);

    const payload = {
      fullName: form.get('fullName')?.toString().trim(),
      email: form.get('email')?.toString().trim(),
      phone: form.get('phone')?.toString().trim(),
      program: form.get('program')?.toString(),
      message: form.get('message')?.toString().trim(),
      website: form.get('website')?.toString().trim(), // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
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
      setError('Something went wrong. Please try again or email info@xcelerated.org.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="spacer-top">
      <div className="form-grid">
        <input className="input" name="fullName" placeholder="Full Name" required />
        <input className="input" name="email" placeholder="Email Address" type="email" required />
        <input className="input" name="phone" placeholder="Phone Number" />

        <select className="input" name="program" defaultValue="">
          <option value="" disabled>Select a program</option>
          <option value="XSPA">XSPA (Speed, Performance & Agility)</option>
          <option value="XPT">XPT (Personal Training)</option>
          <option value="XGX">XGX (Group Exercise)</option>
          <option value="Other">Other</option>
        </select>

        {/* Honeypot field (hidden from humans) */}
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          style={{ position: 'absolute', left: '-9999px' }}
          aria-hidden="true"
        />
      </div>

      <textarea
        className="textarea spacer-top"
        name="message"
        required
        placeholder="Tell us what you’re looking for, the athlete’s age group, goals, and preferred schedule."
      />

      <div className="btn-row spacer-top">
        <button className="btn btn-gold" type="submit" disabled={loading}>
          {loading ? 'Submitting…' : 'Submit'}
        </button>
      </div>

      {status === 'ok' && (
        <p className="price-note spacer-top">Submitted. We’ll reply as soon as possible.</p>
      )}
      {status === 'error' && (
        <p className="price-note spacer-top">{error}</p>
      )}
    </form>
  );
}