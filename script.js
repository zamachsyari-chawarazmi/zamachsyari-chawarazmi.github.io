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
  $('#hero-intro').textContent = data.profile.introduction;
  $('#profile-initials').textContent = data.profile.initials;
  $('#profile-location').textContent = data.profile.location;
  $('#profile-availability').textContent = data.profile.availability;

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

  const workGrid = $('#work-grid');
  if (!data.projects.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-work';
    empty.innerHTML = `
      <p class="section-kicker">Selected Work</p>
      <h3>Portfolio pieces will appear here.</h3>
      <p>Edit <strong>content.js</strong> and add your articles, reporting, translations, research, or language-review projects. You do not need to edit this page structure.</p>
    `;
    workGrid.appendChild(empty);
  } else {
    data.projects.forEach((project) => {
      const article = document.createElement('article');
      article.className = 'work-card';
      article.innerHTML = `
        <p class="section-kicker">${project.category}</p>
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
  }

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
    ['Other Portfolio', data.contact.portfolio]
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
