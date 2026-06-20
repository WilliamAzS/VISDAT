const channels = [
  { rank: 1, youtuber: "T-Series", subscribers: 245000000, views: 228000000000, category: "Music", uploads: 20082, country: "India" },
  { rank: 2, youtuber: "YouTube Movies", subscribers: 170000000, views: 0, category: "Film & Animation", uploads: 1, country: "United States" },
  { rank: 3, youtuber: "MrBeast", subscribers: 166000000, views: 28368841870, category: "Entertainment", uploads: 741, country: "United States" },
  { rank: 4, youtuber: "Cocomelon - Nursery Rhymes", subscribers: 162000000, views: 164000000000, category: "Education", uploads: 966, country: "United States" },
  { rank: 5, youtuber: "SET India", subscribers: 159000000, views: 148000000000, category: "Shows", uploads: 116536, country: "India" },
  { rank: 7, youtuber: "Kids Diana Show", subscribers: 112000000, views: 93247040000, category: "People & Blogs", uploads: 1111, country: "United States" },
  { rank: 8, youtuber: "PewDiePie", subscribers: 111000000, views: 29058044447, category: "Gaming", uploads: 4716, country: "Japan" },
  { rank: 9, youtuber: "Like Nastya", subscribers: 106000000, views: 90479060027, category: "People & Blogs", uploads: 493, country: "Russia" },
  { rank: 10, youtuber: "Vlad and Niki", subscribers: 98900000, views: 77180169894, category: "Entertainment", uploads: 574, country: "United States" },
  { rank: 11, youtuber: "Zee Music Company", subscribers: 96700000, views: 57900000000, category: "Music", uploads: 8548, country: "India" },
  { rank: 12, youtuber: "WWE", subscribers: 96000000, views: 77400000000, category: "Sports", uploads: 70127, country: "United States" },
  { rank: 14, youtuber: "BLACKPINK", subscribers: 89800000, views: 32100000000, category: "Music", uploads: 543, country: "South Korea" },
  { rank: 16, youtuber: "Sony SAB", subscribers: 83000000, views: 101000000000, category: "Shows", uploads: 71270, country: "India" },
  { rank: 17, youtuber: "5-Minute Crafts", subscribers: 80100000, views: 26200000000, category: "Howto & Style", uploads: 1, country: "United Kingdom" },
  { rank: 18, youtuber: "BANGTANTV", subscribers: 75600000, views: 20800000000, category: "Music", uploads: 2281, country: "South Korea" },
  { rank: 20, youtuber: "Justin Bieber", subscribers: 71600000, views: 30600000000, category: "Music", uploads: 249, country: "Canada" },
  { rank: 21, youtuber: "HYBE LABELS", subscribers: 71300000, views: 28600000000, category: "Music", uploads: 1337, country: "South Korea" },
  { rank: 22, youtuber: "Zee TV", subscribers: 70500000, views: 73100000000, category: "Entertainment", uploads: 129204, country: "India" },
  { rank: 23, youtuber: "Pinkfong Baby Shark", subscribers: 68200000, views: 38800000000, category: "Education", uploads: 2865, country: "United States" },
  { rank: 24, youtuber: "Canal KondZilla", subscribers: 66500000, views: 36800000000, category: "Music", uploads: 2572, country: "Brazil" },
  { rank: 25, youtuber: "ChuChu TV Nursery Rhymes", subscribers: 65900000, views: 45800000000, category: "Education", uploads: 633, country: "India" },
  { rank: 26, youtuber: "Shemaroo Filmi Gaane", subscribers: 65600000, views: 28600000000, category: "Music", uploads: 8502, country: "India" },
  { rank: 27, youtuber: "Colors TV", subscribers: 64600000, views: 61500000000, category: "Shows", uploads: 112915, country: "India" },
  { rank: 28, youtuber: "T-Series Bhakti Sagar", subscribers: 61000000, views: 29500000000, category: "Music", uploads: 13, country: "India" },
  { rank: 29, youtuber: "Dude Perfect", subscribers: 59500000, views: 16200000000, category: "Sports", uploads: 389, country: "United States" },
  { rank: 30, youtuber: "Movieclips", subscribers: 59500000, views: 59300000000, category: "Film & Animation", uploads: 39113, country: "United States" },
  { rank: 31, youtuber: "Tips Official", subscribers: 59300000, views: 33400000000, category: "Music", uploads: 4741, country: "India" },
  { rank: 32, youtuber: "El Reino Infantil", subscribers: 58400000, views: 57300000000, category: "Music", uploads: 1510, country: "Argentina" },
  { rank: 33, youtuber: "Wave Music", subscribers: 58000000, views: 40600000000, category: "Music", uploads: 19487, country: "India" },
  { rank: 34, youtuber: "Aaj Tak", subscribers: 57600000, views: 25300000000, category: "News & Politics", uploads: 283775, country: "India" },
  { rank: 35, youtuber: "Sony Music India", subscribers: 57200000, views: 28800000000, category: "Music", uploads: 3882, country: "India" },
  { rank: 36, youtuber: "EminemMusic", subscribers: 56900000, views: 27100000000, category: "Music", uploads: 156, country: "United States" },
  { rank: 37, youtuber: "Marshmello", subscribers: 56400000, views: 14700000000, category: "Entertainment", uploads: 436, country: "United States" },
  { rank: 38, youtuber: "YRF", subscribers: 54600000, views: 35300000000, category: "Film & Animation", uploads: 3707, country: "India" },
  { rank: 40, youtuber: "Ed Sheeran", subscribers: 53500000, views: 30400000000, category: "Music", uploads: 383, country: "United Kingdom" },
  { rank: 41, youtuber: "Infobells - Hindi", subscribers: 53300000, views: 30500000000, category: "Education", uploads: 577, country: "India" },
  { rank: 42, youtuber: "Taylor Swift", subscribers: 52900000, views: 29900000000, category: "Music", uploads: 216, country: "United States" },
  { rank: 43, youtuber: "Ariana Grande", subscribers: 52700000, views: 24000000000, category: "Music", uploads: 147, country: "United States" },
  { rank: 44, youtuber: "BillionSurpriseToys", subscribers: 52200000, views: 9880000000, category: "Education", uploads: 847, country: "United States" },
  { rank: 45, youtuber: "JuegaGerman", subscribers: 48100000, views: 14600000000, category: "Gaming", uploads: 2052, country: "Chile" },
  { rank: 46, youtuber: "Billie Eilish", subscribers: 47900000, views: 13600000000, category: "Music", uploads: 65, country: "United States" },
  { rank: 47, youtuber: "Get Movies", subscribers: 47500000, views: 30800000000, category: "Entertainment", uploads: 3322, country: "Russia" },
  { rank: 48, youtuber: "Shemaroo", subscribers: 47400000, views: 22500000000, category: "Entertainment", uploads: 11451, country: "India" },
  { rank: 50, youtuber: "SonyMusicIndiaVEVO", subscribers: 46600000, views: 27300000000, category: "Music", uploads: 3444, country: "United States" }
];

