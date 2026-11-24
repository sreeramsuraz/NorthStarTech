import { Link } from 'react-router-dom'
import './Footer.css'

const copyrightYear = 2026

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div>
          <span>Start a conversation</span>
          <h2>Discuss your project or training requirements.</h2>
        </div>
        <Link className="button button-primary" to="/contact">Contact us</Link>
      </div>
      <div className="footer-grid">
        <div>
          <strong className="footer-brand">Northstar Tech</strong>
          <p>Technology services and professional training.</p>
        </div>
        <div><b>Company</b><Link to="/about">About</Link><Link to="/contact">Contact</Link></div>
        <div><b>Services</b><Link to="/services">All services</Link><Link to="/courses">Courses</Link></div>
        <div><b>Legal</b><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms</Link></div>
      </div>
      <p className="copyright">&copy; {copyrightYear} Northstar Tech</p>
    </footer>
  )
}

export default Footer
