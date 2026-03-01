import { useReveal } from '../hooks/useReveal'

const links = [
  { icon: '✉', label: 'Email Me', href: 'mailto:panigrahisridhar464@gmail.com', detail: 'panigrahisridhar464@gmail.com' },
  { icon: '◎', label: 'GitHub', href: 'https://github.com/Sridhar43', detail: 'github.com/Sridhar43' },
  { icon: '⬡', label: 'LinkedIn', href: 'https://linkedin.com/SridharPanigrahi', detail: 'linkedin.com/in/SridharPanigrahi' },
  { icon: '𝕏', label: 'Twitter / X', href: 'https://x.com', detail: '@yourhandle' },
]

export default function Contact() {
  const ref = useReveal()

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container">
        <div className="section-eyebrow reveal">03 — Contact</div>
        <div className="contact-grid">
          <div className="reveal reveal-delay-1">
            <p className="contact-big-text">
              Got a project in mind?<br />
              <span>Let's build it together.</span>
            </p>
            <p className="contact-note">
              I'm currently open to new opportunities — full-time roles,
              freelance projects, or just a conversation about tech.
              My inbox is always open.
            </p>
            <a href="mailto:panigrahisridhar464@gmail.com" className="btn btn-primary">
              Say Hello →
            </a>
          </div>

          <div className="contact-links reveal reveal-delay-2">
            {links.map(l => (
              <a key={l.label} className="contact-link" href={l.href} target="_blank" rel="noreferrer">
                <div className="contact-link-left">
                  <span className="contact-link-icon">{l.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.68rem', marginBottom: '0.15rem' }}>{l.label}</div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>{l.detail}</div>
                  </div>
                </div>
                <span className="contact-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
