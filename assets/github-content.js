const GITHUB_OWNER = "accountingbaba";
const GITHUB_REPO = "earthonerepository";
const GITHUB_BRANCH = "main";

const GH_HEADERS = { Accept: "application/vnd.github.v3+json" };

async function ghFetch(path) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
  const res = await fetch(url, { headers: GH_HEADERS });
  if (!res.ok) return null;
  return res.json();
}

function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { body: raw.trim() };
  const meta = {};
  match[1].split("\n").forEach(line => {
    const i = line.indexOf(":");
    if (i > 0) {
      const key = line.slice(0, i).trim();
      const val = line.slice(i + 1).trim().replace(/^['"]|['"]$/g, "");
      meta[key] = val;
    }
  });
  return { ...meta, body: match[2].trim() };
}

async function loadBlogs() {
  const files = await ghFetch("content/blogs");
  if (!files || !Array.isArray(files)) return [];
  const mds = files.filter(f => f.name.endsWith(".md"));
  const posts = await Promise.all(mds.map(async f => {
    const data = await ghFetch(f.path);
    if (!data || !data.content) return null;
    const raw = decodeURIComponent(escape(atob(data.content.replace(/\s/g, ""))));
    const meta = parseFrontMatter(raw);
    return {
      slug: f.name.replace(".md", ""),
      title: meta.title || f.name.replace(".md", ""),
      date: meta.date || null,
      author: meta.author || null,
      tags: meta.tags || "",
      category: meta.category || "outsourcing",
      description: meta.description || "",
      image: meta.image || null,
      readTime: meta.readTime || "5 min read",
      body: meta.body,
    };
  }));
  return posts.filter(Boolean).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

async function loadImages() {
  const files = await ghFetch("content/images");
  if (!files || !Array.isArray(files)) return [];
  return files
    .filter(f => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(f.name))
    .map(f => ({ name: f.name, url: f.download_url, size: f.size }));
}

function buildBlogCard(post) {
  const arrowSvg = `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  const thumb = post.image
    ? `<img class="blog-card-thumb" src="${post.image}" alt="${post.title}" loading="lazy">`
    : `<div class="blog-card-thumb-placeholder"><svg width="48" height="48" fill="none" stroke="#0D7A7A" stroke-width="1.5" viewBox="0 0 24 24" opacity="0.4"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>`;
  const dateStr = post.date ? new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";
  return `
<a class="blog-card reveal gh-card" href="/blog/read/?slug=${encodeURIComponent(post.slug)}" data-category="${post.category}">
  ${thumb}
  <div class="blog-card-body">
    <div class="blog-card-meta">
      <span class="blog-card-tag">${post.tags ? post.tags.split(",")[0].trim() : "Insights"}</span>
      ${dateStr ? `<span class="blog-card-date">${dateStr}</span>` : ""}
    </div>
    <h2>${post.title}</h2>
    <p>${post.description}</p>
    <div class="blog-card-footer">
      <span class="blog-card-read">Read article ${arrowSvg}</span>
      <span class="blog-card-time">${post.readTime}</span>
    </div>
  </div>
</a>`;
}

let lastSHA = null;

async function getLatestSHA() {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/branches/${GITHUB_BRANCH}`;
  const res = await fetch(url, { headers: GH_HEADERS });
  if (!res.ok) return null;
  const data = await res.json();
  return data.commit?.sha || null;
}

async function syncBlogIndex() {
  const sha = await getLatestSHA();
  if (sha && sha === lastSHA) return;
  lastSHA = sha;

  const grid = document.getElementById("blogGrid");
  if (!grid) return;

  const posts = await loadBlogs();
  const existing = grid.querySelectorAll(".gh-card");
  existing.forEach(el => el.remove());

  if (posts.length > 0) {
    const firstStatic = grid.querySelector(".blog-card:not(.gh-card)");
    posts.forEach(post => {
      const html = buildBlogCard(post);
      const tmp = document.createElement("div");
      tmp.innerHTML = html.trim();
      const card = tmp.firstElementChild;
      if (firstStatic) grid.insertBefore(card, firstStatic);
      else grid.appendChild(card);
    });
  }
}

window.GithubContent = { loadBlogs, loadImages, syncBlogIndex, parseFrontMatter };
