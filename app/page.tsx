"use client";

import Image from "next/image";
import { getSvgPath } from "figma-squircle";
import { CSSProperties, useState } from "react";

const services = [
  "Dashboard Development",
  "Data Modeling & ETL (Extract, Transform, Load)",
  "DAX Calculations & KPI Setup",
  "Report Automation",
  "Data Cleaning & Transformation",
  "Interactive Visualizations & Insights",
  "Project Documentation",
  "MS Office Tasks",
  "Predictive Analytics"
];

const skills = {
  technical: ["Power BI", "DAX", "Power Query", "SQL", "Excel", "Python", "Data Modeling"],
  business: ["KPI Definition", "Business Requirements Gathering", "Dashboard Storytelling", "Data-Driven Decision Support", "Operational Efficiency", "Performance Optimization", "Financial Analysis", "Industry Understanding", "Storytelling with Data"],
  soft: ["Problem-Solving", "Attention to Detail", "Communication", "Time Management", "Adaptability", "Presentation Skills", "Stakeholder Management"],
};

const projects = [
  {
    title: "Pharmaceuticals Sales Performance Dashboard",
    objective: "Developed an interactive dashboard to monitor pharmaceutical sales performance, product distribution, and revenue trends across multiple categories and regions.",
    outcome: "Enabled clear visibility of top-performing products and revenue drivers, improved KPI tracking accuracy, and streamlined performance reporting for faster business insights.",
  },
  {
    title: "Sales Analytics Dashboard",
    objective: "Designed a comprehensive sales dashboard to analyze revenue trends, customer behavior, and product performance across different time periods.",
    outcome: "Improved reporting efficiency through automated calculations and dynamic filtering, allowing stakeholders to quickly identify sales growth patterns and underperforming segments.",
  },
  {
    title: "Financial Transactions Fraud Analysis Dashboard",
    objective: "Engineered a large-scale data pipeline (SQL + Python + Power BI) to analyze fraud trends across millions of transactions.",
    outcome: "Reduced raw data inconsistencies through SQL cleaning, automated fraud metric calculations, and delivered executive-ready dashboards highlighting fraud concentration patterns and behavioral risk indicators.",
  },
  {
    title: "Maternal Health Risk Prediction (Machine Learning Project)",
    objective: "Designed and optimized multiple ML classification models to predict maternal health risk levels using real-world healthcare data.",
    outcome: "Improved minority-class recall using SMOTE and hyperparameter tuning, delivering a stable model with 87%+ accuracy, strong interpretability, and healthcare-ready insights.",
  }
  
];

const testimonials = [
  {
    quote:
      "Professional, highly communicative, and delivered a data analysis solution that truly improved my workflow and decision-making!",
    author: "Abdallah, Egypt",
  },
  {
    quote: "Mohamed demonstrated outstanding problem-solving skills and attention to detail, delivering accurate insights on time and with exceptional quality.",
    author: "Sara, Egypt",
  },
];

