import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App