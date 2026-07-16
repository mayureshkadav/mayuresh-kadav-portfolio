import React from "react";
import "./style.css/MentroXR.css";
import annotation from "../assets/annotation.jpeg";
import annotateDashboard from "../assets/annotate_dashboard.png";
import annotateImg from "../assets/annotate_img.png";
import annotteSignin from "../assets/annotte_signin.png";
import frontendAnnotation from "../assets/frontendannotation.png";

const Pill = ({ children }) => <span className="pill">{children}</span>;

const StatCard = ({ value, label }) => (
  <div className="stat-card">
    <span className="stat-card__value">{value}</span>
    <span className="stat-card__label">{label}</span>
  </div>
);

const ProcessStep = ({ index, title, copy }) => (
  <div className="process-step">
    <span className="process-step__index">{index}</span>
    <div>
      <h3 className="process-step__title">{title}</h3>
      <p className="process-step__copy">{copy}</p>
    </div>
  </div>
);

const ChallengeCard = ({ problem, solution }) => (
  <div className="challenge-card">
    <div className="challenge-card__block">
      <span className="challenge-card__label challenge-card__label--problem">Challenge</span>
      <p>{problem}</p>
    </div>
    <div className="challenge-card__block">
      <span className="challenge-card__label challenge-card__label--solution">Solution</span>
      <p>{solution}</p>
    </div>
  </div>
);

export default function AIAnnotationCaseStudy({ onBack }) {
  return (
    <div className="cs-page">
      <div className="cs-topbar">
        <a href="/" className="cs-back">
          ← Back to projects
        </a>
      </div>

      <section className="cs-hero">
        <Pill>AI • Data Annotation Workflow</Pill>
        <h1>Building a cleaner, more structured AI annotation experience</h1>
        <p className="cs-hero__sub">
          This project focuses on simplifying image annotation and dataset preparation for AI training, helping teams
          manage labelled data more efficiently and accurately.
        </p>

        {/* <div className="cs-hero__actions">
          <a href="#" className="btn btn--primary">
            View project ↗
          </a>
          <a href="#" className="btn btn--secondary">
            View code
          </a>
        </div> */}

        <div className="cs-hero__cover">
          <img
            src={annotation}
            alt="AI annotation workflow preview"
          />
        </div>
      </section>

      <section className="cs-meta">
        <div className="cs-meta__item">
          <span className="cs-meta__label">Role</span>
          <span className="cs-meta__value">AI &amp; Frontend Developer</span>
        </div>
        <div className="cs-meta__item">
          <span className="cs-meta__label">Type</span>
          <span className="cs-meta__value">Internship Project</span>
        </div>
        <div className="cs-meta__item">
          <span className="cs-meta__label">Focus</span>
          <span className="cs-meta__value">Annotation • Data Quality</span>
        </div>
      </section>

      {/* <section className="cs-section">
        <span className="section-eyebrow">Glimpses</span>
        <h2>Project Glimpses</h2>
        <div className="glimpse-grid">
          <div className="glimpse-card">
            <img src={frontendAnnotation} alt="Dashboard preview" />
            <div className="glimpse-card-body">
              <h3>Dashboard</h3>
            </div>
          </div>

          <div className="glimpse-card">
            <img src={annotateDashboard} alt="Dataset view" loading="lazy" />
            <div className="glimpse-card-body">
              <h3>Dataset Explorer</h3>
            </div>
          </div>

          <div className="glimpse-card">
            <img src={annotateImg} alt="Review panel" loading="lazy" />
            <div className="glimpse-card-body">
              <h3>Review Panel</h3>
            </div>
          </div>
        </div>
      </section> */}

      <section className="cs-section">
        <span className="section-eyebrow">Overview</span>
        <h2>The challenge</h2>
        <p className="cs-section__lead">
          Annotation workflows often become tedious, inconsistent, and hard to manage as datasets grow. This project aims
          to bring structure, speed, and better data quality into the process.
        </p>

        <div className="stat-grid">
          <StatCard value="2" label="Workflow Stages" />
          <StatCard value="100%" label="Label Focus" />
          <StatCard value="1" label="Clean Design" />
        </div>
      </section>

      <section className="cs-section">
        <span className="section-eyebrow">Product</span>
        <h2>What it looks like</h2>
        <div className="gallery-grid">
          <div className="gallery-item gallery-item--wide">
            <img
              src={frontendAnnotation}
              alt="Annotation dashboard preview"
            />
          </div>

          <div className="gallery-item">
            <img src={annotateDashboard} alt="Dataset explorer preview" loading="lazy" />
          </div>

          <div className="gallery-item">
            <img src={annotateImg} alt="Review panel preview" loading="lazy" />
          </div>

          <div className="gallery-item">
            <img src={annotteSignin} alt="Signin screen preview" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="cs-section">
        <span className="section-eyebrow">Process</span>
        <h2>How I worked on it</h2>
        <div className="process-list">
          <ProcessStep index="01" title="Understand the workflow" copy="Studied how data annotation tasks are performed and where workflow friction appears." />
          <ProcessStep index="02" title="Design the experience" copy="Built a more structured layout so users can annotate confidently and consistently." />
          <ProcessStep index="03" title="Improve usability" copy="Focused on clarity, flow, and reducing unnecessary steps while handling labelled data." />
        </div>
      </section>

      <section className="cs-section">
        <span className="section-eyebrow">Deep dive</span>
        <h2>Challenges &amp; solutions</h2>
        <div className="challenge-list">
          <ChallengeCard
            problem="Keeping annotation tasks accurate and efficient as data volume grows."
            solution="Designed a more guided workflow with clear structure so users can proceed with less confusion."
          />
          <ChallengeCard
            problem="Making the system useful for repeated annotation work."
            solution="Focused on a simple interface and repeatable steps to improve consistency and speed."
          />
        </div>
      </section>

      <section className="cs-section cs-section--center">
        <span className="section-eyebrow">Stack</span>
        <h2>Tech used</h2>
        <div className="tech-row">
          {['React', 'JavaScript', 'AI', 'Annotation Workflow', 'UI/UX'].map((name) => (
            <div className="tech-chip" key={name}>{name}</div>
          ))}
        </div>
      </section>

      <section className="cs-section">
        <span className="section-eyebrow">Result</span>
        <h2>Impact</h2>
        <p className="cs-section__lead">
          The project helped me connect AI concepts with practical interface design and strengthened my understanding of
          how good workflow design can improve data quality.
        </p>
      </section>

      
    </div>
  );
}
