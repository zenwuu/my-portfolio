import { useState, useEffect } from "react";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import "./App.css";

// ✏️ Edit your info here
const NAME = "Rovic";
const stats = [
  ["4+", "Years experience"],
  ["50+", "Projects completed"],
  ["30+", "Happy clients"],
  ["100%", "Client satisfaction"],
];
const skills = [
  { name: "HTML", pct: 95, Icon: FaHtml5, color: "#e34f26" },
  { name: "React.js", pct: 85, Icon: FaReact, color: "#61dafb" },
  { name: "Node.js", pct: 80, Icon: FaNodeJs, color: "#339933" },
  { name: "CSS", pct: 90, Icon: FaCss3Alt, color: "#1572b6" },
  { name: "Next.js", pct: 80, Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind", pct: 90, Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "JavaScript", pct: 90, Icon: FaJs, color: "#f7df1e" },
  { name: "TypeScript", pct: 85, Icon: SiTypescript, color: "#3178c6" },
  { name: "Git", pct: 85, Icon: FaGitAlt, color: "#f05032" },
];
const tech = [
  { name: "HTML", Icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", Icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "Git", Icon: FaGitAlt, color: "#f05032" },
];
const projects = [
  { title: "Catpuccino", desc: "Cute website for a coffee shop", link: "#" },
  { title: "SmartWatts", desc: "Smart home energy management system", link: "#" },
  { title: "PumpQ", desc: "Convenience-Driven Unified Mobile Platform for Quick-Road Services", link: "#" },
];

function useTyping(text, speed = 90) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= text.length) return;
    const timer = setTimeout(() => setCount(count + 1), speed);
    return () => clearTimeout(timer);
  }, [count, text, speed]);

  return text.slice(0, count);
}

export default function App() {

  const line1 = "Hi, I'm ";
  const line2 = "I build things for the web.";
  const typed = useTyping(line1 + NAME + line2, 90);

  const before = typed.slice(0, line1.length);
  const namePart = typed.slice(line1.length, line1.length + NAME.length);
  const rest = typed.slice(line1.length + NAME.length);
  const onLine1 = rest.length === 0;
  return (
    <>
      <header className="nav">
        <a href="#home" className="logo">
          <img src="/logo.png" alt="Rovic logo" />
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn">Hire Me</a>
      </header>

      <section id="home" className="hero wrap">
        <div>
          <span className="tag">I'M A WEB DEVELOPER</span>
          <h1>
            {before}<span className="accent">{namePart}</span>
            {onLine1 && <span className="cursor" />}
            <br />
            {rest}
            {!onLine1 && <span className="cursor" />}
          </h1>
          <p className="muted">
            I'm a passionate web developer specializing in building exceptional
            digital experiences with modern technologies.
          </p>
          <div className="row">
            <a href="#projects" className="btn">View My Work</a>
            <a href="/cv.pdf" className="btn ghost">Download CV</a>
          </div>
          <p className="small muted">TECHNOLOGIES I WORK WITH</p>
          <div className="row">
            {tech.map(({ name, Icon, color }) => (
              <span key={name} className="chip" title={name}>
                <Icon size={26} color={color} />
              </span>
            ))}
          </div>
        </div>

        <div className="photo-wrap">
          <div className="circle" />
          <img src="/ramos.png" alt="Rovic" className="me" />
          <pre className="code">{`const developer = {
  name: "${NAME}",
  skills: ["HTML", "CSS",
    "JavaScript", "React"],
  passion: "Building things
    for the web"
};`}</pre>
        </div>
      </section>

      <section id="about" className="band">
        <div className="wrap two">
          <div>
            <span className="tag">ABOUT ME</span>
            <h2>I'm passionate about creating digital solutions</h2>
            <p className="muted">
              With 4+ years of experience in web development, I help businesses
              and individuals bring their ideas to life through clean, efficient,
              and user-friendly code.
            </p>
            <a href="#contact" className="btn ghost">Learn More About Me</a>
          </div>
          <div className="stats">
            {stats.map(([n, l]) => (
              <div key={l}><strong>{n}</strong><span className="muted">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="wrap center">
        <span className="label">MY SKILLS</span>
        <h2>Technologies I Master</h2>
        <div className="skills">
          {skills.map(({ name, pct, Icon, color }) => (
            <div key={name}>
              <div className="skill-head">
                <span className="skill-name">
                  <Icon size={20} color={color} /> {name}
                </span>
                <span>{pct}%</span>
              </div>
              <div className="bar"><i style={{ width: pct + "%" }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="band center">
        <div className="wrap">
          <span className="label">FEATURED PROJECTS</span>
          <h2>Some of My Recent Work</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <article key={p.title} className="card">
                <div className={"thumb t" + i} />
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p className="muted">{p.desc}</p>
                  <a href={p.link}>View Project ↗</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="wrap three">
        <div>
          <span className="label">LET'S WORK TOGETHER</span>
          <h2>Have a project in mind?</h2>
          <p className="muted">I'm always open to discussing new projects and opportunities.</p>
          <a href="jhonrovic7@gmail.com" className="btn">Get In Touch</a>
        </div>
        <blockquote className="quote">
          “I'm a full-stack web developer who builds fast, clean, and responsive apps with React and Node.js, from coffee shop websites to smart energy systems.”
        </blockquote>
        <div>
          <span className="label">FOLLOW ME</span>
          <p><a href="#">GitHub</a> · <a href="#">LinkedIn</a> · <a href="#">Twitter</a></p>
          <p className="muted">jhonrovic7@gmail.com<br />+63 9099735227</p>
        </div>
      </section>

      <footer className="foot wrap small muted">
        © {new Date().getFullYear()} {NAME} Developer. All rights reserved.
      </footer>
    </>
  );
}