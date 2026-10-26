// ============================================================================
// FUW STUDENT SKILLED LINK - CORE APPLICATION LOGIC (VANILLA JS)
// ============================================================================

const STORAGE_KEYS = {
  STUDENTS: 'fuw_skilled_students_v1',
  JOBS: 'fuw_skilled_jobs_v1',
  CONTRACTS: 'fuw_skilled_contracts_v1'
};

const CATEGORIES = [
  'ALL',
  'Media & Videography',
  'Tech & Software',
  'Hardware & Engineering',
  'Fashion & Beauty',
  'Academic & Tutoring',
  'Music & Events',
  'Home & Electrical'
];

// Initial Seed Data for FUW Students
const DEFAULT_STUDENTS = [
  {
    id: 'stu-1',
    name: 'Chinedu Okafor',
    matric: 'FUW/21/CPE/0184',
    dept: 'Computer Engineering',
    level: '400L',
    category: 'Media & Videography',
    title: 'Mobile Videographer, CapCut Colorist & Motion Graphics Designer',
    location: 'FUW Main Campus (Katsina-Ala Rd)',
    rate: 12000,
    rating: 4.9,
    jobsCompleted: 34,
    verified: true,
    phone: '08034567891',
    availability: 'Weekdays after 3PM & All Weekend',
    skills: ['CapCut Pro', 'Canva Motion', 'LED Studio Lighting', 'Event Reels', 'Promo Scripts'],
    bio: 'Experienced campus videographer and editor specializing in crisp promotional videos, two-tone LED interviews, and event reels across FUW and Wukari town.'
  },
  {
    id: 'stu-2',
    name: 'Kefas Danjuma',
    matric: 'FUW/20/CPE/0092',
    dept: 'Computer Engineering',
    level: '500L',
    category: 'Hardware & Engineering',
    title: 'Laptop Diagnostics, OS Installation, iOS Recovery & Networking Tech',
    location: 'Bantaje / Off-Campus Lodges',
    rate: 5000,
    rating: 4.8,
    jobsCompleted: 51,
    verified: true,
    phone: '08142233445',
    availability: 'Daily 4PM - 8PM, Saturdays Full Day',
    skills: ['Windows 10/11 Setup', 'LAN Cable Crimping', 'iPhone Diagnostics', 'Multiseat PC Setup', 'Hardware Repair'],
    bio: 'SIWES-trained computer engineering technician offering fast PC troubleshooting, LAN networking for cybercafes, and mobile OS recovery in Bantaje and Wukari metropolis.'
  },
  {
    id: 'stu-3',
    name: 'Blessing Adi',
    matric: 'FUW/22/CSC/0310',
    dept: 'Computer Science',
    level: '300L',
    category: 'Tech & Software',
    title: 'Full-Stack Web Developer (HTML, Tailwind CSS, JS & Business Sites)',
    location: 'Takum Junction',
    rate: 25000,
    rating: 5.0,
    jobsCompleted: 19,
    verified: true,
    phone: '09061122334',
    availability: 'Remote & Afternoon Meetings',
    skills: ['HTML5 & CSS3', 'Tailwind CSS', 'JavaScript', 'Portfolio Websites', 'WhatsApp Storefronts'],
    bio: 'Building clean, mobile-first websites and digital receipt tools for Wukari shops, pharmacies, photographers, and student entrepreneurs.'
  },
  {
    id: 'stu-4',
    name: 'rimamnde Ishaku',
    matric: 'FUW/21/EEE/0115',
    dept: 'Electrical/Electronics Eng.',
    level: '400L',
    category: 'Home & Electrical',
    title: 'Solar Inverter Setup, Lodge Wiring & Rechargeable Fan/Lamp Repairs',
    location: 'General Hospital Axis',
    rate: 7000,
    rating: 4.9,
    jobsCompleted: 42,
    verified: true,
    phone: '08029988776',
    availability: 'Wednesdays & Weekends',
    skills: ['Solar Panel Installation', 'Inverter Maintenance', 'Hostel Wiring', 'Changeover Switch', 'LED Lighting'],
    bio: 'Helping students in off-campus lodges and families around General Hospital & Puje stay powered with clean solar installations and safe electrical wiring.'
  },
  {
    id: 'stu-5',
    name: 'Zainab Bello',
    matric: 'FUW/22/ECO/0204',
    dept: 'Economics',
    level: '300L',
    category: 'Fashion & Beauty',
    title: 'Unisex Bespoke Tailoring, Senator Wear & Emergency Alterations',
    location: 'Wukari New Market / Puje',
    rate: 8000,
    rating: 4.7,
    jobsCompleted: 63,
    verified: true,
    phone: '07056677889',
    availability: 'Mon-Sat 2PM - 7PM',
    skills: ['Senator Styles', 'Ladies Gowns', 'matric/Convocation Outfits', 'Express Adjustments'],
    bio: 'Fast, neat tailoring for matriculation, convocation, church/mosque events, and everyday student wear with pickup options near New Market.'
  },
  {
    id: 'stu-6',
    name: 'Emmanuel Terkimbi',
    matric: 'FUW/21/MTH/0078',
    dept: 'Mathematics & Statistics',
    level: '400L',
    category: 'Music & Events',
    title: 'Live Keyboardist, Musical Arranger & Piano Tutor (Tonic Solfa)',
    location: 'Avyi Ward',
    rate: 10000,
    rating: 4.9,
    jobsCompleted: 28,
    verified: true,
    phone: '08135544332',
    availability: 'Evenings & Sundays',
    skills: ['Live Keyboard', 'Chord Progressions', 'Tonic Solfa Coaching', 'Fellowship/Wedding Music'],
    bio: 'Available for weddings, church fellowships, campus concerts, and one-on-one keyboard lessons across Wukari LGA.'
  }
];

