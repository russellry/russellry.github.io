document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderApps();
    initMobileNav();
    initScrollReveal();
    initActiveNav();
    updateYear();
});

// === Rendering ===

function renderApps() {
    renderFeatured();
    renderGrid();
}

function renderFeatured() {
    const container = document.getElementById('featured-container');
    const app = APPS.find(a => a.featured) || APPS[0];
    if (!container || !app) return;

    container.innerHTML = `
        <div class="showcase">
            <div class="showcase-inner">
                <div class="showcase-content">
                    <div class="showcase-badge">✦ Featured App</div>
                    <div class="showcase-app-header">
                        <img src="${app.icon}" alt="${app.name} icon" class="showcase-icon">
                        <div>
                            <h3 class="card-title">${app.name}</h3>
                            <span style="font-size:13px;font-weight:600;color:var(--accent);">${app.tagline}</span>
                        </div>
                    </div>
                    <p class="showcase-desc">${app.description}</p>
                    <div class="showcase-bullets">
                        ${app.bullets.map(b => `
                            <div class="showcase-bullet">
                                <div class="showcase-bullet-dot"></div>
                                <span>${b}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="showcase-ctas">
                        <a href="${app.appStoreUrl}" target="_blank" class="btn btn-primary" style="font-size:14px;padding:10px 24px;">
                            Get on App Store
                        </a>
                    </div>
                </div>
                <div class="showcase-visual">
                    <div class="device-frame">
                        <div class="carousel-track no-scrollbar" id="spotlight-carousel">
                            ${app.screenshots.map((src, i) => `
                                <img src="${src}" alt="${app.name} screenshot ${i + 1}" loading="lazy">
                            `).join('')}
                        </div>
                    </div>
                    ${app.screenshots.length > 1 ? `
                        <div class="carousel-dots" id="spotlight-dots">
                            ${app.screenshots.map((_, i) => `
                                <button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Screenshot ${i + 1}"></button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    initCarousel('spotlight-carousel', 'spotlight-dots');
}

function renderGrid() {
    const container = document.getElementById('app-grid');
    if (!container) return;

    container.innerHTML = APPS.map((app, idx) => `
        <div class="app-card reveal delay-${Math.min(idx + 1, 4)}" style="--card-accent: ${app.accent || 'var(--gradient)'}">
            <div class="app-card-header">
                <img src="${app.icon}" alt="${app.name} icon" class="app-card-icon"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzI4MjgzNSIvPjwvc3ZnPg=='">
                <div class="app-card-platforms">
                    ${app.platforms.map(p => `<span class="platform-tag">${p}</span>`).join('')}
                </div>
            </div>
            <h3 class="app-card-name">${app.name}</h3>
            <div class="app-card-tagline">${app.tagline}</div>
            <p class="app-card-desc">${app.description}</p>
            <div class="app-card-footer">
                <a href="${app.appStoreUrl}" target="_blank" class="btn btn-ghost" style="font-size:14px;">
                    App Store
                </a>
            </div>
        </div>
    `).join('');
}

// === Carousel ===

function initCarousel(trackId, dotsId) {
    const track = document.getElementById(trackId);
    const dotsContainer = document.getElementById(dotsId);
    if (!track) return;

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];
    let currentIndex = 0;

    function scrollToIndex(index) {
        const images = track.querySelectorAll('img');
        if (images[index]) {
            track.scrollTo({ left: images[index].offsetLeft, behavior: 'smooth' });
            currentIndex = index;
            updateDots();
        }
    }

    function updateDots() {
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    // Dot clicks
    dots.forEach(dot => {
        dot.addEventListener('click', () => scrollToIndex(parseInt(dot.dataset.index)));
    });

    // Scroll detection
    let scrollTimeout;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const images = track.querySelectorAll('img');
            const scrollLeft = track.scrollLeft;
            let closest = 0;
            let minDist = Infinity;
            images.forEach((img, i) => {
                const dist = Math.abs(img.offsetLeft - scrollLeft);
                if (dist < minDist) { minDist = dist; closest = i; }
            });
            currentIndex = closest;
            updateDots();
        }, 100);
    });

    // Auto-play
    let autoPlay = setInterval(() => {
        const images = track.querySelectorAll('img');
        currentIndex = (currentIndex + 1) % images.length;
        scrollToIndex(currentIndex);
    }, 4000);

    track.addEventListener('pointerdown', () => clearInterval(autoPlay));
}

// === Theme ===

function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'light' || (!saved && !prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    updateThemeIcons();

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
            document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
            updateThemeIcons();
        });
    }
}

function updateThemeIcons() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const moon = document.getElementById('theme-icon-moon');
    const sun = document.getElementById('theme-icon-sun');
    if (moon) moon.style.display = isLight ? 'none' : 'block';
    if (sun) sun.style.display = isLight ? 'block' : 'none';
}

// === Mobile Nav ===

function initMobileNav() {
    const hamburger = document.getElementById('nav-hamburger');
    const links = document.getElementById('nav-links');
    const overlay = document.getElementById('nav-overlay');
    if (!hamburger || !links) return;

    function toggleNav() {
        const isOpen = links.classList.toggle('open');
        hamburger.classList.toggle('open');
        if (overlay) overlay.classList.toggle('open');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeNav() {
        links.classList.remove('open');
        hamburger.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', toggleNav);
    if (overlay) overlay.addEventListener('click', closeNav);
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}

// === Scroll Reveal ===

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// === Active Nav ===

function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(s => observer.observe(s));
}

// === Utilities ===

function updateYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}
