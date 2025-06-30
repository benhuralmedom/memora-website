import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'About – Memora',
  description: 'Learn about Memora\'s mission, team, and core values.',
};

export default function AboutPage() {
  const values = ['Clarity', 'Trust', 'Innovation', 'Excellence', 'Empathy'];
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">About Memora</h1>
      <p className="text-lg mb-4">Our mission is to empower organizations to unlock the full value of their internal knowledge by delivering AI-driven assistants that "know everything" about your business.</p>
      <p className="text-lg mb-12">From day one, we ingest and organize your documents, databases, and wikis, so every team member, customer, or partner can ask natural-language questions and get accurate, context-rich answers in seconds.</p>
      
      <h2 className="text-2xl font-bold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="text-center">
          <Image src="/placeholder-team.jpg" alt="Photo of Priya Patel" width={150} height={150} className="mx-auto rounded-full object-cover" />
          <p className="mt-4 font-semibold">Priya Patel</p>
          <p className="text-sm text-neutral-mid">Chief Executive Officer</p>
        </div>
        <div className="text-center">
          <Image src="/placeholder-team.jpg" alt="Photo of Alex Chen" width={150} height={150} className="mx-auto rounded-full object-cover" />
          <p className="mt-4 font-semibold">Alex Chen</p>
          <p className="text-sm text-neutral-mid">Chief Technology Officer</p>
        </div>
        <div className="text-center">
          <Image src="/placeholder-team.jpg" alt="Photo of Maria Gonzalez" width={150} height={150} className="mx-auto rounded-full object-cover" />
          <p className="mt-4 font-semibold">Maria Gonzalez</p>
          <p className="text-sm text-neutral-mid">Chief Product Officer</p>
        </div>
        <div className="text-center">
          <Image src="/placeholder-team.jpg" alt="Photo of James Smith" width={150} height={150} className="mx-auto rounded-full object-cover" />
          <p className="mt-4 font-semibold">James Smith</p>
          <p className="text-sm text-neutral-mid">Head of Customer Success</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Our Core Values</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {values.map((value) => (
          <span key={value} className="inline-block bg-neutral-light dark:bg-neutral-mid text-neutral-dark py-2 px-4 rounded-full font-medium">
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}
