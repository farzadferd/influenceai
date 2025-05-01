import React from "react";
import './index.css';

export function HomePage() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
          Grow Your Influence with AI
        </h1>
        <p className="max-w-xl text-lg text-gray-600 mb-6">
          InfluenceAI helps you analyze your social media data and gives smart post ideas, best times to post, and insights to boost your engagement.
        </p>
        <a
          href="/input"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Get Started
        </a>
      </section>
    );
  }