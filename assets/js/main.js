document.addEventListener('DOMContentLoaded', () => {
    renderApps();
    initTheme();
    setupNav();
    updateYear();
    initScrollReveal();
});

// --- Rendering ---

function renderApps() {
    initFeaturedSpotlight();
    initAppGrid();
}

function initFeaturedSpotlight() {
    const featuredContainer = document.getElementById('featured-container');
    const featuredApp = APPS.find(app => app.featured) || APPS[0];

    if (!featuredApp || !featuredContainer) return;

    // Create Spotlight HTML
    const html = `
        <div class="flex flex-col md:flex-row items-center gap-12">
            <!-- Text Content -->
            <div class="flex-1 text-center md:text-left space-y-6">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
                    Featured App
                </div>
                <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ${featuredApp.name}
                </h2>
                <p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    ${featuredApp.description}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <a href="${featuredApp.appStoreUrl}" target="_blank" class="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-full transition-transform active:scale-95 shadow-lg shadow-blue-500/25">
                        Download on App Store
                    </a>
                    <a href="#contact" class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-[#0071e3] bg-blue-50/50 dark:bg-white/5 hover:bg-blue-100/50 dark:hover:bg-white/10 rounded-full transition-colors">
                        Learn More
                    </a>
                </div>
                
                <!-- Feature Bullets -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100 dark:border-white/5">
                    ${featuredApp.bullets.map(bullet => `
                        <div class="flex flex-col items-center md:items-start gap-2">
                            <div class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center md:text-left">${bullet}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Carousel Visual -->
            <div class="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl relative group">
                <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-gray-900/5 dark:border-white/10 bg-gray-100 dark:bg-gray-800 aspect-[9/19.5] md:aspect-auto md:h-[600px] mx-auto">
                    <!-- Carousel Container -->
                    <div class="flex overflow-x-auto carousel-snap h-full no-scrollbar relative z-10" id="spotlight-carousel">
                        ${featuredApp.screenshots.map((src, idx) => `
                            <img src="${src}" alt="${featuredApp.name} Screenshot ${idx + 1}" class="carousel-item w-full h-full object-cover flex-shrink-0 snap-center" loading="lazy">
                        `).join('')}
                    </div>
                    
                    <!-- Controls -->
                    <button class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20" onclick="scrollCarousel('spotlight-carousel', -1)">
                        <svg class="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20" onclick="scrollCarousel('spotlight-carousel', 1)">
                         <svg class="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
                <!-- Abstract Glow -->
                <div class="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
            </div>
        </div>
    `;
    featuredContainer.innerHTML = html;
}

function initAppGrid() {
    const gridContainer = document.getElementById('app-grid');
    if (!gridContainer) return;

    // Filter out the featured app to avoid duplication (optional, but cleaner)
    // For now, let's just show all except the one currently highlighted if desired.
    // User requested "2-6 app cards".
    // We will show ALL apps in the grid for completeness, or filter. Let's show all.

    const html = APPS.map(app => `
        <div class="group relative bg-white dark:bg-[#1c1c1e] rounded-3xl p-6 shadow-sm hover:shadow-xl hover-lift transition-all duration-300 border border-gray-100 dark:border-white/5 flex flex-col h-full">
            <div class="flex items-start justify-between mb-6">
                 <img src="${app.icon}" alt="${app.name} Icon" class="w-20 h-20 rounded-[1.25rem] shadow-md border border-gray-200 dark:border-white/10" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMyIvPjwvc3ZnPg=='">
                 <div class="flex flex-wrap gap-2 justify-end">
                    ${app.platforms.map(p => `
                        <span class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 rounded-md">${p}</span>
                    `).join('')}
                 </div>
            </div>
            
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">${app.name}</h3>
            <p class="text-sm font-medium text-[#0071e3] mb-4">${app.tagline}</p>
            
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                ${app.description.substring(0, 100)}...
            </p>
            
            <div class="mt-auto pt-6 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
                <a href="${app.appStoreUrl}" target="_blank" class="text-sm font-semibold text-[#0071e3] hover:underline">
                    View on App Store
                </a>
                <svg class="w-4 h-4 text-gray-300 group-hover:text-[#0071e3] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
        </div>
    `).join('');

    gridContainer.innerHTML = html;
}


// --- Carousel Logic ---

window.scrollCarousel = function (id, direction) {
    const container = document.getElementById(id);
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of width
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
};


// --- Theme Logic ---

function initTheme() {
    // Check localStorage or System
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Toggle Button Listener
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}


// --- Nav Logic ---

function setupNav() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('shadow-sm');
            nav.classList.add('bg-white/80', 'dark:bg-[#1d1d1f]/80'); // Increase opacity on scroll
        } else {
            nav.classList.remove('shadow-sm');
            nav.classList.remove('bg-white/80', 'dark:bg-[#1d1d1f]/80');
        }
    });
}

function updateYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

// --- Scroll Reveal Logic ---

function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
}
