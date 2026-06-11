document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderApps();
    initMobileNav();
    initScrollReveal();
    initActiveNav();
    initDelight();
    updateYear();
});

// === Rendering ===

function renderApps() {
    const apps = getApps();
    if (!apps.length) return;
    renderFeatured();
    renderGrid();
}

function renderFeatured() {
    const container = document.getElementById('featured-container');
    const apps = getApps();
    const app = apps.find(item => item.featured) || apps[0];
    if (!container || !app) return;

    const accent = extractAccent(app.accent);

    container.innerHTML = `
        <article class="showcase" style="--app-accent: ${accent}">
            <div class="showcase-inner">
                <div class="showcase-content">
                    <span class="eyebrow">Featured App</span>
                    <div class="showcase-app-header">
                        <img src="${app.icon}" alt="${app.name} icon" class="showcase-icon">
                        <div>
                            <h3 class="card-title">${app.name}</h3>
                            <p class="tagline">${app.tagline}</p>
                        </div>
                    </div>
                    <p class="showcase-desc">${app.description}</p>
                    <ul class="feature-list">
                        ${app.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                    </ul>
                    <div class="showcase-ctas">
                        <a href="${app.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Open App Store</a>
                        <a href="#contact" class="btn btn-secondary">Ask About It</a>
                    </div>
                </div>
                <div class="showcase-visual">
                    <div class="device-frame">
                        <div class="carousel-track no-scrollbar" id="spotlight-carousel">
                            ${app.screenshots.map((src, index) => `
                                <img src="${src}" alt="${app.name} screenshot ${index + 1}" loading="${index === 0 ? 'eager' : 'lazy'}">
                            `).join('')}
                        </div>
                    </div>
                    ${app.screenshots.length > 1 ? `
                        <div class="carousel-dots" id="spotlight-dots">
                            ${app.screenshots.map((_, index) => `
                                <button class="carousel-dot${index === 0 ? ' active' : ''}" data-index="${index}" aria-label="Show screenshot ${index + 1}" type="button"></button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        </article>
    `;

    initCarousel('spotlight-carousel', 'spotlight-dots');
}

function renderGrid() {
    const container = document.getElementById('app-grid');
    if (!container) return;

    const apps = getApps();
    container.innerHTML = apps.map((app, index) => {
        const accent = extractAccent(app.accent);
        const firstShot = app.screenshots && app.screenshots[0] ? app.screenshots[0] : app.icon;

        return `
            <article class="app-card reveal delay-${Math.min(index + 1, 4)}" style="--app-accent: ${accent}">
                <div class="app-card-media">
                    <img src="${firstShot}" alt="${app.name} preview" class="app-card-shot" loading="lazy">
                </div>
                <div class="app-card-content">
                    <div class="app-card-header">
                        <img src="${app.icon}" alt="${app.name} icon" class="app-card-icon" loading="eager"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzEyMTUxMiIvPjwvc3ZnPg=='">
                        <div class="platform-tags">
                            ${app.platforms.map(platform => `<span class="platform-tag">${platform}</span>`).join('')}
                        </div>
                    </div>
                    <div>
                        <h3 class="app-card-name">${app.name}</h3>
                        <p class="tagline">${app.tagline}</p>
                    </div>
                    <p class="app-card-desc">${app.description}</p>
                    <div class="app-card-footer">
                        <span class="app-accent-bar" aria-hidden="true"></span>
                        <a href="${app.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">App Store</a>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    refreshRevealTargets(container);
    initCardTilt(container);
}

// === Carousel ===

function initCarousel(trackId, dotsId) {
    const track = document.getElementById(trackId);
    const dotsContainer = document.getElementById(dotsId);
    if (!track) return;

    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.carousel-dot')) : [];
    let currentIndex = 0;
    let autoPlay = null;
    let suppressScrollDetection = false;

    function scrollToIndex(index) {
        const images = Array.from(track.querySelectorAll('img'));
        if (!images[index]) return;
        suppressScrollDetection = true;
        track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
        currentIndex = index;
        updateDots();
        window.setTimeout(() => {
            suppressScrollDetection = false;
            updateIndexFromScroll();
        }, 520);
    }

    function updateDots() {
        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            scrollToIndex(parseInt(dot.dataset.index, 10));
        });
    });

    let scrollTimeout;
    track.addEventListener('scroll', () => {
        if (suppressScrollDetection) return;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateIndexFromScroll, 100);
    });

    function updateIndexFromScroll() {
        const images = Array.from(track.querySelectorAll('img'));
        if (!images.length || !track.clientWidth) return;
        const closest = Math.max(0, Math.min(images.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
        currentIndex = closest;
        updateDots();
    }

    function startAutoPlay() {
        const images = track.querySelectorAll('img');
        if (images.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        autoPlay = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            scrollToIndex(currentIndex);
        }, 4200);
    }

    function stopAutoPlay() {
        if (autoPlay) clearInterval(autoPlay);
        autoPlay = null;
    }

    track.addEventListener('pointerdown', stopAutoPlay);
    track.addEventListener('focusin', stopAutoPlay);
    startAutoPlay();
}

// === Theme ===

function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }

    updateThemeIcons();

    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateThemeIcons();
    });
}

function updateThemeIcons() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const moon = document.getElementById('theme-icon-moon');
    const sun = document.getElementById('theme-icon-sun');
    if (moon) moon.style.display = isDark ? 'none' : 'block';
    if (sun) sun.style.display = isDark ? 'block' : 'none';
}

// === Mobile Nav ===

function initMobileNav() {
    const hamburger = document.getElementById('nav-hamburger');
    const links = document.getElementById('nav-links');
    if (!hamburger || !links) return;

    function toggleNav() {
        const isOpen = links.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('nav-open', isOpen);
    }

    function closeNav() {
        links.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
    }

    hamburger.addEventListener('click', toggleNav);
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keyup', event => {
        if (event.key === 'Escape') closeNav();
    });
}

// === Scroll Reveal ===

let revealObserver = null;

function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        return;
    }

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -44px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function refreshRevealTargets(root) {
    if (!revealObserver) {
        root.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        return;
    }
    root.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// === Active Nav ===

function initActiveNav() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        });
    }, { threshold: 0.28, rootMargin: '-90px 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));
}

// === Delight ===

function initDelight() {
    document.body.classList.add('is-ready');
    initNavState();
    initHeroParallax();
    initCardTilt(document);
    initStatCounters();
    initPressFeedback();
}

function initNavState() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    function updateNav() {
        nav.classList.toggle('is-scrolled', window.scrollY > 8);
    }

    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
}

function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const media = document.querySelector('.hero-media');
    if (!hero || !media || prefersReducedMotion()) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let raf = null;

    function setHeroOffset(event) {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;

        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            media.style.setProperty('--hero-x', `${x.toFixed(2)}px`);
            media.style.setProperty('--hero-y', `${y.toFixed(2)}px`);
        });
    }

    hero.addEventListener('pointermove', setHeroOffset, { passive: true });
    hero.addEventListener('pointerleave', () => {
        media.style.setProperty('--hero-x', '0px');
        media.style.setProperty('--hero-y', '0px');
    });
}

function initCardTilt(root = document) {
    if (prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return;

    root.querySelectorAll('.app-card').forEach(card => {
        if (card.dataset.tiltReady === 'true') return;
        card.dataset.tiltReady = 'true';

        card.addEventListener('pointermove', event => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;
            const tiltX = (0.5 - y) * 5;
            const tiltY = (x - 0.5) * 6;

            card.classList.add('is-tilting');
            card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
            card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
            card.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`);
            card.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`);
        }, { passive: true });

        card.addEventListener('pointerleave', () => {
            card.classList.remove('is-tilting');
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
            card.style.setProperty('--shine-x', '50%');
            card.style.setProperty('--shine-y', '0%');
        });
    });
}

function initStatCounters() {
    const stats = Array.from(document.querySelectorAll('.studio-strip-item'));
    if (!stats.length) return;

    if (prefersReducedMotion()) {
        stats.forEach(item => item.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const item = entry.target;
            item.classList.add('visible');
            animateStat(item.querySelector('strong'));
            observer.unobserve(item);
        });
    }, { threshold: 0.35 });

    stats.forEach(item => observer.observe(item));
}

function animateStat(el) {
    if (!el) return;
    const target = Number.parseInt(el.textContent, 10);
    if (!Number.isFinite(target) || target === 0) return;

    const duration = 780;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toString();
        if (progress < 1) requestAnimationFrame(tick);
    }

    el.textContent = '0';
    requestAnimationFrame(tick);
}

function initPressFeedback() {
    document.querySelectorAll('.btn, .social-link, .theme-toggle, .nav-hamburger').forEach(control => {
        control.addEventListener('pointerdown', () => control.classList.add('is-pressing'));
        ['pointerup', 'pointercancel', 'pointerleave', 'blur'].forEach(eventName => {
            control.addEventListener(eventName, () => control.classList.remove('is-pressing'));
        });
    });
}

// === Utilities ===

function updateYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

function extractAccent(accent) {
    if (!accent) return '#ff5a45';
    const match = accent.match(/#[0-9a-fA-F]{3,8}/);
    return match ? match[0] : accent;
}

function getApps() {
    if (typeof APPS !== 'undefined' && Array.isArray(APPS)) return APPS;
    if (Array.isArray(window.APPS)) return window.APPS;
    return [];
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
