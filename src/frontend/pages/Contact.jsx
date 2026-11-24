import { useSearchParams } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import './Pages.css'

function Contact() {
  const [searchParams] = useSearchParams()
  const course = searchParams.get('course') || ''

  return (
    <section className="page-shell">
      <header className="page-banner"><div><span className="eyebrow">Contact us</span><h1>Start a conversation.</h1><p>Tell us about a project, course or technical support requirement.</p></div></header>
      <div className="content-section contact-layout">
        <aside className="contact-details">
          <h2>Contact information</h2>
          <p><b>Email</b><span>Approved email address required</span></p>
          <p><b>Phone</b><span>Approved phone number required</span></p>
          <p><b>Office</b><span>Approved office address required</span></p>
          <p><b>Working hours</b><span>Approved hours required</span></p>
        </aside>
        <div><h2>Send an enquiry</h2><EnquiryForm course={course} type={course ? 'Course Enquiry' : 'General Enquiry'} /></div>
      </div>
    </section>
  )
}

export default Contact
