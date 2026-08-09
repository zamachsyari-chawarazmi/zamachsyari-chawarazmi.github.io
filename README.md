# Muhammad Zamachsyari — Personal Portfolio

Website portfolio pribadi yang dipublikasikan melalui GitHub Pages.

## Alamat website

https://zamachsyari-chawarazmi.github.io

---

# Panduan untuk saya sendiri

Saya membuat struktur ini supaya **tidak perlu memahami coding untuk memperbarui isi portfolio**.

## File yang perlu saya pahami

### 1. `content.js` — FILE UTAMA UNTUK DIEDIT

Hampir semua isi website ada di file ini:

- nama dan headline
- deskripsi profil
- bagian About
- daftar expertise
- Selected Work / portfolio
- layanan
- link kontak

Untuk perubahan konten biasa, **cukup edit file ini**.

### 2. `index.html` — kerangka website

File ini mengatur bagian-bagian halaman. Jangan diedit jika hanya ingin mengubah tulisan atau menambah karya.

### 3. `style.css` — tampilan website

File ini mengatur warna, ukuran tulisan, jarak, tampilan desktop dan HP. Tidak perlu disentuh untuk update portfolio biasa.

### 4. `script.js` — mesin yang membaca `content.js`

File ini otomatis mengambil isi dari `content.js` dan memasukkannya ke website. Tidak perlu diedit untuk update biasa.

---

# Cara mengedit portfolio dari GitHub

1. Masuk ke repository ini.
2. Klik file **`content.js`**.
3. Klik ikon **pensil / Edit this file** di kanan atas.
4. Cari bagian yang ingin diubah.
5. Edit teks **di antara tanda kutip**.
6. Klik tombol **Commit changes...**.
7. Pada kotak commit message, tulis misalnya:
   - `Update profile`
   - `Add new article`
   - `Update contact links`
8. Klik **Commit changes** sekali lagi.
9. GitHub Pages akan memperbarui website dari branch `main`.

---

# Cara menambah karya baru

Buka `content.js` dan cari:

```js
projects: [],
```

Ganti menjadi:

```js
projects: [
  {
    category: "Journalism",
    title: "Judul artikel saya",
    description: "Deskripsi singkat tentang artikel atau liputan ini.",
    link: "https://alamat-artikel.com",
    linkLabel: "Read article"
  }
],
```

Untuk menambah karya kedua:

```js
projects: [
  {
    category: "Journalism",
    title: "Judul artikel pertama",
    description: "Deskripsi singkat karya pertama.",
    link: "https://link-pertama.com",
    linkLabel: "Read article"
  },
  {
    category: "Research",
    title: "Judul riset kedua",
    description: "Deskripsi singkat karya kedua.",
    link: "https://link-kedua.com",
    linkLabel: "View project"
  }
],
```

**Perhatikan koma** di antara dua blok karya.

---

# Cara mengisi kontak

Di `content.js`, cari bagian:

```js
contact: {
```

Lalu isi misalnya:

```js
email: "nama@email.com",
linkedin: "https://www.linkedin.com/in/username",
github: "https://github.com/zamachsyari-chawarazmi",
portfolio: "https://alamat-portfolio-lain.com"
```

Jika suatu link belum ingin ditampilkan, kosongkan saja:

```js
linkedin: "",
```

---

# Aturan sederhana agar website tidak error

Saat mengedit `content.js`:

1. Jangan menghapus tanda kutip `"..."`.
2. Jangan sembarang menghapus koma `,`.
3. Jangan menghapus `{ }` atau `[ ]`.
4. Jika teks mengandung tanda kutip, lebih aman ganti dengan apostrof atau tanda kutip tipografis.
5. Link website gunakan `https://`.

Jika hanya mengganti kalimat di antara tanda kutip, risikonya sangat kecil.

---

# Struktur portfolio saat ini

- Hero / perkenalan utama
- About
- Expertise
- Selected Work
- Services / What I Do
- Contact

Struktur ini sengaja dibuat fleksibel untuk portfolio lintas bidang: journalism, translation, language review, dan research.

---

# Workflow yang disarankan

Untuk setiap karya baru:

1. Siapkan judul.
2. Tentukan kategori: Journalism / Translation / Language Review / Research.
3. Tulis deskripsi 1–2 kalimat.
4. Siapkan link publik karya.
5. Tambahkan ke `projects` di `content.js`.
6. Commit.

Tidak perlu membuat repository baru untuk setiap artikel kecuali memang artikelnya berupa proyek tersendiri.

---

## Catatan

Portfolio ini dibuat menggunakan HTML, CSS, dan JavaScript sederhana tanpa framework agar ringan, mudah dirawat, dan mudah dipahami pemula.
