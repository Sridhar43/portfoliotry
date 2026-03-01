import { useReveal } from '../hooks/useReveal'

const highlights = [
  'Full-Stack Development',
  'REST API Design',
  'Database Architecture',
  'Real-Time Systems',
  'Cloud Deployment',
  'Performance Optimization',
]

export default function About() {
  const ref = useReveal()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="section-eyebrow reveal">00 — About</div>
        <div className="about-grid">
          <div className="about-image-block reveal">
            <img
              src="/img_sridhar.jpg"
              alt="Sridhar"
              style={{
                width: '100%',
                aspectRatio: '3 / 4',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                filter: 'contrast(1.05) brightness(0.97)',
              }}
            />
            <div className="about-corner corner-tl" />
            <div className="about-corner corner-tr" />
            <div className="about-corner corner-bl" />
            <div className="about-corner corner-br" />
          </div>

          <div className="about-text reveal reveal-delay-1">
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Hello, I'm<br />
              <span style={{ color: 'var(--accent)' }}>Sridhar panigrahi</span>
            </h2>
            <p>
              I'm a <strong>full-stack web developer</strong> with a passion for building
              clean, scalable applications. I specialize in the MERN stack —
              MongoDB, Express, React, and Node.js.
            </p>
            <p>
              From architecting <strong>REST APIs</strong> and managing NoSQL databases,
              to crafting pixel-perfect React interfaces, I own the full development lifecycle.
            </p>
            <p>
              When I'm not coding, I'm exploring new tech, contributing to open source,
              and leveling up my DevOps skills.
            </p>
            <ul className="about-list">
              {highlights.map(h => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
