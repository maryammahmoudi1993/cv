const contacts = [
  { label: 'Email', value: 'mahmoodi.maryam1993@gmail.com', href: 'mailto:mahmoodi.maryam1993@gmail.com', icon: 'fas fa-envelope' },
  { label: 'LinkedIn', value: 'maryam-mahmoudi-8882857b', href: 'https://www.linkedin.com/in/maryam-mahmoudi-8882857b/', icon: 'fab fa-linkedin' },
  { label: 'GitHub', value: 'maryammahmoudi1993', href: 'https://github.com/maryammahmoudi1993', icon: 'fab fa-github' },
];

const Contact = () => (
  <section id="contact" className="py-20 bg-white dark:bg-slate-900">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">Let’s Build Something Dependable</h2>
        <div className="w-24 h-1 bg-primary-light dark:bg-primary-dark mx-auto mb-6"></div>
        <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
          I’m open to research collaboration and software engineering opportunities at the intersection of backend systems and applied AI.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {contacts.map((contact) => (
          <a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined} className="bg-light-bg dark:bg-slate-800 p-6 rounded-lg shadow-lg text-center hover:-translate-y-1 transition-transform">
            <i className={`${contact.icon} text-3xl text-primary-light dark:text-primary-dark mb-4`} aria-hidden="true"></i>
            <strong className="block text-text-primary-light dark:text-text-primary-dark mb-1">{contact.label}</strong>
            <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark break-words">{contact.value}</span>
          </a>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="mailto:mahmoodi.maryam1993@gmail.com" className="inline-block px-8 py-4 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          <i className="fas fa-paper-plane mr-2" aria-hidden="true"></i>Start a Conversation
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
