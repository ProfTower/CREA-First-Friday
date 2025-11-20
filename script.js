// --- Showcase Data ---
// To add a new month, copy an existing entry (like 'oct2025'), give it a new key (e.g., 'nov2025'),
// update the displayTitle, and fill in the new projects.
// Then, change the `currentShowcaseKey` variable to the new key to make it the default.
const showcaseData = {
  oct2025: {
    displayTitle: 'October 2025',
    courses: {
      crea202: [
        {
          id: 'oct2025-c202-1',
          title: 'Algorithmic Anthem',
          author: 'Alex Johnson',
          thumb:
            'https://placehold.co/600x400/0E7490/FFFFFF?text=Synthwave+Beat',
          media:
            '<iframe class="w-full h-96 rounded-md" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          description:
            'This piece was generated using Python in EarSketch. It explores the relationship between mathematical patterns and musical harmony, creating a dynamic synthwave track that evolves over time.',
          link: '#',
        },
      ],
      crea330: [
        {
          id: 'oct2025-c330-1',
          title: 'Interactive Resume',
          author: 'Fatima Al-Kuwari',
          thumb:
            'https://placehold.co/600x400/059669/FFFFFF?text=Portfolio+Site',
          media:
            '<img src="https://placehold.co/800x500/059669/FFFFFF?text=Portfolio+Site" alt="Portfolio Screenshot" class="w-full h-auto rounded-md">',
          description:
            'A personal portfolio website built with HTML, CSS, and vanilla JavaScript. It features a responsive layout and a filterable project gallery.',
          link: '#',
        },
      ],
      crea391: [
        {
          id: 'oct2025-c391-1',
          title: 'Galactic Guardian',
          author: 'Kenji Tanaka',
          thumb:
            'https://placehold.co/600x400/7E22CE/FFFFFF?text=Pixel+Art+Game',
          media:
            '<iframe class="w-full h-96 rounded-md" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          description:
            'A top-down arcade shooter created in GameMaker. The game features multiple enemy types, power-ups, and an escalating difficulty curve.',
          link: '#',
        },
      ],
    },
  },
  sep2025: {
    displayTitle: 'September 2025',
    courses: {
      crea202: [
        {
          id: 'sep2025-c202-1',
          title: 'Code-Generated Chill',
          author: 'Maria Garcia',
          thumb: 'https://placehold.co/600x400/164E63/FFFFFF?text=Lo-Fi+Rhythm',
          media:
            '<div class="bg-gray-700 w-full h-96 rounded-md flex items-center justify-center"><p class="text-gray-400">Audio Player Placeholder</p></div>',
          description:
            'A relaxing lo-fi hip hop track created entirely with code, focusing on using nested loops to create complex rhythmic patterns.',
          link: '#',
        },
        {
          id: 'sep2025-c202-2',
          title: 'Digital Drum Machine',
          author: 'Chen Wei',
          thumb: 'https://placehold.co/600x400/083344/FFFFFF?text=Techno+Loop',
          media:
            '<div class="bg-gray-700 w-full h-96 rounded-md flex items-center justify-center"><p class="text-gray-400">Audio Player Placeholder</p></div>',
          description:
            'An exploration of techno and house rhythms built with a custom drum machine script in Python.',
          link: '#',
        },
      ],
      crea330: [
        {
          id: 'sep2025-c330-1',
          title: 'Artisan Goods Shop',
          author: 'David Miller',
          thumb: 'https://placehold.co/600x400/15803D/FFFFFF?text=E-Commerce',
          media:
            '<img src="https://placehold.co/800x500/15803D/FFFFFF?text=E-Commerce+Site" alt="E-commerce Screenshot" class="w-full h-auto rounded-md">',
          description:
            'A fully responsive e-commerce website prototype for a fictional artisan goods store. JavaScript is used to manage a shopping cart.',
          link: '#',
        },
      ],
      crea391: [],
    },
  },
  spring2025: {
    displayTitle: 'Spring Semester 2025',
    courses: {
      crea202: [],
      crea330: [
        {
          id: 'spr2025-c330-1',
          title: 'Climate Change Visualizer',
          author: 'Priya Sharma',
          thumb: 'https://placehold.co/600x400/14532D/FFFFFF?text=Data+Viz',
          media:
            '<img src="https://placehold.co/800x500/14532D/FFFFFF?text=Data+Viz+Site" alt="Data Viz Screenshot" class="w-full h-auto rounded-md">',
          description:
            'An interactive data visualization project that uses Chart.js to display historical climate data.',
          link: '#',
        },
      ],
      crea391: [
        {
          id: 'spr2025-c391-1',
          title: 'Forest Jumper',
          author: 'Aisha Williams',
          thumb:
            'https://placehold.co/600x400/6B21A8/FFFFFF?text=Platformer+Game',
          media:
            '<img src="https://placehold.co/800x500/6B21A8/FFFFFF?text=Platformer+Game" alt="Platformer Game Screenshot" class="w-full h-auto rounded-md">',
          description:
            'A classic 2D platformer with a unique art style, focusing on fine-tuning player controls and creating engaging level design.',
          link: '#',
        },
        {
          id: 'spr2025-c391-2',
          title: 'Chrono Maze',
          author: 'Omar Hassan',
          thumb: 'https://placehold.co/600x400/581C87/FFFFFF?text=Puzzle+Game',
          media:
            '<img src="https://placehold.co/800x500/581C87/FFFFFF?text=Puzzle+Game" alt="Puzzle Game Screenshot" class="w-full h-auto rounded-md">',
          description:
            'A puzzle game where the player manipulates time to solve complex mazes.',
          link: '#',
        },
      ],
    },
  },
};

