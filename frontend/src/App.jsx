import { useEffect, useState } from 'react';
import { skills as sampleSkills, projects as sampleProjects, certificates as sampleCertificates } from './data';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function App() {
  const [projects, setProjects] = useState(sampleProjects);
  const [skills, setSkills] = useState(sampleSkills);
  const [certificates, setCertificates] = useState(sampleCertificates);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`${API}/api/projects`).then(r => r.ok ? r.json() : Promise.reject()).then(data => {
      if (data.length) setProjects(data);
    }).catch(() => {});
    fetch(`${API}/api/skills`).then(r => r.ok ? r.json() : Promise.reject()).then(data => {
      if (data.length) setSkills(data);
    }).catch(() => {});
    fetch(`${API}/api/certificates`).then(r => r.ok ? r.json() : Promise.reject()).then(data => {
      if (data.length) setCertificates(data);
    }).catch(() => {});
  }, []);

  async function submitContact(e) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch(`${API}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to send message.');
      setStatus('Thank you! Your message was submitted.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Could not send. Make sure the back-end and database are running.');
    }
  }

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">MyPortfolio<span>.</span></a>
        <nav>
          {['About','Skills','Projects','Education','Certificates','Contact'].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          )}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Micko P. Watson</h1>
            <h2>IT Student & Aspiring Web Developer</h2>
            <p>I am an IT student who enjoys learning about web development, programming, and database management. This portfolio shows my skills and the projects I have worked on.</p>
            <div className="actions">
              <a className="button primary" href="#projects">View My Projects</a>
              <a className="button secondary" href="#contact">Contact Me</a>
            </div>
          </div>
          <img 
  src="/profile.jpg.jpg" 
  alt="Profile Photo" 
  className="profile-img" 
/>
        </section>

        <section id="about" className="section">
          <SectionTitle eyebrow="GET TO KNOW ME" title="About Me" />
          <div className="about-card">
            <p>Hello! I am an Information Technology student. I am interested in learning how websites and computer systems work. I am still improving my programming skills through school activities and personal projects.</p>
            <p>My goal is to gain more experience, improve my technical knowledge, and prepare for an internship or future work in the IT industry.</p>
          </div>
        </section>

        <section id="skills" className="section muted">
          <SectionTitle eyebrow="WHAT I CAN DO" title="My Skills" text="These are some of the technical and soft skills I am learning and practicing." />
          <div className="card-grid">
            {skills.map((skill, i) => <article className="mini-card" key={`${skill.name}-${i}`}><span className="tag">{skill.type}</span><h3>{skill.name}</h3></article>)}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle eyebrow="MY WORK" title="Projects" text="Some school and personal projects I have worked on or proposed." />
          <div className="card-grid">
            {projects.map((project, i) => <article className="project-card" key={project.id || `${project.title}-${i}`}><span className="project-number">PROJECT 0{i + 1}</span><h3>{project.title}</h3><p>{project.description}</p><span className="tag">{project.technology}</span></article>)}
          </div>
        </section>

        <section id="education" className="section muted">
          <SectionTitle eyebrow="MY BACKGROUND" title="Education" />
          <article className="timeline-card"><span className="tag">CURRENT</span><h3>Bachelor of Science in Information Technology</h3><p>Laguna State Polytechnic University – Siniloan Campus</p><p className="muted-text">3rd year major in Service Management Program</p></article>
          <article className="timeline-card"><h3>Senior High School</h3><p>Siniloan Integrated National High School, ICT</p></article>
        </section>

        <section id="certificates" className="section">
          <SectionTitle eyebrow="LEARNING AND GROWTH" title="Certificates & Achievements" />
          <div className="card-grid">
            {certificates.map((item, i) => <article className="mini-card" key={item.id || i}><h3>{item.title}</h3><p>{item.issuer}</p></article>)}
          </div>
          <p className="hint"></p>
        </section>

        <section id="resume" className="section resume-section">
          <SectionTitle eyebrow="MY EXPERIENCE AND DETAILS" title="Résumé / CV" text="You can add your résumé as a PDF file in the frontend/public folder." />
          <a className="button primary" href="/resume.pdf" target="_blank" rel="noreferrer">View / Download Résumé</a>
          <p className="hint"></p>
        </section>

        <section id="contact" className="section muted">
          <SectionTitle eyebrow="LET'S CONNECT" title="Contact Me" text="Send a message using the form below." />
          <form className="contact-form" onSubmit={submitContact}>
            <label>Micko Watson<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Enter your name" /></label>
            <label>micko.watson@lspu.edu.ph<input required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="Enter your email" /></label>
            <label><textarea required rows="5" value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Write your message" /></label>
            <button className="button primary" type="submit">Send Message</button>
            {status && <p role="status" className="status">{status}</p>}
          </form>
        </section>
      </main>

      <footer><a className="brand" href="#home">MyPortfolio<span>.</span></a><p>My Personal Portfolio</p></footer>
    </>
  );
}
