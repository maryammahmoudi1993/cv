import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Research from './components/Research.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import GitHubActivity from './components/GitHubActivity.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';

export default function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-bg isolate">
      <div aria-hidden="true" className="hero-glow absolute inset-x-0 top-0 h-[1100px] z-0" />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Research />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <GitHubActivity />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
