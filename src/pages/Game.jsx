import React from "react";
import "../pages/style.css/MentroXR.css";
import gameCover from "../assets/stone_paper_scissor.png";

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

export default function GameCaseStudy({ onBack }) {
  return (
    <div className="cs-page">
      <div className="cs-topbar">
        <a href="/" className="cs-back">
          ← Back to projects
        </a>
      </div>

      <section className="cs-hero">
        <Pill>JavaScript • Browser Game</Pill>
        <h1>A lightweight game built with fun, fast feedback, and clean UX</h1>
        <p className="cs-hero__sub">
          This Rock Paper Scissors project brings the classic game into the browser with modern styling, instant
          round results, and a responsive layout for both desktop and mobile play.
        </p>

        <div className="cs-hero__actions">
          <a href="https://rock-paper-scissors-game-mu-two.vercel.app/" className="btn btn--primary">
            View live app ↗
          </a>
          <a href="https://github.com/mayureshkadav/Rock-Paper-Scissors-Game" className="btn btn--secondary">
            View code
          </a>
        </div>

        <div className="cs-hero__cover">
          <img src={gameCover} alt="Rock Paper Scissors game preview" />
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
          <span className="cs-meta__label">Focus</span>
          <span className="cs-meta__value">Interactivity • UX</span>
        </div>
      </section>

      <section className="cs-section">
        <span className="section-eyebrow">Overview</span>
        <h2>The idea</h2>
        <p className="cs-section__lead">
          The goal was to turn a simple game into a polished, fast-paced browser experience that gives immediate
          feedback and feels natural on any screen size.
        </p>

        {/* <div className="stat-grid">
          <StatCard value="3" label="Move Options" />
          <StatCard value="1" label="Winner State" />
          <StatCard value="100%" label="Responsive" />
        </div> */}
      </section>

      {/* <section className="cs-section">
        <span className="section-eyebrow">Product</span>
        <h2>What it looks like</h2>
        <div className="gallery-grid">
          <div className="gallery-item gallery-item--wide">
            <img src={gameCover} alt="Rock Paper Scissors gameplay screen" />
          </div>
          <div className="gallery-item" style={{ background: "linear-gradient(135deg, #fefce8, #fef3c7)", padding: "24px" }}>
            <h3 style={{ marginTop: 0 }}>Instant score updates</h3>
            <p style={{ color: "#92400e", lineHeight: 1.6 }}>Players get immediate feedback on each round through live score changes and result states.</p>
          </div>
          <div className="gallery-item" style={{ background: "linear-gradient(135deg, #ecfeff, #cffafe)", padding: "24px" }}>
            <h3 style={{ marginTop: 0 }}>Simple interaction</h3>
            <p style={{ color: "#0f766e", lineHeight: 1.6 }}>The UI is built to be intuitive, lightweight, and accessible for quick play.</p>
          </div>
        </div>
      </section> */}

      <section className="cs-section">
        <span className="section-eyebrow">Process</span>
        <h2>How I built it</h2>
        <div className="process-list">
          <ProcessStep index="01" title="Plan the game logic" copy="Mapped out the round flow, result logic, and score updates before implementing the UI." />
          <ProcessStep index="02" title="Create the interface" copy="Used simple visuals and clear actions so players can focus on the game instantly." />
          <ProcessStep index="03" title="Test responsiveness" copy="Adjusted buttons and layout spacing to make the game feel comfortable on smaller screens too." />
        </div>
      </section>

      <section className="cs-section">
        <span className="section-eyebrow">Deep dive</span>
        <h2>Challenges &amp; solutions</h2>
        <div className="challenge-list">
          <ChallengeCard
            problem="Making the gameplay feel smooth while keeping the code simple and lightweight."
            solution="Used clear event handling and minimal state so the game stays responsive and easy to understand."
          />
          <ChallengeCard
            problem="Ensuring it feels good on mobile devices."
            solution="Adjusted touch-friendly controls and layout spacing for a more natural experience."
          />
        </div>
      </section>

      <section className="cs-section cs-section--center">
        <span className="section-eyebrow">Stack</span>
        <h2>Tech used</h2>
        <div className="tech-row">
          {['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub', 'Vercel'].map((name) => (
            <div className="tech-chip" key={name}>{name}</div>
          ))}
        </div>
      </section>

      <section className="cs-section">
        <span className="section-eyebrow">Result</span>
        <h2>Impact</h2>
        <p className="cs-section__lead">
          This project strengthened my understanding of frontend logic, user interaction, and building small apps that feel polished from the first click.
        </p>
      </section>

      
    </div>
  );
}
