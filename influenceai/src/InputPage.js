import React, { useState } from "react";

function InputPage() {
  const [formData, setFormData] = useState({
    instagram: "",
    youtube: "",
    tiktok: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Send data to backend here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Input Your Social Media Profiles</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Instagram</label>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter Instagram username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">YouTube</label>
          <input
            type="text"
            name="youtube"
            value={formData.youtube}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter YouTube channel name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">TikTok</label>
          <input
            type="text"
            name="tiktok"
            value={formData.tiktok}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter TikTok username"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputPage;