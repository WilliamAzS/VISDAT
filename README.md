# YouTube Pulse Dashboard

Dashboard visualisasi data interaktif untuk Proyek Akhir CA4XB3 Visualisasi Data.

## Isi project

- `index.html` — struktur website statis.
- `style.css` — tampilan responsif, animasi, light/dark mode, glassmorphism.
- `app.js` — dataset, filter, KPI, Chart.js, tabel, dan interaktivitas.
- `data/youtube_channels_cleaned.csv` — subset data yang sudah dibersihkan.

## Dataset

Sumber utama: Kaggle — Global YouTube Statistics 2023  
https://www.kaggle.com/datasets/nelgiriyewithana/global-youtube-statistics-2023

Dataset asli berisi data channel YouTube global seperti rank, nama channel, subscribers, video views, category, uploads, country, dan metadata lain. Untuk memenuhi kebutuhan project frontend static, data dipakai sebagai subset JSON/array di `app.js` dan CSV pembanding di folder `data`.

## Fitur

- Minimal 5 chart interaktif menggunakan Chart.js.
- Tooltip hover aktif pada semua chart.
- Legend chart bisa diklik untuk menyembunyikan/menampilkan seri.
- Filter negara, kategori, pencarian channel, sort, dan top-N slider.
- Count-up KPI dan animasi entrance.
- Tabel data dinamis.
- Download CSV sesuai filter aktif.
- Light/dark mode.
- Siap deploy ke Vercel tanpa build step.

## Cara menjalankan lokal

Karena ini website statis, langsung buka `index.html` di browser. Jika ingin menjalankan dengan local server:

```bash
python -m http.server 5500
```

lalu buka:

```text
http://localhost:5500
```

## Setting Vercel

Jika deploy dari GitHub ke Vercel:

- Framework Preset: Other
- Build Command: kosongkan
- Output Directory: kosongkan atau biarkan default
- Install Command: kosongkan
"# VISDAT" 
