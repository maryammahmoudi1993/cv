import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import { fetchPublishedPostBySlug } from '../lib/posts.js';
import { isSupabaseConfigured } from '../lib/supabaseClient.js';

function renderMarkdownish(content) {
  if (!content) return null;
  return content.split('\n\n').map((paragraph, idx) => (
    <p key={idx} className="mb-5 text-[16px] leading-relaxed text-ink-secondary text-pretty">
      {paragraph}
    </p>
  ));
}

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setStatus('error');
      return;
    }
    let active = true;
    fetchPublishedPostBySlug(slug)
      .then((data) => {
        if (!active) return;
        setPost(data);
        setStatus(data ? 'ready' : 'not-found');
        if (data) {
          document.title = data.seo_title || `${data.title} · Maryam Mahmoudi`;
          const descTag = document.querySelector('meta[name="description"]');
          if (descTag) descTag.setAttribute('content', data.seo_description || data.excerpt || '');
        }
      })
      .catch(() => active && setStatus('error'));
    return () => {
      active = false;
    };
  }, [slug]);

  return (
    <div className="relative min-h-screen bg-bg isolate">
      <Navigation />
      <main className="relative z-10 max-w-[70ch] mx-auto px-5 nav:px-10 py-16 nav:py-[110px]">
        {status === 'loading' && <p className="text-ink-secondary">Loading…</p>}
        {status === 'not-found' && (
          <div>
            <p className="text-ink-secondary">This post could not be found.</p>
            <Link to="/" className="text-brand-light font-semibold">
              &larr; Back home
            </Link>
          </div>
        )}
        {status === 'error' && <p className="text-ink-secondary">Unable to load this post right now.</p>}
        {status === 'ready' && post && (
          <article>
            <p className="m-0 mb-3 font-mono text-xs tracking-[0.1em] text-[#f3a2a6]">
              {post.published_at ? new Date(post.published_at).toLocaleDateString() : ''} {post.read_time ? `· ${post.read_time}` : ''}
            </p>
            <h1 className="m-0 mb-5 font-display font-semibold text-[clamp(28px,4vw,44px)] tracking-tight text-white">
              {post.title}
            </h1>
            {post.cover_image_url && (
              <img
                src={post.cover_image_url}
                alt={post.title}
                className="w-full h-auto rounded-2xl mb-8 object-cover"
                loading="eager"
              />
            )}
            {post.excerpt && <p className="mb-6 text-lg text-ink-secondary text-pretty">{post.excerpt}</p>}
            {renderMarkdownish(post.content)}
            {post.external_url && (
              <a
                href={post.external_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-full bg-brand text-white font-semibold text-sm"
              >
                Read full post <span aria-hidden="true">&#8599;</span>
              </a>
            )}
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
}
