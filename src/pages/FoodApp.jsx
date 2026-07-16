import React from "react";
import "../pages/style.css/MentroXR.css";
import foodAppCover from "../assets/food_app.png";

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

export default function FoodAppCaseStudy({ onBack }) {
  return (
    <div className="cs-page">
      <div className="cs-topbar">
        <a href="/" className="cs-back">
          ← Back to projects
        </a>
      </div>

      <section className="cs-hero">
        <Pill>React • Food Delivery Experience</Pill>
        <h1>Designing a smooth, modern food ordering journey</h1>
        <p className="cs-hero__sub">
          Kings Kitchen is a polished food delivery website built with React and Vite, focused on fast browsing,
          responsive layouts, and a clean digital storefront experience.
        </p>

        <div className="cs-hero__actions">
          <a href="https://kings-kitchen-modern-food-delivery.vercel.app/" className="btn btn--primary">
            View live app ↗
          </a>
          <a href="https://github.com/mayureshkadav/Kings-Kitchen-Modern-Food-Delivery-Web-Application" className="btn btn--secondary">
            View code
          </a>
        </div>

        <div className="cs-hero__cover">
          <img src={foodAppCover} alt="Kings Kitchen food delivery app preview" />
        </div>
      </section>

      <section className="cs-meta">
        <div className="cs-meta__item">
          <span className="cs-meta__label">Role</span>
          <span className="cs-meta__value">Frontend Developer</span>
        </div>
        <div className="cs-meta__item">
          <span className="cs-meta__label">Type</span>
          <span className="cs-meta__value">Personal Project</span>
        </div>
        <div className="cs-meta__item">
          <span className="cs-meta__label">Stack</span>
          <span className="cs-meta__value">React • Vite • CSS</span>
        </div>
      </section>

      <section className="cs-section">
        <span className="section-eyebrow">Overview</span>
        <h2>The challenge</h2>
        <p className="cs-section__lead">
          Creating a food ordering experience that feels fast, trustworthy, and visually appealing while staying
          lightweight and responsive on any device.
        </p>

        
      </section>

      

      <section className="cs-section">
        <span className="section-eyebrow">Process</span>
        <h2>How I built it</h2>
        <div className="process-list">
          <ProcessStep index="01" title="Structure the experience" copy="Mapped out the main food browsing and ordering journey before styling the UI." />
          <ProcessStep index="02" title="Design the interface" copy="Focused on clean typography, clear calls to action, and a modern card-based layout." />
          <ProcessStep index="03" title="Polish for responsiveness" copy="Adjusted layout spacing and component sizing to ensure the app feels good on mobile and desktop." />
        </div>
      </section>

      <section className="cs-section">
        <span className="section-eyebrow">Deep dive</span>
        <h2>Challenges &amp; solutions</h2>
        <div className="challenge-list">
          <ChallengeCard
            problem="Making the product feel premium without overloading the page with too much content."
            solution="Used a clean visual hierarchy, clear sections, and compact cards to keep the interface focused."
          />
          <ChallengeCard
            problem="Maintaining a good experience across screen sizes."
            solution="Built the layout with responsive spacing and flexible components so it adapts smoothly."
          />
        </div>
      </section>

      <section className="cs-section cs-section--center">
        <span className="section-eyebrow">Stack</span>
        <h2>Tech used</h2>
        <div className="tech-row">
          {['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'React Router'].map((name) => (
            <div className="tech-chip" key={name}>{name}</div>
          ))}
        </div>
      </section>

      <section className="cs-section">
        {/* <span className="section-eyebrow">Result</span> */}
        {/* <h2>Impact</h2>
        <p className="cs-section__lead">
          The project helped me sharpen my frontend design instincts and build a practical, polished app experience
          that feels modern and approachable for users.
        </p> */}
      </section>

    
    </div>
  );
}
