import profileImage from '../../me.png';
import resumeUrl from '../../My CV (Maryam Mahmoudi).pdf?url';

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center gradient-bg pt-24">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="fade-in">
        <img
          src={profileImage}
          alt="Maryam Mahmoudi"
          className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-white shadow-2xl object-cover"
        />
        <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-blue-100 mb-4">
          AI PhD Researcher · Backend & AI Engineer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Maryam Mahmoudi</h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
          I research intelligent systems and build the production-grade backend foundations that make them useful.
        </p>
        <p className="text-base md:text-lg text-blue-100/90 mb-8 max-w-2xl mx-auto">
          PhD in Data Science and AI Applications at YunTech, starting September 2026.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-primary-light font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <i className="fas fa-code mr-2" aria-hidden="true"></i>View Projects
          </a>
          <a
            href={resumeUrl}
            download="My CV (Maryam Mahmoudi).pdf"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-light transition-colors"
          >
            <i className="fas fa-download mr-2" aria-hidden="true"></i>Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
