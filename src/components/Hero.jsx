export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow-2" />
      </div>

      <div className="container" style={{ position: 'relative', width: '100%' }}>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot" />
            MERN Stack Developer
          </div>

          <h1 className="hero-title">
            <span className="line-1">Building</span>
            <span className="line-2">Modern</span>
            <span className="line-3">Web Apps</span>
          </h1>

          <p className="hero-subtitle">
            I craft full-stack web experiences — from pixel-perfect React UIs to
            scalable Node.js APIs backed by MongoDB.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">0</div>
            <div className="stat-label">Years Exp</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">4</div>
            <div className="stat-label">Core Skills</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        scroll
      </div>
    </section>
  )
}