// Initial Seed Data for Wukari Jobs
const DEFAULT_JOBS = [
  {
    id: 'job-101',
    title: 'Need Short Promotional Video & Flyer for Electronics Shop',
    category: 'Media & Videography',
    location: 'Takum Junction',
    client: 'Kwararafa Tech Hub',
    budget: 18000,
    phone: '08031112223',
    postedAt: '2 hours ago',
    applicants: 2,
    desc: 'We want a 60-second clean product showcase video edited on CapCut with good lighting and captions to run on WhatsApp Status and Instagram.'
  },
  {
    id: 'job-102',
    title: ' Solar Charge Controller Replacement & Battery Check',
    category: 'Home & Electrical',
    location: 'Bantaje / Off-Campus Lodges',
    client: 'Grace Villa Lodge Caretaker',
    budget: 8500,
    phone: '08064445556',
    postedAt: '5 hours ago',
    applicants: 4,
    desc: 'Our 12V solar lighting system at a student lodge in Bantaje stopped charging. Need an engineering student with a multimeter to fix it today.'
  },
  {
    id: 'job-103',
    title: 'Private Tutor Needed for Engineering Mathematics & Probability',
    category: 'Academic & Tutoring',
    location: 'FUW Main Campus (Katsina-Ala Rd)',
    client: '200L Study Group (4 Students)',
    budget: 12000,
    phone: '09023334445',
    postedAt: '1 day ago',
    applicants: 3,
    desc: 'Looking for a 400L or 500L student to coach 4 students on probability theory, Laplace transforms, and signal flow graphs twice a week.'
  }
];

// Initial Seed Data for Contracts
const DEFAULT_CONTRACTS = [
  {
    id: 'con-501',
    studentName: 'Chinedu Okafor',
    studentMatric: 'FUW/21/CPE/0184',
    studentPhone: '08034567891',
    clientName: 'Royal Bite Restaurant',
    clientPhone: '08039998887',
    location: 'General Hospital Axis',
    budget: 15000,
    date: '2026-10-28',
    status: 'In Progress',
    description: 'Shoot and edit 2 promotional food reels with LED panel lighting.'
  }
];

// Application State
let students = [];
let jobs = [];
let contracts = [];
let selectedCategory = 'ALL';

// ============================================================================
// INITIALIZATION & STORAGE
// ============================================================================
function initApp() {
  students = loadFromStorage(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
  jobs = loadFromStorage(STORAGE_KEYS.JOBS, DEFAULT_JOBS);
  contracts = loadFromStorage(STORAGE_KEYS.CONTRACTS, DEFAULT_CONTRACTS);

  renderCategoryPills();
  renderStudents();
  renderJobs();
  renderContracts();
  updateMetrics();
}

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return JSON.parse(JSON.stringify(fallback));
    }
    return JSON.parse(raw);
  } catch (e) {
    return JSON.parse(JSON.stringify(fallback));
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('Storage quota exceeded or disabled', e);
  }
}

