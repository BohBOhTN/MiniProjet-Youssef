// Remove the ES module import
// import './style.css'

// Initialize page view counter
const initializeCounter = () => {
  let views = localStorage.getItem('pageViews') || 0;
  views = parseInt(views) + 1;
  localStorage.setItem('pageViews', views);
  return views;
};

document.querySelector('#app').innerHTML = `
  <header>
    <button class="nav-toggle" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#education">Formation</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div class="page-views">
      👁️ ${initializeCounter()} vues
    </div>
  </header>

  <section id="home" class="section">
    <div class="container">
      <div class="profile-container">
        <img src="https://placehold.co/400x400" alt="Youssef Chaker" class="profile-image">
      </div>
      <h1>Youssef Chaker</h1>
      <h2>Élève Bac Science</h2>
      <p>Passionné par le domaine de l'informatique, je suis constamment à la recherche de nouvelles opportunités pour approfondir mes compétences techniques et explorer les innovations technologiques. Curieux et motivé, j'aime relever des défis, résoudre des problèmes complexes et contribuer à des projets qui allient créativité et performance.</p>
      <a href="#skills" class="cta-button">En savoir plus</a>
    </div>
  </section>

  <section id="skills" class="section">
    <div class="container">
      <h2>Compétences</h2>
      <div class="skills-grid">
        <div class="skills-category">
          <h3>Compétence Numérique</h3>
          <div class="skill">
            <span data-percentage="85%">Pack Office</span>
            <div class="progress-bar">
              <div class="progress" style="width: 85%"></div>
            </div>
          </div>
          <div class="skill">
            <span data-percentage="60%">Photoshop</span>
            <div class="progress-bar">
              <div class="progress" style="width: 60%"></div>
            </div>
          </div>
          <div class="skill">
            <span data-percentage="60%">Python</span>
            <div class="progress-bar">
              <div class="progress" style="width: 60%"></div>
            </div>
          </div>
        </div>
        <div class="skills-category">
          <h3>Compétence Linguistique</h3>
          <ul class="languages">
            <li>Français</li>
            <li>Anglais</li>
            <li>Arabe</li>
            <li>Espagnol</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="section">
    <div class="container">
      <h2>Projets</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Calculatrice Simple</h3>
          <p>Une calculatrice basique construite avec HTML, CSS et JavaScript.</p>
          <button class="view-details">Voir les détails</button>
        </div>
        <div class="project-card">
          <h3>Site Web Personnel</h3>
          <p>Ce portfolio créé avec HTML, CSS et JavaScript.</p>
          <button class="view-details">Voir les détails</button>
        </div>
      </div>
    </div>
  </section>

  <section id="education" class="section">
    <div class="container">
      <h2>Formation et Expériences</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="year">2021-2024</div>
          <div class="content">
            <h3>Lycée Secondaire Tayeb Mhiri</h3>
            <p>Baccalauréat Science</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">2018-2021</div>
          <div class="content">
            <h3>Collège Mohamed Jammousi</h3>
          </div>
        </div>
        <div class="timeline-item">
          <div class="year">2012-2018</div>
          <div class="content">
            <h3>École Primaire Ibn Khaldoun</h3>
          </div>
        </div>
      </div>

      <h3>Activités et Événements</h3>
      <ul class="activities">
        <li>2024: Jeune chambre économique Tanyour 'JCI'</li>
        <li>2022-2024: Club Interact SindBad – membre</li>
        <li>2021-2022: Club Éducation Civique du Lycée Taleb Mhiri Sfaxi (I.E.C.L.T.M.S) – membre titulaire</li>
        <li>2017-2021: Club Sportif Sfaxiens (joueur de volley)</li>
      </ul>

      <h3>Formations Complémentaires</h3>
      <ul class="training">
        <li>Formation en digital marketing</li>
        <li>Communication sur les réseaux sociaux</li>
      </ul>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="container">
      <h2>Contact</h2>
      <div class="contact-container">
        <div class="contact-info">
          <h3>Restons en contact</h3>
          <p>N'hésitez pas à me contacter pour toute opportunité ou collaboration.</p>
          <p>📧 youssefchaker32@gmail.com</p>
          <p>📍 Sfax, Tunisie</p>
        </div>
        <form id="contact-form">
          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div class="form-group">
            <div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
          </div>
          <button type="submit" class="submit-button">Envoyer</button>
        </form>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>© 2025 Youssef Chaker. Tous droits réservés.</p>
    </div>
  </footer>
`

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    nav.classList.remove('active');
  });
});

// Form handling
const form = document.querySelector('#contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const recaptchaResponse = grecaptcha.getResponse();

  if (!recaptchaResponse) {
    alert('Veuillez compléter le CAPTCHA');
    return;
  }

  if (!email.includes('@')) {
    alert('Veuillez entrer une adresse email valide');
    return;
  }

  if (!name || !message) {
    alert('Veuillez remplir tous les champs');
    return;
  }

  alert('Merci pour votre message! Je vous répondrai bientôt.');
  form.reset();
  grecaptcha.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});