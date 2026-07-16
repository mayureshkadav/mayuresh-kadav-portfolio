import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUpRight, Menu, X, Trophy, Briefcase, Star, Phone ,MapPin} from "lucide-react";
import "./App.css";
import MentroXR from "./pages/MentroXR.jsx";
import FoodApp from "./pages/FoodApp.jsx";
import Game from "./pages/Game.jsx";
import AIAnnotationCaseStudy from "./pages/AI_Annotation..jsx";
import bannerImage from "./assets/banner arvr.png";
import stone_paper_scissor from "./assets/stone_paper_scissor.png";
import food_app from "./assets/food_app.png"
import annotation from "./assets/annotation.jpeg"
import electroviz from "./assets/electroviz.jpeg"
import acPatilAward from "./assets/ac  patil.jpeg"
import csmuAward from "./assets/csmu.jpeg"
import dyPatilAward from "./assets/dy patil.jpeg"
import honourAward from "./assets/honour.jpeg"
import uiuxPillaiAward from "./assets/uiux pillai.jpg"
import vapAward1 from "./assets/vap.jpeg"
import vapAward2 from "./assets/vap2.jpeg"
import vapAward3 from "./assets/vap3.jpeg";
import uiux from "./assets/uiux1.jpeg"
import codedynast from "./assets/codedynast.jpeg"
// removed: awardPhoto1 import was used for a reverted award entry

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Internships", href: "#internships" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const INTERNSHIPS = [
  {
    company: "CMS Info Systems Ltd",
    role: "Artificial Intelligence (AI) Intern",
    period: "April 2025 - September 2025",
    location: "Navi Mumbai, Maharashtra . On-site",
    description:
      "Performed data recording, preprocessing, annotation, and model experimentation for AI projects. Led a team in developing an AI-based Image Annotation Tool with annotation and dataset workflows. Collaborated with engineering teams to integrate AI solutions into business applications. Gained hands-on experience in AI research, debugging, problem-solving, and project development.",
    stack: ["React", "HTML", "CSS", "JavaScript", "MySQL", "Figma", "Data Annotation", "Data Creation", "Data Augmentation"],
  },
  {
    company: "Qspiders",
    role: "Trainee",
    period: "Dec 2025 - Present",
    location: "Navi Mumbai, Maharashtra",
    description:
      "Completed intensive Java Full Stack training covering Core Java, Advanced Java, SQL, JDBC, Servlets, JSP, Hibernate, Spring, Spring Boot, HTML, CSS, JavaScript, React.js, and REST APIs. Developed hands-on projects while gaining practical experience in object-oriented programming, database design, backend development, frontend development, and version control using Git and GitHub.",
    stack: ["Java", "Advance Java", "Html", "CSS", "JavaScript", "React", "SQL", "SDLC"],
  },
];

const PROJECTS = [
  {
    name: "MENTROXR",
    tagline: "AI Integrated AR/VR based Smart Learning Platform",
    description:
      "AI-powered educational platform featuring secure authentication, interactive courses, virtual labs, AR/VR modules, AI chatbot support, and a Kids Learning section for an immersive learning experience.",
    image: bannerImage,
    stack: ["React", "Node.js", "MongoDB", "AR/VR"],
    link: "https://learniq-arvr.vercel.app/",
    github: "https://github.com/mayureshkadav/MENTROXR-AI-Integrated-AR-VR-based-Smart-Learning-Platform3",
    caseStudy: "MentroXR",
  },
  {
    name: "Kings-Kitchen",
    tagline: "Modern React-based Food Delivery Web Application",
    description:
      " A modern food delivery web application built with React.js and Vite, featuring a responsive user interface, reusable components, seamless navigation, food menu browsing, and user authentication for a smooth online food ordering experience.",
    image: food_app,
    stack: ["React.js", "Vite", "JavaScript", "HTML5","CSS3","React Router DOM"],
    link: "https://kings-kitchen-modern-food-delivery.vercel.app/",
    github: "https://github.com/mayureshkadav/Kings-Kitchen-Modern-Food-Delivery-Web-Application",
    caseStudy: "FoodApp",
  },
  {
    name: "AnnotateAI",
    tagline: "AI-powered image annotation workflow for dataset labelling",
    description:
       "Designed and developed during my AI Internship at CMS Info Systems Ltd., AnnotateAI is a web-based platform that simplifies image annotation, dataset management, and AI training data preparation through an intuitive workflow.",
    image: annotation,
    stack: ["React", "JavaScript", "AI", "Annotation"],
    link: "",
    github: "",
    caseStudy: "AI_Annotation",
  },
  {
    name: "Rock Paper Scissors Game",
    tagline: "A simple and interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript.",
    description:
      "A simple and interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript. Players compete against the computer with real-time score tracking, instant game results, and a responsive, user-friendly interface.",
    image: stone_paper_scissor,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://rock-paper-scissors-game-mu-two.vercel.app/",
    github: "https://github.com/mayureshkadav/Rock-Paper-Scissors-Game",
    caseStudy: "Game",
  },
  
];

