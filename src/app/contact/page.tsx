// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up your API/Email-service here
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Navbar />

      <div className="mt-50 p-6 border rounded shadow bg-white">
        <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
        <p className="text-gray-600 mb-6">
          Questions, feedback, or just want to say hello? Send us a message below!
        </p>

        {submitted ? (
          <div className="p-4 border-l-4 border-green-500 bg-green-50 text-green-700 rounded">
            Thanks for reaching out! We’ll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--orange-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--orange-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--orange-primary)]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[var(--orange-primary)] text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-bold mb-2">Our Farm Office</h2>
          <p className="text-gray-700">📧 support@datesshop.com</p>
          <p className="text-gray-700">📞 (123) 456-7890</p>
          <p className="text-gray-700">🏡 123 Oasis Road, Palm Valley, CA</p>
        </div>
      </div>
    </div>
  );
}