const state = {
  search: "",
  country: "All",
  category: "All",
  sortBy: "subscribers",
  topN: 15,
  theme: localStorage.getItem("yt-dashboard-theme") || "dark"
};

const charts = {};
const els = {};

const palette = [
  "#22d3ee", "#60a5fa", "#a78bfa", "#f472b6", "#34d399",
  "#fbbf24", "#fb7185", "#38bdf8", "#c084fc", "#4ade80"
];

function $(selector) {
  return document.querySelector(selector);
}

function formatCompact(value) {
  return Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function formatNumber(value) {
  return Intl.NumberFormat("en").format(Math.round(value));
}

function formatMillion(value) {
  return `${(value / 1_000_000).toFixed(value >= 100_000_000 ? 0 : 1)}M`;
}

function formatBillion(value) {
  return `${(value / 1_000_000_000).toFixed(value >= 100_000_000_000 ? 0 : 1)}B`;
}

function groupBySum(data, key, metric) {
  return data.reduce((acc, item) => {
    const label = item[key] || "Unknown";
    acc[label] = (acc[label] || 0) + item[metric];
    return acc;
  }, {});
}

function groupByCount(data, key) {
  return data.reduce((acc, item) => {
    const label = item[key] || "Unknown";
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});
}

function objectToSortedEntries(obj, limit = 10) {
  return Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, limit);
}

