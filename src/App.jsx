import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './frontend/components/Header'
import Footer from './frontend/components/Footer'
import Home from './frontend/pages/Home'
import About from './frontend/pages/About'
import Courses from './frontend/pages/Courses'
import CourseDetail from './frontend/pages/CourseDetail'
import UpcomingBatches from './frontend/pages/UpcomingBatches'
import Services from './frontend/pages/Services'
import ServiceDetail from './frontend/pages/ServiceDetail'
import Contact from './frontend/pages/Contact'
import Privacy from './frontend/pages/Privacy'
import Terms from './frontend/pages/Terms'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/batches" element={<UpcomingBatches />} />
            <Route path="/upcoming-batches" element={<Navigate to="/batches" replace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
