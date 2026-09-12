document.addEventListener('DOMContentLoaded', () => {
    const leftFront  = document.querySelector('.page-left .page-front .content');
    const leftBack   = document.querySelector('.page-left .page-back .content');
    const rightFront = document.querySelector('.page-right .page-front .content');
    const rightBack  = document.querySelector('.page-right .page-back .content');
    const pageLeft   = document.querySelector('.page-left');
    const pageRight  = document.querySelector('.page-right');
    const prevBtn    = document.getElementById('prevBtn');
    const nextBtn    = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    const pageSound  = document.getElementById('pageSound');

    const allImages = [
        'img/Contacto.jpeg',
        'img/Primera_cita.jpeg',
        'img/Kiara.jpeg',
        'img/Gil.jpeg',
        'img/Llamada.jpeg',
        'img/Citas_pendientes.jpeg',
        'img/Kiara_2.jpeg',
        'img/Cita_cine.jpeg',
        'img/Gil_bb.jpeg',
        'img/Kiara_bb.jpeg',
        'img/Paises.jpeg',
        'img/Mulan.png'
    ];

    const spreads = [
        {
            left: { type: 'cover-img', img: 'img/mulan.png'},
            right: { type: 'title-page', title: 'Nuestra Historia de Amor', subtitle: 'Un libro escrito con el corazón... y con código' }
        },
        {
            left:  { img: allImages[8], desc: 'Gil bb ❤️', text: 'Quien diria que un día el pequeño Gil enonctraría a su verdadero amor? 💕' },
            right: { img: allImages[9], desc: 'Kiara bb ❤️', text: 'Quien diria que esta bella niña sería mi verdadero amor? 💕' }
        },
        {
            left:  { img: allImages[0], desc: 'Siempre serás "Mi amor 💕"', text: 'Nos conocimos en Facebook, pero al hablar parecía que llevabamos toda una vida de conocernos... ❤️' },
            right:  { img: allImages[2], desc: 'Tu Toda Hermosa ❤️', text: 'Es imposible no enamorarse de ti... supongo que para ambos fue más facil por tener tanto en común.' },
        },
        {
            left: { img: allImages[3], desc: 'Yo todo Crazy por ti 😍', text: 'No te culpo por enamorarte de mi...\nSoy un partidaso!' },
            right: { img: allImages[1], desc: 'Nuestra primer cita\n🎢🧑🏻‍❤️‍💋‍👩🏼\n\Six Flags 05/09/2026', text: 'Hay momentos y personas que cambian la vida sin avisar.\nEste fue uno de esos momentos y tu eres esa persona. ✨' },
        },
        {
            left:  { img: allImages[4], desc: 'El tiempo a tu lado se disfruta tanto! 💕', text: 'Cuanto más nos conocemos, más me enamoro de ti ❤️‍🔥' },
            right: { img: allImages[5], desc: 'Citas pendientes con Mi amor 👩🏼‍🤝‍👨🏻', text: 'Los pequeños momentos crean grandes experiencias.\n\nQuiero hacer todo, pero contigo ❤️' }
        },
        {
            left:  { img: allImages[6], desc: 'Siempre quiero que seas tú, solo tú✨', text: 'No importa que haga, siempre pienso en ti. 🧠💖' },
            right: { img: allImages[7], desc: 'Nuestra siguiente cita!\nResident Evil en IMAX!🧟‍♂️🧟‍♀️', text: 'No importa si te veo 1 o 24 horas, si estamos en la plaza o en el parque...\nLo unico que quiero es ser felíz a tu lado ❤️‍🔥'}
        },
    ];

    const numSpreads = spreads.length;
    let currentSpread = 0;
    let isFlipping = false;

    const noteColors = ['note-yellow', 'note-pink', 'note-blue', 'note-green', 'note-lavender'];

    const crownSVG = `
        <svg class="cover-crown-svg" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f5e6a3"/>
                    <stop offset="50%" stop-color="#d4af37"/>
                    <stop offset="100%" stop-color="#a67c00"/>
                </linearGradient>
            </defs>
            <path d="M10 45 L20 15 L35 35 L60 8 L85 35 L100 15 L110 45 Z" fill="url(#goldGrad)" stroke="#8b6914" stroke-width="2"/>
            <circle cx="20" cy="15" r="4" fill="#e91e63"/>
            <circle cx="60" cy="8" r="5" fill="#e91e63"/>
            <circle cx="100" cy="15" r="4" fill="#e91e63"/>
            <circle cx="40" cy="28" r="3" fill="#fce4ec"/>
            <circle cx="80" cy="28" r="3" fill="#fce4ec"/>
            <rect x="8" y="45" width="104" height="8" rx="2" fill="url(#goldGrad)" stroke="#8b6914" stroke-width="1.5"/>
        </svg>`;

    const vitralRoseSVG = `
        <svg class="vitral-rose-svg" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="glassGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>
            <!-- Tallos -->
            <path d="M100 230 Q95 180 90 140" fill="none" stroke="#2d5016" stroke-width="3" opacity="0.8"/>
            <path d="M100 230 Q105 190 108 160" fill="none" stroke="#2d5016" stroke-width="2" opacity="0.6"/>
            <!-- Hojas vitral -->
            <ellipse cx="82" cy="175" rx="18" ry="10" fill="#4caf50" opacity="0.7" stroke="#1b5e20" stroke-width="1.5" transform="rotate(-30 82 175)"/>
            <ellipse cx="118" cy="185" rx="16" ry="9" fill="#66bb6a" opacity="0.65" stroke="#1b5e20" stroke-width="1.5" transform="rotate(25 118 185)"/>
            <!-- Pétalos exteriores -->
            <path d="M100 130 C70 120 55 90 65 65 C75 45 100 40 100 40 C100 40 125 45 135 65 C145 90 130 120 100 130Z" fill="#c2185b" opacity="0.75" stroke="#4a0020" stroke-width="2" filter="url(#glassGlow)"/>
            <path d="M100 125 C60 115 45 80 55 55 C65 35 85 30 100 35 C115 30 135 35 145 55 C155 80 140 115 100 125Z" fill="#e91e63" opacity="0.7" stroke="#4a0020" stroke-width="2"/>
            <!-- Pétalos medios -->
            <path d="M100 115 C80 108 72 85 78 68 C84 52 100 48 100 48 C100 48 116 52 122 68 C128 85 120 108 100 115Z" fill="#f48fb1" opacity="0.8" stroke="#4a0020" stroke-width="1.5"/>
            <path d="M100 110 C85 105 80 88 85 75 C90 62 100 58 100 58 C100 58 110 62 115 75 C120 88 115 105 100 110Z" fill="#fce4ec" opacity="0.85" stroke="#4a0020" stroke-width="1.5"/>
            <!-- Centro -->
            <circle cx="100" cy="78" r="12" fill="#ffeb3b" opacity="0.6" stroke="#4a0020" stroke-width="1.5"/>
            <circle cx="96" cy="75" r="3" fill="#fff9c4" opacity="0.9"/>
            <circle cx="104" cy="76" r="2.5" fill="#fff9c4" opacity="0.9"/>
            <circle cx="100" cy="82" r="2.5" fill="#fff9c4" opacity="0.9"/>
            <!-- Brillo vitral -->
            <path d="M75 70 L85 60 L90 75 Z" fill="white" opacity="0.25"/>
            <path d="M120 65 L128 58 L130 72 Z" fill="white" opacity="0.2"/>
        </svg>`;

    function getNoteClass(idx) {
        return noteColors[idx % noteColors.length];
    }

    function buildCover(pageData) {
        const cover = document.createElement('div');
        cover.className = 'cover-page';
        cover.innerHTML = `
            <div class="cover-outer-frame">
                <div class="cover-inner-frame">
                    ${crownSVG}
                    <div class="cover-vitral">
                        <div class="vitral-glass">${vitralRoseSVG}</div>
                        <div class="vitral-shine"></div>
                    </div>
                    <div class="cover-title-text">
                        <h1>${pageData.title}</h1>
                        <p>${pageData.subtitle}</p>
                    </div>
                </div>
            </div>
            <p class="cover-hint">Abre el libro y descubre...</p>
        `;
        requestAnimationFrame(() => cover.classList.add('appear'));
        return cover;
    }

    function setPageContent(container, pageData, noteClass) {
        container.innerHTML = '';

        if (pageData.type === 'blank') {
            container.classList.add('page-blank');
            return;
        }
        container.classList.remove('page-blank');

        if (pageData.type === 'cover') {
            container.appendChild(buildCover(pageData));
            return;
        }

        if (pageData.type === 'cover-img') {
            container.classList.add('is-cover');
            container.style.padding = '0';
            container.style.background = 'transparent';
            container.style.border = 'none';
            container.style.boxShadow = 'none';

            const coverDiv = document.createElement('div');
            coverDiv.className = 'cover-full';
            const img = document.createElement('img');
            img.src = pageData.img;
            img.alt = pageData.title || '';
            coverDiv.appendChild(img);

            const overlay = document.createElement('div');
            overlay.className = 'cover-overlay';
            overlay.innerHTML = `
                <h1>${pageData.title || ''}</h1>
                ${pageData.subtitle ? `<p>${pageData.subtitle}</p>` : ''}
            `;
            coverDiv.appendChild(overlay);

            container.appendChild(coverDiv);
            requestAnimationFrame(() => coverDiv.classList.add('appear'));
            return;
        }

        if (pageData.type === 'title-page') {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'title-page-content';
            titleDiv.innerHTML = `
                <h1>${pageData.title || ''}</h1>
                ${pageData.subtitle ? `<p>${pageData.subtitle}</p>` : ''}
            `;
            container.appendChild(titleDiv);
            requestAnimationFrame(() => titleDiv.classList.add('appear'));
            return;
        }

        const noteAbove = Math.random() < 0.5;

        const wrapper = document.createElement('div');
        wrapper.className = 'photo-wrapper';
        wrapper.style.setProperty('--rot', `${(Math.random() * 6 - 3).toFixed(1)}deg`);

        const img = document.createElement('img');
        img.className = 'photo';
        img.src = pageData.img;
        img.alt = pageData.desc || '';
        img.loading = 'lazy';
        wrapper.appendChild(img);

        const desc = document.createElement('div');
        desc.className = 'photo-desc';
        desc.textContent = pageData.desc || '';
        wrapper.appendChild(desc);

        const note = document.createElement('div');
        note.className = `note ${noteClass} ${noteAbove ? 'note-above' : 'note-below'}`;
        note.style.setProperty('--noteRot', `${(Math.random() * 6 - 3).toFixed(1)}deg`);
        note.textContent = pageData.text || '';

        if (noteAbove) {
            container.appendChild(note);
            container.appendChild(wrapper);
        } else {
            container.appendChild(wrapper);
            container.appendChild(note);
        }

        requestAnimationFrame(() => {
            wrapper.classList.add('appear');
            note.classList.add('appear');
        });
    }

    function loadSpread() {
        setPageContent(leftFront,  spreads[currentSpread].left,  getNoteClass(0));
        setPageContent(rightFront, spreads[currentSpread].right, getNoteClass(1));
        setPageContent(leftBack,   spreads[currentSpread].left,  getNoteClass(0));
        const nextIdx = Math.min(currentSpread + 1, numSpreads - 1);
        setPageContent(rightBack,  spreads[nextIdx].left,        getNoteClass(2));
    }

    function updateUI() {
        const atStart = currentSpread === 0;
        const atEnd   = currentSpread === numSpreads - 1;

        prevBtn.classList.toggle('btn-hidden', atStart || isFlipping);
        nextBtn.classList.toggle('btn-hidden', atEnd || isFlipping);

        pageIndicator.textContent = `${currentSpread + 1} / ${numSpreads}`;
    }

    function playPageSound() {
        pageSound.currentTime = 0;
        pageSound.play().catch(() => {});
    }

    function resetPageTransform(page) {
        page.classList.add('no-transition', 'flipping');
        page.classList.remove('flipping-forward', 'flipping-backward');
        void page.offsetWidth;
        page.classList.remove('no-transition', 'flipping');
    }

    function goNext() {
        if (currentSpread >= numSpreads - 1 || isFlipping) return;
        isFlipping = true;
        updateUI();

        const nextIdx = currentSpread + 1;
        setPageContent(rightBack, spreads[nextIdx].left, getNoteClass(2));
        playPageSound();

        pageRight.classList.add('flipping-forward');

        pageRight.addEventListener('transitionend', function handler(e) {
            if (e.propertyName !== 'transform') return;
            pageRight.removeEventListener('transitionend', handler);

            resetPageTransform(pageRight);
            currentSpread = nextIdx;
            loadSpread();
            isFlipping = false;
            updateUI();
        }, { once: false });
    }

    function goPrev() {
        if (currentSpread <= 0 || isFlipping) return;
        isFlipping = true;
        updateUI();

        const prevIdx = currentSpread - 1;
        setPageContent(leftBack, spreads[prevIdx].right, getNoteClass(0));
        playPageSound();

        pageLeft.classList.add('flipping-backward');

        pageLeft.addEventListener('transitionend', function handler(e) {
            if (e.propertyName !== 'transform') return;
            pageLeft.removeEventListener('transitionend', handler);

            resetPageTransform(pageLeft);
            currentSpread = prevIdx;
            loadSpread();
            isFlipping = false;
            updateUI();
        }, { once: false });
    }

    loadSpread();
    updateUI();

    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft')  goPrev();
    });
});
