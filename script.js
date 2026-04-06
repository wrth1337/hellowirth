const element = document.getElementById("typewriter-text");
const projectsGrid = document.getElementById("projects-grid");

const projects = [
  {
    title: "Leansi",
    description: "Leansi is a Lean Library for terminal formatting.",
    githubUrl: "https://github.com/schergen-org/Leansi",
  },
  {
    title: "lfetch",
    description: " Systemfetch built with Lean. ",
    githubUrl: "https://github.com/schergen-org/lfetch",
  },
  {
    title: "RX",
    description: "RX - A minimal interpreter for a rule-based term rewriting language. Designed for experimenting with term rewriting, pattern matching and language concepts. ",
    githubUrl: "https://github.com/wrth1337/RX",
  },
  {
    title: "Event-Blocks",
    description: "WordPress plugin for managing events and displaying customizable event cards via shortcode. ",
    githubUrl: "https://github.com/wrth1337/Event-Blocks",
  },
];

const delay = ms => new Promise(res => setTimeout(res, ms));

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

async function typeWriterEffect() {
  const fullText = "Hello World!";
  const replacement = "irth!";
  const base = "Hello W";

  for (let i = 0; i <= fullText.length; i++) {
    element.textContent = fullText.substring(0, i);
    await delay(getRandomNumber(75,105));
  }

  await delay(450);

  for (let i = fullText.length; i >= base.length; i--) {
    element.textContent = fullText.substring(0, i);
    await delay(getRandomNumber(65,100));
  }

  for (let i = 0; i <= replacement.length; i++) {
    element.textContent = base + replacement.substring(0, i);
    await delay(getRandomNumber(100,140));
  }
}

function renderProjects() {
  if (!projectsGrid) {
    return;
  }

  const projectCards = projects.map(project => `
    <article class="project-card">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a class="cs-btn project-link" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">
        <span class="github-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" focusable="false">
            <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.54 7.54 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
          </svg>
        </span>
        <span>View on GitHub</span>
      </a>
    </article>
  `);

  projectsGrid.innerHTML = projectCards.join("");
}

renderProjects();
typeWriterEffect();
