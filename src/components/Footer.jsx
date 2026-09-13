const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Maryam Mahmoudi</h2>
            <p className="text-gray-300 mb-4">AI researcher and backend engineer building dependable systems around intelligent components.</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/maryam-mahmoudi-8882857b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin text-xl" aria-hidden="true"></i></a>
              <a href="https://github.com/maryammahmoudi1993" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-white"><i className="fab fa-github text-xl" aria-hidden="true"></i></a>
              <a href="mailto:mahmoodi.maryam1993@gmail.com" aria-label="Email" className="text-gray-300 hover:text-white"><i className="fas fa-envelope text-xl" aria-hidden="true"></i></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['about', 'research', 'projects', 'experience', 'contact'].map((id) => (
                <li key={id}><a href={`#${id}`} className="text-gray-300 hover:text-white capitalize">{id}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Focus</h3>
            <ul className="space-y-2 text-gray-300">
              <li>AI research and applied machine learning</li>
              <li>Backend architecture and APIs</li>
              <li>Reliable agentic systems</li>
              <li>Testing, CI/CD, and observability</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2026 Maryam Mahmoudi. All rights reserved.</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mt-4 md:mt-0 px-4 py-2 bg-primary-light hover:bg-blue-700 rounded-lg">
            <i className="fas fa-arrow-up mr-2" aria-hidden="true"></i>Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
