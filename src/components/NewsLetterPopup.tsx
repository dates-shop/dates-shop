'use client';

import React, { useEffect, useState } from 'react';

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    function handleMouseOut(e: MouseEvent) {
      if (e.clientY <= 0) {
        setShow(true);
        document.removeEventListener('mouseout', handleMouseOut);
      }
    }
    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, []);

  if (!show) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('sent');
        setTimeout(() => setShow(false), 1500);
      } else {
        throw new Error('Bad response');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setShow(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => setShow(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[var(--orange-primary)] mb-2">
          Join Our Farm Fresh Newsletter
        </h2>
        <p className="text-gray-600 mb-4">
          Get the latest date varieties, farm stories, and exclusive deals straight to your inbox.
        </p>

        {status === 'sent' ? (
          <div className="p-4 border-l-4 border-green-500 bg-green-50 text-green-700 rounded">
            You’re subscribed!
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--orange-primary)]"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-2 px-4 bg-[var(--orange-primary)] text-white rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
            </button>
            {status === 'error' && (
              <p className="text-red-600 text-sm">Something went wrong. Try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

