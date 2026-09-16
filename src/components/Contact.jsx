const contacts = [
  { label: 'Email', value: 'mahmoodi.maryam1993@gmail.com', href: 'mailto:mahmoodi.maryam1993@gmail.com' },
  { label: 'LinkedIn', value: 'maryam-mahmoudi-8882857b', href: 'https://www.linkedin.com/in/maryam-mahmoudi-8882857b/' },
  { label: 'GitHub', value: 'maryammahmoudi1993', href: 'https://github.com/maryammahmoudi1993' },
];

const Contact = () => (
  <section id="contact" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
    <div className="relative overflow-hidden p-7 nav:p-[72px] rounded-[30px] border border-white/[0.12] contact-glow">
      <p className="m-0 mb-3.5 font-mono text-xs tracking-[0.22em] uppercase text-[#f3c3c5]">Contact</p>
      <h2 className="m-0 mb-4 font-display font-bold text-[clamp(28px,4vw,52px)] leading-[1.1] tracking-tight text-white text-balance">
        Let&rsquo;s Build Something Dependable
      </h2>
      <p className="m-0 mb-8 nav:mb-10 max-w-[62ch] text-[clamp(15px,1.2vw,18px)] leading-relaxed text-[#e3c6c8] text-pretty">
        I&rsquo;m open to research collaboration and software engineering opportunities at the intersection of backend systems and applied AI.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3.5 mb-8 nav:mb-9">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
            className="block p-[22px] rounded-[18px] border border-white/[0.14] bg-black/[0.28] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.35]"
          >
            <strong className="block mb-1.5 font-mono font-medium text-[11px] tracking-[0.16em] uppercase text-[#f3a2a6]">
              {contact.label}
            </strong>
            <span className="text-[15px] text-white break-words">{contact.value}</span>
          </a>
        ))}
      </div>
      <a
        href="mailto:mahmoodi.maryam1993@gmail.com"
        className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-[#1b0709] font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,255,255,0.24)]"
      >
        Start a Conversation <span aria-hidden="true">&#8599;</span>
      </a>
    </div>
  </section>
);

export default Contact;
