import React from "react";
import { useState } from "react";
import './index.css';


export function ProfileInputPage() {
  const [platform, setPlatform] = useState("");
  const [username, setUsername] = useState("");

  return (
    <section className="max-w-2xl mx-auto py-16 px-6">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Enter Your Social Media Profile</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select platform</option>
            <option value="instagram">Instagram</option>
            <option value="youtube">YouTube</option>
            <option value="tiktok">TikTok</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
}