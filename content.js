/*
  ============================================================
  MUHAMMAD ZAMACHSYARI — PORTFOLIO CONTENT
  ============================================================
  INI FILE UTAMA YANG NANTI PALING SERING ANDA EDIT.

  Cara edit:
  1. GitHub > repository portfolio > content.js
  2. Klik ikon pensil (Edit this file)
  3. Ubah teks di antara tanda kutip
  4. Klik Commit changes

  Aman untuk pemula:
  - Jangan hapus koma, { }, [ ], atau tanda kutip.
  - Link gunakan https://
  - Jika belum punya link, isi dengan "".
  - Untuk menambah item, salin satu blok { ... } lalu ubah isinya.
*/

const PORTFOLIO = {
  profile: {
    name: "Muhammad Zamachsyari",
    initials: "MZ",
    eyebrow: "Journalism · Language · Research",
    title: "Political & State Affairs Journalist",
    subtitle: "Arabic Translator · Language Reviewer · Turats & Policy Researcher",
    introduction:
      "I report on power, policy, diplomacy, and the presidency — while working across language and research projects that connect contemporary public affairs with deeper intellectual traditions.",
    location: "Indonesia",
    availability:
      "Open to selected journalism, translation, language-review, research, and editorial collaborations.",
    portfolioYear: "2026"
  },

  navigation: [
    { label: "About", target: "#about" },
    { label: "Coverage", target: "#coverage" },
    { label: "Projects", target: "#projects" },
    { label: "Research", target: "#research" },
    { label: "Contact", target: "#contact" }
  ],

  introFacts: [
    { label: "Core Beat", value: "Presidency & State Affairs" },
    { label: "Language Work", value: "Arabic–Indonesian & Review" },
    { label: "Research Lens", value: "Turats · Policy · Geopolitics" }
  ],

  about: {
    label: "About",
    heading: "Reporting political power up close, without losing the wider context.",
    paragraphs: [
      "My work sits at the intersection of political journalism, state affairs, language, and research. I have covered national politics from Parliament and the presidential campaign trail to the day-to-day agenda of the presidency, including diplomacy, state visits, and international engagements.",
      "The same curiosity carries into my language and research work. Alongside reporting, I handle Arabic–Indonesian translation, transcription, subtitling, localization, and language quality review, while developing research interests in turats, Islamic political thought, public policy, governance, BRICS, defense and security policy, and geopolitics.",
      "I am especially interested in work that requires more than speed: accurate quotation, contextual reading, source trust, careful language, and the ability to distinguish what is public, what is background, and what must remain off the record."
    ]
  },

  expertise: [
    {
      number: "01",
      title: "Political Journalism",
      description:
        "Presidential affairs, Parliament, elections, diplomacy, government policy, political actors, and state institutions."
    },
    {
      number: "02",
      title: "Field & State Visit Coverage",
      description:
        "Fast-moving reporting environments involving presidential agendas, bilateral meetings, ceremonial events, and international engagements."
    },
    {
      number: "03",
      title: "Arabic & Language Work",
      description:
        "Arabic–Indonesian translation, transcription, subtitling, localization, linguistic review, and editorial quality control."
    },
    {
      number: "04",
      title: "Research",
      description:
        "Turats, Islamic political thought, public policy, governance, defense and security, BRICS, and geopolitics."
    }
  ],

  coverage: [
    {
      place: "Presidential Campaign Trail",
      period: "2024",
      title: "Election reporting beyond the podium",
      description:
        "Covered the campaign agenda of a presidential ticket through repeated field assignments, building professional access while maintaining quotation accuracy, source boundaries, and off-the-record trust.",
      tags: ["Election", "Field Reporting", "Source Building"]
    },
    {
      place: "Presidential Palace",
      period: "Current Beat",
      title: "Daily presidency and state-affairs coverage",
      description:
        "Reporting on the presidential agenda, government policy, political developments, diplomacy, official statements, and the people and institutions around the center of executive power.",
      tags: ["Presidency", "Politics", "Policy"]
    },
    {
      place: "Washington, D.C.",
      period: "International Assignment",
      title: "A dense presidential agenda in the United States",
      description:
        "Covered a presidential overseas agenda that included the first Board of Peace session, a meeting with 12 global CEOs, and the signing of a reciprocal tariff arrangement — while reporting through the first day of Ramadan.",
      tags: ["Diplomacy", "International", "Business"]
    },
    {
      place: "Jakarta",
      period: "State Visit",
      title: "Belarusian presidential visit to Indonesia",
      description:
        "Covered Aleksandr Lukashenko’s state visit, including the ceremonial reception and his stay at the State Palace — a first for a foreign head of state during the Prabowo administration.",
      tags: ["State Visit", "Diplomacy", "Presidential Affairs"]
    },
    {
      place: "Indonesia",
      period: "Bilateral Coverage",
      title: "Modi, Prambanan, and a long-horizon cultural project",
      description:
        "Covered Narendra Modi’s visit and the Indonesia–India discussion around the revitalization of Prambanan, including a long-term target and the political symbolism surrounding the bilateral agenda.",
      tags: ["Indonesia–India", "Culture", "Diplomacy"]
    }
  ],

  projects: [
    {
      category: "Language Review",
      meta: "Client Project",
      title: "Dayak Tae & Banjar Baru Language Review",
      description:
        "Reviewed multilingual project material across spreadsheets and video, checked linguistic consistency, recorded corrections, and handled timecode-based review where subtitle context required closer inspection.",
      link: "",
      linkLabel: "View project"
    },
    {
      category: "Translation",
      meta: "Arabic–Indonesian",
      title: "Translation, Transcription & Localization",
      description:
        "Language work focused on preserving meaning, register, context, and natural Indonesian expression rather than producing literal word-for-word output.",
      link: "",
      linkLabel: "View samples"
    },
    {
      category: "Editorial",
      meta: "Independent Writing",
      title: "Reading Politics Through Turats",
      description:
        "A developing body of public-facing writing that brings concepts from usul fiqh and classical Islamic scholarship into the reading of contemporary political events without forcing modern events into classical categories.",
      link: "https://zamachsyari.my.canva.site/impacts",
      linkLabel: "View portfolio"
    },
    {
      category: "Research",
      meta: "Academic Project",
      title: "BRICS, Islamic Political Thought & Geopolitics",
      description:
        "An ongoing research track exploring BRICS, changing global power structures, public policy, and Islamic political thought through contemporary scholarship and classical sources where relevant.",
      link: "",
      linkLabel: "View research"
    }
  ],

  research: {
    label: "Research",
    heading: "Contemporary questions, read with historical depth.",
    description:
      "My research interests move between current policy questions and the intellectual vocabulary of classical Islamic scholarship. The goal is not to decorate modern analysis with old terminology, but to ask whether older analytical tools can clarify causation, authority, evidence, public interest, and political judgment today.",
    topics: [
      "Turats & Islamic Political Thought",
      "Public Policy & Governance",
      "Defense & Security Policy",
      "BRICS & Global South",
      "Geopolitics & Diplomacy",
      "Political Communication & Journalism"
    ]
  },

  workingPrinciples: [
    {
      number: "I",
      title: "Accuracy before speed",
      text: "Fast reporting still depends on precise quotation, context, verification, and a clear distinction between what is known and what is assumed."
    },
    {
      number: "II",
      title: "Trust is part of the work",
      text: "Source relationships are built over time. Access matters, but so do professional boundaries, confidentiality, and keeping off-the-record conversations off the record."
    },
    {
      number: "III",
      title: "Language carries context",
      text: "Translation and language review are not only about vocabulary. Tone, register, cultural context, and the intended audience change how meaning should be carried across languages."
    },
    {
      number: "IV",
      title: "Research must survive scrutiny",
      text: "Claims should be traceable to evidence. Classical texts and contemporary scholarship serve different purposes, and neither should be cited merely for decoration."
    }
  ],

  services: [
    "Political & current-affairs writing",
    "Presidential and state-affairs reporting",
    "Arabic–Indonesian translation",
    "Transcription & subtitling",
    "Localization & language quality review",
    "Desk research & literature review",
    "Policy and geopolitical research support",
    "Editorial review & fact-sensitive writing"
  ],

  contact: {
    label: "Contact",
    heading: "For editorial, language, or research collaborations.",
    text:
      "I am open to selected freelance and collaborative work in journalism, translation, linguistic review, research, and editorial projects.",
    email: "",
    linkedin: "",
    github: "https://github.com/zamachsyari-chawarazmi",
    portfolio: "https://zamachsyari.my.canva.site/impacts"
  },

  footer: {
    note: "Political & State Affairs Journalism · Arabic · Language Review · Research"
  }
};
