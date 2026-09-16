import profileImage from '../../me.png';
import resumeUrl from '../../My CV (Maryam Mahmoudi).pdf?url';

const binaryRows = '1 0 0 1   0 1 1 0   1 0 0 1 1   0 1 0 0   1 1 0 1   0 0 1 0\n0 1 1 0   1 0 0 1   0 1 0 1 0   1 1 0 1   0 0 1 1   1 0 1 0';

const Hero = () => (
  <section
    id="hero"
    className="relative max-w-content mx-auto px-5 nav:px-10 pt-[18px] nav:pt-[52px] pb-10 nav:pb-20"
  >
    <svg
      aria-hidden="true"
      width="90"
      height="90"
      viewBox="0 0 90 90"
      className="absolute left-2.5 nav:left-[60px] top-[30px] nav:top-[90px] opacity-50 hidden sm:block"
      style={{ animation: 'floaty 9s ease-in-out infinite' }}
    >
      <path d="M45 0v90M0 45h90" stroke="url(#sg)" strokeWidth="1" fill="none" />
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffd9da" stopOpacity=".9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      aria-hidden="true"
      width="70"
      height="70"
      viewBox="0 0 90 90"
      className="absolute right-2.5 nav:right-[70px] top-[46px] nav:top-[120px] opacity-45 hidden sm:block"
      style={{ animation: 'floaty 11s ease-in-out infinite' }}
    >
      <path d="M45 0v90M0 45h90" stroke="url(#sg2)" strokeWidth="1" fill="none" />
      <defs>
        <linearGradient id="sg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffd9da" stopOpacity=".9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

    <p className="m-0 mb-2.5 text-center font-display font-semibold text-[clamp(20px,4.4vw,54px)] tracking-[clamp(0.12em,1.1vw,0.26em)] text-white [text-shadow:0_0_30px_rgba(255,205,208,0.45)]">
      AI RESEARCHER
    </p>

    <div className="relative flex justify-center">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 flex justify-center blur-[22px] opacity-85 pointer-events-none">
        <span className="font-display font-extrabold text-[clamp(52px,12.6vw,170px)] tracking-[clamp(0.01em,0.4vw,0.05em)] leading-[0.95] text-[#ffe3e4] whitespace-nowrap">
          ENGINEER
        </span>
      </div>
      <h1 className="m-0 font-display font-extrabold text-[clamp(52px,12.6vw,170px)] tracking-[clamp(0.01em,0.4vw,0.05em)] leading-[0.95] text-white whitespace-nowrap [text-shadow:0_0_34px_rgba(255,220,222,0.5),0_0_90px_rgba(181,31,40,0.75)]">
        <span className="sr-only">Maryam Mahmoudi &mdash; AI PhD Researcher and Backend Engineer</span>
        <span aria-hidden="true">ENGINEER</span>
      </h1>
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-1.5 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />
    </div>

    <div className="relative flex justify-center mt-[clamp(-30px,-3.4vw,-14px)]">
      <p
        aria-hidden="true"
        className="hidden md:block absolute bottom-[14%] left-1/2 -translate-x-1/2 m-0 w-[min(760px,92%)] text-center font-mono text-[clamp(9px,1.1vw,14px)] leading-[2.1] text-[#ff9ea3] opacity-20 whitespace-pre-wrap pointer-events-none"
      >
        {binaryRows}
      </p>
      <img
        src={profileImage}
        alt="Portrait of Maryam Mahmoudi"
        width="1086"
        height="1448"
        fetchPriority="high"
        className="relative z-[2] w-[clamp(240px,34vw,430px)] h-auto [filter:drop-shadow(0_30px_60px_rgba(0,0,0,0.45))]"
        style={{
          WebkitMaskImage: 'linear-gradient(180deg,#000 0%,#000 84%,transparent 100%)',
          maskImage: 'linear-gradient(180deg,#000 0%,#000 84%,transparent 100%)',
        }}
      />
    </div>

    <div className="flex flex-wrap items-end justify-between gap-8 nav:gap-12 mt-[clamp(-40px,-3vw,-10px)] relative z-[3]">
      <div className="flex-1 min-w-[min(300px,100%)]">
        <h2 className="m-0 mb-3 font-display font-semibold text-[clamp(26px,3.4vw,40px)] leading-[1.1] tracking-tight text-white">
          Welcome to My Portfolio
        </h2>
        <p className="m-0 max-w-[44ch] text-[clamp(14px,1.1vw,16px)] leading-relaxed text-ink-secondary">
          I research intelligent systems and build the production-grade backend foundations that make them useful.
        </p>
        <p className="mt-2.5 max-w-[44ch] text-[clamp(13px,1vw,15px)] leading-relaxed text-ink-muted">
          PhD in Data Science and AI Applications at YunTech, starting September 2026.
        </p>
      </div>
      <div className="flex-none flex flex-col gap-2.5 min-w-[220px]">
        <a
          href={resumeUrl}
          download="My CV (Maryam Mahmoudi).pdf"
          className="inline-flex items-center justify-between gap-3.5 px-[22px] py-[15px] rounded-xl bg-brand text-white font-bold text-[15px] shadow-[0_14px_34px_rgba(181,31,40,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(181,31,40,0.55)]"
        >
          Download Resume <span aria-hidden="true">&#8595;</span>
        </a>
        <a
          href="https://github.com/maryammahmoudi1993"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-between gap-3.5 px-[22px] py-[15px] rounded-xl bg-bg-soft border border-white/10 text-white font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30"
        >
          GitHub Profile <span aria-hidden="true">&#9679;</span>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
