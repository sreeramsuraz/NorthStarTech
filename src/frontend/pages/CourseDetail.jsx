import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import EnquiryForm from '../components/EnquiryForm'
import './Pages.css'

function CourseDetail() {
  const { slug } = useParams()
  const course = courses.find((item) => item.slug === slug)
  if (!course) return <div className="content-section"><h1>Course not found</h1><Link to="/courses">Back to courses</Link></div>

  return (
    <section className="page-shell">
      <header className="course-banner"><div><div className="course-detail-icon" aria-hidden="true">{course.icon}</div><span className="eyebrow">{course.category}</span><h1>{course.title}</h1><p>Course details await management approval before publication.</p><a className="button button-primary" href="#course-enquiry">Enquire Now</a></div></header>
      <div className="content-section detail-layout">
        <article>
          <section><h2>Course overview</h2><p>Approved overview content has not been supplied. The full course summary will be added after management review.</p></section>
          <section><h2>Course facts</h2><dl className="facts"><div><dt>Duration</dt><dd>{course.duration}</dd></div><div><dt>Delivery mode</dt><dd>To be confirmed</dd></div><div><dt>Schedule</dt><dd>To be confirmed</dd></div><div><dt>Prerequisites</dt><dd>To be confirmed</dd></div></dl></section>
          <section><h2>Detailed syllabus</h2><p>Module-wise syllabus must be supplied by the trainer or management before this page is published.</p></section>
          <section><h2>Learning outcomes</h2><p>Approved learning outcomes are pending.</p></section>
          <section><h2>Tools and software</h2><p>Approved tools and software coverage is pending.</p></section>
        </article>
        <aside id="course-enquiry"><h2>Course enquiry</h2><EnquiryForm course={course.title} type="Course Enquiry" /></aside>
      </div>
    </section>
  )
}

export default CourseDetail
