import { useLanguage } from '../lib/LanguageContext.jsx';

const EMAIL = 'mahmoodi.maryam1993@gmail.com';

const contacts = [
  { label: { en: 'Email', zh: '電子郵件' }, value: EMAIL, href: `mailto:${EMAIL}` },
  { label: { en: 'LinkedIn', zh: 'LinkedIn' }, value: 'maryam-mahmoudi-8882857b', href: 'https://www.linkedin.com/in/maryam-mahmoudi-8882857b/' },
  { label: { en: 'GitHub', zh: 'GitHub' }, value: 'maryammahmoudi1993', href: 'https://github.com/maryammahmoudi1993' },
  // Scholar profile not yet published — owner to update the href once the Google Scholar page is live.
  { label: { en: 'Google Scholar', zh: 'Google 學術搜尋' }, value: { en: '[Profile Coming Soon]', zh: '[個人頁面即將推出]' }, href: null },
];

const strings = {
  en: {
    eyebrow: 'Contact',
    heading: "Let's Build Something Dependable",
    lede: "I'm open to research collaboration and software engineering opportunities at the intersection of backend systems and applied AI.",
    cta: 'Start a Conversation',
  },
  zh: {
    eyebrow: '聯絡方式',
    heading: '一起打造可靠的系統',
    lede: '我樂於探索後端系統與應用 AI 交會處的研究合作與軟體工程機會。',
    cta: '開始對話',
  },
};

const Contact = () => {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <section id="contact" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <div className="relative overflow-hidden p-7 nav:p-[72px] rounded-[30px] border border-white/[0.12] contact-glow">
        <p className="m-0 mb-3.5 font-mono text-xs tracking-[0.22em] uppercase text-[#f3c3c5]">{t.eyebrow}</p>
        <h2 className="m-0 mb-4 font-display font-bold text-[clamp(28px,4vw,52px)] leading-[1.1] tracking-tight text-white text-balance">
          {t.heading}
        </h2>
        <p className="m-0 mb-8 nav:mb-10 max-w-[62ch] text-[clamp(15px,1.2vw,18px)] leading-relaxed text-[#e3c6c8] text-pretty">
          {t.lede}
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3.5 mb-8 nav:mb-9">
          {contacts.map((contact) => {
            const value = typeof contact.value === 'string' ? contact.value : contact.value[lang];
            const content = (
              <>
                <strong className="block mb-1.5 font-mono font-medium text-[11px] tracking-[0.16em] uppercase text-[#f3a2a6]">
                  {contact.label[lang]}
                </strong>
                <span className="text-[15px] text-white break-words">{value}</span>
              </>
            );
            return contact.href ? (
              <a
                key={contact.label.en}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className="block p-[22px] rounded-[18px] border border-white/[0.14] bg-black/[0.28] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.35]"
              >
                {content}
              </a>
            ) : (
              <div
                key={contact.label.en}
                className="block p-[22px] rounded-[18px] border border-white/[0.14] bg-black/[0.28] opacity-80"
              >
                {content}
              </div>
            );
          })}
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-[#1b0709] font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,255,255,0.24)]"
        >
          {t.cta} <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
