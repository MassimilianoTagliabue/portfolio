import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Systems } from './components/Systems'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { profile } from './data'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Systems />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__brand">{profile.name}</p>
          <p className="footer__copy">
            © {new Date().getFullYear()} — {profile.role}
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
