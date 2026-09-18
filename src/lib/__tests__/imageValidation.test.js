import { describe, expect, it } from 'vitest';
import { validateImageFile, MAX_IMAGE_BYTES } from '../imageValidation.js';

function makeFile({ type = 'image/png', size = 1024 } = {}) {
  return { type, size };
}

describe('validateImageFile', () => {
  it('rejects when no file is given', () => {
    expect(validateImageFile(null)).toMatch(/no file/i);
  });

  it('rejects unsupported file types', () => {
    expect(validateImageFile(makeFile({ type: 'application/pdf' }))).toMatch(/unsupported/i);
  });

  it('rejects files over the size limit', () => {
    expect(validateImageFile(makeFile({ size: MAX_IMAGE_BYTES + 1 }))).toMatch(/too large/i);
  });

  it('accepts a valid image within the size limit', () => {
    expect(validateImageFile(makeFile({ type: 'image/webp', size: 1024 }))).toBeNull();
  });
});
