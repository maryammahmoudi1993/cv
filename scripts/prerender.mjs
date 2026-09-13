import { readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { render } from '../dist-ssr/entry-server.js';

const outputPath = resolve('dist/index.html');
const template = await readFile(outputPath, 'utf8');
const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${render()}</div>`,
);

await writeFile(outputPath, html);
await rm(resolve('dist-ssr'), { recursive: true, force: true });
