import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import { services } from '../data/services'
import devopsIcon from '../../assets/devops-icon.png'
import './Pages.css'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#what-we-serve') {
      requestAnimationFrame(() => {
        document.getElementById('what-we-serve')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }
  }, [hash])

  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">Technology services & training</span>
          <h1>Build better products and stronger skills.</h1>
          <p>Web and app solutions, practical technical training and responsive IT support for organisations and learners.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/services">Explore Services</Link>
            <Link className="button button-secondary" to="/courses">Explore Courses</Link>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Technology team and training illustration">
          <div className="visual-grid" />
          <div className="float-card float-one"><b>Online Training</b><span>Instructor-led learning</span></div>
          <div className="float-card float-two"><b>Web & App Solutions</b><span>Built for business needs</span></div>
          <div className="float-card float-three"><b>IT Support</b><span>Technical assistance</span></div>
        </div>
      </section>

      <section id="what-we-serve" className="content-section">
        <div className="section-heading"><span>What we serve</span><h2>Services shaped around your goals.</h2></div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.slug}>
              <span className="card-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <Link to={`/services/${service.slug}`}>Learn More <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section">
        <div className="team-visual"><span>Technology<br />& Learning</span></div>
        <div>
          <span className="eyebrow">Who we are</span>
          <h2>Technology expertise with a practical learning focus.</h2>
          <p>We support organisations and learners through software development, mobile solutions, technical training and IT assistance.</p>
          <Link className="text-link" to="/about">Read More →</Link>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading"><span>Tools & technologies</span><h2>Explore the technologies in our programmes.</h2></div>
        <div className="tool-strip">
          {['AWS','DevOps','Tableau','Data Science','Power BI','Python','React Native','Angular'].map((tool) => (
            <Link to="/courses" className="tool-card" key={tool}>
              {tool === 'DevOps' ? (
                <img className="tool-logo" src={devopsIcon} alt="DevOps" />
              ) : (
                <b>{tool[0]}</b>
              )}
              <span>{tool}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section enquiry-section">
        <div><span className="eyebrow">Enquiry</span><h2>Tell us what you need.</h2></div>
        <EnquiryForm />
      </section>
    </>
  )
}

export default Home
