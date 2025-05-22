import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h1>
      <p className="text-lg text-gray-600">
        You can reach me via{" "}
        <a href="mailto:pavan.eleti@gmail.com" className="text-indigo-600 hover:underline">
          pavan.eleti@gmail.com
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/pavaneleti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          LinkedIn
        </a>.
      </p>
    </main>
  );
}
