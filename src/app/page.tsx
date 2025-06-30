"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export const metadata = {
  title: 'Memora – All Company Knowledge. One Interface.',
  description: 'All company knowledge in one interface. Memora helps teams onboard faster, support customers better, and execute with confidence.',
};

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    { title: 'Single Source of Truth', description: 'Achieve a 95% answer rate in pilot programs with a central, always-up-to-date knowledge base.' },
    { title: 'Instant, Context-Rich Answers', description: 'Get answers in ≤3 seconds on average, with cited sources for complete confidence.' },
    { title: 'Secure & Compliant', description: 'Your data stays private. Enterprise-grade security with ISO 27001 compliance and SOC 2 Type II on the roadmap.' },
    { title: 'Iterate & Scale Fast', description: 'Launch a pilot in just 4 weeks, then scale with usage-based pricing and continuous improvements.' },
  ];

  const steps = [
    { title: 'Ingest & Organize', description: 'Memora connects to your documents, databases, and wikis, then indexes everything for intelligent search.' },
    { title: 'Ask Questions Naturally', description: 'Every team member, customer, or partner can ask questions in plain language via chat and get instant answers.' },
    { title: 'Get Contextual Answers', description: 'Memora combines an LLM with your data (via RAG) to provide accurate, source-cited answers, 24/7.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.h1
          className="text-4xl font-black font-display mb-4"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: -20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          All Company Knowledge. One Interface.
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }}
        >
          Memora ingests and organizes your documents, databases, and wikis, then surfaces context-rich answers in seconds—so teams onboard faster, support customers better, and execute with confidence.
        </motion.p>
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: -5 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
        >
          <Link href="/contact" className="inline-block bg-primary text-neutral-light font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light">
            Book a Demo
          </Link>
        </motion.div>
      </section>

      {/* Logo Wall */}
      <section className="py-10 bg-neutral-light dark:bg-neutral-dark">
        <h2 className="sr-only">Trusted By</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
          <Image src="/placeholder-logo.png" alt="ManufacturingCo logo" width={120} height={60} />
          <Image src="/placeholder-logo.png" alt="FinanceCorp logo" width={120} height={60} />
          <Image src="/placeholder-logo.png" alt="TechCo logo" width={120} height={60} />
          <Image src="/placeholder-logo.png" alt="HealthCorp logo" width={120} height={60} />
          <Image src="/placeholder-logo.png" alt="EduCorp logo" width={120} height={60} />
          <Image src="/placeholder-logo.png" alt="RetailCorp logo" width={120} height={60} />
        </div>
      </section>

      {/* How Memora Works - 3 Step Graphic */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-12">How Memora Works</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1">
              <div className="text-6xl mb-4 text-primary font-bold">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-neutral-dark dark:text-neutral-light">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-neutral-light dark:bg-neutral-dark">
        <h2 className="text-2xl font-bold text-center mb-12">Why Memora?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl shadow-lg shadow-neutral-mid/10 bg-white dark:bg-neutral-dark dark:border dark:border-neutral-mid/25"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-dark dark:text-neutral-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-neutral-light text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to turn information overload into a competitive advantage?</h2>
        <p className="mb-6">Get started with a Memora pilot today.</p>
        <Link href="/contact" className="inline-block bg-neutral-light text-primary font-semibold py-3 px-6 rounded-lg hover:bg-neutral-mid transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-light">
          Book a Demo
        </Link>
      </section>
    </div>
  );
}
