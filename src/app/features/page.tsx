"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const metadata = {
  title: 'Features – Memora',
  description: 'Learn about Memora\'s LLM-powered QA, retrieval-augmented pipeline, secure cloud hosting, and seamless integrations.',
};

export default function FeaturesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      key: 'LLM',
      title: 'Large Language Models',
      content: 'We leverage best-in-class large-language models to interpret your queries and generate fluent responses.',
    },
    {
      key: 'RAG',
      title: 'Retrieval-Augmented Generation',
      content: 'Our robust retrieval-augmented pipeline ensures answers are grounded in your documents. Memora searches your knowledge base for relevant content, then uses the LLM to craft accurate, context-rich answers.',
    },
    {
      key: 'Hosting',
      title: 'Secure Hosting',
      content: 'Your Memora assistant runs on secure, enterprise-grade cloud infrastructure. Your data stays isolated and encrypted. We adhere to strict security practices (ISO 27001 certified, SOC 2 Type II in progress).',
    },
    {
      key: 'Integrations',
      title: 'Seamless Integrations',
      content: 'Memora integrates with the tools you use every day. Connect your knowledge base to your CRM, helpdesk, or intranet so employees and customers can get answers in the flow of work.',
    },
  ];

  const timeline = [
    {
      period: 'Week 0',
      title: 'Pilot Setup',
      detail: 'Identify knowledge sources and success metrics; deploy Memora in a sandbox environment.',
    },
    {
      period: 'Weeks 1–4',
      title: 'Pilot Launch',
      detail: 'Real users ask questions; gather feedback and measure answer quality and usage.',
    },
    {
      period: 'Week 4',
      title: 'Review & Iterate',
      detail: 'Assess pilot results; refine content, adjust prompts, and integrate additional data sources as needed.',
    },
    {
      period: 'Production',
      title: 'Scale Up',
      detail: 'Roll out the assistant to more users and channels. Leverage usage-based pricing for cost efficiency as you grow.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Platform Features</h1>
      <p className="mb-8 text-lg">Under the hood, Memora brings together four key elements:</p>

      {/* Feature Tabs */}
      <div role="tablist" aria-label="Features" className="border-b border-neutral-mid/50 flex">
        {features.map((feat, idx) => (
          <button
            key={feat.key}
            role="tab"
            id={`tab-${feat.key}`}
            aria-selected={activeIndex === idx}
            aria-controls={`panel-${feat.key}`}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 -mb-px focus:outline-none focus:ring-2 focus:ring-primary-light ${
              activeIndex === idx
                ? 'text-primary border-b-2 border-primary'
                : 'text-neutral-mid hover:text-neutral-dark'
            }`}
          >
            {feat.title}
          </button>
        ))}
      </div>
      <div className="min-h-[6em]">
        <AnimatePresence mode="wait">
          {features.map(
            (feat, idx) =>
              idx === activeIndex && (
                <motion.div
                  key={feat.key}
                  id={`panel-${feat.key}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${feat.key}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="py-4"
                >
                  <p>{feat.content}</p>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Pilot to Production Timeline */}
      <h2 className="text-2xl font-bold mt-16 mb-4">From Pilot to Production</h2>
      <ul className="border-l-2 border-neutral-mid/50 pl-8">
        {timeline.map((step, idx) => (
          <li key={idx} className="relative mb-8 last:mb-0">
            <span className="absolute -left-1.5 top-1.5 w-3 h-3 bg-accent rounded-full"></span>
            <p className="font-semibold">{step.period} – {step.title}</p>
            <p className="text-sm text-neutral-dark dark:text-neutral-light">{step.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
