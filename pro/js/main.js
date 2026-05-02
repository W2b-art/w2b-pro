/* ============================================================
   W2b PROFESSIONAL — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderHomepageGalleries();
  initRevealOnScroll();
  initLightbox();
  initContactForm();
});

/* ── Navigation ─────────────────────────────────────────────── */
function initNav() {
  const nav    = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
  }
}

/* ── Homepage Gallery Grid ──────────────────────────────────── */
function renderHomepageGalleries() {
  const grid = document.getElementById('homepage-gallery-grid');
  if (!grid) return;

  const lang = localStorage.getItem('w2b_lang') || 'en';
  /* TRANSLATIONS is a top-level const in lang.js — accessible by name
     across script tags, but NOT exposed on window. Reference directly. */
  const T    = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) || {};

  grid.innerHTML = GALLERY_ORDER.map(id => {
    const data  = GALLERY_DATA[id];
    const title = data.title[lang] || data.title.en;
    const meta  = T[`gal_${id}_meta`] || '';
    const cover = data.images[data.coverIndex]
                  ? data.folder + data.images[data.coverIndex].file
                  : '';
    const imgHTML = cover
      ? `<img src="${cover}" alt="${title}" loading="lazy">`
      : `<div style="width:100%;height:100%;background:var(--bg-3);display:flex;
          align-items:center;justify-content:center;font-family:var(--font-body);
          font-size:0.6rem;color:var(--text-muted);letter-spacing:.1em;">
          ADD COVER IMAGE</div>`;

    return `
      <a class="gallery-card reveal" href="gallery-${id}.html">
        ${imgHTML}
        <div class="gallery-card-info">
          <div class="gallery-card-title">${title}</div>
          <div class="gallery-card-meta">${meta}</div>
        </div>
      </a>`;
  }).join('');
}

/* ── Scroll Reveal ──────────────────────────────────────────── */
function initRevealOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Gallery Page ───────────────────────────────────────────── */
function renderGalleryPage(galleryId) {
  const data = GALLERY_DATA[galleryId];
  if (!data) return;

  const lang  = localStorage.getItem('w2b_lang') || 'en';
  const grid  = document.getElementById('photo-grid');
  const title = document.getElementById('gallery-page-title');
  const desc  = document.getElementById('gallery-page-desc');

  if (title) title.textContent = data.title[lang] || data.title.en;
  if (desc)  desc.textContent  = data.description[lang] || data.description.en;

  document.title = `W2b — ${data.title.en}`;

  if (!grid) return;

  if (data.images.length === 0) {
    grid.innerHTML = `
      <div style="padding:4rem;text-align:center;font-family:var(--font-body);
        font-size:0.65rem;color:var(--text-muted);letter-spacing:.1em;grid-column:1/-1;">
        ADD PHOTOS TO images/${galleryId}/ AND UPDATE gallery-data.js
      </div>`;
    return;
  }

  grid.innerHTML = data.images.map((img, i) => {
    const altText = img.alt ? (img.alt[lang] || img.alt.en) : data.title.en;
    return `
      <div class="photo-item reveal" data-index="${i}">
        <img src="${data.folder}${img.file}" alt="${altText}" loading="lazy">
        <div class="photo-item-overlay">
          <span class="photo-item-name">${img.file.replace(/\.[^.]+$/, '').replace(/-/g, ' ')}</span>
        </div>
      </div>`;
  }).join('');

  document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', () => {
      openLightbox(galleryId, parseInt(item.getAttribute('data-index')));
    });
  });

  initRevealOnScroll();
}

/* ── Lightbox ───────────────────────────────────────────────── */
let _lbGalleryId = null;
let _lbIndex     = 0;

function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev')?.addEventListener('click', () => shiftLightbox(-1));
  document.getElementById('lightbox-next')?.addEventListener('click', () => shiftLightbox(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  shiftLightbox(-1);
    if (e.key === 'ArrowRight') shiftLightbox(1);
  });
}

function openLightbox(galleryId, index) {
  _lbGalleryId = galleryId;
  _lbIndex     = index;
  updateLightbox();
  document.getElementById('lightbox')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('open');
  document.body.style.overflow = '';
}

function shiftLightbox(dir) {
  const data = GALLERY_DATA[_lbGalleryId];
  if (!data) return;
  _lbIndex = (_lbIndex + dir + data.images.length) % data.images.length;
  updateLightbox();
}

function updateLightbox() {
  const data = GALLERY_DATA[_lbGalleryId];
  if (!data || !data.images[_lbIndex]) return;
  const lang    = localStorage.getItem('w2b_lang') || 'en';
  const img     = data.images[_lbIndex];
  const imgEl   = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  if (imgEl) {
    imgEl.src = data.folder + img.file;
    imgEl.alt = img.alt ? (img.alt[lang] || img.alt.en) : '';
  }
  if (caption) {
    caption.textContent =
      `${img.file.replace(/\.[^.]+$/, '').replace(/-/g, ' ')}  ·  ${_lbIndex + 1} / ${data.images.length}`;
  }
}

/* ── Contact Form ───────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn     = form.querySelector('.form-submit');
    const success = document.getElementById('form-success');

    btn.disabled    = true;
    btn.textContent = '...';

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        form.style.display = 'none';
        if (success) success.style.display = 'block';
      } else {
        throw new Error('Server error');
      }
    } catch {
      btn.disabled = false;
      /* Restore the localised button text from the active TRANSLATIONS bundle
         instead of hard-coding English. */
      const lang = localStorage.getItem('w2b_lang') || 'en';
      const T    = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) || {};
      btn.textContent = T.form_submit || 'Send';
      alert('Something went wrong. Please email me directly.');
    }
  });
}
