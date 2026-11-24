import { Link } from 'react-router-dom'
import './Pages.css'

function About() {
  const values = ['Integrity','Relationships','Personal Growth','Agility','Excellence','Collaboration']
  const process = ['Understand Requirements','Assess & Plan','Design / Customise','Deliver','Review & Support']
  return (
    <section className="page-shell">
      <header className="page-banner"><div><span className="eyebrow">About us</span><h1>Learning and technology, working together.</h1><p>Learn about our approach to software, training and technical support.</p></div></header>
      <div className="content-section">
        <div className="about-grid">
          <div className="about-visual" role="img" aria-label="Technology team at work">Our approach</div>
          <div><span className="eyebrow">Company overview</span><h2>Focused on practical outcomes.</h2><p>We support software and mobile application development, professional training and IT services for organisations and learners. Project and programme details should be confirmed with management before publishing.</p></div>
        </div>
        <div className="mission-grid">
          <article><span>Mission</span><h2>Provide relevant, practical technology and learning support.</h2></article>
          <article><span>Vision</span><h2>Help organisations and learners build capability with confidence.</h2></article>
        </div>
        <div className="section-heading"><span>Core values</span><h2>How we work with our community.</h2></div>
        <div className="value-grid">{values.map((value) => <article key={value}><h3>{value}</h3></article>)}</div>
        <div className="section-heading"><span>How we work</span><h2>A clear, collaborative process.</h2></div>
        <ol className="process-list">{process.map((step, i) => <li key={step}><b>0{i + 1}</b><span>{step}</span></li>)}</ol>
        <div className="page-ctas"><Link className="button button-primary" to="/services">View Services</Link><Link className="button button-secondary" to="/contact">Contact Us</Link></div>
      </div>
    </section>
  )
}

export default About
