import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createProject,
  fetchProjectById,
  isProjectSlugTaken,
  updateProject,
  uploadProjectImage,
  fetchAllProjects,
} from '../../lib/projects.js';
import { slugify, isValidSlug } from '../../lib/slug.js';
import { validateImageFile } from '../../lib/imageValidation.js';
import Toast from '../components/Toast.jsx';
import useUnsavedChangesWarning from '../useUnsavedChangesWarning.js';

const emptyForm = {
  title: '',
  slug: '',
  eyebrow: '',
  short_description: '',
  description: '',
  technologies: '',
  features: '',
  image_url: '',
  github_url: '',
  demo_url: '',
  case_study_url: '',
  category: '',
  project_year: '',
  featured: false,
  status: 'draft',
  display_order: 0,
};

export default function ProjectFormPage() {
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
    if (isEdit) {
      fetchProjectById(id)
        .then((project) => {
          if (!project) {
            setToast({ type: 'error', message: 'Project not found.' });
            return;
          }
          setForm({
            title: project.title ?? '',
            slug: project.slug ?? '',
            eyebrow: project.eyebrow ?? '',
            short_description: project.short_description ?? '',
            description: project.description ?? '',
            technologies: (project.technologies ?? []).join(', '),
            features: (project.features ?? []).join('\n'),
            image_url: project.image_url ?? '',
            github_url: project.github_url ?? '',
            demo_url: project.demo_url ?? '',
            case_study_url: project.case_study_url ?? '',
            category: project.category ?? '',
            project_year: project.project_year ?? '',
            featured: project.featured ?? false,
            status: project.status ?? 'draft',
            display_order: project.display_order ?? 0,
          });
          setSlugEdited(true);
        })
        .catch((err) => setToast({ type: 'error', message: err.message }))
        .finally(() => setLoading(false));
    } else {
      fetchAllProjects()
        .then((all) => {
          const maxOrder = all.reduce((max, p) => Math.max(max, p.display_order), 0);
          setForm((f) => ({ ...f, display_order: maxOrder + 1 }));
        })
        .catch(() => {});
    }
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
      setErrors((prev) => ({ ...prev, image_url: validationError }));
      return;
    }
    setUploading(true);
    setErrors((prev) => ({ ...prev, image_url: undefined }));
    try {
      const url = await uploadProjectImage(file);
      update('image_url', url);
    } catch (err) {
      setErrors((prev) => ({ ...prev, image_url: err.message }));
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
      const taken = await isProjectSlugTaken(form.slug, isEdit ? id : undefined);
      if (taken) nextErrors.slug = 'This slug is already used by another project.';
    }

    for (const [field, label] of [
      ['github_url', 'GitHub URL'],
      ['demo_url', 'Demo URL'],
      ['case_study_url', 'Case study URL'],
    ]) {
      if (form[field] && !/^https?:\/\//.test(form[field])) {
        nextErrors[field] = `${label} must start with http:// or https://.`;
      }
    }

    if (Number.isNaN(Number(form.display_order))) nextErrors.display_order = 'Display order must be a number.';

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
        eyebrow: form.eyebrow.trim() || null,
        short_description: form.short_description.trim() || null,
        description: form.description.trim() || null,
        technologies: form.technologies.split(',').map((t) => t.trim()).filter(Boolean),
        features: form.features.split('\n').map((t) => t.trim()).filter(Boolean),
        image_url: form.image_url.trim() || null,
        github_url: form.github_url.trim() || null,
        demo_url: form.demo_url.trim() || null,
        case_study_url: form.case_study_url.trim() || null,
        category: form.category.trim() || null,
        project_year: form.project_year.trim() || null,
        featured: form.featured,
        status: form.status,
        display_order: Number(form.display_order),
      };

      if (isEdit) {
        await updateProject(id, payload);
        setToast({ type: 'success', message: 'Project updated.' });
      } else {
        await createProject(payload);
        setToast({ type: 'success', message: 'Project created.' });
      }
      setDirty(false);
      navigate('/admin/projects');
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="text-ink-secondary text-sm">Loading…</p>;

  return (
    <div className="max-w-2xl">
      <h1 className="text-white font-display font-semibold text-2xl mb-6">{isEdit ? 'Edit project' : 'New project'}</h1>
      <Toast message={toast?.message} type={toast?.type} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="Title" error={errors.title}>
          <input value={form.title} onChange={(e) => update('title', e.target.value)} className="admin-input" />
        </Field>

        <Field label="Slug" error={errors.slug} hint="Auto-generated from title; edit if needed.">
          <input value={form.slug} onChange={(e) => update('slug', e.target.value)} className="admin-input" />
        </Field>

        <Field label="Eyebrow / tagline">
          <input value={form.eyebrow} onChange={(e) => update('eyebrow', e.target.value)} className="admin-input" />
        </Field>

        <Field label="Short description">
          <textarea value={form.short_description} onChange={(e) => update('short_description', e.target.value)} rows={2} className="admin-input" />
        </Field>

        <Field label="Full description">
          <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={4} className="admin-input" />
        </Field>

        <Field label="Engineering highlights" hint="One per line.">
          <textarea value={form.features} onChange={(e) => update('features', e.target.value)} rows={4} className="admin-input font-mono text-sm" />
        </Field>

        <Field label="Technologies" hint="Comma separated.">
          <input value={form.technologies} onChange={(e) => update('technologies', e.target.value)} className="admin-input" />
        </Field>

        <Field label="Image" error={errors.image_url}>
          <div className="flex items-center gap-4">
            {form.image_url && <img src={form.image_url} alt="Preview" className="w-24 h-16 object-cover rounded-lg border border-white/10" />}
            <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handleImageChange} className="text-sm text-ink-secondary" />
            {uploading && <span className="text-xs text-ink-secondary">Uploading…</span>}
          </div>
        </Field>

        <Field label="GitHub URL" error={errors.github_url}>
          <input value={form.github_url} onChange={(e) => update('github_url', e.target.value)} className="admin-input" />
        </Field>

        <Field label="Live demo URL" error={errors.demo_url}>
          <input value={form.demo_url} onChange={(e) => update('demo_url', e.target.value)} className="admin-input" />
        </Field>

        <Field label="Case study URL" error={errors.case_study_url}>
          <input value={form.case_study_url} onChange={(e) => update('case_study_url', e.target.value)} className="admin-input" />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Category">
            <input value={form.category} onChange={(e) => update('category', e.target.value)} className="admin-input" />
          </Field>
          <Field label="Year">
            <input value={form.project_year} onChange={(e) => update('project_year', e.target.value)} className="admin-input" />
          </Field>
        </div>

        <Field label="Display order" error={errors.display_order}>
          <input type="number" value={form.display_order} onChange={(e) => update('display_order', e.target.value)} className="admin-input" />
        </Field>

        <label className="flex items-center gap-2.5">
          <input type="checkbox" checked={form.featured} onChange={(e) => update('featured', e.target.checked)} className="w-4 h-4" />
          <span className="text-sm text-white">Featured</span>
        </label>

        <Field label="Status">
          <select value={form.status} onChange={(e) => update('status', e.target.value)} className="admin-input">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </Field>

        <div className="flex gap-3 mt-2">
          <button type="submit" disabled={saving} className="px-5 py-2.5 rounded-lg bg-brand text-white text-sm font-semibold disabled:opacity-50">
            {saving ? 'Saving…' : 'Save project'}
          </button>
          <button type="button" onClick={() => navigate('/admin/projects')} className="px-5 py-2.5 rounded-lg border border-white/15 text-white text-sm font-semibold">
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
