"use client";

import React, { useState, useEffect } from "react";

interface Week {
  week: string;
  dateRange: string;
  goals: string[];
  status: string;
}

const LOCAL_KEY = "amazon-ds-tracker-data";

const WeeklyProgress = () => {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [formData, setFormData] = useState({
    week: "",
    dateRange: "",
    goalInput: "",
    status: "Pending"
  });

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      setWeeks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(weeks));
  }, [weeks]);

  const addWeek = () => {
    const goals = formData.goalInput
      .split(";")
      .map(g => g.trim())
      .filter(Boolean);

    const newWeek: Week = {
      week: formData.week,
      dateRange: formData.dateRange,
      goals,
      status: formData.status
    };

    setWeeks(prev => [...prev, newWeek]);
    setFormData({ week: "", dateRange: "", goalInput: "", status: "Pending" });
  };

  const clearAll = () => {
    setWeeks([]);
    localStorage.removeItem(LOCAL_KEY);
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <div className="p-4 border rounded-lg bg-white shadow space-y-2">
        <input
          type="text"
          placeholder="Week (e.g. Week 3)"
          value={formData.week}
          onChange={e => setFormData({ ...formData, week: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Date Range (e.g. June 1–7)"
          value={formData.dateRange}
          onChange={e => setFormData({ ...formData, dateRange: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Goals (separate with ;)"
          value={formData.goalInput}
          onChange={e => setFormData({ ...formData, goalInput: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
        <select
          value={formData.status}
          onChange={e => setFormData({ ...formData, status: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <div className="flex gap-4">
          <button
            onClick={addWeek}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add Week
          </button>
          <button
            onClick={clearAll}
            className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Display */}
      <div className="grid gap-4">
        {weeks.map((week, index) => (
          <div
            key={index}
            className="border p-4 rounded bg-white shadow space-y-2"
          >
            <div className="text-lg font-semibold">{week.week}</div>
            <div className="text-sm text-gray-500">{week.dateRange}</div>
            <ul className="list-disc pl-5 text-gray-700">
              {week.goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
            <span className="text-sm font-medium text-gray-600">
              Status: {week.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyProgress;
