tailwind.config = {
  theme: {
    extend: {
      colors: {
        "upsdell-red": "#AE1F27",
        "purple-navy": "#5F5693",
        "green-cyan": "#469970",
      },
    },
  },
};

// Enhance Mailchimp archive with year filtering and nicer layout
document.addEventListener("DOMContentLoaded", () => {
  const archiveScript = document.getElementById("mc-archive-script");
  if (!archiveScript) return;

  let enhanced = false;

  const tryEnhance = () => {
    if (enhanced) return;
    try {
      enhanced = enhanceArchiveList();
    } catch (err) {
      console.error("Archive enhancement failed", err);
      enhanced = true;
    }

    if (!enhanced) {
      setTimeout(tryEnhance, 400);
    }
  };

  archiveScript.addEventListener("load", tryEnhance);

  // If the script loaded before we attached the listener, attempt immediately
  if (archiveScript.dataset.loaded === "true") {
    tryEnhance();
  } else {
    setTimeout(tryEnhance, 500);
  }
});

function enhanceArchiveList() {
  const rawContainer = document.getElementById("mc-archive-raw");
  if (!rawContainer) return false;

  const campaigns = rawContainer.querySelectorAll(".campaign");
  if (!campaigns.length) return false;

  const loader = document.getElementById("archive-loading");
  if (loader) loader.style.display = "none";

  const yearSelect = document.getElementById("archive-year");
  const listContainer = document.getElementById("archive-list");
  const controls = document.getElementById("archive-controls");
  if (!listContainer) return false;

  const items = [];

  campaigns.forEach((node) => {
    const link = node.querySelector("a");
    if (!link) return;

    const text = node.textContent.trim();
    const match = text.match(/^(\d{2})\/(\d{2})\/(\d{4})\s+-\s+/);
    if (!match) return;

    const [, mm, dd, yyyy] = match;
    const date = new Date(`${yyyy}-${mm}-${dd}T00:00:00Z`);

    items.push({
      year: yyyy,
      date,
      title: link.textContent.trim(),
      url: link.href,
    });
  });

  if (!items.length) return false;

  // Sort newest first
  items.sort((a, b) => b.date - a.date);

  // Populate year filter
  const years = Array.from(new Set(items.map((item) => item.year))).sort((a, b) => b - a);
  const currentYear = new Date().getFullYear().toString();
  const defaultYear = years.includes(currentYear) ? currentYear : years[0];
  if (yearSelect) {
    yearSelect.innerHTML = years.map((y) => `<option value="${y}">${y}</option>`).join("");
    yearSelect.disabled = false;
    yearSelect.value = defaultYear;
  }

  const formatDate = (date) =>
    date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const render = () => {
    const filterYear = yearSelect?.value || defaultYear;
    listContainer.innerHTML = "";

    const filtered = items.filter((item) => !filterYear || item.year === filterYear);

    if (!filtered.length) {
      listContainer.innerHTML = '<p class="text-sm text-gray-500">Aucune campagne pour cette année.</p>';
      return;
    }

    filtered.forEach((item) => {
      const wrapper = document.createElement("a");
      wrapper.className = "flex items-start justify-between gap-3 border border-gray-100 rounded-lg px-3 py-2 hover:border-gray-200 hover:bg-gray-50 transition-colors";
      wrapper.href = item.url;
      wrapper.target = "_blank";
      wrapper.rel = "noreferrer";

      const left = document.createElement("div");
      const dateEl = document.createElement("p");
      dateEl.className = "text-xs uppercase text-gray-500 tracking-wide";
      dateEl.textContent = formatDate(item.date);

      const title = document.createElement("p");
      title.className = "text-sm font-semibold text-upsdell-red";
      title.textContent = item.title;

      left.appendChild(dateEl);
      left.appendChild(title);

      const yearBadge = document.createElement("span");
      yearBadge.className = "text-xs text-gray-400";
      yearBadge.textContent = item.year;

      wrapper.appendChild(left);
      wrapper.appendChild(yearBadge);

      listContainer.appendChild(wrapper);
    });
  };

  if (yearSelect) {
    yearSelect.addEventListener("change", render);
  }

  if (controls) {
    controls.classList.remove("hidden");
  }

  // Hide raw list since we rebuilt it
  rawContainer.style.display = "none";

  render();

  return true;
}
