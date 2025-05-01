import React from "react";
import './index.css';

export function DashboardPage(){
    return (
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Your Analytics</h2>
        <p className="text-gray-600 mb-8">We’ll display charts and recommendations here once data is processed.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Future: AnalyticsCard, PostChart, Recommendations */}
          <div className="bg-white p-6 rounded-xl shadow">Engagement Graph</div>
          <div className="bg-white p-6 rounded-xl shadow">Post Recommendations</div>
          <div className="bg-white p-6 rounded-xl shadow">Audience Insights</div>
        </div>
      </section>
    );
  }