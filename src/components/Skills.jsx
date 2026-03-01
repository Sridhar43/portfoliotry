import { useReveal } from '../hooks/useReveal'

const mernStack = [
  {
    letter: 'M',
    word: 'MongoDB',
    desc: 'NoSQL Database',
    cls: 'mern-m',
  },
  {
    letter: 'E',
    word: 'Express.js',
    desc: 'Web Framework',
    cls: 'mern-e',
  },
  {
    letter: 'R',
    word: 'React.js',
    desc: 'UI Library',
    cls: 'mern-r',
  },
  {
    letter: 'N',
    word: 'Node.js',
    desc: 'Runtime',
    cls: 'mern-n',
  },
]

const skills = [
  {
    icon: '🍃',
    name: 'MongoDB',
    desc: 'NoSQL schema design, aggregation pipelines, indexing strategies, and Mongoose ODM for type-safe data modeling.',
    tags: ['Mongoose', 'Atlas', 'Aggregation', 'Indexing', 'GridFS'],
  },
  {
    icon: '⚡',
    name: 'Express.js',
    desc: 'RESTful API design, middleware composition, auth flows with JWT/OAuth, rate limiting, and error handling.',
    tags: ['REST API', 'Middleware', 'JWT', 'OAuth2', 'Validation'],
  },
  {
    icon: '⚛️',
    name: 'React.js',
    desc: 'Component architecture, state management with Redux & Context API, custom hooks, and performance optimization.',
    tags: ['Hooks', 'Redux', 'Context', 'Next.js', 'TanStack'],
  },
  {
    icon: '🟢',
    name: 'Node.js',
    desc: 'Server-side JavaScript, async/await patterns, real-time with Socket.io, streams, and microservice design.',
    tags: ['Socket.io', 'Streams', 'Async', 'NPM', 'Microservices'],
  },
  {
    icon: '🔧',
    name: 'DevOps & Tools',
    desc: 'Docker containers, CI/CD with GitHub Actions, deployments to AWS and Vercel, and environment management.',
    tags: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Vercel'],
  },
  {
    icon: '🎨',
    name: 'Frontend',
    desc: 'Responsive design with Tailwind CSS, TypeScript, accessible components, and animation with Framer Motion.',
    tags: ['TypeScript', 'Tailwind', 'Framer', 'CSS3', 'a11y'],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-eyebrow reveal">01 — Expertise</div>
        <h2 className="section-title reveal reveal-delay-1">My Tech Stack</h2>

        {/* MERN Banner */}
        <div className="mern-banner reveal reveal-delay-2">
          {mernStack.map((item, i) => (
            <>
              <div key={item.letter} className={`mern-item ${item.cls}`}>
                <div className="mern-letter">{item.letter}</div>
                <div className="mern-word">{item.word}</div>
                <div className="mern-desc">{item.desc}</div>
              </div>
              {i < mernStack.length - 1 && (
                <div className="mern-connector">
                  <div className="mern-connector-line" />
                </div>
              )}
            </>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid reveal reveal-delay-3">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <span className="skill-card-icon">{skill.icon}</span>
              <div className="skill-card-name">{skill.name}</div>
              <p className="skill-card-desc">{skill.desc}</p>
              <div className="skill-tags">
                {skill.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
