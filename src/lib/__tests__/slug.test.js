import { describe, expect, it } from 'vitest';
import { slugify, isValidSlug } from '../slug.js';

describe('slugify', () => {
  it('lowercases and hyphenates a title', () => {
    expect(slugify('Understanding Explainable AI')).toBe('understanding-explainable-ai');
  });

  it('strips punctuation and collapses repeated separators', () => {
    expect(slugify('Hello, World!! -- Test')).toBe('hello-world-test');
  });

  it('trims leading and trailing hyphens', () => {
    expect(slugify('  --Edge Case--  ')).toBe('edge-case');
  });
});

describe('isValidSlug', () => {
  it('accepts lowercase alphanumeric slugs with single hyphens', () => {
    expect(isValidSlug('my-post-title')).toBe(true);
    expect(isValidSlug('post2')).toBe(true);
  });

  it('rejects uppercase, spaces, and double hyphens', () => {
    expect(isValidSlug('My Post')).toBe(false);
    expect(isValidSlug('post--title')).toBe(false);
    expect(isValidSlug('Post-Title')).toBe(false);
    expect(isValidSlug('-leading')).toBe(false);
  });
});
