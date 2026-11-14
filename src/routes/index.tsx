import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";
import portraitAsset from "@/assets/oussama-portrait.png.asset.json";

const services = [
  { number: "01", title: "AI Automation", description: "Intelligent workflows that remove repetitive work, reduce manual errors, and give teams more room to focus." },
  { number: "02", title: "Workflow Automation", description: "Connected n8n workflows that bring your tools together and keep everyday operations moving." },
  { number: "03", title: "AI Agents & Chatbots", description: "Context-aware assistants and autonomous agents built to answer questions and handle real tasks." },
  { number: "04", title: "Machine Learning", description: "Practical machine learning and computer-vision solutions shaped around your data and goals." },
  { number: "05", title: "LLM Integration", description: "Useful GPT, Claude, and other language-model experiences integrated into the products you already use." },
];

const projects = [
  { number: "01", title: "Café 38 Concept", category: "Web design · Hospitality", description: "An inviting digital home for an artisanal café in Ourika, with an interactive menu, gallery, reviews, and contact experience.", impact: "A complete digital presence for a local destination.", image: "/images/portfolio/cafe-38.jpg", imageAlt: "Café 38 website preview", tags: ["React", "Tailwind CSS", "Web design"], link: "https://cafe-38-concept.vercel.app/", linkLabel: "Visit website" },
  { number: "02", title: "La Datte d'Or", category: "Brand website · E-commerce", description: "A polished brand experience for a premium date business, pairing product storytelling with a considered customer journey.", impact: "A distinctive digital storefront for a premium brand.", image: "/images/portfolio/datte-dor.png", imageAlt: "La Datte d'Or website preview", tags: ["React", "Tailwind CSS", "Branding"], link: "https://desert-palette-project.vercel.app/", linkLabel: "Visit website" },
  { number: "03", title: "Oil Kamo", category: "Brand website · Product", description: "An elegant showcase for premium oils, created to present the products clearly and build a memorable online presence.", impact: "A refined product experience built for discovery.", image: "/images/portfolio/oil-kamo.png", imageAlt: "Oil Kamo website preview", tags: ["React", "Tailwind CSS", "Branding"], link: "https://oil-kamo.vercel.app/", linkLabel: "Visit website" },
  { number: "04", title: "Customer Support Agent", category: "AI automation · Customer experience", description: "An AI-assisted support workflow that classifies incoming messages and prepares contextual responses using connected AI services.", impact: "Helps teams handle common inquiries more efficiently.", image: "/images/portfolio/ai-support.png", imageAlt: "AI customer support automation workflow", tags: ["n8n", "AI APIs", "Webhooks", "Gemini"] },
  { number: "05", title: "AI Workflow System", category: "AI automation · Operations", description: "A connected automation workflow with AI agents, scheduled triggers, and Google Sheets for processing and updating information.", impact: "Less repetitive data handling across connected tools.", image: "/images/portfolio/n8n-workflow.png", imageAlt: "AI automation workflow built with n8n", tags: ["n8n", "AI agents", "Google Sheets"] },
  { number: "06", title: "Knowledge Base Chatbot", category: "AI · RAG", description: "A retrieval-augmented assistant that searches internal documents and uses relevant sources to answer questions.", impact: "Faster access to answers across internal knowledge.", image: "/images/portfolio/rag-chatbot.png", imageAlt: "Retrieval-augmented knowledge base chatbot workflow", tags: ["RAG", "Pinecone", "Gemini", "Telegram"] },
];

const skills = [
  { title: "AI & Data", items: ["OpenCV", "Machine learning", "Generative AI", "AI agents", "Computer vision", "RAG"] },
  { title: "Automation", items: ["n8n", "Workflow design", "APIs", "Webhooks", "AI integration"] },
  { title: "Cloud & DevOps", items: ["Azure", "Azure DevOps", "GitHub", "Docker", "Linux"] },
  { title: "Languages", items: ["Python", "JavaScript", "SQL", "C / C++"] },
];

