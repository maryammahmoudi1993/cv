export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5MB

export function validateImageFile(file) {
  if (!file) return 'No file selected.';
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return 'Unsupported file type. Use JPEG, PNG, WebP, or GIF.';
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return 'File is too large. Maximum size is 5MB.';
  }
  return null;
}