let currentShowcaseKey = 'oct2025'; // This is the showcase that loads by default.

const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');

function createProjectCard(project) {
  return `
                <div class="gallery-item bg-gray-800 rounded-lg overflow-hidden shadow-xl cursor-pointer transform hover:-translate-y-2 transition-transform duration-300" onclick="openModal('${project.id}')">
                    <div class="relative">
                        <img src="${project.thumb}" alt="Project thumbnail for ${project.title}" class="w-full h-48 object-cover">
                        <div class="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0">
                            <span class="text-white text-lg font-semibold">View Project</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-xl">${project.title}</h4>
                        <p class="text-gray-400">by ${project.author}</p>
                    </div>
                </div>
            `;
}

function renderShowcase(key) {
  const showcase = showcaseData[key];
  if (!showcase) return;

  document.getElementById(
    'showcase-title'
  ).textContent = `Student Showcase: ${showcase.displayTitle}`;

  const galleries = {
    crea202: document.getElementById('crea202-gallery'),
    crea330: document.getElementById('crea330-gallery'),
    crea391: document.getElementById('crea391-gallery'),
  };

  for (const course in galleries) {
    galleries[course].innerHTML = ''; // Clear existing content
    const projects = showcase.courses[course];
    if (projects && projects.length > 0) {
      galleries[course].innerHTML = projects.map(createProjectCard).join('');
    } else {
      galleries[course].innerHTML =
        '<p class="text-gray-500 italic col-span-full">No projects submitted for this course in this showcase.</p>';
    }
  }
}

function populateArchiveLinks() {
  const container = document.getElementById('archive-links');
  container.innerHTML = '';
  const keys = Object.keys(showcaseData);

  keys.forEach((key) => {
    const showcase = showcaseData[key];
    const button = document.createElement('button');
    button.textContent = showcase.displayTitle;
    button.className = `archive-btn border border-gray-600 px-4 py-2 rounded-md hover:bg-cyan-600 hover:border-cyan-600 transition ${
      key === currentShowcaseKey ? 'active' : ''
    }`;
    button.onclick = () => switchShowcase(key);
    container.appendChild(button);
  });
}

function switchShowcase(key) {
  currentShowcaseKey = key;
  renderShowcase(key);
  populateArchiveLinks(); // Re-render to update the active state
}

function openModal(projectId) {
  const currentShowcase = showcaseData[currentShowcaseKey];
  let projectData = null;

  // Find the project in the current showcase's data
  for (const course in currentShowcase.courses) {
    const found = currentShowcase.courses[course].find(
      (p) => p.id === projectId
    );
    if (found) {
      projectData = found;
      break;
    }
  }

  if (!projectData) return;

  modalBody.innerHTML = `
                <h3 class="text-3xl font-bold mb-2 text-white">${projectData.title}</h3>
                <p class="text-sm text-gray-400 mb-4">by ${projectData.author}</p>
                <div class="mb-6">${projectData.media}</div>
                <p class="text-gray-300 mb-6">${projectData.description}</p>
                <a href="${projectData.link}" target="_blank" rel="noopener noreferrer" class="inline-block bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition duration-300">
                    Launch Project
                </a>
            `;

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal
      .querySelector('.modal-content')
      .classList.remove('scale-95', 'opacity-0');
  }, 10);
}

function closeModal() {
  modal.classList.add('opacity-0');
  modal.querySelector('.modal-content').classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

// Initial page load
window.onload = () => {
  renderShowcase(currentShowcaseKey);
  populateArchiveLinks();
};
