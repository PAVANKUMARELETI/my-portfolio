import React from "react";

const caseStudies = [
  {
    title: "Customer Segmentation for E-commerce",
    summary:
      "Used K-Means clustering and RFM analysis to segment 10,000+ customers into actionable cohorts, improving targeting precision by 35%.",
    tags: ["Clustering", "Pandas", "Sklearn"],
  },
  {
    title: "Demand Forecasting with Time Series",
    summary:
      "Built SARIMA and Prophet models to forecast weekly sales for FMCG products with MAPE under 8%.",
    tags: ["Time Series", "Forecasting", "Prophet"],
  },
  {
    title: "NLP on Product Reviews",
    summary:
      "Performed sentiment analysis on 50k Amazon reviews using BERT. Extracted key product insights and visualized user themes.",
    tags: ["NLP", "Transformers", "BERT"],
  },
];

const CaseStudies = () => {
  return (
    <section className="py-12 px-4 md:px-8" id="case-studies">
      <h2 className="text-3xl font-bold mb-6">📊 Mini Case Studies</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((study, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow hover:shadow-lg transition-all border border-gray-200 dark:border-zinc-800"
          >
            <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              {study.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-2 py-1 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
