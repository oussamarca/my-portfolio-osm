import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import portraitAsset from "@/assets/oussama-portrait.png.asset.json";

const services = [
  { number: "01", title: "Web Development", description: "Responsive websites and clear user experiences built with HTML, CSS, JavaScript, and modern frontend tools." },
  { number: "02", title: "Python Development", description: "Practical Python scripts and small applications that help simplify everyday tasks and data handling." },
  { number: "03", title: "n8n Workflow Automation", description: "Connected workflows that link apps, APIs, and everyday business processes while reducing repetitive work." },
  { number: "04", title: "REST API Integration", description: "Useful integrations that connect services, exchange data, and make separate tools work together." },
];

const projects = [
  { number: "01", title: "Café 38 Concept", category: "Web development · Hospitality", description: "A website concept for an artisanal café in Ourika, with an interactive menu, gallery, reviews, and contact experience.", impact: "A complete digital presence for a local destination.", image: "/images/portfolio/cafe-38.jpg", imageAlt: "Café 38 website preview", tags: ["React", "Tailwind CSS", "Web design"], link: "https://cafe-38-concept.vercel.app/", linkLabel: "Visit website" },
  { number: "02", title: "La Datte d'Or", category: "Website concept · E-commerce", description: "A brand website concept for a premium date business, combining product storytelling with a clear customer journey.", impact: "A digital storefront concept for a premium brand.", image: "/images/portfolio/datte-dor.png", imageAlt: "La Datte d'Or website preview", tags: ["React", "Tailwind CSS", "Branding"], link: "https://desert-palette-project.vercel.app/", linkLabel: "Visit website" },
  { number: "03", title: "Oil Kamo", category: "Website concept · Product", description: "A product showcase concept for premium oils, designed to present products clearly and build an online presence.", impact: "A focused product experience built for discovery.", image: "/images/portfolio/oil-kamo.png", imageAlt: "Oil Kamo website preview", tags: ["React", "Tailwind CSS", "Branding"], link: "https://oil-kamo.vercel.app/", linkLabel: "Visit website" },
  { number: "04", title: "Customer Support Workflow", category: "Automation · Customer experience", description: "An n8n workflow concept that classifies incoming messages and prepares contextual responses using connected AI services.", impact: "Demonstrates how common support steps can be streamlined.", image: "/images/portfolio/ai-support.png", imageAlt: "AI customer support automation workflow", tags: ["n8n", "REST APIs", "Webhooks", "Gemini"] },
  { number: "05", title: "n8n Automation Workflow", category: "Workflow automation · Operations", description: "A workflow using triggers, connected services, and Google Sheets to process and update information.", impact: "Demonstrates practical automation between connected tools.", image: "/images/portfolio/n8n-workflow.png", imageAlt: "Automation workflow built with n8n", tags: ["n8n", "APIs", "Google Sheets"] },
  { number: "06", title: "Knowledge Base Chatbot", category: "Chatbot concept · RAG", description: "A retrieval-augmented chatbot concept that searches documents and uses relevant information to answer questions.", impact: "Explores a practical way to make documents easier to search.", image: "/images/portfolio/rag-chatbot.png", imageAlt: "Knowledge base chatbot workflow", tags: ["RAG", "Pinecone", "Gemini", "Telegram"] },
];

