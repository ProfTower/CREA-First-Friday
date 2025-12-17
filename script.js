/**
 * SEMESTER DATA REPOSITORY
 * To update:
 * 1. Add a new object key (e.g., 'fall2026')
 * 2. Set 'isCurrent: true' for the latest and false for others
 * 3. Fill the 'courses' arrays with project objects
 */
const semesterData = {
  fall2025: {
    id: 'fall2025',
    displayTitle: 'Fall 2025',
    isCurrent: true,
    courses: {
      crea202: [
        {
          id: 'f25-c202-1',
          title: 'Cybernetic Symphony',
          author: 'Jordan V.',
          thumb:
            'https://placehold.co/600x400/0E7490/FFFFFF?text=Cyber+Symphony',
          media:
            '<div class="bg-black aspect-video rounded-xl flex items-center justify-center text-cyan-500 border border-cyan-900/50">EarSketch Player Placeholder</div>',
          description:
            'A Python-driven composition exploring complex tempo shifts and procedural percussion layering.',
          link: '#',
        },
      ],
      crea330: [
        {
          id: 'f25-c330-1',
          title: 'Museum of the Future',
          author: 'Elena S.',
          thumb:
            'https://placehold.co/600x400/059669/FFFFFF?text=Digital+Museum',
          media:
            '<img src="https://placehold.co/800x500/059669/FFFFFF?text=Museum+UI+View" class="w-full rounded-xl">',
          description:
            'A React-based virtual gallery experience with immersive CSS animations.',
          link: '#',
        },
      ],
      crea391: [
        {
          id: 'f25-c391-1',
          title: 'Neon Runner',
          author: 'Marcus K.',
          thumb: 'https://placehold.co/600x400/7E22CE/FFFFFF?text=Neon+Runner',
          media:
            '<div class="bg-gray-900 aspect-video rounded-xl flex items-center justify-center text-purple-400 border border-purple-900/50 font-mono">GameMaker Gameplay Clip</div>',
          description:
            'A high-speed precision platformer featuring frame-perfect collision logic.',
          link: '#',
        },
      ],
    },
  },
  spring2025: {
    id: 'spring2025',
    displayTitle: 'Spring 2025',
    isCurrent: false,
    courses: {
      crea202: [
        {
          id: 's25-c202-1',
          title: 'Botanical Beats',
          author: 'Sam L.',
          thumb: 'https://placehold.co/600x400/164E63/FFFFFF?text=Bio+Beats',
          media:
            '<div class="bg-black aspect-video rounded-xl flex items-center justify-center">EarSketch Preview</div>',
          description:
            'Music generated using Fibonacci sequences for rhythmic interval patterns.',
          link: '#',
        },
      ],
      crea330: [
        {
          id: 's25-c330-1',
          title: 'Local Richmond Guide',
          author: 'Casey R.',
          thumb: 'https://placehold.co/600x400/15803D/FFFFFF?text=RVA+Guide',
          media:
            '<img src="https://placehold.co/800x500/15803D/FFFFFF?text=Project+View" class="w-full rounded-xl">',
          description:
            'A community resource site showcasing local restaurants and First Friday events.',
          link: '#',
        },
      ],
      crea391: [
        {
          id: 's25-c391-1',
          title: 'Void Walker',
          author: 'Taylor F.',
          thumb: 'https://placehold.co/600x400/6B21A8/FFFFFF?text=Void+Walker',
          media:
            '<div class="bg-black aspect-video rounded-xl flex items-center justify-center italic">Video of Gameplay</div>',
          description:
            'A puzzle-adventure exploring physics-based world manipulation.',
          link: '#',
        },
      ],
    },
  },
  fall2024: {
    id: 'fall2024',
    displayTitle: 'Fall 2024',
    isCurrent: false,
    courses: {
      crea202: [],
      crea330: [
        {
          id: 'f24-c330-1',
          title: 'The Portfolio Lab',
          author: 'Riley M.',
          thumb: 'https://placehold.co/600x400/0f172a/FFFFFF?text=Portfolio+v1',
          media:
            '<img src="https://placehold.co/800x500/0f172a/FFFFFF?text=Old+Portfolio" class="w-full rounded-xl">',
          description:
            'Early explorations into responsive layouts and CSS grid systems.',
          link: '#',
        },
      ],
      crea391: [
        {
          id: 'f24-c391-1',
          title: 'Pixel Quest',
          author: 'Avery B.',
          thumb: 'https://placehold.co/600x400/4c1d95/FFFFFF?text=Pixel+Quest',
          media:
            '<div class="bg-black aspect-video rounded-xl flex items-center justify-center">Game Demo</div>',
          description:
            'A simple RPG prototype focusing on NPC dialogue systems.',
          link: '#',
        },
      ],
    },
  },
};

