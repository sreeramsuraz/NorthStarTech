import { Link } from 'react-router-dom'
import { services } from '../data/services'
import './Pages.css'

function Services() {
  return (
    <section className="page-shell">
      <header className="page-banner"><div><span className="eyebrow">Our services</span><h1>Technology support for projects and people.</h1><p>Explore development, training and support services offered by our team.</p></div></header>
      <div className="content-section">
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.slug}>
              <span className="card-number">0{index + 1}</span><h2>{service.title}</h2><p>{service.short}</p>
              <Link to={`/services/${service.slug}`}>Learn More →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