const SKILLS = [
  {
    category: "Programming",
    items: ["Core Java", "JavaScript (ES6)"],
  },
  {
    category: "Web Technologies",
    items: ["HTML5", "CSS3", "React.js"],
  },
  {
    category: "Database",
    items: ["SQL (Joins, Subqueries, Functions)"],
  },
  {
    category: "Development",
    items: ["OOP", "SDLC", "Git", "GitHub"],
  },
  {
    category: "IDE & Tools",
    items: ["Visual Studio Code", "Eclipse", "IntelliJ IDEA"],
  },
 {
    category: "AI Tools",
    items: ["ChatGPT", "GitHub Copilot", "Cursor AI"],
  },
  {
  category: "Design",
  items: [
    "Figma",
    "UI/UX Design",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Responsive Design"
  ],
},
];

const AWARDS = [
  {
    icon: Trophy,
    title: "ElectroWiz 2025 - 1st Place (Software Category)",
    org: "IETE Student Chapter, Datta Meghe College of Engineering, Airoli",
    year: "2025",
    image: electroviz,
    description:
      "Secured First Place in the Software Category at ElectroWiz 2025, a national-level project competition. Recognized for innovation, technical excellence, and teamwork while representing Team Unity among top engineering participants.",
  },
  {
     icon: Trophy,
  title: "UI/UX Designing & Development Competition - 3rd Place",
  org: "Pillai College of Engineering, Navi Mumbai",
  year: "2024",
    image: uiuxPillaiAward,
    description:
    "Secured 3rd Place in the UI/UX Designing & Development Competition held on September 20–21, 2024. Recognized for creating an innovative, user-centric interface with a strong focus on design thinking, usability, and development.",
  },

  {
    icon: Trophy,
    title: "Ace of Hacks Hackathon 2024 - Winner (Open Innovation)",
    org: "A. C. Patil College of Engineering, Kharghar",
    year: "2024",
    image: acPatilAward,
    description:
      "Won First Place in the Open Innovation track at the Ace of Hacks Hackathon 2024 as part of Team Unity. Recognized for developing an innovative solution through creativity, collaboration, and technical excellence.",
  },

  {
    icon: Trophy,
    title: "Code: Automata Hackathon 2025 - Winner",
    org: "Chhatrapati Shivaji Maharaj Institute of Technology (CSMIT), Panvel",
    year: "2025",
    image: csmuAward,
    description:
      "Secured First Place at the Code: Automata Hackathon 2025 as part of Team Unity. Recognized for developing an innovative solution through teamwork, problem-solving, and technical excellence.",
  },

  {
    icon: Trophy,
    title: "Technovate 2025 - 1st Place (Software Category)",
    org: "Ramrao Adik Institute of Technology (RAIT), DY Patil University, Navi Mumbai",
    year: "2025",
    image: dyPatilAward,
    description:
      "Secured First Place in the Software Category at Technovate 2025. Recognized for innovation, technical implementation, and teamwork while competing against outstanding student projects.",
  },

  {
    icon: Star,
    title: "Excellence & Achievement Felicitation",
    org: "Vishwaniketan's iMEET, University of Mumbai",
    year: "2025",
    image: honourAward,
    description:
      "Honored by Vishwaniketan's iMEET for outstanding academic and technical achievements. This felicitation recognized dedication, consistent performance, and contributions throughout my engineering journey.",
  },

  {
    icon: Trophy,
    title: "VISION 2024 - 1st Place Project Exhibition",
    org: "Vishwaniketan's iMEET, University of Mumbai",
    year: "2024",
    image: vapAward1,
    description:
      "Won First Place at the VISION 2024 Project Exhibition for developing an E-commerce application for raw material procurement, streamlining the tender selection process for large-scale industries.",
  },

  {
    icon: Trophy,
    title: "VISION 2024 - DevOps Project Award",
    org: "Vishwaniketan's iMEET, University of Mumbai",
    year: "2024",
    image: vapAward2,
    description:
      "Recognized for developing a DevOps-driven infrastructure automation solution that streamlined software delivery, improved deployment efficiency, and reduced manual errors.",
  },

  {
    icon: Trophy,
    title: "ViSION 2025 - VAP Best Project Winner",
    org: "Vishwaniketan's iMEET, University of Mumbai",
    year: "2025",
    image: vapAward3,
    description:
      "Won the VAP Best Project award for 'EduScan', a React Native-based educational platform recognized for innovation, technical excellence, and impactful learning solutions.",
  },


  {
   icon: Trophy,
  title: "MPCB Website Redesign Competition - 1st Place",
  org: "Maharashtra Pollution Control Board (MPCB)",
  year: "2024",
    image: uiux,
    description:
    "Won First Place in the Maharashtra Pollution Control Board Website Redesign Competition. Designed an innovative, user-centric website focused on improving accessibility, usability, and digital engagement for environmental awareness initiatives.",
  },

  {
    icon: Trophy,
    title: "Code Dynasty: The Ultimate Tech Challenge - Champion",
    org: "Code Dynasty Tech Challenge",
    year: "2024",
    image: codedynast,
    description:
      "Crowned Champion by securing the highest overall score across Typing Triumph, Code Golf, and Code Coronation. Recognized for coding speed, efficiency, and problem-solving skills.",
  },
];


