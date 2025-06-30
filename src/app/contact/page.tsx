"use client";
import React, { useState } from 'react';

export const metadata = {
  title: 'Contact – Memora',
  description: 'Get in touch with the Memora team. Book a demo or send us a message.',
};

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!validateEmail(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!company.trim()) {
      newErrors.company = 'Please enter your company name.';
    }
    if (!message.trim()) {
      newErrors.message = 'Please enter a message.';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // All good, simulate form submission success
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Thank you!</h1>
        <p>Your message has been sent. We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input
            id="name"
            type="text"
            className="w-full bg-white dark:bg-neutral-mid text-neutral-dark border border-neutral-mid dark:border-neutral-light rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            className="w-full bg-white dark:bg-neutral-mid text-neutral-dark border border-neutral-mid dark:border-neutral-light rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block font-medium mb-1">Company</label>
          <input
            id="company"
            type="text"
            className="w-full bg-white dark:bg-neutral-mid text-neutral-dark border border-neutral-mid dark:border-neutral-light rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'company-error' : undefined}
          />
          {errors.company && <p id="company-error" className="text-red-600 text-sm mt-1" role="alert">{errors.company}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full bg-white dark:bg-neutral-mid text-neutral-dark border border-neutral-mid dark:border-neutral-light rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <p id="message-error" className="text-red-600 text-sm mt-1" role="alert">{errors.message}</p>}
        </div>
        <button type="submit" className="bg-primary text-neutral-light font-semibold py-3 px-6 rounded-lg hover:bg-primary-light transition-colors duration-200">
          Send Message
        </button>
      </form>
    </div>
  );
}
