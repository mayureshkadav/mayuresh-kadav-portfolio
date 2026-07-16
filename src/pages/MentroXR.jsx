import React from "react";
import "../pages/style.css/MentroXR.css";
import bannerImage from "../assets/banner arvr.png";
import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import systemarchitecture from "../assets/systemarchitecture.png";
import researchPaper from "../assets/researchpapercertificate.png";

/* =========================================================
   Replace every <img src="/images/..."> below with your own
   project screenshots. Suggested shots are noted in comments.
   ========================================================= */

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
      <span className="challenge-card__label challenge-card__label--problem">
        Challenge
      </span>
      <p>{problem}</p>
    </div>
    <div className="challenge-card__block">
      <span className="challenge-card__label challenge-card__label--solution">
        Solution
      </span>
      <p>{solution}</p>
    </div>
  </div>
);

export default function ProjectCaseStudy() {
  return (
    <div className="cs-page">
      {/* BACK LINK */}
      <div className="cs-topbar">
        <a href="/" className="cs-back">
          ← Back to projects
        </a>
      </div>

      {/* HERO */}
      <section className="cs-hero">
        <Pill>AI Powered • AR/VR Learning Platform</Pill>
        <h1>
         Transforming Traditional Education into an Interactive Learning Experience
        </h1>
        <p className="cs-hero__sub">
          MentroXR is an AI-powered smart learning platform that combines immersive AR/VR experiences, virtual labs, AI chatbot assistance, and interactive courses to make education more engaging, practical, and accessible for modern learners.
        </p>

        <div className="cs-hero__actions">
          <a href="https://learniq-arvr.vercel.app/" className="btn btn--primary">
            View live app ↗
          </a>
          <a href="https://github.com/mayureshkadav/MENTROXR-AI-Integrated-AR-VR-based-Smart-Learning-Platform3" className="btn btn--secondary">
            View code
          </a>
        </div>

        <div className="cs-hero__cover">
          {/* Cover shot: hero screen or app icon on device mockup */}
          <img
            src={bannerImage}
            alt="MentroXR app cover screenshot"
          />
        </div>
      </section>

      {/* META BAR */}
      <section className="cs-meta">
       
        <div className="cs-meta__item">
          <span className="cs-meta__label">Team</span>
          <span className="cs-meta__value">Major Project · 3 people</span>
        </div>
        <div className="cs-meta__item">
          <span className="cs-meta__label">Duration</span>
          <span className="cs-meta__value">16 weeks</span>
        </div>
        <div className="cs-meta__item">
          <span className="cs-meta__label">Platform</span>
          <span className="cs-meta__value">iOS · Android</span>
        </div>
      </section>

      {/* OVERVIEW / PROBLEM */}
      <section className="cs-section">
        <span className="section-eyebrow">Overview</span>
        <h2>The problem</h2>
        <p className="cs-section__lead">
         Traditional online learning platforms often rely on static videos, PDFs, and text-based content, making it difficult for students to visualize complex concepts and remain engaged. Practical experimentation is limited, personalized assistance is often unavailable, and existing systems lack immersive learning experiences that improve understanding and retention.
        </p>
        <div className="objective-grid">
          <div className="objective-card">
            <div className="objective-card__icon">↗</div>
            <h3>Limited Interactive  &amp; Learning</h3>
            <p>

Most educational platforms provide passive learning through videos and notes, reducing student engagement and making complex scientific concepts harder to understand.</p>
          </div>
          <div className="objective-card">
            <div className="objective-card__icon">✎</div>
            <h3>Lack of Personalized Assistance</h3>
            <p>Students often have to wait for instructor support when they encounter doubts, leading to interruptions in the learning process and reduced learning efficiency.</p>
          </div>
          <div className="objective-card">
            <div className="objective-card__icon">▤</div>
            <h3>Limited Practical Experience</h3>
            <p>Traditional learning environments provide limited access to hands-on experiments, making it difficult for students to gain practical knowledge without physical laboratory resources.</p>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS GALLERY */}
      <section className="cs-section">
        <span className="section-eyebrow">Product</span>
        <h2>What it looks like</h2>
        <div className="gallery-grid">
          <div className="gallery-item gallery-item--wide">
            <img src={systemarchitecture} alt="System architecture of the MentroXR platform" />
          </div>
          <div className="gallery-item">
            <video controls playsInline src={demo1} />
          </div>
          <div className="gallery-item">
            <video controls playsInline src={demo2} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="cs-section">
        <span className="section-eyebrow">Process</span>
        <h2>How We Built MentroXR</h2>
        <div className="process-list">
          <ProcessStep
            index="01"
            title="Research & Planning"
            copy="Conducted research on the limitations of traditional e-learning platforms and identified opportunities to improve engagement through AI, AR/VR, and interactive learning experiences. Defined project goals, user flow, and system architecture."
          />
          <ProcessStep
            index="02"
            title="Redesign the experience"
            copy="Rebuilt the interface around clearer game states, faster round transitions and accessible contrast and tap targets, while keeping the show's visual identity intact."
          />
          <ProcessStep
            index="03"
            title="AI & Interactive Learning Integration"
            copy="Integrated AI-powered chatbot assistance, virtual laboratories, and AR/VR learning modules to provide real-time guidance, immersive visualization, and hands-on practical learning for students."
          />
          <ProcessStep
            index="04"
            title="Testing & Deployment"
            copy="Performed functional testing, optimized application performance, fixed UI and backend issues, and ensured responsive behavior across devices. The platform was built with scalability in mind to support future enhancements and advanced learning features."
          />
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="cs-section">
        <span className="section-eyebrow">Deep dive</span>
        <h2>Challenges &amp; solutions</h2>
        <div className="challenge-list">
          <ChallengeCard
            problem="Creating an engaging learning experience while keeping the platform simple and easy to use for students of different age groups."
            solution="Designed a clean, intuitive interface with structured navigation, interactive course layouts, and responsive components to ensure an accessible and user-friendly learning experience across devices."
          />
          <ChallengeCard
            problem="Integrating AI-powered assistance without disrupting the learning flow or overwhelming users with complex interactions."
            solution="Implemented an AI chatbot that provides instant answers to learner queries, offers concept explanations, and assists with virtual lab activities, enabling self-paced learning and reducing dependency on instructors."
          />
          <ChallengeCard
            problem="Delivering practical learning experiences without requiring access to physical laboratories or expensive equipment."
            solution="Developed interactive Virtual Labs and integrated AR/VR learning modules that allow students to visualize 3D models, perform virtual experiments, and understand complex scientific concepts through immersive experiences."
          />
        </div>
      </section>

      {/* TECH STACK */}
      <section className="cs-section cs-section--center">
        <span className="section-eyebrow">Stack</span>
        <h2>Tech used</h2>
        <div className="tech-row">
          {["React js", "Node.js", "Express.js", "MongoDB", "OpenAI API / AI Integration","Figma","HTML","CSS","JavaScript"].map(
            (name) => (
              <div className="tech-chip" key={name}>
                {name}
              </div>
            )
          )}
        </div>
      </section>

{/* RESEARCH PAPER */}
<section className="cs-section">
  <span className="section-eyebrow">Publication</span>

  <h2>Research Paper</h2>

  <div className="research-grid">
    <div className="research-copy">
      <h3>AI-Enabled AR/VR Based Learning Platform</h3>

      <p>
        Alongside the development of MentroXR, our team published a research
        paper in the <strong>Journal of Emerging Technologies and Innovative
        Research (JETIR)</strong>. The publication explores how AI, Augmented
        Reality, and Virtual Reality can enhance digital education through
        immersive learning, virtual laboratories, and intelligent tutoring.
      </p>

      <div className="research-meta">
        <div>
          <small>Journal</small>
          <h4>JETIR</h4>
        </div>

        <div>
          <small>Published</small>
          <h4>2026</h4>
        </div>

        <div>
          <small>Authors</small>
          <h4>5 Members</h4>
        </div>
      </div>
    </div>

    <img
      src={researchPaper}
      alt="Research Paper"
      className="research-image"
    />
  </div>
</section>


      {/* RESULTS */}
      <section className="cs-section">
        <span className="section-eyebrow">Result</span>
        <h2>Impact</h2>
        <p className="cs-section__lead">
         MentroXR transforms traditional digital learning into an immersive educational experience by combining AI-powered assistance, AR/VR visualization, and interactive virtual labs. The platform provides a scalable foundation for modern education while improving learner engagement and accessibility.
        </p>
        
      </section>

      {/* LEARNINGS */}
      <section className="cs-section">
        <span className="section-eyebrow">Reflection</span>
        <h2>What I learned</h2>
        <p className="cs-section__lead">
          Developing MentroXR strengthened my full-stack development skills and deepened my understanding of building scalable educational platforms. I gained hands-on experience in responsive UI design, authentication, AI integration, and creating interactive learning experiences while improving my problem-solving, collaboration, and project planning skills.
        </p>
      </section>

      {/* NEXT PROJECT / CONTACT */}
    
    </div>
  );
}