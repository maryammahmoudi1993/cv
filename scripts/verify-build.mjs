import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const distDirectory = resolve('dist');
const html = await readFile(resolve(distDirectory, 'index.html'), 'utf8');

const requiredFiles = [
  'robots.txt',
  'sitemap.xml',
  'og-image.png',
  'favicon.svg',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'site.webmanifest',
];

const componentFiles = [
  'Navigation.jsx',
  'Hero.jsx',
  'About.jsx',
  'Research.jsx',
  'Skills.jsx',
  'Projects.jsx',
  'Experience.jsx',
  'Education.jsx',
  'GitHubActivity.jsx',
  'Contact.jsx',
  'Footer.jsx',
];

const requiredHtml = [
  '<main ',
  'AI PhD Researcher',
  'National Yunlin University of Science and Technology',
  'Submitted to RSER',
  'BloomFlow AI',
  'DocPilot AI',
  'SupportPilot AI',
  'https://bloomflow-ai.onrender.com',
  'mahmoodi.maryam1993@gmail.com',
  '© 2026 Maryam Mahmoudi',
  'property="og:title"',
  'property="og:image"',
  'name="twitter:card"',
  'rel="canonical"',
  'application/ld+json',
  'loading="lazy"',
  'fetchPriority="high"',
];

const forbiddenHtml = [
  '<div id="root"></div>',
  '/src/main.jsx',
  '%BASE_URL%',
  'cdn.tailwindcss.com',
  'unpkg.com/react',
  '@babel/standalone',
  'href="#"',
  'src="/assets/',
  'href="/assets/',
];

for (const value of requiredHtml) {
  if (!html.includes(value)) {
    throw new Error(`Built HTML is missing required content: ${value}`);
  }
}

for (const value of forbiddenHtml) {
  if (html.includes(value)) {
    throw new Error(`Built HTML contains a deployment regression: ${value}`);
  }
}

await Promise.all([
  ...requiredFiles.map((file) => access(resolve(distDirectory, file))),
  ...componentFiles.map((file) => access(resolve('src/components', file))),
]);

const localReferences = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((reference) => !/^(?:https?:|mailto:|#|data:)/.test(reference));

for (const reference of localReferences) {
  const normalized = reference
    .replace(/^\.\//, '')
    .replace(/^\/cv\//, '')
    .replace(/^\//, '')
    .split(/[?#]/, 1)[0];
  await access(resolve(distDirectory, decodeURIComponent(normalized)));
}

const componentSource = await Promise.all(
  componentFiles.map((file) => readFile(resolve('src/components', file), 'utf8')),
);

if (componentSource.some((source) => /from ['"][^'"]+\.png['"]/.test(source))) {
  throw new Error('A portfolio content component imports a PNG instead of an optimized WebP image.');
}

console.log('Verified pre-rendered content, assets, metadata, links, and component architecture.');
