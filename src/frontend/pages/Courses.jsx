import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { courseCategories, courses } from '../data/courses'
import './Pages.css'

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category')
  const category = courseCategories.includes(requestedCategory) ? requestedCategory : 'All'
  const [search, setSearch] = useState('')
  const [duration, setDuration] = useState('All')

  const filtered = useMemo(() => courses.filter((course) => {
    const matchesCategory = category === 'All' || course.category === category
    const matchesSearch = course.title.toLowerCase().includes(search.trim().toLowerCase())
    const matchesDuration = duration === 'All' || course.duration === duration
    return matchesCategory && matchesSearch && matchesDuration
  }), [category, search, duration])

  function clearFilters() {
    setSearchParams({})
    setSearch('')
    setDuration('All')
  }

  function selectCategory(nextCategory) {
    if (nextCategory === 'All') {
      setSearchParams({})
      return
    }
    setSearchParams({ category: nextCategory })
  }

  return (
    <section className="page-shell">
      <header className="page-banner courses-banner"><div><span className="eyebrow">Course catalogue</span><h1>Explore Our Courses</h1><p>Browse the reference course catalogue. Approved availability, details and schedules should be confirmed before enrolment.</p><Link className="button button-primary" to="/contact">Enquire</Link></div></header>
      <div className="content-section">
        <div className="course-controls">
          <div className="search-row"><label><span>Search courses</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by course title" /></label>{search && <button type="button" onClick={() => setSearch('')}>Clear search</button>}</div>
          <select aria-label="Filter by duration" value={duration} onChange={(event) => setDuration(event.target.value)}><option>All</option><option>4 weeks</option><option>5 weeks</option></select>
        </div>
        <div className="category-tabs" aria-label="Course categories">
          {['All', ...courseCategories].map((item) => <button className={category === item ? 'active' : ''} type="button" key={item} onClick={() => selectCategory(item)}>{item}</button>)}
        </div>
        {filtered.length ? (
          <div className="course-grid">
            {filtered.map((course) => (
              <article className="catalogue-card" key={course.slug}>
                <div className="course-logo" aria-hidden="true">{course.icon}</div>
                <span className="course-category">{course.category}</span>
                <h2>{course.title}</h2>
                <p>Duration: {course.duration}</p>
                {(course.pendingName || course.pendingClassification) && <small>Management review required</small>}
                <div className="card-actions"><Link to={`/courses/${course.slug}`}>View Details</Link><Link to={`/contact?course=${encodeURIComponent(course.title)}`}>Enquire Now</Link></div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state"><h2>No courses found</h2><button className="button button-secondary" type="button" onClick={clearFilters}>Clear filters</button></div>
        )}
      </div>
    </section>
  )
}

export default Courses
