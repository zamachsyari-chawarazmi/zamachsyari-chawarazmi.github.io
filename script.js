const $ = (selector) => document.querySelector(selector);

function makeLink(item) {
  const a = document.createElement('a');
  a.href = item.target || item.link || '#';
  a.textContent = item.label || item.linkLabel || 'View';
  if ((item.link || '').startsWith('http')) {
    a.target = '_blank';
    a.rel = 'noreferrer';
  }
  return a;
}

function renderPortfolio() {
  const data = PORTFOLIO;

  document.title = `${data.profile.name} | Portfolio`;
  $('#brand').textContent = data.profile.initials;

  const nav = $('#nav-links');
  data.navigation.forEach((item) => nav.appendChild(makeLink(item)));

  $('#eyebrow').textContent = data.profile.eyebrow;
  $('#hero-name').textContent = data.profile.name;
  $('#hero-title').textContent = data.profile.title;
  $('#hero-subtitle').textContent = data.profile.subtitle;
  $('#hero-intro').textContent = data.profile.introduction;
  $('#profile-initials').textContent = data.profile.initials;
  $('#profile-location').textContent = data.profile.location;
  $('#profile-availability').textContent = data.profile.availability;
  $('#portfolio-year').textContent = `PORTFOLIO / ${data.profile.portfolioYear}`;

  const factsGrid = $('#facts-grid');
  data.introFacts.forEach((fact) => {
    const div = document.createElement('div');
    div.className = 'fact-item';
    div.innerHTML = `<span>${fact.label}</span><strong>${fact.value}</strong>`;
    factsGrid.appendChild(div);
  });

  $('#about-label').textContent = data.about.label;
  $('#about-heading').textContent = data.about.heading;
  const aboutText = $('#about-text');
  data.about.paragraphs.forEach((paragraph) => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    aboutText.appendChild(p);
  });

  const expertiseGrid = $('#expertise-grid');
  data.expertise.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'expertise-item';
    article.innerHTML = `
      <span>${item.number}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    expertiseGrid.appendChild(article);
  });

  const coverageList = $('#coverage-list');
  data.coverage.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'coverage-item';
    const tags = item.tags.map((tag) => `<span>${tag}</span>`).join('');
    article.innerHTML = `
      <div class="coverage-index">${String(index + 1).padStart(2, '0')}</div>
      <div class="coverage-meta">
        <p>${item.place}</p>
        <span>${item.period}</span>
      </div>
      <div class="coverage-copy">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="tag-row">${tags}</div>
      </div>
    `;
    coverageList.appendChild(article);
  });

  const workGrid = $('#work-grid');
  data.projects.forEach((project) => {
    const article = document.createElement('article');
    article.className = 'work-card';
    article.innerHTML = `
      <div class="work-card-top">
        <p class="section-kicker">${project.category}</p>
        <span>${project.meta || ''}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    if (project.link) {
      const a = makeLink(project);
      a.className = 'text-link';
      article.appendChild(a);
    }
    workGrid.appendChild(article);
  });

  $('#research-label').textContent = data.research.label;
  $('#research-heading').textContent = data.research.heading;
  $('#research-description').textContent = data.research.description;
  const topics = $('#research-topics');
  data.research.topics.forEach((topic, index) => {
    const div = document.createElement('div');
    div.className = 'topic-item';
    div.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span><p>${topic}</p>`;
    topics.appendChild(div);
  });

  const principles = $('#principles-grid');
  data.workingPrinciples.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'principle-item';
    article.innerHTML = `
      <span>${item.number}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
    principles.appendChild(article);
  });

  const services = $('#services-list');
  data.services.forEach((service) => {
    const li = document.createElement('li');
    li.textContent = service;
    services.appendChild(li);
  });

  $('#contact-label').textContent = data.contact.label;
  $('#contact-heading').textContent = data.contact.heading;
  $('#contact-text').textContent = data.contact.text;

  const contactLinks = $('#contact-links');
  const contactItems = [
    ['Email', data.contact.email ? `mailto:${data.contact.email}` : ''],
    ['LinkedIn', data.contact.linkedin],
    ['GitHub', data.contact.github],
    ['Previous Portfolio', data.contact.portfolio]
  ].filter(([, value]) => value);

  contactItems.forEach(([label, value]) => {
    const a = document.createElement('a');
    a.href = value;
    a.textContent = label;
    if (!value.startsWith('mailto:')) {
      a.target = '_blank';
      a.rel = 'noreferrer';
    }
    contactLinks.appendChild(a);
  });

  $('#footer-name').textContent = data.profile.name;
  $('#footer-note').textContent = data.footer.note;
  $('#year').textContent = new Date().getFullYear();
}

renderPortfolio();
