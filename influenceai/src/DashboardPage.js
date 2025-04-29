import React from "react";
import { Bar } from "react-chartjs-2";

function DashboardPage() {
  // Example data for the chart
  const chartData = {
    labels: ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"],
    datasets: [
      {
        label: "Engagement Rate (%)",
        data: [75, 50, 90, 60, 80],
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#E91E63", "#9C27B0"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Example top-performing posts
  const topPosts = [
    { id: 1, title: "Post 1", likes: 120, comments: 30, engagement: "75%" },
    { id: 2, title: "Post 3", likes: 200, comments: 50, engagement: "90%" },
  ];

  // Example audience insights
  const audienceInsights = {
    ageGroups: { "18-24": "40%", "25-34": "35%", "35-44": "15%", "45+": "10%" },
    locations: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
    activeTimes: ["6 PM - 9 PM", "12 PM - 3 PM"],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Engagement Trends</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Top-Performing Posts Section */}
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Top-Performing Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topPosts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p>Likes: {post.likes}</p>
              <p>Comments: {post.comments}</p>
              <p>Engagement: {post.engagement}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Audience Insights Section */}
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Audience Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold">Age Groups</h3>
            <ul>
              {Object.entries(audienceInsights.ageGroups).map(([age, percent]) => (
                <li key={age}>
                  {age}: {percent}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Top Locations</h3>
            <ul>
              {audienceInsights.locations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Active Times</h3>
            <ul>
              {audienceInsights.activeTimes.map((time) => (
                <li key={time}>{time}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;