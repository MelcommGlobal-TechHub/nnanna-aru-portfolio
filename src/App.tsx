
import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  Rocket,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    name: "GoNix",
    category: "Platforms",
    description:
      "A creator and innovators economy bringing together digital creators, developers, communities, learning, marketplaces and earning opportunities.",
    tags: ["React", "TypeScript", "Supabase", "Creator Economy"],
    status: "Product platform",
    featured: true,
  },
  {
    name: "GoNix Hybrid AI",
    category: "AI & Education",
    description:
      "A hybrid AI application designed to combine on-device inference with cloud AI fallback, with consent controls and protected cloud access.",
    tags: ["React", "TypeScript", "Firebase AI Logic", "Gemini"],
    status: "Live web deployment",
    link: "https://gonix-hybrid-ai.web.app",
    github: "https://github.com/MelcommGlobal-TechHub/GoNix-Hybrid-AI",
    featured: true,
  },
  {
    name: "GoNix EduPlus",
    category: "AI & Education",
    description:
      "An AI-powered learning experience focused on Nigerian learners, educational support, exam preparation and accessible learning tools.",
    tags: ["React", "Flutter", "Firebase", "Supabase"],
    status: "In development",
    featured: true,
  },
  {
    name: "NEXORA",
    category: "AI & Education",
    description:
      "A multi-engine AI Creator Studio concept for producing videos, music, apps, websites, ebooks, articles, handouts and images.",
    tags: ["AI", "Creator Studio", "Multi-engine"],
    status: "In development",
  },
  {
    name: "AI Africa Learning Hub",
    category: "AI & Education",
    description:
      "A practical AI learning platform built around short tool demonstrations, learning tracks, assessments and certificates.",
    tags: ["AI Learning", "EdTech", "YouTube"],
    status: "Product initiative",
  },
  {
    name: "ARCh101",
    category: "AI & Education",
    description:
      "An AI architecture design product with a planned credit wallet, free-generation allowance and pay-as-you-go generation model.",
    tags: ["AI", "Architecture", "Credit Wallet"],
    status: "In development",
  },
  {
    name: "NaijaLocate / TrustPostcode",
    category: "Platforms",
    description:
      "A Nigerian location and postal infrastructure initiative involving postcode services, geolocation and NIPOST API integration.",
    tags: ["Geolocation", "Postcode", "AI", "Nigeria"],
    status: "In development",
  },
  {
    name: "Jobman Connect",
    category: "Platforms",
    description:
      "A digital employment and job-connection platform concept designed to connect opportunities with people seeking work.",
    tags: ["Web Platform", "Employment"],
    status: "Product initiative",
  },
  {
    name: "SeaGuard AI",
    category: "Industry Solutions",
    description:
      "An AI-focused maritime safety and monitoring solution developed as a specialist innovation and pitch project.",
    tags: ["AI", "Maritime", "Safety"],
    status: "Innovation project",
  },
  {
    name: "AgroPlusAI",
    category: "Industry Solutions",
    description:
      "An agricultural technology initiative exploring how AI can support smarter agricultural services and decision-making.",
    tags: ["AI", "Agriculture"],
    status: "Product initiative",
  },
  {
    name: "AgroConsult",
    category: "Industry Solutions",
    description:
      "An agricultural consulting technology initiative focused on digital access to agricultural information and services.",
    tags: ["Agriculture", "Consulting"],
    status: "Product initiative",
  },
  {
    name: "GreenPlanet",
    category: "Industry Solutions",
    description:
      "An environmental technology initiative focused on sustainability and digitally enabled environmental solutions.",
    tags: ["Environment", "Sustainability"],
    status: "Product initiative",
  },
  {
    name: "OILFIELD BUILDER",
    category: "Experiments",
    description:
      "A skill-based oilfield construction game concept featuring missions, achievements, progression and fair server-validated rewards.",
    tags: ["Game Design", "Rewards", "Competition"],
    status: "Hackathon project",
  },
];

