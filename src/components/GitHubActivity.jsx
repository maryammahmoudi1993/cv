import { useEffect, useState } from 'react';
import Eyebrow from './ui/Eyebrow.jsx';
import { useLanguage } from '../lib/LanguageContext.jsx';

const USERNAME = 'maryammahmoudi1993';
const PALETTE = ['rgba(255,255,255,.06)', '#4d1418', '#7d1c22', '#b51f28', '#ef5a60'];

function buildWeeks(days) {
  const cells = [];
  if (days && days.length) {
    const pad = new Date(`${days[0].date}T00:00:00`).getDay();
    for (let i = 0; i < pad; i += 1) cells.push({ bg: 'transparent', title: '' });
    days.forEach((d) => {
      const level = typeof d.level === 'number' ? Math.min(4, d.level) : d.count > 8 ? 4 : d.count > 4 ? 3 : d.count > 1 ? 2 : d.count > 0 ? 1 : 0;
      cells.push({ bg: PALETTE[level], title: `${d.count} ${d.count === 1 ? 'contribution' : 'contributions'} on ${d.date}` });
    });
  }
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

const strings = {
  en: {
    eyebrow: 'GitHub Activity',
    heading: 'Contributions, live from GitHub',
    profileLink: (u) => `@${u}`,
    calendarTitle: 'Contribution calendar — last 12 months',
    less: 'Less',
    more: 'More',
    recentRepos: 'Recently active repositories',
    stats: {
      contributions: 'Contributions (12 mo)',
      repos: 'Public repositories',
      stars: 'Stars received',
      followers: 'Followers',
    },
    statusLoading: 'Loading live data from GitHub…',
    statusLive: (date) => `Live from GitHub · updated ${date}`,
    fallbackTitle: 'GitHub data isn’t loading right now',
    fallbackBody: 'Live contribution stats couldn’t be fetched in this session. View the activity directly on GitHub instead.',
    fallbackCta: 'View on GitHub',
  },
  zh: {
    eyebrow: 'GitHub 活動',
    heading: '即時 GitHub 貢獻紀錄',
    profileLink: (u) => `@${u}`,
    calendarTitle: '貢獻日曆——過去 12 個月',
    less: '較少',
    more: '較多',
    recentRepos: '近期活躍的儲存庫',
    stats: {
      contributions: '貢獻次數（12 個月）',
      repos: '公開儲存庫',
      stars: '獲得星星數',
      followers: '追蹤者',
    },
    statusLoading: '正在載入 GitHub 即時資料……',
    statusLive: (date) => `即時資料來自 GitHub · 更新於 ${date}`,
    fallbackTitle: '目前無法載入 GitHub 資料',
    fallbackBody: '此工作階段無法取得即時貢獻數據，請直接前往 GitHub 查看活動紀錄。',
    fallbackCta: '前往 GitHub 查看',
  },
};

const GitHubActivity = () => {
  const { lang } = useLanguage();
  const t = strings[lang];
  const [gh, setGh] = useState(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const json = async (url) => {
      try {
        const res = await fetch(url);
        return res.ok ? await res.json() : null;
      } catch {
        return null;
      }
    };

    (async () => {
      const [contrib, profile, repos] = await Promise.all([
        json(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`),
        json(`https://api.github.com/users/${USERNAME}`),
        json(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
      ]);
      if (cancelled) return;
      const ok = Boolean(contrib && Array.isArray(contrib.contributions)) || Boolean(profile);
      setGh({ contrib, profile, repos });
      setLoadFailed(!ok);
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const contrib = gh && gh.contrib;
  const profile = gh && gh.profile;
  const allRepos = gh && Array.isArray(gh.repos) ? gh.repos : [];
  const days = contrib && Array.isArray(contrib.contributions) ? contrib.contributions : null;
  const total = contrib && contrib.total
    ? contrib.total.lastYear != null
      ? contrib.total.lastYear
      : Object.values(contrib.total).reduce((a, b) => a + b, 0)
    : null;
  const hasStats = total != null || profile;
  const stars = allRepos.reduce((a, r) => a + (r.stargazers_count || 0), 0);
  const repos = allRepos
    .filter((r) => !r.fork)
    .slice(0, 4)
    .map((r) => ({
      name: r.name,
      url: r.html_url,
      meta: [r.language, `${r.stargazers_count || 0}★`, `updated ${new Date(r.updated_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}`]
        .filter(Boolean)
        .join('  ·  '),
    }));
  const weeks = buildWeeks(days);
  const statList = [
    { label: t.stats.contributions, value: total != null ? String(total) : null },
    { label: t.stats.repos, value: profile ? String(profile.public_repos) : null },
    { label: t.stats.stars, value: allRepos.length ? String(stars) : null },
    { label: t.stats.followers, value: profile ? String(profile.followers) : null },
  ].filter((stat) => stat.value != null);

  const status = loading
    ? t.statusLoading
    : t.statusLive(new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }));

  const showFallback = !loading && loadFailed && statList.length === 0;

  return (
    <section id="github" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8 nav:mb-10">
        <h2 className="m-0 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
          {t.heading}
        </h2>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/[0.16] bg-white/[0.04] text-white font-semibold text-sm transition-colors duration-200 hover:bg-white/10 hover:border-white/30"
        >
          {t.profileLink(USERNAME)} <span aria-hidden="true">&#8599;</span>
        </a>
      </div>

      {showFallback ? (
        <div className="p-7 nav:p-10 rounded-[22px] border border-white/[0.09] bg-gradient-to-b from-white/5 to-white/[0.02] text-center">
          <h3 className="m-0 mb-2.5 font-display font-semibold text-lg text-white">{t.fallbackTitle}</h3>
          <p className="m-0 mb-6 max-w-[54ch] mx-auto text-sm leading-relaxed text-ink-secondary">{t.fallbackBody}</p>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(181,31,40,0.45)]"
          >
            {t.fallbackCta} <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      ) : (
        <>
          {statList.length > 0 && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-3.5 mb-[18px]">
              {statList.map((stat) => (
                <div key={stat.label} className="p-[22px] rounded-[18px] border border-white/[0.09] card-surface">
                  <p className="m-0 mb-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[#c3a1a4]">{stat.label}</p>
                  <p className="m-0 font-display font-bold text-[clamp(26px,2.6vw,34px)] text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          )}

          {days && (
            <div className="p-5 nav:p-[30px] rounded-[22px] border border-white/[0.09] bg-gradient-to-b from-white/5 to-white/[0.02]">
              <div className="flex flex-wrap items-baseline justify-between gap-2.5 mb-4">
                <h3 className="m-0 font-display font-semibold text-[17px] text-white">{t.calendarTitle}</h3>
                <p className="m-0 font-mono text-xs text-ink-muted">{status}</p>
              </div>
              <div
                role="img"
                aria-label="GitHub contribution calendar for the last 12 months"
                className="flex gap-[3px] overflow-x-auto pb-1.5"
              >
                {weeks.map((week, wi) => (
                  <div key={wi} className="grid gap-[3px]" style={{ gridTemplateRows: 'repeat(7,11px)' }}>
                    {week.map((day, di) => (
                      <div key={di} title={day.title} className="w-[11px] h-[11px] rounded-sm" style={{ background: day.bg }} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 mt-3.5 font-mono text-[11px] text-ink-muted">
                {t.less}
                <span aria-hidden="true" className="w-[11px] h-[11px] rounded-sm bg-white/[0.06]" />
                <span aria-hidden="true" className="w-[11px] h-[11px] rounded-sm bg-[#4d1418]" />
                <span aria-hidden="true" className="w-[11px] h-[11px] rounded-sm bg-[#7d1c22]" />
                <span aria-hidden="true" className="w-[11px] h-[11px] rounded-sm bg-brand" />
                <span aria-hidden="true" className="w-[11px] h-[11px] rounded-sm bg-[#ef5a60]" />
                {t.more}
              </div>
            </div>
          )}

          {repos.length > 0 && (
            <div className="mt-[18px]">
              <h3 className="m-0 mb-3.5 font-display font-semibold text-[17px] text-white">{t.recentRepos}</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-3.5">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-5 rounded-[18px] border border-white/[0.09] bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.24]"
                  >
                    <strong className="block mb-2 font-display font-semibold text-[15px] leading-snug text-white break-words">{repo.name}</strong>
                    <span className="block font-mono text-[11px] text-[#f3a2a6]">{repo.meta}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default GitHubActivity;
