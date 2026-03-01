import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    num: '001',
    title: 'E-Commerce Platform',
    desc: 'Full-stack marketplace with real-time inventory tracking, Stripe payment integration, admin dashboard with analytics, and JWT-based auth system.',
    stack: ['MongoDB', 'Express', 'React', 'Node',  'Redux'],
  },
  {
    num: '002',
    title: 'Real-Time Chat App',
    desc: 'WebSocket-powered messaging platform with private rooms, typing indicators, media sharing, and persistent message history.',
    stack: ['Socket.io', 'MongoDB', 'React', 'Node', 'JWT'],
  },
  {
    num: '003',
    title: 'Task Management SaaS',
    desc: 'Multi-tenant project tool with Kanban boards, team collaboration features, progress analytics, and role-based access control.',
    stack: ['React', 'Redux', 'Express', 'MongoDB', 'Docker'],
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-eyebrow reveal">02 — Work</div>
        <h2 className="section-title reveal reveal-delay-1">Featured Projects</h2>

        <div className="projects-grid reveal reveal-delay-2">
          {projects.map(p => (
            <div key={p.num} className="project-card">
              <div className="project-num">// {p.num}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map(s => (
                  <span key={s} className="stack-tag">{s}</span>
                ))}
              </div>
              <span className="project-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