function getFilteredData() {
  let result = channels.filter((item) => {
    const matchSearch = item.youtuber.toLowerCase().includes(state.search.toLowerCase());
    const matchCountry = state.country === "All" || item.country === state.country;
    const matchCategory = state.category === "All" || item.category === state.category;
    return matchSearch && matchCountry && matchCategory;
  });

  result = result.sort((a, b) => {
    if (state.sortBy === "rank") return a.rank - b.rank;
    return b[state.sortBy] - a[state.sortBy];
  });

  return result.slice(0, state.topN);
}

function getAllFilteredBeforeTopN() {
  let result = channels.filter((item) => {
    const matchSearch = item.youtuber.toLowerCase().includes(state.search.toLowerCase());
    const matchCountry = state.country === "All" || item.country === state.country;
    const matchCategory = state.category === "All" || item.category === state.category;
    return matchSearch && matchCountry && matchCategory;
  });

  return result.sort((a, b) => {
    if (state.sortBy === "rank") return a.rank - b.rank;
    return b[state.sortBy] - a[state.sortBy];
  });
}

function getChartTextColor() {
  return getComputedStyle(document.documentElement).getPropertyValue("--muted").trim();
}

function getGridColor() {
  return getComputedStyle(document.documentElement).getPropertyValue("--line").trim();
}

function baseOptions(extra = {}) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1100,
      easing: "easeOutQuart"
    },
    interaction: {
      intersect: false,
      mode: "nearest"
    },
    plugins: {
      legend: {
        labels: {
          color: getChartTextColor(),
          boxWidth: 12,
          boxHeight: 12,
          usePointStyle: true,
          font: { family: "Inter", weight: "700" }
        }
      },
      tooltip: {
        backgroundColor: "rgba(8,17,31,0.96)",
        borderColor: "rgba(34,211,238,0.4)",
        borderWidth: 1,
        padding: 13,
        titleFont: { family: "Inter", size: 13, weight: "800" },
        bodyFont: { family: "Inter", size: 12, weight: "600" }
      }
    },
    scales: {
      x: {
        ticks: { color: getChartTextColor(), font: { family: "Inter", weight: "700" } },
        grid: { color: getGridColor() }
      },
      y: {
        ticks: { color: getChartTextColor(), font: { family: "Inter", weight: "700" } },
        grid: { color: getGridColor() }
      }
    },
    ...extra
  };
}

