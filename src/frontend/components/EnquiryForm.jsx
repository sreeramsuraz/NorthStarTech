import { useState } from 'react'

function EnquiryForm({ course = '', batch = '', type = 'General Enquiry' }) {
  const [status, setStatus] = useState('idle')

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('error')
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>Full Name *<input name="name" required /></label>
        <label>Email Address *<input name="email" type="email" required /></label>
        <label>Phone Number<input name="phone" type="tel" /></label>
        <label>Enquiry Type
          <select name="type" defaultValue={type}>
            <option>General Enquiry</option>
            <option>Web Development</option>
            <option>App Development</option>
            <option>Online Training</option>
            <option>IT Support</option>
            <option>Corporate Training</option>
            <option>Course Enquiry</option>
          </select>
        </label>
        {course && <label>Course<input name="course" defaultValue={course} readOnly /></label>}
        {batch && <label>Preferred Batch<input name="batch" defaultValue={batch} readOnly /></label>}
      </div>
      <label>Message *<textarea name="message" rows="5" required /></label>
      <label className="consent"><input name="consent" type="checkbox" required /> I consent to being contacted about this enquiry.</label>
      <button className="button button-primary" type="submit">Send enquiry</button>
      {status === 'error' && (
        <p className="form-status error" role="alert">
          Submission endpoint is not configured. Please retry after the approved notification email and secure form handler are connected.
        </p>
      )}
    </form>
  )
}

export default EnquiryForm
