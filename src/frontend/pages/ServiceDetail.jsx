import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import EnquiryForm from '../components/EnquiryForm'
import './Pages.css'

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <div className="content-section"><h1>Service not found</h1><Link to="/services">Back to services</Link></div>

  return (
    <section className="page-shell">
      <header className="service-banner"><div><span className="eyebrow">Service</span><h1>{service.title}</h1><p>{service.short}</p><a className="button button-primary" href="#service-enquiry">Start an enquiry</a></div></header>
      <div className="content-section detail-layout">
        <article>
          <section><h2>Capabilities</h2><p>Approved service capabilities and availability must be confirmed by the business before publication.</p></section>
          <section><h2>Our process</h2><ol className="process-list compact"><li><b>01</b><span>Discussion</span></li><li><b>02</b><span>Planning</span></li><li><b>03</b><span>Delivery</span></li><li><b>04</b><span>Review & Support</span></li></ol></section>
        </article>
        <aside id="service-enquiry"><h2>Service enquiry</h2><EnquiryForm type={service.title} /></aside>
      </div>
    </section>
  )
}

export default ServiceDetail
