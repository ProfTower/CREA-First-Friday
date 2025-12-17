/**
 * PROJECT DATA REPOSITORY
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
          title: 'Clear Skies',
          author: 'Brooks Tunstall',
          thumb: 'clear-skies.png',
          mediaType: 'iframe',
          media:
            '<iframe width="100%" height="400" src="https://earsketch.gatech.edu/earsketch2/?sharing=u0qhOJv4CjJ64KuIBbbxAA&embedded=true&hideCode" frameborder="0"></iframe>',
          description:
            'An algorithmic composition created using Python and EarSketch, focusing on clean melodic lines and atmospheric soundscapes.',
          links: [],
        },
        {
          id: 'f25-c202-2',
          title: 'All Together',
          author: 'Sanaa Hodge',
          thumb: 'all-together.png',
          mediaType: 'iframe',
          media:
            '<iframe width="100%" height="400" src="https://earsketch.gatech.edu/earsketch2/?sharing=OrM8pivDTfO0B3WAogGijw&embedded=true&hideCode" frameborder="0"></iframe>',
          description:
            'A rhythmic exploration of collaborative sounds and synchronized patterns, coded entirely in Python.',
          links: [],
        },
      ],
      crea330: [
        {
          id: 'f25-c330-1',
          title: 'Music Player',
          author: 'Lydon Cameron',
          thumb: 'music-player-lydon.png',
          mediaType: 'image',
          media: '<img src="music-player-lydon.png" class="w-full rounded-xl">',
          description:
            'A custom-built interactive music player application using HTML5, CSS3, and JavaScript, featuring playlist management and audio controls.',
          links: [
            {
              label: 'Visit Live Website',
              url: 'https://lydon-b1.github.io/Music-player/',
            },
          ],
        },
        {
          id: 'f25-c330-2',
          title: 'Smashing Bugs',
          author: 'Kira Kierra',
          thumb: 'smashing-bugs.png',
          mediaType: 'image',
          media: '<img src="smashing-bugs.png" class="w-full rounded-xl">',
          description:
            'An interactive web-based insect game exploring DOM manipulation and JavaScript event handling.',
          links: [
            {
              label: 'Play in Browser',
              url: 'https://calicocrisper.github.io/Mod6_InsectGame/',
            },
          ],
        },
      ],
      crea391: [
        {
          id: 'f25-c391-1',
          title: 'Slime Diver',
          author: 'Christian Sherod',
          thumb: 'slime-diver.jpeg',
          mediaType: 'video',
          media: 'p7uFYs1gy4s',
          description:
            'A high-stakes diving adventure featuring custom Slime mechanics and fluid movement systems built in GameMaker.',
          links: [
            {
              label: 'Download macOS (.dmg)',
              url: 'https://drive.google.com/file/d/1GDrf3aTj-V9JbXJQdAQC3qweppcwzSSa/view?usp=sharing',
            },
            {
              label: 'Watch Gameplay Demo',
              url: 'https://youtu.be/WKPOg_yXk2c',
            },
          ],
        },
        {
          id: 'f25-c391-2',
          title: 'Dummie',
          author: 'Henry Blaine',
          thumb: 'dummie.jpeg',
          mediaType: 'video',
          media: 'qgWAu0o4454',
          description:
            'Explore a unique world as Dummie, featuring clever puzzles and 2D platforming challenges.',
          links: [
            {
              label: 'Download macOS (.dmg)',
              url: 'https://drive.google.com/file/d/1BE2wvmetWLin4oyPmx9uLs4JkebLoCj4/view?usp=sharing',
            },
          ],
        },
        {
          id: 'f25-c391-3',
          title: 'Quest for Camembert',
          author: 'Jordyn Johnson',
          thumb: 'quest-for-comembert.png',
          mediaType: 'video',
          media: 'A_WEpFH2UP0',
          description:
            'A charming narrative platformer where you seek the ultimate prize: the legendary Camembert cheese.',
          links: [
            {
              label: 'Download macOS (.dmg)',
              url: 'https://drive.google.com/file/d/1zKs49zx0bf2msZl8oQEgSnHQbVBuUI1n/view?usp=sharing',
            },
          ],
        },
        {
          id: 'f25-c391-4',
          title: 'The Purrfect Leap',
          author: 'Hannah Parker',
          thumb: 'the-purrfect-leap.png',
          mediaType: 'video',
          media: 'ZY2YNNd9_dg',
          description:
            'A cat-themed agility game focused on precision jumps and cozy pixel art environments.',
          links: [
            {
              label: 'Download macOS (.dmg)',
              url: 'https://drive.google.com/file/d/1NU0NPLytRKOh74oQTtm1prB7iUfp1GK8/view?usp=sharing',
            },
          ],
        },
        {
          id: 'f25-c391-5',
          title: 'Asteroids Clone',
          author: 'Katie Albin',
          thumb: 'asteroids.png',
          mediaType: 'video',
          media: '0ACUTQsGFZ0',
          description:
            'A polished reimagining of the classic arcade shooter, featuring physics-based movement and retro aesthetics.',
          links: [
            {
              label: 'Download macOS (.dmg)',
              url: 'https://drive.google.com/file/d/1haNoaJJAupUTqlya_bxkIWqAvp2Q0l8t/view?usp=sharing',
            },
          ],
        },
        {
          id: 'f25-c391-6',
          title: 'The Adventures of Birby',
          author: 'Angela Tran',
          thumb: 'the-adventures-of-birby.png',
          mediaType: 'video',
          media: 'p8tHkFdEyx8',
          description:
            'A whimsical 2D platformer following the journey of Birby through colorful, challenging levels.',
          links: [
            {
              label: 'Download macOS (.dmg)',
              url: 'https://drive.google.com/file/d/1IqYX6QoI4yv_S9pAQ95JGr6uAAUBW9lT/view?usp=sharing',
            },
          ],
        },
      ],
    },
  },
  spring2025: {
    id: 'spring2025',
    displayTitle: 'Spring 2025',
    isCurrent: false,
    courses: { crea202: [], crea330: [], crea391: [] },
  },
};

let currentActiveKey = 'fall2025';

const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');

function buildCard(project) {
  return `
                <div class="gallery-item group bg-gray-800/40 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all cursor-pointer" onclick="openModal('${project.id}')">
                    <div class="relative overflow-hidden aspect-video">
                        <img src="${project.thumb}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="overlay absolute inset-0 bg-gray-900/60 flex items-center justify-center opacity-0 backdrop-blur-sm">
                            <button class="bg-white text-gray-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Explore Project</button>
                        </div>
                    </div>
                    <div class="p-5">
                        <h4 class="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors line-clamp-1">${project.title}</h4>
                        <p class="text-gray-500 text-sm mt-1">By ${project.author}</p>
                    </div>
                </div>
            `;
}

function renderSemester(key) {
  const sem = semesterData[key];
  if (!sem) return;

  document.getElementById('showcase-display-title').textContent =
    sem.displayTitle.toUpperCase();
  document.getElementById('current-semester-tag').textContent = sem.isCurrent
    ? 'Featured Semester'
    : 'Archive Collection';
  document.getElementById('current-semester-tag').className = sem.isCurrent
    ? 'semester-badge inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6'
    : 'bg-gray-700 inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-gray-400 mb-6';

  ['crea202', 'crea330', 'crea391'].forEach((id) => {
    const container = document.getElementById(`${id}-gallery`);
    const projects = sem.courses[id];
    if (projects && projects.length > 0) {
      container.innerHTML = projects.map(buildCard).join('');
    } else {
      container.innerHTML = `<div class="col-span-full py-16 text-center bg-gray-800/20 rounded-2xl border border-dashed border-gray-700">
                        <p class="text-gray-500 italic">No submissions archived for this course yet.</p>
                    </div>`;
    }
  });
}

function buildArchiveNav() {
  const nav = document.getElementById('archive-links');
  nav.innerHTML = '';
  Object.keys(semesterData)
    .reverse()
    .forEach((key) => {
      const sem = semesterData[key];
      const btn = document.createElement('button');
      btn.textContent = sem.displayTitle;
      btn.className = `archive-pill px-6 py-3 rounded-full border border-gray-700 font-bold text-xs uppercase tracking-widest transition-all hover:border-cyan-400 ${
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

  let mediaHtml = '';
  if (found.mediaType === 'video') {
    mediaHtml = `<div class="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-2xl">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${found.media}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>`;
  } else if (found.mediaType === 'iframe') {
    mediaHtml = `<div class="w-full rounded-xl overflow-hidden shadow-2xl bg-gray-900">${found.media}</div>`;
  } else {
    mediaHtml = found.media;
  }

  const linksHtml = found.links
    .map(
      (link) =>
        `<a href="${link.url}" target="_blank" class="flex-1 text-center bg-cyan-600 hover:bg-cyan-500 text-white font-black py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/20">
                    ${link.label}
                </a>`
    )
    .join('');

  modalBody.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div class="space-y-6">
                        ${mediaHtml}
                        <div class="flex flex-col sm:flex-row gap-4">
                            ${linksHtml}
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="mb-6">
                            <h3 class="text-4xl md:text-5xl font-black text-white leading-tight mb-2 uppercase tracking-tighter">${found.title}</h3>
                            <p class="text-cyan-400 font-bold text-xl">by ${found.author}</p>
                        </div>
                        <div class="h-1 bg-gray-700 w-16 mb-8 rounded-full"></div>
                        <div class="space-y-6 flex-grow">
                            <div>
                                <h5 class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-3">Project Brief</h5>
                                <p class="text-gray-300 text-lg leading-relaxed font-medium">${found.description}</p>
                            </div>
                        </div>
                        <div class="mt-12 pt-6 border-t border-gray-700">
                             <p class="text-xs text-gray-500 uppercase tracking-widest font-bold">Showcased in ${sem.displayTitle}</p>
                        </div>
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
  setTimeout(() => {
    modal.classList.add('hidden');
    modalBody.innerHTML = '';
  }, 300);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

window.onload = () => {
  renderSemester(currentActiveKey);
  buildArchiveNav();
};