function resetDemoData() {
  localStorage.removeItem(STORAGE_KEYS.STUDENTS);
  localStorage.removeItem(STORAGE_KEYS.JOBS);
  localStorage.removeItem(STORAGE_KEYS.CONTRACTS);
  initApp();
  showToast('Demo data restored to default Wukari listings!');
}

// ============================================================================
// NAVIGATION & METRICS
// ============================================================================
function switchTab(tabName) {
  const tabs = ['directory', 'jobs', 'matcher', 'contracts', 'register'];
  tabs.forEach(t => {
    const panel = document.getElementById(`tab-${t}`);
    const navBtn = document.getElementById(`nav-${t}`);
    const mnavBtn = document.getElementById(`mnav-${t}`);

    if (panel) panel.classList.toggle('hidden', t !== tabName);
    if (navBtn) navBtn.classList.toggle('active-nav', t === tabName);
    if (mnavBtn) mnavBtn.classList.toggle('active-nav', t === tabName);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateMetrics() {
  document.getElementById('stat-students').textContent = students.length;
  document.getElementById('stat-jobs').textContent = jobs.length;
  document.getElementById('stat-contracts').textContent = contracts.length;
  document.getElementById('badge-jobs').textContent = jobs.length;
  document.getElementById('badge-contracts').textContent = contracts.length;
}

// ============================================================================
// RENDER STUDENT DIRECTORY
// ============================================================================
function renderCategoryPills() {
  const container = document.getElementById('category-pills');
  container.innerHTML = CATEGORIES.map(cat => {
    const active = selectedCategory === cat;
    return `
      <button
        onclick="selectCategory('${cat}')"
        class="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition border ${
          active
            ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
            : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
        }"
      >
        ${cat === 'ALL' ? 'All Skills' : cat}
      </button>
    `;
  }).join('');
}

function selectCategory(cat) {
  selectedCategory = cat;
  renderCategoryPills();
  renderStudents();
}

function renderStudents() {
  const query = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
  const loc = document.getElementById('location-filter')?.value || 'ALL';
  const sort = document.getElementById('sort-filter')?.value || 'rating';
  const verifiedOnly = document.getElementById('verified-only')?.checked || false;

  let filtered = students.filter(s => {
    const matchesCat = selectedCategory === 'ALL' || s.category === selectedCategory;
    const matchesLoc = loc === 'ALL' || s.location === loc;
    const matchesVer = !verifiedOnly || s.verified;
    const matchesQuery =
      !query ||
      s.name.toLowerCase().includes(query) ||
      s.title.toLowerCase().includes(query) ||
      s.dept.toLowerCase().includes(query) ||
      s.skills.some(k => k.toLowerCase().includes(query));

    return matchesCat && matchesLoc && matchesVer && matchesQuery;
  });

  if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  if (sort === 'price-low') filtered.sort((a, b) => a.rate - b.rate);
  if (sort === 'jobs') filtered.sort((a, b) => b.jobsCompleted - a.jobsCompleted);

  const grid = document.getElementById('students-grid');
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white p-10 rounded-2xl border border-slate-200 text-center space-y-3">
        <i class="fa-solid fa-user-slash text-3xl text-slate-400"></i>
        <h3 class="font-bold text-slate-800">No Matching FUW Students Found</h3>
        <p class="text-xs text-slate-500">Try clearing your search filters or selecting "All Wukari Areas / Wards".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(s => `
    <div class="student-card bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between shadow-sm">
      <div>
        <!-- Top Row: Avatar + Badges -->
        <div class="flex justify-between items-start gap-3">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-base border border-emerald-200">
              ${getInitials(s.name)}
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <h3 class="font-bold text-slate-900 text-base">${escapeHtml(s.name)}</h3>
                ${s.verified ? '<i class="fa-solid fa-circle-check text-emerald-600 text-xs" title="Matric ID Verified"></i>' : ''}
              </div>
              <p class="text-xs text-slate-500 font-medium">${escapeHtml(s.dept)} • ${escapeHtml(s.level)}</p>
              <span class="inline-block mt-0.5 text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                ${escapeHtml(s.matric)}
              </span>
            </div>
          </div>
          <div class="text-right">
            <span class="inline-flex items-center gap-1 text-xs font-bold bg-amber-50 text-amber-800 px-2 py-1 rounded-lg border border-amber-200">
              <i class="fa-solid fa-star text-amber-500"></i> ${s.rating.toFixed(1)}
            </span>
            <p class="text-[10px] text-slate-400 mt-1">${s.jobsCompleted} jobs done</p>
          </div>
        </div>

        <!-- Headline & Bio -->
        <div class="mt-4">
          <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">${escapeHtml(s.category)}</span>
          <h4 class="font-bold text-slate-800 text-sm mt-1.5 leading-snug">${escapeHtml(s.title)}</h4>
          <p class="text-xs text-slate-600 mt-1.5 line-clamp-2">${escapeHtml(s.bio)}</p>
        </div>

        <!-- Skill Tags -->
        <div class="flex flex-wrap gap-1.5 mt-3">
          ${s.skills.map(skill => `
            <span class="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium">${escapeHtml(skill)}</span>
          `).join('')}
        </div>
      </div>

      <!-- Footer Info & Actions -->
      <div class="mt-5 pt-4 border-t border-slate-100 space-y-3">
        <div class="flex justify-between items-center text-xs">
          <span class="text-slate-600 flex items-center gap-1">
            <i class="fa-solid fa-location-dot text-emerald-700"></i> ${escapeHtml(s.location)}
          </span>
          <span class="font-extrabold text-slate-900 text-sm">
            From ₦${Number(s.rate).toLocaleString()}
          </span>
        </div>
        <div class="text-[11px] text-slate-500 flex items-center gap-1.5">
          <i class="fa-regular fa-clock text-amber-600"></i>
          <span>Free: ${escapeHtml(s.availability)}</span>
        </div>
        <div class="grid grid-cols-2 gap-2 pt-1">
          <a
            href="https://wa.me/234${s.phone.replace(/^0/, '')}?text=${encodeURIComponent(`Hello ${s.name}, I saw your verified profile on FUW Student Skilled Link and want to inquire about your service in Wukari.`)}"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-2 rounded-xl border border-emerald-700 text-emerald-800 hover:bg-emerald-50 font-bold text-xs flex items-center justify-center gap-1.5 transition"
          >
            <i class="fa-brands fa-whatsapp text-sm"></i> WhatsApp
          </a>
          <button
            onclick="openHireModal('${s.id}')"
            class="px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
          >
            <i class="fa-solid fa-handshake"></i> Book Student
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================================
// RENDER WUKARI JOB BOARD
// ============================================================================
function renderJobs() {
  const grid = document.getElementById('jobs-grid');
  if (jobs.length === 0) {
    grid.innerHTML = `<div class="col-span-full bg-white p-8 rounded-2xl text-center text-slate-500">No active jobs yet. Post the first task!</div>`;
    return;
  }

  grid.innerHTML = jobs.map(j => `
    <div class="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between shadow-sm">
      <div>
        <div class="flex justify-between items-start gap-2">
          <span class="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
            ${escapeHtml(j.category)}
          </span>
          <span class="text-xs text-slate-400">${escapeHtml(j.postedAt)}</span>
        </div>
        <h3 class="font-bold text-slate-900 text-base mt-2">${escapeHtml(j.title)}</h3>
        <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">${escapeHtml(j.desc)}</p>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-100 space-y-3">
        <div class="flex flex-wrap justify-between items-center text-xs gap-2">
          <div class="space-y-0.5">
            <p class="font-semibold text-slate-800"><i class="fa-solid fa-user-tie text-slate-400 mr-1"></i>${escapeHtml(j.client)}</p>
            <p class="text-slate-500"><i class="fa-solid fa-location-dot text-emerald-700 mr-1"></i>${escapeHtml(j.location)}</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-slate-400">Client Budget</p>
            <p class="text-base font-extrabold text-emerald-800">₦${Number(j.budget).toLocaleString()}</p>
          </div>
        </div>

        <div class="flex items-center justify-between pt-1">
          <span class="text-xs text-slate-500"><i class="fa-solid fa-users mr-1"></i>${j.applicants} FUW student(s) interested</span>
          <div class="flex gap-2">
            <button
              onclick="applyForJob('${j.id}')"
              class="px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition"
            >
              Apply as Student
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function applyForJob(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;
  job.applicants += 1;
  saveToStorage(STORAGE_KEYS.JOBS, jobs);
  renderJobs();
  showToast(`Application recorded! Connecting you with ${job.client} on WhatsApp...`);
  const waUrl = `https://wa.me/234${job.phone.replace(/^0/, '')}?text=${encodeURIComponent(`Hello ${job.client}, I am a verified FUW student applying for your task "${job.title}" (₦${job.budget.toLocaleString()}) posted on FUW Student Skilled Link.`)}`;
  window.open(waUrl, '_blank');
}

// ============================================================================
// SMART WUKARI TASK ESTIMATOR & MATCHER
// ============================================================================
function fillSamplePrompt(text) {
  document.getElementById('matcher-prompt').value = text;
}

function runSmartMatcher() {
  const promptText = (document.getElementById('matcher-prompt')?.value || '').trim();
  if (!promptText) {
    showToast('Please describe the task you need done in Wukari first!');
    return;
  }

  const lower = promptText.toLowerCase();
  let detectedCat = 'Tech & Software';
  let minBudget = 7000;
  let maxBudget = 20000;
  let steps = [
    'Initial inspection and scope agreement via WhatsApp or on-campus meet.',
    'Execution of service with student tools and mid-way progress check.',
    'Final delivery, testing in Wukari, and direct cash/transfer settlement.'
  ];

  if (lower.includes('video') || lower.includes('shoot') || lower.includes('capcut') || lower.includes('flyer') || lower.includes('photo')) {
    detectedCat = 'Media & Videography';
    minBudget = 10000;
    maxBudget = 25000;
    steps = [
      'Confirm shoot location in Wukari, lighting setup, and script outline.',
      'Capture high-definition mobile/camera footage and audio on site.',
      'Edit in CapCut/Canva with color grading and captions within 24–48 hours.'
    ];
  } else if (lower.includes('laptop') || lower.includes('windows') || lower.includes('repair') || lower.includes('network') || lower.includes('iphone')) {
    detectedCat = 'Hardware & Engineering';
    minBudget = 4000;
    maxBudget = 12000;
    steps = [
      'Run hardware/system diagnostics at your lodge, shop, or campus lab.',
      'Perform OS installation, driver patches, or component replacement.',
      'Stress-test system stability before handing back to client.'
    ];
  } else if (lower.includes('solar') || lower.includes('wire') || lower.includes('wiring') || lower.includes('inverter') || lower.includes('light')) {
    detectedCat = 'Home & Electrical';
    minBudget = 6000;
    maxBudget = 18000;
    steps = [
      'Inspect load requirements, battery health, and wiring safety.',
      'Install or repair inverter/solar controller and changeover lines.',
      'Test continuity and voltage output under load.'
    ];
  } else if (lower.includes('sew') || lower.includes('tailor') || lower.includes('dress') || lower.includes('senator')) {
    detectedCat = 'Fashion & Beauty';
    minBudget = 6000;
    maxBudget = 15000;
    steps = [
      'Take body measurements and confirm fabric/style design.',
      'Cut, stitch, and press garment with neat finishing.',
      'Fitting check and delivery in Wukari.'
    ];
  } else if (lower.includes('keyboard') || lower.includes('music') || lower.includes('piano') || lower.includes('choir')) {
    detectedCat = 'Music & Events';
    minBudget = 8000;
    maxBudget = 20000;
    steps = [
      'Share song list, key signatures, and rehearsal schedule.',
      'Attend soundcheck and rehearsal session in Wukari.',
      'Perform live keyboard accompaniment at your event.'
    ];
  }

  const matchedStudents = students.filter(s => s.category === detectedCat);
  const displayMatches = matchedStudents.length > 0 ? matchedStudents : students.slice(0, 2);

  const resultsDiv = document.getElementById('matcher-results');
  resultsDiv.classList.remove('hidden');
  resultsDiv.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5 animate-fade-in">
      <div class="flex flex-wrap justify-between items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <span class="text-xs font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">Matched Category: ${detectedCat}</span>
          <h3 class="text-lg font-extrabold text-slate-900 mt-1">Wukari Local Scope & Budget Estimate</h3>
        </div>
        <div class="bg-amber-50 border border-amber-200 px-4 py-2.5 rounded-xl text-right">
          <p class="text-[11px] font-semibold text-amber-800 uppercase">Recommended Wukari Student Rate</p>
          <p class="text-xl font-extrabold text-slate-900">₦${minBudget.toLocaleString()} – ₦${maxBudget.toLocaleString()}</p>
        </div>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase text-slate-500 mb-2">Recommended 3-Step Execution Plan</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${steps.map((step, idx) => `
            <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700">
              <span class="inline-block w-5 h-5 rounded-full bg-emerald-700 text-white font-bold text-center leading-5 mr-1.5">${idx + 1}</span>
              ${step}
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h4 class="text-xs font-bold uppercase text-slate-500 mb-3">Best Verified FUW Students for This Task</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${displayMatches.map(s => `
            <div class="p-4 rounded-xl border border-slate-200 flex justify-between items-center gap-3 bg-slate-50/60">
              <div>
                <p class="font-bold text-slate-900 text-sm">${escapeHtml(s.name)} <span class="text-xs font-mono text-emerald-700">(${escapeHtml(s.matric)})</span></p>
                <p class="text-xs text-slate-600">${escapeHtml(s.title)}</p>
                <p class="text-[11px] text-slate-500 mt-1"><i class="fa-solid fa-location-dot text-emerald-700 mr-1"></i>${escapeHtml(s.location)} • From ₦${s.rate.toLocaleString()}</p>
              </div>
              <button onclick="openHireModal('${s.id}')" class="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex-shrink-0">
                Hire Now
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// CONTRACTS & BOOKINGS WORKFLOW
// ============================================================================
function openHireModal(studentId) {
  const student = students.find(s => s.id === studentId);
  if (!student) return;

  document.getElementById('hire-student-id').value = student.id;
  document.getElementById('hire-modal-title').textContent = `Book ${student.name} (${student.matric})`;
  document.getElementById('hire-budget').value = student.rate;
  document.getElementById('hire-date').valueAsDate = new Date();

  const modal = document.getElementById('hire-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeHireModal() {
  const modal = document.getElementById('hire-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.getElementById('hire-form').reset();
}

function submitHireContract(e) {
  e.preventDefault();
  const studentId = document.getElementById('hire-student-id').value;
  const student = students.find(s => s.id === studentId);
  if (!student) return;

  const newContract = {
    id: 'con-' + Date.now(),
    studentName: student.name,
    studentMatric: student.matric,
    studentPhone: student.phone,
    clientName: document.getElementById('hire-client-name').value.trim(),
    clientPhone: document.getElementById('hire-client-phone').value.trim(),
    location: document.getElementById('hire-location').value,
    budget: Number(document.getElementById('hire-budget').value),
    date: document.getElementById('hire-date').value,
    status: 'In Progress',
    description: document.getElementById('hire-description').value.trim()
  };

  contracts.unshift(newContract);
  saveToStorage(STORAGE_KEYS.CONTRACTS, contracts);
  renderContracts();
  updateMetrics();
  closeHireModal();
  switchTab('contracts');
  showToast(`Contract created with ${student.name}!`);
}

function renderContracts() {
  const container = document.getElementById('contracts-list');
  if (contracts.length === 0) {
    container.innerHTML = `<div class="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500">No service contracts yet. Book a student from the directory to start!</div>`;
    return;
  }

  container.innerHTML = contracts.map(c => {
    const isCompleted = c.status === 'Completed & Verified';
    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${
              isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }">
              ${escapeHtml(c.status)}
            </span>
            <span class="text-xs text-slate-400">Date: ${escapeHtml(c.date)}</span>
          </div>
          <h3 class="font-bold text-slate-900 text-base">
            ${escapeHtml(c.studentName)} <span class="text-xs font-mono text-slate-500">(${escapeHtml(c.studentMatric)})</span>
            <span class="text-slate-400 font-normal mx-1">for</span>
            ${escapeHtml(c.clientName)}
          </h3>
          <p class="text-xs text-slate-600">${escapeHtml(c.description)}</p>
          <p class="text-xs text-slate-500"><i class="fa-solid fa-location-dot text-emerald-700 mr-1"></i>${escapeHtml(c.location)} • Agreed Fee: <strong>₦${Number(c.budget).toLocaleString()}</strong></p>
        </div>

        <div class="flex flex-wrap gap-2">
          <a
            href="https://wa.me/234${c.studentPhone.replace(/^0/, '')}?text=${encodeURIComponent(`Hello ${c.studentName}, following up on our Wukari Skilled Link contract (${c.description}).`)}"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1"
          >
            <i class="fa-brands fa-whatsapp text-emerald-600"></i> Chat Student
          </a>
          ${
            !isCompleted
              ? `<button onclick="completeContract('${c.id}')" class="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold">
                  <i class="fa-solid fa-check mr-1"></i>Mark Completed
                </button>`
              : `<span class="px-3 py-2 text-xs font-bold text-emerald-700"><i class="fa-solid fa-circle-check mr-1"></i>Job Verified</span>`
          }
        </div>
      </div>
    `;
  }).join('');
}

function completeContract(contractId) {
  const c = contracts.find(item => item.id === contractId);
  if (!c) return;
  c.status = 'Completed & Verified';

  // Increment student's completed jobs count
  const stu = students.find(s => s.matric === c.studentMatric);
  if (stu) {
    stu.jobsCompleted += 1;
    saveToStorage(STORAGE_KEYS.STUDENTS, students);
    renderStudents();
  }

  saveToStorage(STORAGE_KEYS.CONTRACTS, contracts);
  renderContracts();
  showToast('Contract marked as Completed & Verified!');
}

// ============================================================================
// POST JOB & REGISTER STUDENT HANDLERS
// ============================================================================
function openPostJobModal() {
  const modal = document.getElementById('post-job-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closePostJobModal() {
  const modal = document.getElementById('post-job-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.getElementById('post-job-form').reset();
}

function submitNewJob(e) {
  e.preventDefault();
  const newJob = {
    id: 'job-' + Date.now(),
    title: document.getElementById('job-title').value.trim(),
    category: document.getElementById('job-category').value,
    location: document.getElementById('job-location').value,
    client: document.getElementById('job-client').value.trim(),
    budget: Number(document.getElementById('job-budget').value),
    phone: document.getElementById('job-phone').value.trim(),
    postedAt: 'Just now',
    applicants: 0,
    desc: document.getElementById('job-desc').value.trim()
  };

  jobs.unshift(newJob);
  saveToStorage(STORAGE_KEYS.JOBS, jobs);
  renderJobs();
  updateMetrics();
  closePostJobModal();
  switchTab('jobs');
  showToast('Your Wukari job request is now live on the board!');
}

function handleStudentRegistration(e) {
  e.preventDefault();
  const skillsRaw = document.getElementById('reg-skills').value;
  const skillArray = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);

  const newStudent = {
    id: 'stu-' + Date.now(),
    name: document.getElementById('reg-name').value.trim(),
    matric: document.getElementById('reg-matric').value.trim().toUpperCase(),
    dept: document.getElementById('reg-dept').value.trim(),
    level: document.getElementById('reg-level').value,
    category: document.getElementById('reg-category').value,
    title: document.getElementById('reg-title').value.trim(),
    location: document.getElementById('reg-location').value,
    rate: Number(document.getElementById('reg-rate').value),
    rating: 5.0,
    jobsCompleted: 1,
    verified: true,
    phone: document.getElementById('reg-phone').value.trim(),
    availability: document.getElementById('reg-availability').value.trim(),
    skills: skillArray.length ? skillArray : ['General Service'],
    bio: document.getElementById('reg-bio').value.trim()
  };

  students.unshift(newStudent);
  saveToStorage(STORAGE_KEYS.STUDENTS, students);
  document.getElementById('register-student-form').reset();
  renderStudents();
  updateMetrics();
  switchTab('directory');
  showToast(`Welcome ${newStudent.name}! Your FUW skill profile is now live.`);
}

// ============================================================================
// UTILITIES
// ============================================================================
function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg border border-emerald-500/40 text-xs font-semibold flex items-center gap-2 animate-fade-in';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initApp);