const certificates = [
  { title: "n8n Basics: Triggers, APIs, and Logic Nodes", issuer: "SYNRA", date: "January 2, 2026", detail: "1 hour · SYNRA-L228RMJT", image: "/images/portfolio/cert-n8n.jpg", alt: "n8n Basics certificate" },
  { title: "Agile in AI Development", issuer: "Agile B Darija", date: "March 6, 2026", detail: "Workshop · AGILE-BOOTCAMP-AI-2026", image: "/images/portfolio/cert-ai-agile.png", alt: "Agile in AI Development certificate" },
  { title: "L'Agile, ce n'est pas ‘aller vite’", issuer: "Agile B Darija", date: "March 13, 2026", detail: "Workshop · AGILE-BOOTCAMP-AV-2026", image: "/images/portfolio/cert-agile.png", alt: "Agile bootcamp certificate" },
  { title: "L'Agilité : la compétence clé du futur", issuer: "Agile B Darija", date: "March 11, 2026", detail: "RANADAB-SOFT-SKILLS-2026", image: "/images/portfolio/cert-soft-skills.png", alt: "Soft skills certificate" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oussama Abdeljebbar — AI & Automation Engineer" },
      { name: "description", content: "Oussama Abdeljebbar builds practical AI, automation, and web experiences in Morocco." },
      { property: "og:title", content: "Oussama Abdeljebbar — AI & Automation Engineer" },
      { property: "og:description", content: "AI, workflow automation, and web projects by Oussama Abdeljebbar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Oussama Abdel home"><span>Oussama Abdel</span><small>AI & Automation Engineer</small></a>
        <nav className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-contact" href="mailto:oussamaabdel889@gmail.com">Let's talk <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="intro" id="home">
        <div className="intro-meta"><span><i className="availability-dot" /> Available for select projects</span><span>Morocco · UTC+1</span></div>
        <div className="intro-main">
          <div className="intro-copy">
            <p className="eyebrow"><span className="eyebrow-line" />Independent AI & automation engineer</p>
            <h1>Building<br />useful <span className="serif-accent">intelligence.</span></h1>
            <p className="intro-lede">I design and build thoughtful AI automations, intelligent systems, and web experiences that make good ideas work in the real world.</p>
            <div className="intro-actions"><a className="text-link" href="#work">Explore selected work <ArrowDown size={15} /></a><a className="text-link subtle-link" href="https://github.com/oussamarca" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={14} /></a></div>
          </div>
          <figure className="portrait-frame"><img src={portraitAsset.url} alt="Portrait of Oussama Abdeljebbar" /><figcaption><span>Oussama Abdeljebbar</span><span>Builder · Problem solver</span></figcaption></figure>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to discover</span><ArrowDown size={14} /></a>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curiosity,<br /><span className="serif-accent">put to work.</span></h2></div>
        <div className="about-copy"><p className="about-lede">Technology should solve real problems. I bring AI, automation, and software together to create tools people can actually use.</p><p>From connecting business workflows to exploring computer vision and generative AI, I enjoy turning a rough idea into a clear, working experience. My approach is hands-on, considered, and always grounded in the people on the other side of the screen.</p><p>Based in Morocco, open to meaningful collaborations everywhere.</p><div className="about-note"><span className="note-star">✳</span><span>Human-focused.<br />Curious by design.</span></div></div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading"><span className="section-index">02 / WHAT I DO</span><h2>Where I can<br /><span className="serif-accent">make a difference.</span></h2><p className="section-intro">A considered mix of intelligent automation, useful AI, and thoughtful engineering.</p></div>
        <div className="service-list">{services.map((item) => <article className="service-row" key={item.number}><span className="row-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><ArrowUpRight className="row-arrow" size={17} /></article>)}</div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="work-heading"><div><span className="section-index">03 / SELECTED WORK</span><h2>Made to be <span className="serif-accent">useful.</span></h2></div><p>A selection of digital experiences and intelligent systems built around real needs.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-item" key={project.number}><a className="project-image-link" href={project.link ?? "#contact"} target={project.link ? "_blank" : undefined} rel={project.link ? "noreferrer" : undefined} aria-label={`${project.title} project preview`}><img className="project-image" src={project.image} alt={project.imageAlt} loading="lazy" /><span className="image-index">{project.number}</span><span className="image-open"><ArrowUpRight size={18} /></span></a><div className="project-meta"><span>{project.category}</span><span>PROJECT {project.number}</span></div><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-impact"><span>Outcome</span>{project.impact}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}<ArrowUpRight size={14} /></a>}</article>)}</div>
        <div className="github-note"><span><Github size={18} /> Exploring beyond the portfolio</span><a className="text-link" href="https://github.com/oussamarca" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="section-heading"><span className="section-index">04 / TOOLKIT</span><h2>The tools behind<br /><span className="serif-accent">the thinking.</span></h2><p className="section-intro">The right tools for the problem, not the other way around.</p></div>
        <div className="skills-grid">{skills.map((group, index) => <article className="skill-group" key={group.title}><span className="row-number">0{index + 1}</span><h3>{group.title}</h3><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="cert-section section-pad" id="certifications">
        <div className="work-heading"><div><span className="section-index">05 / CONTINUOUS LEARNING</span><h2>Always <span className="serif-accent">learning.</span></h2></div><p>Selected courses and workshops along the way.</p></div>
        <div className="cert-list">{certificates.map((certificate, index) => <article className="cert-row" key={certificate.title}><span className="row-number">0{index + 1}</span><img src={certificate.image} alt={certificate.alt} loading="lazy" /><div className="cert-info"><h3>{certificate.title}</h3><p>{certificate.issuer} <span>·</span> {certificate.date}</p><small>{certificate.detail}</small></div><a className="cert-open" href={certificate.image} target="_blank" rel="noreferrer" aria-label={`View ${certificate.title}`}><ArrowUpRight size={17} /></a></article>)}</div>
      </section>

      <section className="contact-section section-pad" id="contact"><div className="contact-top"><span className="section-index">06 / START A CONVERSATION</span><span className="contact-location"><i className="availability-dot" /> Open to select collaborations</span></div><h2>Have something<br />good in <span className="serif-accent">mind?</span></h2><a className="contact-cta" href="mailto:oussamaabdel889@gmail.com"><span>Tell me about it</span><ArrowUpRight size={19} /></a><div className="contact-bottom"><p>New ideas, ambitious projects, or a simple hello — my inbox is open.</p><a className="contact-email" href="mailto:oussamaabdel889@gmail.com">oussamaabdel889@gmail.com <ArrowUpRight size={14} /></a></div></section>

      <footer className="site-footer"><a className="wordmark" href="#home"><span>Oussama Abdel</span><small>Built with intention · Morocco</small></a><div className="social-links"><a href="https://www.linkedin.com/in/oussama-abdel-jebbar-8784b037b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/oussamarca" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="mailto:oussamaabdel889@gmail.com" aria-label="Email"><Mail size={17} /></a></div><a className="back-top" href="#home">Back to top <MoveUpRight size={14} /></a><span className="copyright">© 2026</span></footer>
    </main>
  );
}