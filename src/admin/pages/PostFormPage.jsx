import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createPost,
  fetchPostById,
  isSlugTaken,
  updatePost,
  uploadPostCover,
} from '../../lib/posts.js';
import { slugify, isValidSlug } from '../../lib/slug.js';
import { validateImageFile } from '../../lib/imageValidation.js';
import Toast from '../components/Toast.jsx';
import useUnsavedChangesWarning from '../useUnsavedChangesWarning.js';

const emptyForm = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  external_url: '',
  cover_image_url: '',
  status: 'draft',
  tags: '',
  seo_title: '',
  seo_description: '',
  read_time: '',
};

export default function PostFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [slugEdited, setSlugEdited] = useState(false);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [dirty, setDirty] = useState(false);

  useUnsavedChangesWarning(dirty);

  useEffect(() => {
    if (!isEdit) return;
    fetchPostById(id)
      .then((post) => {
        if (!post) {
          setToast({ type: 'error', message: 'Post not found.' });
          return;
        }
        setForm({
          title: post.title ?? '',
          slug: post.slug ?? '',
          excerpt: post.excerpt ?? '',
          content: post.content ?? '',
          external_url: post.external_url ?? '',
          cover_image_url: post.cover_image_url ?? '',
          status: post.status ?? 'draft',
          tags: (post.tags ?? []).join(', '),
          seo_title: post.seo_title ?? '',
          seo_description: post.seo_description ?? '',
          read_time: post.read_time ?? '',
        });
        setSlugEdited(true);
      })
      .catch((err) => setToast({ type: 'error', message: err.message }))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  function update(field, value) {
    setDirty(true);
    setForm((f) => {
      const next = { ...f, [field]: value };
      if (field === 'title' && !slugEdited) {
        next.slug = slugify(value);
      }
      return next;
    });
    if (field === 'slug') setSlugEdited(true);
  }

  async function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const validationError = validateImageFile(file);
    if (validationError) {
      setErrors((prev) => ({ ...prev, cover_image_url: validationError }));
      return;
    }
    setUploading(true);
    setErrors((prev) => ({ ...prev, cover_image_url: undefined }));
    try {
      const url = await uploadPostCover(file);
      update('cover_image_url', url);
    } catch (err) {
      setErrors((prev) => ({ ...prev, cover_image_url: err.message }));
    } finally {
      setUploading(false);
    }
  }

  async function validate() {
    const nextErrors = {};
    if (!form.title.trim()) nextErrors.title = 'Title is required.';
    else if (form.title.length > 200) nextErrors.title = 'Title must be 200 characters or fewer.';

    if (!form.slug.trim()) nextErrors.slug = 'Slug is required.';
    else if (!isValidSlug(form.slug)) nextErrors.slug = 'Slug must be lowercase letters, numbers, and hyphens only.';
    else {
      const taken = await isSlugTaken(form.slug, isEdit ? id : undefined);
      if (taken) nextErrors.slug = 'This slug is already used by another post.';
    }

    if (form.external_url && !/^https?:\/\//.test(form.external_url)) {
      nextErrors.external_url = 'External URL must start with http:// or https://.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setToast(null);
    const valid = await validate();
    if (!valid) return;

    setSaving(true);
    try {
      const payload = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        excerpt: form.excerpt.trim() || null,
        content: form.content.trim() || null,
        external_url: form.external_url.trim() || null,
        cover_image_url: form.cover_image_url.trim() || null,
        status: form.status,
        tags: form.tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
        seo_title: form.seo_title.trim() || null,
        seo_description: form.seo_description.trim() || null,
        read_time: form.read_time.trim() || null,
      };
      if (form.status === 'published') payload.published_at = new Date().toISOString();

      if (isEdit) {
        await updatePost(id, payload);
        setToast({ type: 'success', message: 'Post updated.' });
      } else {
        await createPost(payload);
        setToast({ type: 'success', message: 'Post created.' });
      }
      setDirty(false);
      navigate('/admin/posts');
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="text-ink-secondary text-sm">Loading…</p>;

  return (
    <div className="max-w-2xl">
      <h1 className="text-white font-display font-semibold text-2xl mb-6">{isEdit ? 'Edit post' : 'New post'}</h1>
      <Toast message={toast?.message} type={toast?.type} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="Title" error={errors.title}>
          <input
            value={form.title}
            onChange={(e) => update('title', e.target.value)}
            className="admin-input"
          />
        </Field>

        <Field label="Slug" error={errors.slug} hint="Auto-generated from title; edit if needed.">
          <input value={form.slug} onChange={(e) => update('slug', e.target.value)} className="admin-input" />
        </Field>

        <Field label="Excerpt">
          <textarea
            value={form.excerpt}
            onChange={(e) => update('excerpt', e.target.value)}
            rows={2}
            className="admin-input"
          />
        </Field>

        <Field label="Content" hint="Plain text or Markdown-style paragraphs separated by blank lines.">
          <textarea
            value={form.content}
            onChange={(e) => update('content', e.target.value)}
            rows={10}
            className="admin-input font-mono text-sm"
          />
        </Field>

        <Field label="External URL" error={errors.external_url} hint="Optional link-out, e.g. a Medium post.">
          <input value={form.external_url} onChange={(e) => update('external_url', e.target.value)} className="admin-input" />
        </Field>

        <Field label="Cover image" error={errors.cover_image_url}>
          <div className="flex items-center gap-4">
            {form.cover_image_url && (
              <img src={form.cover_image_url} alt="Cover preview" className="w-24 h-16 object-cover rounded-lg border border-white/10" />
            )}
            <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handleImageChange} className="text-sm text-ink-secondary" />
            {uploading && <span className="text-xs text-ink-secondary">Uploading…</span>}
          </div>
        </Field>

        <Field label="Tags" hint="Comma separated.">
          <input value={form.tags} onChange={(e) => update('tags', e.target.value)} className="admin-input" />
        </Field>

        <Field label="Read time" hint="e.g. 5 min read">
          <input value={form.read_time} onChange={(e) => update('read_time', e.target.value)} className="admin-input" />
        </Field>

        <Field label="SEO title">
          <input value={form.seo_title} onChange={(e) => update('seo_title', e.target.value)} className="admin-input" />
        </Field>

        <Field label="SEO description">
          <textarea value={form.seo_description} onChange={(e) => update('seo_description', e.target.value)} rows={2} className="admin-input" />
        </Field>

        <Field label="Status">
          <select value={form.status} onChange={(e) => update('status', e.target.value)} className="admin-input">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </Field>

        <div className="flex gap-3 mt-2">
          <button type="submit" disabled={saving} className="px-5 py-2.5 rounded-lg bg-brand text-white text-sm font-semibold disabled:opacity-50">
            {saving ? 'Saving…' : 'Save post'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/posts')}
            className="px-5 py-2.5 rounded-lg border border-white/15 text-white text-sm font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, hint, error, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-ink-secondary mb-1.5">{label}</span>
      {children}
      {hint && !error && <span className="block text-xs text-ink-secondary/70 mt-1">{hint}</span>}
      {error && <span className="block text-xs text-red-300 mt-1">{error}</span>}
    </label>
  );
}
