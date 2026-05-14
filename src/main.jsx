import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  Mail,
  MapPin,
  MonitorCog,
  Network,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRoundCheck,
  Wrench
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Alexander Martinez',
  title: 'IT Support • Full-Stack Developer • Customer Success Professional',
  location: 'London, Ontario',
  email: 'Xandernez20ae@gmail.com',
  phone: '+1 (905) 719-8092',
  github: 'https://github.com/YOUR-GITHUB-HERE',
  linkedin: 'https://linkedin.com/in/YOUR-LINKEDIN-HERE',
  resumeFile: '/Alexander-Martinez-Resume.pdf'
};

const metrics = [
  { label: 'Years in IT & Customer Support', value: '10+' },
  { label: 'Support Ticket Reduction', value: '20%' },
  { label: 'First-Contact Resolution', value: '90%' },
  { label: 'Tech Issue Reduction', value: '30%' }
];

const highlights = [
  {
    icon: <MonitorCog />,
    title: 'IT Support & Systems',
    text: 'Hands-on experience supporting computers, printers, networks, Windows/Linux environments, system maintenance, and user training.'
  },
  {
    icon: <Code2 />,
    title: 'Full-Stack Development',
    text: 'Builds responsive web platforms with React, WordPress, PHP, SQL, Firebase, REST APIs, and clean UI/UX workflows.'
  },
  {
    icon: <Smartphone />,
    title: 'Mobile & Low-Code Apps',
    text: 'Experience with FlutterFlow, Flutter, Dart, React Native, Firebase Auth, Firestore, dashboards, and smart onboarding flows.'
  },
  {
    icon: <UserRoundCheck />,
    title: 'Customer Success',
    text: 'Strong background in telecom support, retention, billing coordination, technical troubleshooting, and client communication.'
  }
];

const experience = [
  {
    company: 'GreenPass Immigration Inc.',
    role: 'Full-Stack Developer (Part-time)',
    period: 'March 2025 – Present',
    location: 'Remote',
    bullets: [
      'Architected and maintained a multi-role Super App for students, immigration clients, agents, tutors, schools, and partner organizations.',
      'Engineered GreenPass Immigration, a web platform for immigration, real estate, and job-related services across Canada, North Cyprus, Turkey, and Dubai.',
      'Developed GreenPass Group mobile app workflows in FlutterFlow and Firebase with smart onboarding, real-time bookings, and dashboards.',
      'Handled WordPress content management with custom PHP and SQL integrations to improve platform efficiency.',
      'Reduced support requests by 20% through clearer documentation, optimized workflows, and user-focused onboarding.'
    ]
  },
  {
    company: 'VXI Global Solutions',
    role: 'Customer Services Agent',
    period: 'July 2022 – January 2023',
    location: 'Pasay City, Philippines',
    bullets: [
      'Supported DirecTV and AT&T Fiber customers with technical, billing, service, and retention concerns.',
      'Achieved a 90% first-contact resolution rate by listening carefully and resolving issues efficiently.',
      'Exceeded sales and retention goals by matching customers with relevant service solutions.',
      'Shared best practices with colleagues and helped improve call resolution efficiency by 15%.'
    ]
  },
  {
    company: 'Alorica Inc.',
    role: 'Customer Experience Agent',
    period: 'November 2021 – June 2022',
    location: 'Makati City, Philippines',
    bullets: [
      'Retained customers through empathy, clear communication, and solution-focused conversations.',
      'Worked with billing and technical teams to resolve complex cases quickly and professionally.',
      'Consistently exceeded retention goals and maintained strong customer satisfaction performance.'
    ]
  },
  {
    company: 'Memorare Academe of Cavite',
    role: 'Computer and Network Technician',
    period: 'May 2009 – September 2020',
    location: 'Imus City, Cavite',
    bullets: [
      'Installed, maintained, upgraded, and troubleshot computers, printers, and network systems for faculty and staff.',
      'Created preventive maintenance plans that reduced recurring technical issues by 30%.',
      'Trained staff on effective system usage, improving productivity and reducing downtime.'
    ]
  }
];

const projects = [
  {
    title: 'GreenPass Immigration – Web Platform',
    url: 'https://www.greenpassimmigration.com',
    stack: ['React/WordPress', 'PHP', 'SQL', 'Responsive UI', 'Secure workflows'],
    summary: 'A global service platform supporting immigration, real estate, and job-related services for multiple countries.',
    bullets: [
      'Designed responsive UI/UX to simplify navigation for users and partners.',
      'Integrated country-specific workflows and secure application handling.',
      'Managed the project from concept to deployment with scalability in mind.'
    ]
  },
  {
    title: 'GreenPass Group – Mobile App',
    url: 'https://www.greenpassgroup.com',
    stack: ['FlutterFlow', 'Firebase', 'Firestore', 'Dashboards', 'Bookings'],
    summary: 'A mobile extension of GreenPass services built for students, agents, tutors, and schools.',
    bullets: [
      'Created multi-role access flows for different user types.',
      'Built smart onboarding, real-time booking workflows, and integrated dashboards.',
      'Demonstrated cross-platform development, automation, and API integration skills.'
    ]
  }
];

