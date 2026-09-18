import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Eyebrow from './ui/Eyebrow.jsx';
import Tag from './ui/Tag.jsx';
import { fetchPublishedPosts } from '../lib/posts.js';
import { isSupabaseConfigured } from '../lib/supabaseClient.js';

const Blog = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setPosts([]);
      return;
    }
    let active = true;
    fetchPublishedPosts()
      .then((data) => active && setPosts(data))
      .catch(() => active && setPosts([]));
    return () => {
      active = false;
    };
  }, []);

  if (posts !== null && posts.length === 0) return null;

  return (
    <section id="blog" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
      <Eyebrow>Latest Blog Posts</Eyebrow>
      <h2 className="m-0 mb-3 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
        Latest Blog Posts
      </h2>
      <p className="m-0 mb-8 nav:mb-10 text-[clamp(15px,1.1vw,17px)] leading-relaxed text-ink-secondary">
        Sharing insights and experiences from my journey in AI and data science
      </p>

      {posts === null && <p className="text-ink-secondary text-sm">Loading posts…</p>}

      {posts && posts.length > 0 && (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6 nav:gap-9 items-center p-5 nav:p-[30px] rounded-3xl border border-white/10 card-surface"
            >
              {post.cover_image_url && (
                <img
                  src={post.cover_image_url}
                  alt={post.title}
                  width="960"
                  height="540"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[clamp(200px,24vw,300px)] object-cover rounded-2xl bg-card"
                />
              )}
              <div>
                <p className="m-0 mb-3 font-mono text-xs tracking-[0.1em] text-[#f3a2a6]">
                  {post.published_at ? new Date(post.published_at).getFullYear() : ''} {post.read_time ? `· ${post.read_time}` : ''}
                </p>
                <h3 className="m-0 mb-3 font-display font-semibold text-[clamp(19px,2vw,25px)] leading-snug text-white text-pretty">
                  {post.title}
                </h3>
                <p className="m-0 mb-[18px] text-[15px] leading-relaxed text-ink-secondary text-pretty">{post.excerpt}</p>
                <ul className="m-0 mb-5 p-0 flex flex-wrap gap-2">
                  {(post.tags ?? []).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2.5">
                  {post.external_url ? (
                    <a
                      href={post.external_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(181,31,40,0.45)]"
                    >
                      Read post <span aria-hidden="true">&#8599;</span>
                    </a>
                  ) : (
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(181,31,40,0.45)]"
                    >
                      Read post
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
