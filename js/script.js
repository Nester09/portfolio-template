/* This file reads js/config.js and builds the page.
   You normally do not need to edit it. */

// If js/config.js has a typing mistake, `portfolio` does not exist and p stays empty.
const p = typeof portfolio === "undefined" ? null : portfolio;
let sectionCount = 0;

/* ---------- Small helpers ---------- */

// Makes text safe to put inside HTML, so special characters cannot break the page.
function esc(text) {
  return String(text || "").replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

// True if a link like "#about" points at a section that is actually on the page.
function sectionIsShown(target) {
  if (target === "#about") return p.about.show;
  if (target === "#projects") return p.projects.items.length > 0;
  if (target === "#resume") return p.resume.items.length > 0;
  return true;
}

function nextNumber() {
  sectionCount++;
  return String(sectionCount).padStart(2, "0");
}

function getInitials() {
  if (p.initials) return p.initials;
  return p.name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
}

// Links to other websites open in a new tab. mailto:, tel: and #sections do not.
function linkAttrs(url) {
  return /^https?:/i.test(url) ? ' target="_blank" rel="noopener"' : "";
}

function sectionIntro(number, eyebrow, title, kicker, light) {
  const lightEyebrow = light ? " eyebrow-light" : "";
  const lightTitle = light ? " title-light" : "";
  const lightKicker = light ? " kicker-light" : "";
  return `
    <div class="section-intro row align-items-end gy-3">
      <div class="col-md-7">
        <p class="eyebrow${lightEyebrow}"><span class="eyebrow-line"></span> ${number} / ${esc(eyebrow)}</p>
        <h2 class="section-title${lightTitle}">${title}</h2>
      </div>
      <div class="col-md-5">
        <p class="section-kicker${lightKicker}">${esc(kicker)}</p>
      </div>
    </div>`;
}

/* ---------- Navigation ---------- */

function renderNav() {
  document.getElementById("brand").innerHTML =
    `<span class="brand-mark">${esc(getInitials())}</span><span>${esc(p.name)}</span>`;

  const links = [{ id: "home", label: "Home" }];
  if (p.about.show) links.push({ id: "about", label: p.about.navLabel });
  if (p.projects.items.length) links.push({ id: "projects", label: p.projects.navLabel });
  if (p.resume.items.length) links.push({ id: "resume", label: p.resume.navLabel });

  let html = links.map(function (link, i) {
    const active = i === 0 ? " active" : "";
    return `<li class="nav-item"><a class="nav-link${active}" href="#${link.id}">${esc(link.label)}</a></li>`;
  }).join("");

  html += `<li class="nav-item ms-lg-2"><a class="nav-link nav-contact" href="#contact">${esc(p.contact.navButton)} <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></li>`;
  document.getElementById("navList").innerHTML = html;
}

/* ---------- Sections ---------- */

function renderHero() {
  const h = p.hero;
  const note = (h.noteSmall || []).map(esc).join("<br>");
  const secondary = h.secondaryLink.label && sectionIsShown(h.secondaryLink.target)
    ? `<a class="text-link" href="${esc(h.secondaryLink.target)}">${esc(h.secondaryLink.label)} <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>`
    : "";
  const primary = h.primaryButton.label && sectionIsShown(h.primaryButton.target)
    ? `<a class="btn btn-primary-custom" href="${esc(h.primaryButton.target)}">${esc(h.primaryButton.label)} <i class="bi bi-arrow-down-right" aria-hidden="true"></i></a>`
    : "";
  const noteBox = h.noteText
    ? `<div class="col-lg-4">
         <aside class="hero-note reveal delay-3" aria-label="Current focus">
           <span class="note-label">${esc(h.noteLabel)}</span>
           <p>${esc(h.noteText)}</p>
           <span class="note-rule"></span>
           <span class="note-small">${note}</span>
         </aside>
       </div>`
    : "";

  return `
    <section id="home" class="hero-section section-anchor" aria-labelledby="hero-title">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="container position-relative">
        <div class="row align-items-end gy-5">
          <div class="col-lg-8">
            <p class="eyebrow reveal"><span class="eyebrow-line"></span> ${esc(h.eyebrow)}</p>
            <h1 id="hero-title" class="display-title reveal delay-1">${h.headline}</h1>
            <p class="hero-copy reveal delay-2">${esc(h.intro)}</p>
            <div class="hero-actions reveal delay-3">${primary}${secondary}</div>
          </div>
          ${noteBox}
        </div>
      </div>
      ${h.scrollText ? `<div class="scroll-cue-wrap container"><div class="scroll-cue reveal delay-3"><span class="scroll-dot"></span> ${esc(h.scrollText)}</div></div>` : ""}
    </section>`;
}

function renderSkills() {
  const s = p.skills;
  if (!s.groups.length) return "";

  const groups = s.groups.map(function (group) {
    return `
      <div class="col-md-6 col-xl-4">
        <div class="skill-group"><h4>${esc(group.title)}</h4><p>${group.items.map(esc).join(" · ")}</p></div>
      </div>`;
  }).join("");

  return `
    <div class="skills-block">
      <div class="row gy-4">
        <div class="col-lg-3">
          <p class="eyebrow"><span class="eyebrow-line"></span> ${esc(s.eyebrow)}</p>
          <h3 class="skills-heading">${s.title}</h3>
          <p class="muted-copy">${esc(s.text)}</p>
        </div>
        <div class="col-lg-9"><div class="row g-3">${groups}</div></div>
      </div>
    </div>`;
}

function renderAbout() {
  const a = p.about;
  if (!a.show) return "";

  const imageTag = a.image
    ? `<img src="${esc(a.image)}" alt="Portrait of ${esc(p.name)}" loading="lazy">`
    : "";
  const education = a.education
    ? `<div class="education-card">
         <div class="education-icon"><i class="bi bi-mortarboard" aria-hidden="true"></i></div>
         <div>
           <span class="card-label">${esc(a.education.label)}</span>
           <h3>${esc(a.education.title)}</h3>
           <p>${esc(a.education.place)}</p>
           <span class="education-year">${esc(a.education.note)}</span>
         </div>
       </div>`
    : "";

  return `
    <section id="about" class="section section-anchor section-paper" aria-labelledby="about-title">
      <div class="container">
        ${sectionIntro(nextNumber(), a.eyebrow, a.title, a.kicker, false)}
        <div class="row about-layout align-items-center gy-5">
          <div class="col-lg-5">
            <div class="portrait-frame" data-image-frame>
              ${imageTag}
              <div class="image-placeholder"><span class="placeholder-initials">${esc(getInitials())}</span></div>
              <span class="portrait-caption">${esc(p.name)}<br><small>${esc(p.location)}</small></span>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <p class="lead-copy">${esc(a.lead)}</p>
            <p class="body-copy">${esc(a.text)}</p>
            ${education}
          </div>
        </div>
        ${renderSkills()}
      </div>
    </section>`;
}

function projectLinks(links) {
  return links.filter(function (link) { return link.url; }).map(function (link) {
    // With an icon it goes before the label; without one an arrow goes after it.
    const before = link.icon ? `<i class="bi ${esc(link.icon)}" aria-hidden="true"></i> ` : "";
    const after = link.icon ? "" : ` <i class="bi bi-arrow-up-right" aria-hidden="true"></i>`;
    return `<a href="${esc(link.url)}"${linkAttrs(link.url)}>${before}${esc(link.label)}${after}</a>`;
  }).join("");
}

function projectCard(project, index) {
  const number = String(index + 1).padStart(2, "0");
  const colour = "visual-" + ((index % 3) + 1);
  const size = project.featured ? "project-featured" : "project-compact h-100";
  const imageTag = project.image
    ? `<img src="${esc(project.image)}" alt="${esc(project.title)} preview" loading="lazy">`
    : "";
  const badge = project.badge ? ` <sup>${esc(project.badge)}</sup>` : "";
  const features = project.features.length
    ? `<ul class="project-features">${project.features.map(function (f) { return `<li>${esc(f)}</li>`; }).join("")}</ul>`
    : "";
  const note = project.note
    ? `<p class="project-note"><i class="bi bi-info-circle" aria-hidden="true"></i> ${esc(project.note)}</p>`
    : "";

  return `
    <article class="project-card ${size}">
      <div class="project-visual ${colour}" data-image-frame>
        ${imageTag}
        <div class="project-placeholder"><i class="bi ${esc(project.icon || "bi-code-slash")}" aria-hidden="true"></i></div>
        <span class="project-number">${number}</span>
      </div>
      <div class="project-body">
        <span class="project-type">${esc(project.type)}</span>
        <h3>${esc(project.title)}${badge}</h3>
        <p>${esc(project.description)}</p>
        ${features}
        <div class="project-footer">
          <div class="tech-list">${project.tech.map(function (t) { return `<span>${esc(t)}</span>`; }).join("")}</div>
          <div class="project-links">${projectLinks(project.links)}</div>
        </div>
        ${note}
      </div>
    </article>`;
}

function renderProjects() {
  const pr = p.projects;
  if (!pr.items.length) return "";

  // Keep each project's original position so its number and colour stay the same.
  const cards = pr.items.map(function (project, index) {
    return { project: project, index: index };
  });
  const featured = cards.filter(function (c) { return c.project.featured; });
  const others = cards.filter(function (c) { return !c.project.featured; });

  const featuredHtml = featured.map(function (c) { return projectCard(c.project, c.index); }).join("");
  const othersHtml = others.map(function (c) {
    return `<div class="col-lg-6">${projectCard(c.project, c.index)}</div>`;
  }).join("");

  return `
    <section id="projects" class="section section-anchor section-ink" aria-labelledby="projects-title">
      <div class="container">
        ${sectionIntro(nextNumber(), pr.eyebrow, pr.title, pr.kicker, true)}
        <div class="projects-list">
          ${featuredHtml}
          ${others.length ? `<div class="row g-4">${othersHtml}</div>` : ""}
        </div>
      </div>
    </section>`;
}

function renderResume() {
  const r = p.resume;
  if (!r.items.length) return "";

  const cv = r.cvFile
    ? `<a href="${esc(r.cvFile)}" class="btn btn-outline-custom" download><i class="bi bi-download" aria-hidden="true"></i> ${esc(r.cvLabel)}</a>`
    : "";

  const items = r.items.map(function (item, i) {
    const future = item.upcoming ? " timeline-future" : "";
    const marker = item.upcoming
      ? `<i class="bi bi-plus-lg" aria-hidden="true"></i>`
      : String(i + 1).padStart(2, "0");
    return `
      <div class="timeline-item${future}">
        <div class="timeline-marker">${marker}</div>
        <div class="timeline-content">
          <span class="timeline-date">${esc(item.date)}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </div>
      </div>`;
  }).join("");

  const number = nextNumber();
  return `
    <section id="resume" class="section section-anchor section-paper" aria-labelledby="resume-title">
      <div class="container">
        <div class="section-intro row align-items-end gy-3">
          <div class="col-md-7">
            <p class="eyebrow"><span class="eyebrow-line"></span> ${number} / ${esc(r.eyebrow)}</p>
            <h2 class="section-title">${r.title}</h2>
          </div>
          <div class="col-md-5 resume-action">
            <p class="section-kicker">${esc(r.kicker)}</p>
            ${cv}
          </div>
        </div>
        <div class="timeline">${items}</div>
      </div>
    </section>`;
}

function renderContact() {
  const c = p.contact;

  let rows = "";
  if (c.email) {
    rows += contactLink("mailto:" + c.email, "bi-envelope", "Email", c.email);
  }
  if (c.phone) {
    rows += contactLink("tel:" + c.phone.replace(/[^\d+]/g, ""), "bi-telephone", "Phone", c.phone);
  }
  if (p.location) {
    rows += `<div class="contact-detail"><span class="contact-icon"><i class="bi bi-geo-alt" aria-hidden="true"></i></span><span><small>Location</small>${esc(p.location)}</span></div>`;
  }
  c.socials.filter(function (s) { return s.url; }).forEach(function (s) {
    rows += contactLink(s.url, s.icon, s.label, s.url.replace(/^https?:\/\/(www\.)?/, ""));
  });

  return `
    <section id="contact" class="section section-anchor contact-section" aria-labelledby="contact-title">
      <div class="container">
        <div class="contact-panel">
          <div class="row gy-5 align-items-end">
            <div class="col-lg-7">
              <p class="eyebrow eyebrow-light"><span class="eyebrow-line"></span> ${nextNumber()} / ${esc(c.eyebrow)}</p>
              <h2 id="contact-title" class="contact-title">${c.title}</h2>
              <p class="contact-copy">${esc(c.text)}</p>
            </div>
            <div class="col-lg-5"><div class="contact-details">${rows}</div></div>
          </div>
        </div>
      </div>
    </section>`;
}

function contactLink(url, icon, label, text) {
  return `<a href="${esc(url)}"${linkAttrs(url)}><span class="contact-icon"><i class="bi ${esc(icon)}" aria-hidden="true"></i></span><span><small>${esc(label)}</small>${esc(text)}</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>`;
}

function renderFooter() {
  const c = p.contact;
  let links = c.socials.filter(function (s) { return s.url; }).map(function (s) {
    return `<a href="${esc(s.url)}"${linkAttrs(s.url)}>${esc(s.label)}</a>`;
  }).join("");
  if (c.email) links += `<a href="mailto:${esc(c.email)}">Email</a>`;

  document.getElementById("siteFooter").innerHTML = `
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
      <a class="footer-brand" href="#home">${esc(p.name)} <span>· ${esc(p.location)}</span></a>
      <div class="footer-links">${links}</div>
      <p class="copyright mb-0">© ${new Date().getFullYear()} ${esc(p.name)}</p>
    </div>`;
}

/* ---------- Build the page ---------- */

// Shown instead of a blank page when config.js contains a mistake.
function showProblem(detail) {
  document.getElementById("main-content").innerHTML = `
    <section class="section">
      <div class="container" style="max-width: 42rem; padding-top: 5rem;">
        <h1 class="h3">The page could not be built</h1>
        <p>There is probably a typing mistake in <code>js/config.js</code>. The usual causes are a missing comma, a missing quotation mark or bracket, or a line that was deleted by accident.</p>
        <p>Open the browser console (press F12) to see the exact line, or compare your file with the original template.</p>
        ${detail ? `<p class="small text-muted">Technical detail: <code>${esc(detail)}</code></p>` : ""}
      </div>
    </section>`;
}

if (!p) {
  showProblem("");
} else {
  try {
    document.title = p.pageTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", p.pageDescription);

    renderNav();
    // The order here is the order of the sections on the page (and their numbers).
    document.getElementById("main-content").innerHTML =
      renderHero() + renderAbout() + renderProjects() + renderResume() + renderContact();
    renderFooter();
  } catch (error) {
    console.error(error);
    showProblem(error.message);
  }
}

/* ---------- Behaviour ---------- */

const navbar = document.querySelector(".navbar");
const mobileMenu = document.getElementById("navLinks");

// Slightly change the navbar once the page is scrolled.
function updateNavbar() {
  navbar.classList.toggle("scrolled", window.scrollY > 24);
}
updateNavbar();
window.addEventListener("scroll", updateNavbar, { passive: true });

// Close the mobile menu after choosing a section.
document.querySelectorAll("#navLinks .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    if (mobileMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(mobileMenu).hide();
    }
  });
});

// Show an image only once it has loaded; otherwise the placeholder stays visible.
document.querySelectorAll("[data-image-frame]").forEach(function (frame) {
  const image = frame.querySelector("img");
  if (!image) return;

  function showImage() { frame.classList.add("has-image"); }
  image.addEventListener("load", showImage);
  if (image.complete && image.naturalWidth > 0) showImage();
});