function populateFilters() {
  const countries = ["All", ...new Set(channels.map((item) => item.country))].sort((a, b) => a.localeCompare(b));
  const categories = ["All", ...new Set(channels.map((item) => item.category))].sort((a, b) => a.localeCompare(b));

  els.countryFilter.innerHTML = countries.map((country) => `<option value="${country}">${country}</option>`).join("");
  els.categoryFilter.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function countUp(element, target, formatter = formatCompact) {
  const duration = 850;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = formatter(target * eased);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function updateKpis(data) {
  const fullFiltered = getAllFilteredBeforeTopN();
  const totalSubscribers = fullFiltered.reduce((sum, item) => sum + item.subscribers, 0);
  const totalViews = fullFiltered.reduce((sum, item) => sum + item.views, 0);
  const countries = objectToSortedEntries(groupByCount(fullFiltered, "country"));
  const topCountry = countries[0]?.[0] || "-";

  countUp(els.kpiChannels, fullFiltered.length, (v) => formatNumber(v));
  countUp(els.kpiSubscribers, totalSubscribers, formatCompact);
  countUp(els.kpiViews, totalViews, formatCompact);
  els.kpiTopCountry.textContent = topCountry;
  els.heroRows.textContent = channels.length;
}

function updateCharts(data) {
  const labels = data.map((item) => item.youtuber);
  const subscriberData = data.map((item) => +(item.subscribers / 1_000_000).toFixed(2));
  const viewData = data.map((item) => +(item.views / 1_000_000_000).toFixed(2));

  charts.subscriber.data.labels = labels;
  charts.subscriber.data.datasets[0].data = subscriberData;
  charts.subscriber.update();

  charts.views.data.labels = labels;
  charts.views.data.datasets[0].data = viewData;
  charts.views.update();

  const categoryEntries = objectToSortedEntries(groupBySum(data, "category", "subscribers"), 8);
  charts.category.data.labels = categoryEntries.map(([label]) => label);
  charts.category.data.datasets[0].data = categoryEntries.map(([, value]) => +(value / 1_000_000).toFixed(2));
  charts.category.update();

  charts.scatter.data.datasets[0].data = data.map((item) => ({
    x: +(item.subscribers / 1_000_000).toFixed(2),
    y: +(item.views / 1_000_000_000).toFixed(2),
    r: Math.max(6, Math.min(22, Math.sqrt(item.uploads) / 15)),
    label: item.youtuber,
    country: item.country,
    category: item.category,
    uploads: item.uploads
  }));
  charts.scatter.update();

  const countryEntries = objectToSortedEntries(groupBySum(data, "country", "subscribers"), 8);
  charts.country.data.labels = countryEntries.map(([label]) => label);
  charts.country.data.datasets[0].data = countryEntries.map(([, value]) => +(value / 1_000_000).toFixed(2));
  charts.country.update();
}

function createCharts() {
  Chart.defaults.font.family = "Inter";
  Chart.defaults.color = getChartTextColor();

  charts.subscriber = new Chart($("#subscriberChart"), {
    type: "bar",
    data: {
      labels: [],
      datasets: [{
        label: "Subscribers (juta)",
        data: [],
        borderRadius: 14,
        borderSkipped: false,
        backgroundColor: (context) => palette[context.dataIndex % palette.length]
      }]
    },
    options: baseOptions({
      plugins: {
        ...baseOptions().plugins,
        tooltip: {
          ...baseOptions().plugins.tooltip,
          callbacks: {
            label: (context) => `Subscribers: ${context.raw} juta`
          }
        }
      },
      scales: {
        x: { ...baseOptions().scales.x, ticks: { ...baseOptions().scales.x.ticks, maxRotation: 45, minRotation: 25 } },
        y: { ...baseOptions().scales.y, title: { display: true, text: "Subscribers (juta)", color: getChartTextColor() } }
      }
    })
  });

  charts.category = new Chart($("#categoryChart"), {
    type: "doughnut",
    data: {
      labels: [],
      datasets: [{
        label: "Subscribers (juta)",
        data: [],
        borderWidth: 3,
        borderColor: "rgba(8,17,31,0.75)",
        hoverOffset: 18,
        backgroundColor: palette
      }]
    },
    options: baseOptions({
      cutout: "62%",
      scales: {},
      plugins: {
        ...baseOptions().plugins,
        tooltip: {
          ...baseOptions().plugins.tooltip,
          callbacks: {
            label: (context) => `${context.label}: ${context.raw} juta subscribers`
          }
        }
      }
    })
  });

  charts.scatter = new Chart($("#scatterChart"), {
    type: "bubble",
    data: {
      datasets: [{
        label: "Channel",
        data: [],
        backgroundColor: "rgba(34, 211, 238, 0.58)",
        borderColor: "rgba(34, 211, 238, 0.95)",
        borderWidth: 2
      }]
    },
    options: baseOptions({
      plugins: {
        ...baseOptions().plugins,
        tooltip: {
          ...baseOptions().plugins.tooltip,
          callbacks: {
            title: (items) => items[0].raw.label,
            label: (context) => [
              `Subscribers: ${context.raw.x} juta`,
              `Video views: ${context.raw.y} miliar`,
              `Uploads: ${formatNumber(context.raw.uploads)}`,
              `${context.raw.category} • ${context.raw.country}`
            ]
          }
        }
      },
      scales: {
        x: { ...baseOptions().scales.x, title: { display: true, text: "Subscribers (juta)", color: getChartTextColor() } },
        y: { ...baseOptions().scales.y, title: { display: true, text: "Video views (miliar)", color: getChartTextColor() } }
      }
    })
  });

  charts.views = new Chart($("#viewsChart"), {
    type: "bar",
    data: {
      labels: [],
      datasets: [{
        label: "Video views (miliar)",
        data: [],
        borderRadius: 14,
        borderSkipped: false,
        backgroundColor: (context) => palette[(context.dataIndex + 3) % palette.length]
      }]
    },
    options: baseOptions({
      indexAxis: "y",
      plugins: {
        ...baseOptions().plugins,
        tooltip: {
          ...baseOptions().plugins.tooltip,
          callbacks: {
            label: (context) => `Views: ${context.raw} miliar`
          }
        }
      },
      scales: {
        x: { ...baseOptions().scales.x, title: { display: true, text: "Video views (miliar)", color: getChartTextColor() } },
        y: { ...baseOptions().scales.y }
      }
    })
  });

  charts.country = new Chart($("#countryChart"), {
    type: "polarArea",
    data: {
      labels: [],
      datasets: [{
        label: "Subscribers (juta)",
        data: [],
        backgroundColor: palette.map((color) => `${color}cc`),
        borderColor: palette,
        borderWidth: 2
      }]
    },
    options: baseOptions({
      scales: {
        r: {
          ticks: { color: getChartTextColor(), backdropColor: "transparent" },
          grid: { color: getGridColor() },
          angleLines: { color: getGridColor() }
        }
      },
      plugins: {
        ...baseOptions().plugins,
        tooltip: {
          ...baseOptions().plugins.tooltip,
          callbacks: {
            label: (context) => `${context.label}: ${context.raw} juta subscribers`
          }
        }
      }
    })
  });
}

function updateInsights(data) {
  const fullFiltered = getAllFilteredBeforeTopN();
  if (!fullFiltered.length) {
    els.mainInsight.textContent = "Tidak ada data yang cocok dengan filter saat ini.";
    els.insightList.innerHTML = "";
    return;
  }

  const topChannel = fullFiltered[0];
  const categoryEntries = objectToSortedEntries(groupByCount(fullFiltered, "category"));
  const countryEntries = objectToSortedEntries(groupByCount(fullFiltered, "country"));
  const avgSubs = fullFiltered.reduce((sum, item) => sum + item.subscribers, 0) / fullFiltered.length;
  const mostProductive = [...fullFiltered].sort((a, b) => b.uploads - a.uploads)[0];
  const highestViews = [...fullFiltered].sort((a, b) => b.views - a.views)[0];

  els.mainInsight.textContent = `${topChannel.youtuber} menjadi channel paling dominan pada filter saat ini dengan ${formatMillion(topChannel.subscribers)} subscribers. Rata-rata subscribers dalam subset ini adalah ${formatMillion(avgSubs)} per channel.`;
  els.insightList.innerHTML = [
    { title: "Kategori paling sering muncul", text: `${categoryEntries[0][0]} muncul pada ${categoryEntries[0][1]} channel di data aktif.` },
    { title: "Negara paling dominan", text: `${countryEntries[0][0]} memiliki ${countryEntries[0][1]} channel pada subset terpilih.` },
    { title: "Views terbesar", text: `${highestViews.youtuber} memiliki ${formatBillion(highestViews.views)} video views.` },
    { title: "Channel paling produktif", text: `${mostProductive.youtuber} tercatat memiliki ${formatNumber(mostProductive.uploads)} uploads.` }
  ].map((item) => `
    <article class="insight-item">
      <strong>${item.title}</strong>
      <span>${item.text}</span>
    </article>
  `).join("");
}

function renderTable(data) {
  const maxSubscribers = Math.max(...channels.map((item) => item.subscribers));

  els.tableCount.textContent = `${data.length} data ditampilkan`;
  els.dataRows.innerHTML = data.map((item) => `
    <tr>
      <td>#${item.rank}</td>
      <td>
        <div class="channel-cell">
          <span class="channel-avatar">${item.youtuber.slice(0, 2).toUpperCase()}</span>
          <span>${item.youtuber}</span>
        </div>
      </td>
      <td>${item.category}</td>
      <td>${item.country}</td>
      <td>
        <div class="bar-cell">
          <span>${formatMillion(item.subscribers)}</span>
          <span class="inline-bar"><i style="width:${(item.subscribers / maxSubscribers) * 100}%"></i></span>
        </div>
      </td>
      <td>${formatBillion(item.views)}</td>
      <td>${formatNumber(item.uploads)}</td>
    </tr>
  `).join("");
}

function updateDashboard() {
  const data = getFilteredData();
  updateKpis(data);
  updateCharts(data);
  updateInsights(data);
  renderTable(data);
}

function downloadFilteredCsv() {
  const data = getAllFilteredBeforeTopN();
  const header = ["rank", "youtuber", "subscribers", "views", "category", "uploads", "country"];
  const rows = data.map((item) => header.map((key) => `"${String(item[key]).replaceAll('"', '""')}"`).join(","));
  const csv = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "youtube_dashboard_filtered.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    updateDashboard();
  });

  els.countryFilter.addEventListener("change", (event) => {
    state.country = event.target.value;
    updateDashboard();
  });

  els.categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    updateDashboard();
  });

  els.sortBy.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    updateDashboard();
  });

  els.topN.addEventListener("input", (event) => {
    state.topN = Number(event.target.value);
    els.topNValue.textContent = state.topN;
    updateDashboard();
  });

  els.resetFilters.addEventListener("click", () => {
    state.search = "";
    state.country = "All";
    state.category = "All";
    state.sortBy = "subscribers";
    state.topN = 15;
    els.searchInput.value = "";
    els.countryFilter.value = "All";
    els.categoryFilter.value = "All";
    els.sortBy.value = "subscribers";
    els.topN.value = "15";
    els.topNValue.textContent = "15";
    updateDashboard();
  });

  els.themeToggle.addEventListener("click", () => {
    state.theme = document.body.classList.contains("light") ? "dark" : "light";
    localStorage.setItem("yt-dashboard-theme", state.theme);
    applyTheme();
    Object.values(charts).forEach((chart) => chart.destroy());
    createCharts();
    updateDashboard();
  });

  els.downloadCsv.addEventListener("click", downloadFilteredCsv);
}

