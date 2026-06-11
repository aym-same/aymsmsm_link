const fallbackProfile = {
  siteTitle: "Links",
  description: "プロフィールとリンクをまとめたページです。",
  eyebrow: "EVENT PLANNING",
  name: "山田 太郎",
  title: "イベントプランナー / 企画制作",
  bio: "地域イベント、企業プロモーション、音楽イベントの企画制作をしています。名刺から来てくださった方は、下記リンクよりお気軽にご連絡ください。",
  avatar: "assets/profile.svg",
  cover: "assets/cover.svg",
  copyText: "info@example.com",
  copyLabel: "メールアドレスをコピー",
  footer: "© 2026 Taro Yamada",
  theme: {
    preset: "minimal",
    accentColor: "#1f6f68",
    buttonStyle: "solid"
  },
  links: [
    {
      label: "公式サイト",
      note: "実績・サービス内容はこちら",
      url: "https://example.com",
      type: "website"
    },
    {
      label: "Instagram",
      note: "イベントの雰囲気を投稿しています",
      url: "https://instagram.com/",
      type: "instagram"
    },
    {
      label: "お問い合わせ",
      note: "企画相談・お仕事のご依頼",
      url: "mailto:info@example.com",
      type: "mail"
    }
  ]
};

const iconText = {
  website: "Web",
  instagram: "IG",
  x: "X",
  youtube: "YT",
  tiktok: "TT",
  line: "LINE",
  mail: "Mail",
  form: "Form",
  map: "Map",
  shop: "Shop",
  portfolio: "Work",
  default: "Link"
};

const $ = (selector) => document.querySelector(selector);

async function loadProfile() {
  try {
    const response = await fetch("profile.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`profile.json ${response.status}`);
    return { ...fallbackProfile, ...(await response.json()) };
  } catch (error) {
    console.info("profile.jsonを読み込めなかったため、初期データを表示します。", error);
    return fallbackProfile;
  }
}

function applyMeta(profile) {
  document.title = profile.siteTitle || profile.name || "Links";
  setMeta("description", profile.description || profile.bio || "");
  setMeta("theme-color", profile.theme?.accentColor || "#1f6f68");
  setProperty("og:title", profile.siteTitle || profile.name || "Links");
  setProperty("og:description", profile.description || profile.bio || "");
}

function setMeta(name, content) {
  const element = document.querySelector(`meta[name="${name}"]`);
  if (element) element.setAttribute("content", content);
}

function setProperty(property, content) {
  const element = document.querySelector(`meta[property="${property}"]`);
  if (element) element.setAttribute("content", content);
}

function applyTheme(theme = {}) {
  const root = document.documentElement;
  root.dataset.preset = theme.preset || "minimal";
  root.dataset.buttonStyle = theme.buttonStyle || "solid";
  root.style.setProperty("--accent", theme.accentColor || "#1f6f68");
  root.style.setProperty("--accent-contrast", theme.accentContrast || "#ffffff");
}

function renderProfile(profile) {
  $("[data-eyebrow]").textContent = profile.eyebrow || "";
  $("[data-name]").textContent = profile.name || "";
  $("[data-title]").textContent = profile.title || "";
  $("[data-bio]").textContent = profile.bio || "";
  $("[data-footer]").textContent = profile.footer || "";

  const avatar = $("[data-avatar]");
  avatar.src = profile.avatar || "assets/profile.svg";
  avatar.alt = profile.name ? `${profile.name}のプロフィール画像` : "プロフィール画像";

  const cover = $("[data-cover]");
  if (profile.cover) {
    cover.style.backgroundImage = `linear-gradient(135deg, rgba(0, 0, 0, 0.08), rgba(255, 255, 255, 0.1)), url("${profile.cover}")`;
  }
}

function renderLinks(links = []) {
  const list = $("[data-links]");
  list.innerHTML = "";

  links.forEach((link) => {
    const item = document.createElement("a");
    item.className = "link-card";
    item.href = link.url;
    item.target = link.url?.startsWith("http") ? "_blank" : "";
    item.rel = item.target ? "noopener noreferrer" : "";

    item.innerHTML = `
      <span class="link-icon" aria-hidden="true">${iconText[link.type] || iconText.default}</span>
      <span class="link-text">
        <span class="link-label"></span>
        <span class="link-note"></span>
      </span>
      <span class="link-arrow" aria-hidden="true">›</span>
    `;

    item.querySelector(".link-label").textContent = link.label || "Link";
    const note = item.querySelector(".link-note");
    note.textContent = link.note || "";
    note.hidden = !link.note;
    list.append(item);
  });
}

function setupCopy(profile) {
  const contact = $("[data-contact]");
  const copyButton = $("[data-copy]");
  const label = $("[data-copy-label]");
  const status = $("[data-copy-status]");

  if (!profile.copyText) {
    contact.hidden = true;
    return;
  }

  contact.hidden = false;
  label.textContent = profile.copyLabel || profile.copyText;
  status.textContent = "";

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(profile.copyText);
      status.textContent = "コピー済み";
    } catch {
      status.textContent = profile.copyText;
    }
    window.setTimeout(() => {
      status.textContent = "";
    }, 2200);
  });
}

async function boot() {
  const profile = await loadProfile();
  applyMeta(profile);
  applyTheme(profile.theme);
  renderProfile(profile);
  renderLinks(profile.links);
  setupCopy(profile);
}

boot();
