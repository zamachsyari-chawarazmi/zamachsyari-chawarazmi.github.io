/*
  ============================================================
  FILE YANG PALING SERING ANDA EDIT
  ============================================================
  Hampir semua isi portfolio ada di sini.

  Cara edit paling mudah:
  1. Buka repository di GitHub.
  2. Klik content.js.
  3. Klik ikon pensil (Edit this file).
  4. Ubah teks di antara tanda kutip.
  5. Klik Commit changes.

  Catatan:
  - Jangan hapus koma, kurung kurawal, atau tanda kutip.
  - Link harus diawali https://
  - Jika belum punya link, biarkan "".
  - Untuk menambah proyek, salin satu blok di bagian projects.
*/

const PORTFOLIO = {
  profile: {
    name: "Muhammad Zamachsyari",
    initials: "MZ",
    eyebrow: "Journalism · Translation · Research",
    title: "Political & State Affairs Journalist · Arabic Translator · Researcher",
    introduction:
      "I work at the intersection of political journalism, language, and research, with interests in state affairs, public policy, geopolitics, Islamic political thought, and turats.",
    location: "Indonesia",
    availability: "Open to selected writing, translation, language review, and research collaborations."
  },

  navigation: [
    { label: "About", target: "#about" },
    { label: "Expertise", target: "#expertise" },
    { label: "Work", target: "#work" },
    { label: "Contact", target: "#contact" }
  ],

  about: {
    label: "About",
    heading: "Reporting public affairs. Working across languages. Reading ideas in context.",
    paragraphs: [
      "My professional focus combines political and state-affairs journalism with language work and research. I am particularly interested in how policy, diplomacy, political ideas, and public institutions are communicated and understood.",
      "Alongside reporting, I work with Arabic–Indonesian language tasks including translation, transcription, subtitling, localization, and language quality review. My research interests include turats, Islamic political thought, public policy, governance, BRICS, and geopolitics."
    ]
  },

  expertise: [
    {
      number: "01",
      title: "Political Journalism",
      description:
        "Reporting and writing on presidential affairs, national politics, diplomacy, government policy, and international relations."
    },
    {
      number: "02",
      title: "Arabic Translation",
      description:
        "Arabic–Indonesian translation, transcription, subtitling, localization, and language-focused editorial work."
    },
    {
      number: "03",
      title: "Language Quality Review",
      description:
        "Reviewing language output for accuracy, clarity, consistency, context, and natural expression."
    },
    {
      number: "04",
      title: "Research",
      description:
        "Research interests spanning turats, Islamic political thought, public policy, governance, BRICS, and geopolitics."
    }
  ],

  /*
    PROJECTS / SELECTED WORK
    ------------------------
    Saat Anda sudah siap memasukkan karya, ganti [] di bawah dengan blok seperti ini:

    projects: [
      {
        category: "Journalism",
        title: "Judul tulisan atau liputan",
        description: "Penjelasan singkat tentang karya ini.",
        link: "https://link-karya-anda.com",
        linkLabel: "Read article"
      }
    ],

    Anda bisa menambah sebanyak yang diperlukan dengan menyalin blok { ... }.
  */
  projects: [],

  services: [
    "Political & current-affairs writing",
    "Arabic–Indonesian translation",
    "Transcription & subtitling",
    "Localization & language review",
    "Desk research & literature review",
    "Policy and geopolitical research support"
  ],

  contact: {
    label: "Contact",
    heading: "Have a story, research question, or language project in mind?",
    text:
      "I am open to discussing selected editorial, translation, language-review, and research assignments.",
    email: "",
    linkedin: "",
    github: "https://github.com/zamachsyari-chawarazmi",
    portfolio: ""
  },

  footer: {
    note: "Political Journalism · Arabic Translation · Research"
  }
};
