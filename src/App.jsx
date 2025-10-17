import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testmin'
import FAQ from './components/FAQs'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="">
      <Navbar />
      <HeroSection />
      <Services/>
      <About/>
      <FAQ/>
      <Articles/>
      <Contact/>
      <Footer/>

    </div>
    </>
  )
}

export default App
