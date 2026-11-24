import EnquiryForm from '../components/EnquiryForm'
import './Pages.css'

function UpcomingBatches() {
  return (
    <section className="page-shell">
      <header className="page-banner"><div><span className="eyebrow">Upcoming batches</span><h1>Open batch listings</h1><p>Batch schedules will appear only after they are confirmed and approved for publication.</p></div></header>
      <div className="content-section">
        <div className="empty-state batch-empty"><h2>No open batches are currently published</h2><p>Management has not supplied a verified upcoming batch schedule.</p></div>
        <div className="batch-enquiry"><h2>Enquire about a course</h2><EnquiryForm type="Online Training" /></div>
      </div>
    </section>
  )
}

export default UpcomingBatches
