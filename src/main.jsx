import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar'
import Hero from './hero'
import Projects from './projects'
import Footer from './footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Projects/>
    <Footer/>
  </StrictMode>,
)