function applyTheme() {
  document.body.classList.toggle("light", state.theme === "light");
  els.themeToggle.textContent = state.theme === "light" ? "🌙" : "☀️";
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".section-reveal").forEach((section) => observer.observe(section));
}

function cacheElements() {
  els.searchInput = $("#searchInput");
  els.countryFilter = $("#countryFilter");
  els.categoryFilter = $("#categoryFilter");
  els.sortBy = $("#sortBy");
  els.topN = $("#topN");
  els.topNValue = $("#topNValue");
  els.resetFilters = $("#resetFilters");
  els.themeToggle = $("#themeToggle");
  els.downloadCsv = $("#downloadCsv");
  els.heroRows = $("#heroRows");
  els.kpiChannels = $('[data-kpi="channels"]');
  els.kpiSubscribers = $('[data-kpi="subscribers"]');
  els.kpiViews = $('[data-kpi="views"]');
  els.kpiTopCountry = $('[data-kpi="topCountry"]');
  els.mainInsight = $("#mainInsight");
  els.insightList = $("#insightList");
  els.tableCount = $("#tableCount");
  els.dataRows = $("#dataRows");
}

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  applyTheme();
  populateFilters();
  createCharts();
  bindEvents();
  setupRevealAnimation();
  updateDashboard();
});
