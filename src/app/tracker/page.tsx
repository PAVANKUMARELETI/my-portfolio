"use client";

import React, { useEffect } from "react";
import WeeklyProgress from "@/components/Dashboard/WeeklyProgress";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default function TrackerPage() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="tracker"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="min-h-screen bg-gradient-to-tr from-[#fdfbfb] to-[#ebedee] text-gray-800 py-12 px-4 md:px-8 relative overflow-hidden"
      >
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm z-10">
          <h2 className="text-base md:text-lg font-semibold text-gray-800">Pavan Eleti</h2>
          <Link href="/">
            <button className="text-sm md:text-base bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all">
              ← Home
            </button>
          </Link>
        </nav>

        <div className="max-w-5xl mx-auto space-y-12 pt-24">
          <header className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Amazon Data Scientist Prep Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600"
            >
              I'm Pavan Eleti, a Data Science grad student preparing to join Amazon as a Data Scientist by 2026. This dashboard publicly tracks my weekly learning, technical skill development, and long-term milestones.
            </motion.p>
          </header>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <WeeklyProgress />
          </motion.section>

          <section className="space-y-4" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-gray-800">📚 What I Learned This Week</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Explored SQL window functions and ranking queries</li>
              <li>Reviewed hypothesis testing from Scaler module</li>
              <li>Practiced case studies involving customer segmentation</li>
              <li>Implemented basic EDA pipeline using pandas and seaborn</li>
            </ul>
          </section>

          <section className="space-y-6" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-gray-800">📈 Progress Toward Mastery</h2>
            <div className="space-y-4">
              <Progress value={70} label="SQL & Data Manipulation" />
              <Progress value={45} label="Statistics & Probability" />
              <Progress value={35} label="Machine Learning Foundations" />
              <Progress value={20} label="Project Portfolio & Case Studies" />
              <Progress value={10} label="Amazon Interview Preparation" />
            </div>
          </section>

          <section className="space-y-3" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-gray-800">🎯 Current Focus</h2>
            <p className="text-gray-700 text-base">
              I’m currently focused on mastering SQL joins, aggregations, and window functions — all of which are critical for real-world data analysis and interview rounds at Amazon.
            </p>
          </section>

          <section className="space-y-3" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-gray-800">🚀 Next Milestone</h2>
            <p className="text-gray-700 text-base">
              Complete a full data science mini-project by mid-June using real-world datasets and publish a blog post on the methodology and insights.
            </p>
          </section>
        </div>

        <footer className="mt-16 py-6 text-center text-sm text-gray-500">
          Resume | GitHub | LinkedIn — All accessible via my homepage
          <br />
          Built with focus, React, and quiet determination.
        </footer>
      </motion.main>
    </AnimatePresence>
  );
}