let currentActiveKey = 'fall2025';

const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');

// Logic to build a card
function buildCard(project) {
  return `
                <div class="gallery-item group bg-gray-800/40 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all cursor-pointer" onclick="openModal('${project.id}')">
                    <div class="relative overflow-hidden aspect-video">
                        <img src="${project.thumb}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="overlay absolute inset-0 bg-gray-900/60 flex items-center justify-center opacity-0 backdrop-blur-sm">
                            <button class="bg-white text-gray-900 px-5 py-2 rounded-full font-bold text-sm">Review Work</button>
                        </div>
                    </div>
                    <div class="p-5">
                        <h4 class="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">${project.title}</h4>
                        <p class="text-gray-500 text-sm mt-1">By ${project.author}</p>
                    </div>
                </div>
            `;
}

// Logic to render a semester
function renderSemester(key) {
  const sem = semesterData[key];
  if (!sem) return;

  // Update UI Titles
  document.getElementById('showcase-display-title').textContent =
    sem.displayTitle.toUpperCase();
  document.getElementById('current-semester-tag').textContent = sem.isCurrent
    ? 'Current Semester'
    : 'Archive Collection';
  document.getElementById('current-semester-tag').className = sem.isCurrent
    ? 'semester-badge inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6'
    : 'bg-gray-700 inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 mb-6';

  // Populate Galleries
  const courseIds = ['crea202', 'crea330', 'crea391'];
  courseIds.forEach((id) => {
    const container = document.getElementById(`${id}-gallery`);
    const projects = sem.courses[id];

    if (projects && projects.length > 0) {
      container.innerHTML = projects.map(buildCard).join('');
    } else {
      container.innerHTML = `<div class="col-span-full py-12 text-center bg-gray-800/20 rounded-2xl border border-dashed border-gray-700">
                        <p class="text-gray-500 italic">No submissions archived for this course in ${sem.displayTitle}.</p>
                    </div>`;
    }
  });
}

// Build archive navigation
function buildArchiveNav() {
  const nav = document.getElementById('archive-links');
  nav.innerHTML = '';

  Object.keys(semesterData).forEach((key) => {
    const sem = semesterData[key];
    const btn = document.createElement('button');
    btn.textContent = sem.displayTitle;
    btn.className = `archive-pill px-6 py-3 rounded-full border border-gray-700 font-semibold text-sm transition-all hover:border-cyan-400 ${
      key === currentActiveKey ? 'active' : 'text-gray-400'
    }`;
    btn.onclick = () => {
      currentActiveKey = key;
      renderSemester(key);
      buildArchiveNav();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    nav.appendChild(btn);
  });
}

function openModal(projectId) {
  const sem = semesterData[currentActiveKey];
  let found = null;
  Object.values(sem.courses).forEach((list) => {
    const p = list.find((item) => item.id === projectId);
    if (p) found = p;
  });

  if (!found) return;

  modalBody.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <div class="mb-6">${found.media}</div>
                        <a href="${found.link}" target="_blank" class="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-4 rounded-xl transition-colors">
                            Launch Full Project
                        </a>
                    </div>
                    <div>
                        <h3 class="text-4xl font-black text-white mb-2">${found.title}</h3>
                        <p class="text-cyan-400 font-medium text-lg mb-6">By ${found.author}</p>
                        <div class="h-px bg-gray-700 w-20 mb-6"></div>
                        <h5 class="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Project Description</h5>
                        <p class="text-gray-300 leading-relaxed mb-8">${found.description}</p>
                        <p class="text-sm text-gray-500 italic">Submitted for ${sem.displayTitle}</p>
                    </div>
                </div>
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
  setTimeout(() => modal.classList.add('hidden'), 300);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

window.onload = () => {
  renderSemester(currentActiveKey);
  buildArchiveNav();
};
