# 🌐 Pavan Eleti | Data Scientist Portfolio & Public Prep Tracker

![Portfolio Preview](public/images/og-preview.jpg)

Welcome to the official repository of my portfolio website [**pavaneleti.me**](https://pavaneleti.me). This site showcases my data science work *and* transparently documents my weekly prep journey to become a Data Scientist at Amazon.

---

## 🚀 About Me

I'm a data science graduate with hands-on experience in:

- 📊 Machine Learning & Statistical Modeling  
- 🧠 Natural Language Processing (NLP)  
- 📈 Time Series Forecasting  
- ☁️ Cloud Tools: AWS, GCP  
- 📌 Tools: Python, SQL, TensorFlow, PyTorch, Scikit-learn, Power BI, Tableau

Currently seeking **L4 Data Scientist roles** in product or operations analytics with companies like **Amazon** — aiming for ₹20–28 LPA.

---

## 🖥️ Website Features

- ⚡ **Built with Next.js 14, TailwindCSS & Framer Motion**
- 📈 `/tracker` dashboard to log Amazon-specific prep
- 📝 Markdown-based weekly logs with frontmatter
- 🎯 Skill progress bars with motivational emojis
- 💼 Featured Projects with filtering + modals
- 🗺️ Dynamic `sitemap.xml` & robots.txt
- 💌 Contact Form via Formspree integration
- 🌙 Dark mode toggle
- 🧠 Custom Amazon-inspired floating CTA: `#HirePavan4Amazon`
- 🧾 JSON-LD schema for Google search visibility

---

## 📂 Project Structure

```bash
├── app/
│   ├── layout.tsx           # Global layout
│   ├── page.tsx             # Homepage
│   └── tracker/page.tsx     # Public dashboard
├── components/              # Reusable UI
├── content/
│   └── learning-log.md      # Weekly log in Markdown
├── data/
│   └── progress.json        # Progress bar values
├── utils/
│   └── load-learning-log.ts # Markdown loader
├── public/
│   └── images/              # Profile & preview assets
├── styles/
│   └── globals.css
├── next.config.js
└── README.md
```

---

## 🧠 Tracker Workflow

1. I update `learning-log.md` and `progress.json` every week
2. Commit & push to GitHub
3. [Vercel](https://vercel.com) auto-deploys it to [pavaneleti.me/tracker](https://pavaneleti.me/tracker)

This provides live proof of consistency and learning momentum.

---

## 📫 Contact

- [LinkedIn](https://www.linkedin.com/in/pavaneleti)
- [GitHub](https://github.com/pavankumareleti)
- [Email](mailto:pavaneletisj@gmail.com)

Thanks for visiting!
