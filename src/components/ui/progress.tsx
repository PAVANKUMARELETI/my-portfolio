import React from "react";
import { motion } from "framer-motion";
import fs from "fs";
import path from "path";


interface ProgressProps {
  value: number; // 0 to 100
  className?: string;
  label?: string;
  tooltip?: string;
  updated?: string;
}

const getEmoji = (value: number) => {
  if (value >= 80) return "🔥";
  if (value >= 50) return "⚡";
  if (value >= 20) return "🚧";
  return "💀";
};

const getTooltip = (value: number) => {
  if (value >= 80) return "You're on fire!";
  if (value >= 50) return "Solid progress, keep going!";
  if (value >= 20) return "You're getting there! Stay consistent.";
  return "Just started... It's a journey!";
};

export const Progress = ({ value, className = "", label, tooltip, updated }: ProgressProps) => {
  return (
    <div className={`w-full space-y-1 ${className}`} data-aos="fade-up">
      {label && (
        <div className="flex justify-between text-sm font-medium text-gray-700">
          <span>{label}</span>
          <span
            className="ml-2"
            title={tooltip || getTooltip(value)}
          >
            {getEmoji(value)} {value}%
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-indigo-600 h-full"
        />
      </div>
      {updated && (
        <div className="text-xs text-gray-500 text-right italic">Last updated: {updated}</div>
      )}
    </div>
  );
};