const skillGroups = [
  { title: 'Programming', skills: ['Python', 'PHP', 'Java', 'Dart', 'Kotlin', 'Swift', 'Objective-C'] },
  { title: 'Web', skills: ['WordPress', 'HTML/CSS', 'Responsive UI/UX', 'Custom API Integration'] },
  { title: 'Database', skills: ['SQL', 'MySQL', 'Firestore'] },
  { title: 'Mobile', skills: ['Flutter', 'React Native', 'FlutterFlow', 'Android/iOS deployment'] },
  { title: 'Cloud & Backend', skills: ['Firebase Auth', 'Firestore', 'Cloud Messaging', 'REST APIs', 'Automation Scripts'] },
  { title: 'Tools', skills: ['Visual Studio', 'Android Studio', 'Xcode', 'Git', 'Postman'] },
  { title: 'Systems', skills: ['LAN/Wi-Fi', 'System Administration', 'Cybersecurity Basics', 'Troubleshooting'] },
  { title: 'Business Support', skills: ['CRM Tools', 'Data Analysis', 'Workflow Automation', 'Customer Retention'] }
];

const targetRoles = [
  'IT Support Specialist',
  'Help Desk Technician',
  'Junior Systems Administrator',
  'Technical Support Analyst',
  'Customer Success Technical Specialist',
  'Junior Full-Stack Developer',
  'WordPress Developer',
  'Firebase / FlutterFlow Developer'
];

function ContactButton({ href, children, primary }) {
  return (
    <a href={href} className={primary ? 'btn btn-primary' : 'btn btn-secondary'}>
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="nav">
        <a href="#top" className="brand">
          <span>AM</span>
          <div>
            <strong>Alexander Martinez</strong>
            <small>Application Portfolio</small>
          </div>
        </a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href={`mailto:${profile.email}`} className="nav-cta">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-bg hero-bg-one" />
        <div className="hero-bg hero-bg-two" />
        <div className="hero-content">
          <div className="pill"><Sparkles size={16} /> Open to IT, Support, and Full-Stack roles</div>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="hero-text">
            Resourceful IT and customer success professional with a strong mix of technical support,
            full-stack development, customer service, networking, Firebase, WordPress, SQL, and mobile app workflows.
          </p>
          <div className="hero-actions">
            <ContactButton href={`mailto:${profile.email}`} primary><Mail size={18} /> Email Me</ContactButton>
            <ContactButton href={profile.linkedin}><Globe2 size={18} /> LinkedIn</ContactButton>
            <ContactButton href={profile.github}><Github size={18} /> GitHub</ContactButton>
          </div>
          <div className="contact-strip">
            <span><MapPin size={16} /> {profile.location}</span>
            <span><Phone size={16} /> {profile.phone}</span>
            <span><Mail size={16} /> {profile.email}</span>
          </div>
        </div>
        <aside className="hero-card">
          <div className="terminal-head">
            <span /> <span /> <span />
          </div>
          <pre>{`> profile.scan()
Name: Alexander Martinez
Mode: IT + Full-Stack
Strength: Technical support
Cloud: Firebase / Firestore
Web: WordPress / React / PHP
Systems: Networking + troubleshooting
Status: Ready for interviews`}</pre>
        </aside>
      </section>

      <section className="metrics">
        {metrics.map((item) => (
          <div className="metric-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Core strengths"
          title="A technical profile built for real workplace problems"
          text="The portfolio is designed to quickly show employers that Alexander can troubleshoot, support users, build systems, and communicate clearly."
        />
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <div className="icon-wrap">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section split-section">
        <SectionHeading
          eyebrow="Work experience"
          title="IT, development, and customer-facing experience"
          text="A strong blend of long-term technical support, telecom customer service, and current full-stack platform work."
        />
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={job.company}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <span>{job.period}</span>
                </div>
                <small>{job.location}</small>
                <ul>
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <SectionHeading
          eyebrow="Featured projects"
          title="Projects that show practical ability"
          text="These projects demonstrate platform thinking, role-based workflows, mobile app planning, and real customer-service operations."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <h3>{project.title}</h3>
                <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ExternalLink size={18} /></a>
              </div>
              <p>{project.summary}</p>
              <div className="stack-list">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <ul>
                {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <SectionHeading
          eyebrow="Technical skills"
          title="Skills grouped for recruiters and hiring managers"
          text="This section is intentionally keyword-rich so it works well for both human reviewers and applicant tracking systems."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section role-section">
        <div className="role-card">
          <div>
            <SectionHeading
              eyebrow="Best-fit roles"
              title="Recommended positions to apply for"
              text="Use this portfolio when applying to IT support, technical support, junior development, customer success, and systems-focused roles."
            />
            <div className="role-list">
              {targetRoles.map((role) => <span key={role}><BadgeCheck size={16} /> {role}</span>)}
            </div>
          </div>
          <div className="fit-card">
            <ShieldCheck size={34} />
            <h3>Why this profile is strong</h3>
            <p>
              Alexander can support users, explain technical issues clearly, build working systems, document workflows,
              and connect business needs with practical technology solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="education-card">
          <div className="icon-wrap"><BriefcaseBusiness /></div>
          <div>
            <span>Education</span>
            <h2>Fanshawe College – Computer Systems Technician</h2>
            <p>Post-secondary Diploma • London, Ontario • January 2024 – April 2025</p>
            <p>
              Coursework and labs covered networking, cybersecurity, IT infrastructure, programming, databases,
              Windows/Linux server administration, cloud services, virtualization, and system troubleshooting.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <h2>Ready to discuss IT support, systems, or full-stack opportunities?</h2>
          <p>Available for technical support, help desk, systems, junior developer, and customer success technical roles.</p>
        </div>
        <div className="hero-actions">
          <ContactButton href={`mailto:${profile.email}`} primary><Mail size={18} /> Contact Alexander</ContactButton>
          <ContactButton href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={18} /> Call</ContactButton>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Alexander Martinez</span>
        <span>Built with React, Vite, and CSS</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