const filters = [
  "All",
  "AI & Education",
  "Platforms",
  "Industry Solutions",
  "Experiments",
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "HTML5",
  "CSS3",
  "Vite",
  "Node.js",
  "Supabase",
  "Firebase",
  "Firebase AI Logic",
  "Git & GitHub",
  "Responsive Web Design",
  "API Integration",
  "AI Application Development",
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">NA</span>
          <span>NNANNA ARU<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-pulse" />
            SOFTWARE ENGINEER · PRODUCT BUILDER
          </div>

          <h1>
            Building digital
            <span className="gradient-text"> experiences</span>
            that solve real problems.
          </h1>

          <p className="hero-description">
            I'm <strong>Nnanna Aru</strong>, a software engineer and technology
            entrepreneur passionate about building useful software, AI-powered
            applications and digital platforms.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="button button-secondary">
              Contact me <Send size={17} />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/MelcommGlobal-TechHub"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/n-aru-8a41b9319/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} /> LinkedIn
            </a>
            <a href="mailto:melcommglobal@gmail.com">
              <Mail size={19} /> Email
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-glow" />
          <div className="photo-frame">
            <img
              src="/images/nnanna-aru-profile.jpg"
              alt="Nnanna Aru, software engineer"
            />
          </div>
          <div className="floating-card floating-top">
            <Sparkles size={17} />
            <span>Building with AI</span>
          </div>
          <div className="floating-card floating-bottom">
            <Code2 size={18} />
            <span>Ideas into software</span>
          </div>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
        </div>
      </section>

      <section className="quick-facts section-wrap">
        <div>
          <span className="fact-icon"><Code2 /></span>
          <span><strong>Software Engineering</strong><small>Web & application development</small></span>
        </div>
        <div>
          <span className="fact-icon"><Rocket /></span>
          <span><strong>Product Building</strong><small>Ideas, prototypes and platforms</small></span>
        </div>
        <div>
          <span className="fact-icon"><Sparkles /></span>
          <span><strong>Applied AI</strong><small>AI-powered digital experiences</small></span>
        </div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading">
          <span className="section-kicker">GET TO KNOW ME</span>
          <h2>Engineer by passion.<br /><span className="gradient-text">Builder by nature.</span></h2>
        </div>

        <div className="about-content">
          <p>
            I enjoy turning ideas into practical digital products. My work
            spans frontend engineering, full-stack product development,
            cloud-connected applications and experiments with artificial
            intelligence.
          </p>
          <p>
            I lead technology initiatives through B12 TechHub and continue
            developing my engineering foundation through formal computer
            science education and the 3MTT technology programme.
          </p>
          <p>
            My goal is to contribute to ambitious engineering teams while
            building products that make technology more useful and accessible.
          </p>
        </div>

        <div className="about-cards">
          <article className="info-card">
            <BriefcaseBusiness />
            <h3>Technology leadership</h3>
            <p>Founder and CEO, B12 TechHub.</p>
          </article>
          <article className="info-card">
            <GraduationCap />
            <h3>Computer Science</h3>
            <p>Federal University of Technology, Owerri.</p>
          </article>
          <article className="info-card">
            <MonitorSmartphone />
            <h3>3MTT programme</h3>
            <p>Technical learning and development.</p>
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-wrap">
          <div className="section-heading projects-heading">
            <span className="section-kicker">SELECTED WORK & INITIATIVES</span>
            <h2>Products, ideas <span className="gradient-text">&amp; innovation.</span></h2>
            <p>
              A growing collection of software products, AI experiments and
              technology initiatives.
            </p>
          </div>

          <div className="filter-list" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter active" : "filter"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-card-top">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-card-bottom">
                  <span className="project-status">{project.status}</span>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}>
                        <Github size={17} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.name} live website`}>
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="projects-note">
            Project descriptions reflect current product directions. Not every
            initiative is a publicly released product.
          </p>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills">
        <div className="section-heading">
          <span className="section-kicker">MY TOOLKIT</span>
          <h2>Technologies I <span className="gradient-text">work with.</span></h2>
          <p>Tools and technologies used across my learning and product work.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill}>
              <Code2 size={17} />
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <span className="section-kicker">LET'S BUILD SOMETHING</span>
          <h2>Have a project or<br /><span className="gradient-text">an opportunity?</span></h2>
          <p>
            I'm interested in meaningful engineering opportunities,
            collaborations and building useful technology.
          </p>
          <a className="button button-primary" href="mailto:melcommglobal@gmail.com">
            Get in touch <ArrowUpRight size={18} />
          </a>
          <div className="contact-links">
            <a href="mailto:melcommglobal@gmail.com"><Mail size={17} /> melcommglobal@gmail.com</a>
            <a href="https://www.linkedin.com/in/n-aru-8a41b9319/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href="https://github.com/MelcommGlobal-TechHub" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">NA</span>
          <span>NNANNA ARU<span className="brand-dot">.</span></span>
        </a>
        <p>Designed and built with purpose. © {new Date().getFullYear()} Nnanna Aru.</p>
        <a href="#home" className="back-top">Back to top <ArrowDown size={15} /></a>
      </footer>
    </main>
  );
}

export default App;


