import ThemeProvider from './components/ThemeProvider.jsx';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Research from './components/Research.jsx';
import Blog from './components/Blog.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Research />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

