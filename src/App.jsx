import { useRef } from 'react'
import { Header } from './class/header/header.jsx'
import { Hero } from './class/hero/hero.jsx'
import { Projects } from './class/projects/projects.jsx'
import './App.css'

function App() {
  const heroRef = useRef(null)

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <>
      <Header scrollToHero={scrollToHero} />

      <div ref={heroRef}>
        <Hero />
      </div>

      <Projects />
    </>
  )
}

export default App