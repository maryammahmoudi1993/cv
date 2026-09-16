import blogImage from '../../blog-llm-langchain.webp';
import Eyebrow from './ui/Eyebrow.jsx';
import Tag from './ui/Tag.jsx';

const post = {
  title: 'How I Used LLMs and LangChain to Understand Customer Emotions and Behaviors in Real-Time',
  description: 'A comprehensive guide on implementing real-time customer sentiment analysis using Large Language Models and LangChain framework.',
  url: 'https://medium.com/@mahmoodi.maryam1993/how-i-used-llms-and-langchain-to-understand-customer-emotions-and-behaviors-in-real-time-89c64bedd3d4',
  date: '2025',
  readTime: '5 min read',
  tags: ['LLM', 'LangChain', 'Sentiment Analysis', 'Customer Analytics'],
  image: blogImage,
};

const Blog = () => (
  <section id="blog" data-reveal className="max-w-content mx-auto px-5 nav:px-10 py-14 nav:py-[110px]">
    <Eyebrow>Latest Blog Posts</Eyebrow>
    <h2 className="m-0 mb-3 font-display font-semibold text-[clamp(26px,3.2vw,40px)] tracking-tight text-white">
      Latest Blog Posts
    </h2>
    <p className="m-0 mb-8 nav:mb-10 text-[clamp(15px,1.1vw,17px)] leading-relaxed text-ink-secondary">
      Sharing insights and experiences from my journey in AI and data science
    </p>
    <article className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6 nav:gap-9 items-center p-5 nav:p-[30px] rounded-3xl border border-white/10 card-surface">
      <img
        src={post.image}
        alt={post.title}
        width="960"
        height="540"
        loading="lazy"
        className="w-full h-[clamp(200px,24vw,300px)] object-cover rounded-2xl"
      />
      <div>
        <p className="m-0 mb-3 font-mono text-xs tracking-[0.1em] text-[#f3a2a6]">{post.date} &middot; {post.readTime}</p>
        <h3 className="m-0 mb-3 font-display font-semibold text-[clamp(19px,2vw,25px)] leading-snug text-white text-pretty">
          {post.title}
        </h3>
        <p className="m-0 mb-[18px] text-[15px] leading-relaxed text-ink-secondary text-pretty">{post.description}</p>
        <ul className="m-0 mb-5 p-0 flex flex-wrap gap-2">
          {post.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </ul>
        <div className="flex flex-wrap gap-2.5">
          <a
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(181,31,40,0.45)]"
          >
            Read on Medium <span aria-hidden="true">&#8599;</span>
          </a>
          <a
            href="https://medium.com/@mahmoodi.maryam1993"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/[0.16] bg-white/[0.04] text-white font-semibold text-sm transition-colors duration-200 hover:bg-white/10"
          >
            View All Posts
          </a>
        </div>
      </div>
    </article>
  </section>
);

export default Blog;