const skills = [
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Programming", items: ["Python", "SQL"] },
  { title: "Automation & APIs", items: ["n8n", "REST APIs", "Webhooks", "Workflow automation"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Linux"] },
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
      { title: "Oussama Abdeljebbar | Junior Web Developer & Python Automation" },
      { name: "description", content: "Explore the projects and learning journey of Oussama Abdeljebbar, a junior web developer in Morocco working with HTML, CSS, JavaScript, Python, n8n, REST APIs, Git, and SQL." },
      { property: "og:title", content: "Oussama Abdeljebbar | Junior Web Developer & Python Automation" },
      { property: "og:description", content: "Web development, Python projects, and n8n workflow automation by Oussama Abdeljebbar in Morocco." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://my-portfolio-osm.vercel.app/" },
      { property: "og:image", content: "https://my-portfolio-osm.vercel.app/images/portfolio/portrait.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oussama Abdeljebbar | Junior Web Developer & Python Automation" },
      { name: "twitter:description", content: "Web development, Python projects, and n8n workflow automation by Oussama Abdeljebbar." },
      { name: "twitter:image", content: "https://my-portfolio-osm.vercel.app/images/portfolio/portrait.png" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Oussama Abdel home"><span>Oussama Abdel</span><small>Junior Web Developer</small></a>
        <nav className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-contact" href="mailto:abdeljebbaroussama51@gmail.com">Let's talk <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="intro" id="home">
        <div className="intro-meta"><span><i className="availability-dot" /> Open to internships & junior opportunities</span><span>Morocco · UTC+1</span></div>
        <div className="intro-main">
          <div className="intro-copy">
            <p className="eyebrow"><span className="eyebrow-line" />Junior Web Developer · Python & n8n Automation</p>
            <h1>Building<br />useful <span className="serif-accent">digital tools.</span></h1>
            <p className="intro-lede">I build responsive web experiences and practical automations using HTML, CSS, JavaScript, Python, n8n, and REST APIs. I’m growing through hands-on projects and open to internships and remote junior opportunities.</p>
            <div className="intro-actions"><a className="text-link" href="#work">Explore selected work <ArrowDown size={15} /></a><a className="text-link subtle-link" href="https://github.com/oussamarca" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={14} /></a></div>
          </div>
          <figure className="portrait-frame"><img src={portraitAsset.url} alt="Portrait of Oussama Abdeljebbar" /></figure>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to discover</span><ArrowDown size={14} /></a>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curiosity,<br /><span className="serif-accent">put to work.</span></h2></div>
        <div className="about-copy"><p className="about-lede">I’m a junior developer focused on building useful websites and automating repetitive tasks.</p><p>I work with HTML, CSS, JavaScript, Python, n8n, REST APIs, Git, and SQL. I enjoy learning by building, understanding how systems connect, and turning practical ideas into working projects.</p><p>Based in Morocco and interested in internships, entry-level roles, and remote junior opportunities.</p><div className="about-note"><span className="note-star">✳</span><span>Hands-on learner.<br />Focused on useful work.</span></div></div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading"><span className="section-index">02 / WHAT I WORK ON</span><h2>Practical skills,<br /><span className="serif-accent">real applications.</span></h2><p className="section-intro">Areas I’m actively building projects and experience in.</p></div>
        <div className="service-list">{services.map((item) => <article className="service-row" key={item.number}><span className="row-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><ArrowUpRight className="row-arrow" size={17} /></article>)}</div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="work-heading"><div><span className="section-index">03 / SELECTED WORK</span><h2>Learning by <span className="serif-accent">building.</span></h2></div><p>Web projects and automation experiments that show what I can build and what I’m learning next.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-item" key={project.number}><Dialog><DialogTrigger asChild><Button variant="ghost" className="project-image-link" aria-label={`View larger image: ${project.title}`}><img className="project-image" src={project.image} alt={project.imageAlt} loading="lazy" /><span className="image-index">{project.number}</span><span className="image-open"><ArrowUpRight size={18} /></span></Button></DialogTrigger><DialogContent className="project-lightbox"><DialogTitle className="sr-only">{project.title}</DialogTitle><img src={project.image} alt={project.imageAlt} /><p>{project.title}</p></DialogContent></Dialog><div className="project-meta"><span>{project.category}</span><span>PROJECT {project.number}</span></div><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-impact"><span>Project focus</span>{project.impact}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}<ArrowUpRight size={14} /></a>}</article>)}</div>
        <div className="github-note"><span><Github size={18} /> More code and experiments</span><a className="text-link" href="https://github.com/oussamarca" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="section-heading"><span className="section-index">04 / TOOLKIT</span><h2>Tools I use<br /><span className="serif-accent">and keep learning.</span></h2><p className="section-intro">A practical toolkit for web projects, scripting, and connected workflows.</p></div>
        <div className="skills-grid">{skills.map((group, index) => <article className="skill-group" key={group.title}><span className="row-number">0{index + 1}</span><h3>{group.title}</h3><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="cert-section section-pad" id="certifications">
        <div className="work-heading"><div><span className="section-index">05 / CERTIFICATIONS</span><h2>Learning, <span className="serif-accent">step by step.</span></h2></div><p>Selected certificates and workshops, with the original images available to view.</p></div>
        <div className="cert-list">{certificates.map((certificate, index) => <article className="cert-row" key={certificate.title}><span className="row-number">0{index + 1}</span><a href={certificate.image} target="_blank" rel="noreferrer" aria-label={`Open certificate: ${certificate.title}`}><img src={certificate.image} alt={certificate.alt} loading="lazy" /></a><div className="cert-info"><h3>{certificate.title}</h3><p>{certificate.issuer} <span>·</span> {certificate.date}</p><small>{certificate.detail}</small></div><a className="cert-open" href={certificate.image} target="_blank" rel="noreferrer" aria-label={`View ${certificate.title}`}><ArrowUpRight size={17} /></a></article>)}</div>
      </section>

      <section className="contact-section section-pad" id="contact"><div className="contact-top"><span className="section-index">06 / GET IN TOUCH</span><span className="contact-location"><i className="availability-dot" /> Open to internships & junior roles</span></div><h2>Let’s build<br />something <span className="serif-accent">useful.</span></h2><a className="contact-cta" href="mailto:abdeljebbaroussama51@gmail.com?subject=Internship%20or%20Junior%20Opportunity"><span>Contact me</span><ArrowUpRight size={19} /></a><div className="contact-bottom"><p>Interested in an internship, junior opportunity, collaboration, or simply connecting.</p><a className="contact-email" href="mailto:abdeljebbaroussama51@gmail.com">abdeljebbaroussama51@gmail.com <ArrowUpRight size={14} /></a></div></section>

      <footer className="site-footer"><a className="wordmark" href="#home"><span>Oussama Abdel</span><small>Junior Web Developer · Morocco</small></a><div className="social-links"><a href="https://www.linkedin.com/in/oussama-abdel-jebbar-8784b037b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/oussamarca" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="mailto:abdeljebbaroussama51@gmail.com" aria-label="Email"><Mail size={17} /></a></div><a className="back-top" href="#home">Back to top <MoveUpRight size={14} /></a><span className="copyright">© 2026</span></footer>
    </main>
  );
}