export default function Home() {
  const [photoHoverStyle, setPhotoHoverStyle] = useState<CSSProperties>({});
  const [isPhotoActive, setIsPhotoActive] = useState(false);

  const pad = 20;

  const squirclePathMobile = getSvgPath({
    width: 320,
    height: 420,
    cornerRadius: 72,
    cornerSmoothing: 1,
  });

  const squirclePathDesktop = getSvgPath({
    width: 400,
    height: 520,
    cornerRadius: 92,
    cornerSmoothing: 1,
  });

  const squircleInnerMobile = getSvgPath({
    width: 320 - pad * 2,
    height: 420 - pad * 2,
    cornerRadius: 52,
    cornerSmoothing: 1,
  });

  const squircleInnerDesktop = getSvgPath({
    width: 400 - pad * 2,
    height: 520 - pad * 2,
    cornerRadius: 72,
    cornerSmoothing: 1,
  });

  const randomizePhotoMotion = () => {
    const rotate = (Math.random() * 5 - 2.5).toFixed(2);
    const shiftX = (Math.random() * 12 - 6).toFixed(1);
    const shiftY = (Math.random() * 10 - 5).toFixed(1);
    const scale = (1.03 + Math.random() * 0.05).toFixed(3);

    setPhotoHoverStyle({
      ["--photo-rotate" as string]: `${rotate}deg`,
      ["--photo-shift-x" as string]: `${shiftX}px`,
      ["--photo-shift-y" as string]: `${shiftY}px`,
      ["--photo-scale" as string]: scale,
    });
    setIsPhotoActive(true);
  };

  const resetPhotoMotion = () => {
    setPhotoHoverStyle({
      ["--photo-rotate" as string]: "0deg",
      ["--photo-shift-x" as string]: "0px",
      ["--photo-shift-y" as string]: "0px",
      ["--photo-scale" as string]: "1",
    });
    setIsPhotoActive(false);
  };

  return (
    <main className="theme-dark min-h-screen overflow-x-hidden bg-portfolio-dark text-rose-50">
      <div className="glass-bar animate-reveal fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md md:bg-black/25 md:backdrop-blur-2xl md:px-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <p className="text-base font-semibold tracking-wide text-rose-50 md:text-lg">
            My Portfolio
          </p>
        </div>
      </div>

      <section id="cover" className="animate-gradient relative flex min-h-[112svh] w-full items-center overflow-hidden bg-gradient-to-br from-portfolio-coral via-portfolio-crimson to-portfolio-wine pb-16 pt-20 md:min-h-[118svh] md:pb-20 md:pt-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:px-12">
          <div className="order-2 animate-reveal delay-1 md:order-1">
            <p className="hero-chip mb-5 inline-flex rounded-full border border-white/45 bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-rose-50 backdrop-blur">
              Data Analyst
            </p>
            <h1 className="font-name-display text-5xl tracking-tight text-rose-50 md:text-7xl">
              Mohamed Safwat
            </h1>
            <p className="mt-4 text-xl font-medium text-rose-100 md:text-3xl">
              Python • SQL • Excel • Power BI
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-rose-100/95 md:text-lg">
              Turning data into insights based on Results-driven, detail-oriented Analysis and, hands-on experiencethrough dashboards, business intelligence, and clear storytelling.
              Transforming data into actionable decisions.
            </p>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div
              className="photo-cutout photo-cutout-squircle animate-float-slow animate-reveal delay-2 h-[420px] w-[320px] p-0 shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:h-[520px] sm:w-[400px]"
              style={{
                ["--sq-path-mobile" as string]: `path('${squirclePathMobile}')`,
                ["--sq-path-desktop" as string]: `path('${squirclePathDesktop}')`,
                ["--sq-inner-mobile" as string]: `path('${squircleInnerMobile}')`,
                ["--sq-inner-desktop" as string]: `path('${squircleInnerDesktop}')`,
              }}
              onMouseEnter={randomizePhotoMotion}
              onMouseLeave={resetPhotoMotion}
            >
              <div
                className={`photo-inner photo-hover-shell relative h-full w-full overflow-hidden ${isPhotoActive ? "photo-random-active" : ""}`}
                style={photoHoverStyle}
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile photo"
                  fill
                  priority
                  className="photo-image object-cover"
                  sizes="(max-width: 768px) 320px, 420px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 w-[90%] -translate-x-1/2 border-t border-dashed border-white/45" />
      </section>

      <section id="about" className="section-blend relative w-full bg-gradient-to-b from-portfolio-crimson via-portfolio-wine to-portfolio-plum py-16 md:py-22">
        <div className="mx-auto w-full max-w-7xl animate-reveal px-6 md:px-12">
          <h2 className="text-2xl font-semibold tracking-tight text-rose-50">About Me</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-rose-100/90 md:text-base">
            I don’t just build dashboards — I build decision systems.
            I specialize in transforming raw, messy data into clean, automated Power BI solutions
            that reduce manual work, improve reporting accuracy, and help businesses make confident,
            data-driven decisions. My focus is not just visualization, but clarity, performance, and measurable business impact.
          </p>
        </div>
      </section>

      <section id="education-skills" className="section-blend relative w-full bg-gradient-to-br from-portfolio-coral via-portfolio-crimson to-portfolio-wine py-16 md:py-22">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:grid-cols-2 md:px-12">
          <article className="card-lift animate-reveal delay-1 rounded-[2.5rem] border border-white/10 bg-black/20 p-10 backdrop-blur-sm md:p-14">
            <h2 className="text-2xl font-semibold tracking-tight text-rose-50">Education</h2>
            <ul className="mt-4 space-y-3 text-sm text-rose-100/90 md:text-base">
              <li>• Bachelor’s Degree in Software Engineering</li>
              <li>– Egyptian Chinese University, 2026</li>
            </ul>
          </article>

          <article className="card-lift animate-reveal delay-2 rounded-[2.5rem] border border-white/10 bg-black/20 p-10 backdrop-blur-sm md:p-14">
            <h2 className="text-2xl font-semibold tracking-tight text-rose-50">Skills</h2>
            <div className="mt-4 space-y-4 text-sm text-rose-100/90 md:text-base">
              <div>
                <p className="mb-2 font-semibold text-rose-50">Technical Skills</p>
                <p>{skills.technical.join(" • ")}</p>
              </div>
              <div>
                <p className="mb-2 font-semibold text-rose-50">Business Skills</p>
                <p>{skills.business.join(" • ")}</p>
              </div>
              <div>
                <p className="mb-2 font-semibold text-rose-50">Soft Skills</p>
                <p>{skills.soft.join(" • ")}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" className="section-blend relative w-full bg-gradient-to-br from-portfolio-coral via-portfolio-crimson to-portfolio-plum py-16 md:py-22">
        <div className="mx-auto w-full max-w-7xl animate-reveal px-6 md:px-12">
          <h2 className="text-2xl font-semibold tracking-tight text-rose-50">Work Experience</h2>
          <div className="mt-6 space-y-5 text-sm text-rose-100/90 md:text-base">
            <article>
              <h3 className="font-semibold text-rose-50">Data Analysis Trainee, DEPI, 2025 – Present</h3>
              <ul className="mt-2 space-y-2">
                <li>• Designed and delivered interactive dashboards integrating multiple data sources, improving reporting clarity and reducing decision-making time.</li>
                <li>• Developed analytical insights that helped identify trends, cost-saving opportunities, and operational inefficiencies.</li>
                <li>• Automated recurring Excel-based reports using Power Query and Power BI, reducing manual workload and minimizing human error.</li>
                <li>• Applied best practices in dashboard design and storytelling to ensure executive-level usability and clarity.</li>
              </ul>
            </article>
            <article>
              <h3 className="font-semibold text-rose-50">Machine Learning Intern, INSTANT, 2025</h3>
              <ul className="mt-2 space-y-2">
                <li>• Applied Machine Learning concepts including supervised and unsupervised learning techniques.</li>
                <li>• Utilized Python libraries such as Pandas, NumPy, Matplotlib, Scikit-learn, and TensorFlow for data preprocessing, model building, and evaluation.</li>
                <li>• Performed web scraping using Python to collect and prepare datasets for ML projects.</li>
                <li>• Conducted data cleaning, feature engineering, and exploratory data analysis to improve model performance.</li>
              </ul>
            </article>
            
          </div>
        </div>
      </section>

      <section id="services" className="section-blend relative w-full bg-gradient-to-r from-portfolio-coral via-portfolio-crimson to-portfolio-wine py-16 md:py-22">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <h2 className="text-2xl font-semibold tracking-tight text-rose-50">Offered Services</h2>
          <ul className="mt-5 grid gap-3 text-sm text-rose-100/90 md:grid-cols-2 md:text-base">
            {services.map((service, index) => (
              <li
                key={service}
                className="card-lift animate-reveal rounded-2xl border border-white/20 bg-black/25 px-6 py-4 backdrop-blur-sm"
                style={{ animationDelay: `${100 + index * 70}ms` }}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="projects" className="section-blend relative w-full bg-gradient-to-br from-portfolio-coral via-portfolio-crimson to-portfolio-wine py-16 md:py-22">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <h2 className="text-2xl font-semibold tracking-tight text-rose-50">Projects</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="card-lift animate-reveal rounded-[2rem] border border-white/10 bg-black/25 p-8 backdrop-blur-sm"
                style={{ animationDelay: `${140 + index * 80}ms` }}
              >
                <p className="text-sm font-semibold text-rose-50 md:text-base">{project.title}</p>
                <p className="mt-3 text-sm text-rose-100/90 md:text-base">
                  <span className="font-medium text-rose-50">Objective:</span> {project.objective}
                </p>
                <p className="mt-2 text-sm text-rose-100/90 md:text-base">
                  <span className="font-medium text-rose-50">Outcome:</span> {project.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="section-blend relative w-full bg-gradient-to-r from-portfolio-crimson via-portfolio-wine to-portfolio-plum py-16 md:py-22">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:grid-cols-2 md:px-12">
          <article className="card-lift animate-reveal delay-1 rounded-[2.5rem] border border-white/10 bg-black/20 p-10 backdrop-blur-sm md:p-14">
            <h2 className="text-2xl font-semibold tracking-tight text-rose-50">Achievements</h2>
            <ul className="mt-4 space-y-3 text-sm text-rose-100/90 md:text-base">
              <li>• Awarded NVIDIA Generative AI Training Certificate for participation in advanced AI learning sessions.</li>
              <li>• Earned INSTANT Machine Learning & AI Training Certificate in recognition of successfully completing a hands-on internship focused on real-world ML model development.</li>
            </ul>
          </article>

          <article className="card-lift animate-reveal delay-2 rounded-[2.5rem] border border-white/10 bg-black/20 p-10 backdrop-blur-sm md:p-14">
            <h2 className="text-2xl font-semibold tracking-tight text-rose-50">Testimonials</h2>
            <div className="mt-4 space-y-4 text-sm text-rose-100/90 md:text-base">
              {testimonials.map((item, index) => (
                <blockquote
                  key={`${item.author}-${index}`}
                  className="card-lift animate-reveal rounded-2xl border border-white/10 bg-black/25 p-4"
                  style={{ animationDelay: `${180 + index * 100}ms` }}
                >
                  <p>“{item.quote}”</p>
                  <footer className="mt-2 text-sm font-medium text-rose-50">— {item.author}</footer>
                </blockquote>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer id="contact" className="relative w-full overflow-hidden bg-portfolio-dark py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-portfolio-crimson/50 via-portfolio-wine/45 to-portfolio-dark" />
        <div className="pointer-events-none animate-drift absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-portfolio-coral/25 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-5xl animate-reveal rounded-[2.5rem] border border-white/15 bg-black/30 p-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-100/80">Get In Touch</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Let’s Work Together</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-rose-100/90 md:text-base">
              Building powerful data stories and dashboards that help businesses make faster, smarter decisions.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-rose-100 md:grid-cols-2 md:text-base">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a className="contact-link" href="mailto:msafwat0@outlook.com">msafwat0@outlook.com</a>
              </p>
              <p>
                <span className="font-semibold text-white">Telephone:</span>{" "}
                <a className="contact-link" href="tel:+201003176025">+20 100 317 6025</a>
              </p>
              <p>
                <span className="font-semibold text-white">LinkedIn:</span>{" "}
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/msafwat0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @msafwat0
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">GitHub:</span>{" "}
                <a
                  className="contact-link"
                  href="https://github.com/kclnk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @kclnk
                </a>
              </p>
            </div>
          </div>

          <a
            href="#cover"
            aria-label="Back to top"
            className="top-arrow mx-auto mt-12 block w-fit animate-reveal delay-3 px-4 pb-6 pt-3 text-5xl text-white/90 transition hover:text-white"
          >
            <span className="animate-bounce">↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
