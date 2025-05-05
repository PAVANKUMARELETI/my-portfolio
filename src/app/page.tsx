import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import WhyAmazon from '@/components/WhyAmazon'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <WhyAmazon /> 
      <Skills />
      <Contact />
    </>
  )
}
