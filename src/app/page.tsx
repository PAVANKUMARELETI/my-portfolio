import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
