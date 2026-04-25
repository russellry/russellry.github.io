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

    const html = `
        <div class="product-tile product-tile-dark photo-shadow" style="border-radius: 24px; display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; max-width: 1100px; margin: 0 auto; background-color: var(--tile-1); overflow: hidden; position: relative;">
            
            <!-- Text Content Side -->
            <div style="flex: 1 1 400px; padding: 60px 40px; text-align: left; z-index: 2;">
                <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                    <img src="${featuredApp.icon}" style="width: 72px; height: 72px; border-radius: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.3);" alt="Icon">
                    <div>
                        <div style="color: var(--focus-blue); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">
                            Featured App
                        </div>
                        <h2 class="display-text" style="font-size: 40px; line-height: 1;">
                            ${featuredApp.name}
                        </h2>
                    </div>
                </div>
                
                <p style="font-size: 20px; color: var(--text-color); opacity: 0.8; margin-bottom: 32px; font-weight: 400; line-height: 1.4;">
                    ${featuredApp.description}
                </p>
                
                <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 40px;">
                    <a href="${featuredApp.appStoreUrl}" target="_blank" class="btn btn-primary-pill" style="font-size: 15px; padding: 12px 24px;">
                        Get on App Store
                    </a>
                    <a href="#contact" class="btn btn-white-capsule" style="background-color: rgba(255,255,255,0.1); color: var(--pure-white);">
                        Learn More
                    </a>
                </div>

                <!-- Feature Bullets -->
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${featuredApp.bullets.map(bullet => `
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="background: rgba(0, 113, 227, 0.2); padding: 6px; border-radius: 50%;">
                                <svg width="16" height="16" style="color: var(--focus-blue);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <span style="font-size: 15px; font-weight: 500; color: var(--text-color); opacity: 0.9;">${bullet}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Carousel Visual Side -->
            <div style="flex: 1 1 300px; padding: 40px; display: flex; justify-content: center; align-items: center; position: relative;">
                <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(0, 113, 227, 0.15) 0%, transparent 70%);"></div>
                <div style="position: relative; width: 100%; max-width: 320px; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);" class="group">
                    <div style="display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth;" class="no-scrollbar" id="spotlight-carousel">
                        ${featuredApp.screenshots.map((src, idx) => `
                            <img src="${src}" alt="${featuredApp.name} Screenshot ${idx + 1}" style="width: 100%; height: auto; scroll-snap-align: center; flex-shrink: 0; display: block;" loading="lazy">
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    featuredContainer.innerHTML = html;
}

function initAppGrid() {
    const gridContainer = document.getElementById('app-grid');
    if (!gridContainer) return;

    const html = APPS.map(app => `
        <div class="utility-card" style="display: flex; flex-direction: column; height: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                 <img src="${app.icon}" alt="${app.name} Icon" style="width: 80px; height: 80px; border-radius: 18px; object-fit: cover;" class="photo-shadow" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMyIvPjwvc3ZnPg=='">
                 <div style="display: flex; gap: 8px;">
                    ${app.platforms.map(p => `
                        <span style="padding: 4px 8px; font-size: 10px; font-weight: 700; background: var(--parchment); color: var(--near-black-ink); border-radius: 6px; letter-spacing: 0.05em;">${p}</span>
                    `).join('')}
                 </div>
            </div>
            
            <h3 class="display-text" style="font-size: 24px; margin-bottom: 8px;">${app.name}</h3>
            <p style="font-size: 14px; color: var(--focus-blue); font-weight: 600; margin-bottom: 16px;">${app.tagline}</p>
            
            <p style="font-size: 14px; color: #86868b; margin-bottom: 24px; flex-grow: 1;">
                ${app.description.substring(0, 100)}...
            </p>
            
            <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid var(--nav-border); display: flex; justify-content: space-between; align-items: center;">
                <a href="${app.appStoreUrl}" target="_blank" class="btn btn-link" style="font-size: 14px; font-weight: 600;">
                    View on App Store
                </a>
            </div>
        </div>
    `).join('');

    gridContainer.innerHTML = html;
}

// --- Carousel Logic ---

window.scrollCarousel = function (id, direction) {
    const container = document.getElementById(id);
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8; 
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
};

// --- Theme Logic ---

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// --- Nav Logic ---

function setupNav() {
    // Nav logic handled entirely via CSS backdrop filters now based on DESIGN.md
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
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
}