function PortfolioPage({ scrollTo, menuOpen, setMenuOpen, onOpenCaseStudy }) {
  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <button className="logo-btn" onClick={() => scrollTo("#hero")}>
            Mayuresh Kadav
          </button>

          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <button key={l.label} className="nav-link-btn" onClick={() => scrollTo(l.href)}>
                {l.label}
              </button>
            ))}
            <button className="hire-btn" onClick={() => scrollTo("#contact")}>
              Hire Me
            </button>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <button key={l.label} className="mobile-menu-btn-item" onClick={() => scrollTo(l.href)}>
              {l.label}
            </button>
          ))}
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container">
          <span className="hero-badge">Open to full-time opportunities - 2026 Graduate</span>
          <h1>
            Hi, I'm <span className="hero-accent">Mayuresh </span>Kadav
          </h1>
          <p className="hero-desc">
            Computer Engineering graduate(2026) passionate about building products that solve real problems. I specialise in
            full-stack web development and enjoy turning ideas into polished software.
          </p>
          <p className="hero-edu">B.E Computer Engineering . Vishwaniketan's iMEET . Mumbai University</p>
          {/* <div className="hero-meta">
            <span><Phone size={16} /> +91 7620172187</span>
            <span>Navi Mumbai, Maharashtra</span>
          </div> */}
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo("#projects")}>
              See My Work <ArrowUpRight size={16} />
            </button>
            <button className="btn-secondary" onClick={() => scrollTo("#contact")}>
              Get in Touch
            </button>
          </div>

          <div className="social-row">
            <a href="https://github.com/mayureshkadav" aria-label="GitHub" target="_main"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/mayuresh-kadav-44b606264" aria-label="LinkedIn" target="_main"><Linkedin size={20} /></a>
            <a href="mailto:kadavmayuresh2@gmail.com" aria-label="Email" target="_main"><Mail size={20} /></a>
          </div>
        </div>
      </section>

      <section id="about" className="section-alt">
        <div className="container">
          <div className="about-grid">
            <div>
              <p className="section-label">About Me</p>
              <h2 className="section-title" style={{ marginBottom: "16px" }}>
                Building practical software with clean design and real-world impact
              </h2>
              <p>
                I am a Computer Engineering graduate (2026) from Vishwaniketan's iMEET, University of Mumbai with 6 months of AI internship experience at CMS Info Systems Ltd. During my internship, I worked on AI data annotation, preprocessing, model experimentation, and led the development of an AI-based Image Annotation Tool, gaining hands-on experience in software development and team collaboration.
              </p>
              <p>
                I enjoy transforming ideas into functional, user-friendly applications by combining Core Java, React.js, JavaScript, SQL, HTML, CSS, and UI/UX design. I have built projects ranging from an AR/VR Smart Learning Platform to a Food Ordering Website, and I'm passionate about creating solutions that are both technically robust and visually engaging. I'm currently seeking opportunities where I can continue learning, solve real-world problems, and contribute as a software developer.
              </p>

              <div className="about-stats">
                <div>
                  <p className="stat-num">4+</p>
                  <p className="stat-label">Projects built</p>
                </div>
                <div>
                  <p className="stat-num">2</p>
                  <p className="stat-label">Internships</p>
                </div>
                <div>
                  <p className="stat-num">6+</p>
                  <p className="stat-label">Awards won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="internships">
        <div className="container">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Internships</h2>

          {INTERNSHIPS.map((job, i) => (
            <div className="internship-card" key={i}>
              <div>
                <div className="internship-tag">
                  <Briefcase size={14} />
                  <span>Intern</span>
                </div>
                <h3>{job.company}</h3>
                <p className="internship-role">{job.role}</p>
                <p className="internship-period">{job.period}</p>
                <p className="internship-location">{job.location}</p>
              </div>
              <div>
                <p className="internship-desc">{job.description}</p>
                <div className="tag-list">
                  {job.stack.map((t) => (
                    <span className="tag-chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-alt">
        <div className="container">
          <p className="section-label">Work</p>
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div className="project-card" key={i}>
                <img className="project-image" src={p.image} alt={p.name} />
                <div className="project-body">
                  <h3>{p.name}</h3>
                  <p className="project-tagline">{p.tagline}</p>
                  <p className="project-desc">{p.description}</p>
                  <div className="tag-list" style={{ marginBottom: "12px" }}>
                    {p.stack.map((t) => (
                      <span className="tag-chip" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a className="project-link" href={p.link}>
                      View Project <ArrowUpRight size={14} />
                    </a>
                    {p.caseStudy && (
                      <button
                        className="project-link project-case-study"
                        type="button"
                        onClick={() => onOpenCaseStudy(p.caseStudy)}
                      >
                        Check case study
                      </button>
                    )}
                    <a className="project-code-link" href={p.github}>
                      <Github size={14} /> Code
                    </a >
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <p className="section-label">Technical</p>
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div className="skill-card" key={s.category}>
                <p className="skill-card-title">{s.category}</p>
                <div className="tag-list">
                  {s.items.map((item) => (
                    <span className="tag-chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="awards-section">
  <div className="container">
    <p className="section-label">Recognition</p>
    <h2 className="section-title">Awards &amp; Achievements</h2>
  </div>

  <div className="awards-marquee">
    <div className="awards-track">
      {[...AWARDS, ...AWARDS].map((a, i) => (
        <div className="award-card" key={i}>
          {a.image && (
            <div className="award-image-window">
              <img src={a.image} alt={`${a.title} award`} />
            </div>
          )}
          <div className="award-card-body">
            <div className="award-top">
              <div className="award-icon-wrap">
                {a.icon ? <a.icon size={16} /> : <Star size={16} />}
              </div>
              <span className="award-year">{a.year}</span>
            </div>
            <h3>{a.title}</h3>
            <p className="award-org">{a.org}</p>
            <p className="award-desc">{a.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-inner">
            {/* <p className="section-label">Say hello</p> */}
            <h2 className="section-title">Let's work together</h2>
            <p className="contact-desc">
              I am actively looking for full-time roles. Whether you have a role in mind or
              just want to connect, my inbox is always open.
            </p>

            <div className="contact-buttons">
              <a className="btn-primary" href="mailto:kadavmayuresh2@gmail.com">
                <Mail size={16} /> kadavmayuresh2@gmail.com
              </a>
              <a className="btn-secondary" href="https://www.linkedin.com/in/mayuresh-kadav-44b606264">
                <Linkedin size={16} /> LinkedIn
           </a>
            <a className="btn-secondary" href="tel:+917620172187">
                <Phone size={16} /> +91 7620172187
           </a>
           <a className="btn-secondary" href="">
                <MapPin size={16} /> Navi Mumbai, Maharashtra
           </a>
           
           
              
            </div>

            <div className="contact-socials">
              <a href="https://github.com/mayureshkadav"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/mayuresh-kadav-44b606264"><Linkedin size={20} /></a>
              <a href="mailto:kadavmayuresh2@gmail.com"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="footer-left">
            <p>Mayuresh Kadav · 2026</p>
          </div>

          <div className="footer-right">
            <p>Built with React</p>
            <div className="contact-socials">
              <a href="https://github.com/mayureshkadav" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/mayuresh-kadav-44b606264" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:kadavmayuresh2@gmail.com" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openCaseStudy = (slug) => {
    navigate(`/case-study/${slug}`);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<PortfolioPage scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onOpenCaseStudy={openCaseStudy} />}
        />
        <Route path="/case-study/mentroxr" element={<MentroXR onBack={() => navigate("/")} />} />
        <Route path="/case-study/FoodApp" element={<FoodApp onBack={() => navigate("/")} />} />
        <Route path="/case-study/AI_Annotation" element={<AIAnnotationCaseStudy onBack={() => navigate("/")} />} />
        <Route path="/case-study/Game" element={<Game onBack={() => navigate("/")} />} />
        <Route path="/case-study/wanderai" element={<AIAnnotationCaseStudy onBack={() => navigate("/")} />} />
      </Routes>
    </div>
  );
}