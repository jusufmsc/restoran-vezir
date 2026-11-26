let currentCategory = 'pica';
let currentLang = 'bs';

function changeLanguage(langKey) {
    if (typeof gtag === 'function') {
        gtag('event', 'promjena_jezika', {
            'odabrani_jezik': langKey
        });
    }
    if (!menuData[langKey]) langKey = 'bs';
    currentLang = langKey;
    const t = translations[currentLang];

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(document.querySelectorAll('.lang-btn')).find(b => b.innerText.toLowerCase() === langKey);
    if (activeBtn) activeBtn.classList.add('active');

    document.body.style.direction = (langKey === 'ar') ? 'rtl' : 'ltr';

    document.getElementById('hero-subtitle').innerText = t.heroSub;
    document.getElementById('btn-scroll').innerText = t.btnScroll;
    document.getElementById('cat-title').innerText = t.catTitle;

    const currentData = menuData[currentLang];
    const keys = ['pica','supe','cevapi','ostala','piletina','mijesano','riba','salate','prilozi','slatko'];
    keys.forEach(k => {
        const btn = document.getElementById(`btn-${k}`);
        if (btn) btn.innerText = currentData.categories[k] || k;
    });

    document.getElementById('modal-title').innerText = t.modalTitle;
    document.getElementById('modal-sub').innerText = t.modalSub;
    document.getElementById('rating-title').innerText = t.ratingTitle;
    document.getElementById('rating-sub').innerText = t.ratingSub;
    document.getElementById('lbl-overall').innerText = t.overall;
    document.getElementById('btn-google').innerText = t.googleBtn;
    document.getElementById('about-title').innerText = t.aboutTitle;
    document.getElementById('about-text').innerText = t.aboutText;
    document.getElementById('contact-title').innerText = t.contactTitle;
    document.getElementById('social-title').innerText = t.socialTitle;

    const modalContentBtns = document.querySelectorAll('.side-options button');
    if (modalContentBtns.length === 7) {
        modalContentBtns[0].innerText = t.mKajmak;
        modalContentBtns[1].innerText = t.mAjvar;
        modalContentBtns[2].innerText = t.mLepinja;
        modalContentBtns[3].innerText = t.mJogurt;
        modalContentBtns[4].innerText = t.mSudzukica;
        modalContentBtns[5].innerText = t.mKobasica;
        modalContentBtns[6].innerText = t.mSenf;
    }

    selectCategory(currentCategory);
    updateOpenStatus();
}

function selectCategory(categoryKey, btnElement) {
    currentCategory = categoryKey;

    const searchInput = document.getElementById('menu-search');
    const clearBtn = document.getElementById('clear-search');
    if (searchInput && btnElement) {
        searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
    }

    if (btnElement && typeof gtag === 'function') {
        gtag('event', 'klik_kategorija', {
            'kategorija': categoryKey,
            'jezik': currentLang
        });
    }
    
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (btnElement) {
        btnElement.classList.add('active');
    } else {
        const matchedBtn = document.getElementById(`btn-${categoryKey}`);
        if (matchedBtn) matchedBtn.classList.add('active');
    }

    const currentData = menuData[currentLang];
    const t = translations[currentLang];

    const titleElement = document.getElementById('active-category-name');
    titleElement.innerText = currentData.categories[categoryKey] || categoryKey;

    const container = document.getElementById('items-container');
    container.innerHTML = ""; 

    const groups = currentData.items[categoryKey];

    if (groups && groups.length > 0) {
        if (groups.length > 1) {
            groups.forEach((group, index) => {
                const accordionID = `acc-${index}`;
                let groupHTML = `
                    <button class="accordion-btn" onclick="toggleAccordion('${accordionID}')">
                        <span>${group.subcategory}</span>
                        <span id="icon-${accordionID}">▼</span>
                    </button>
                    <div class="accordion-content" id="${accordionID}" style="display: none;">
                `;
                
                group.items.forEach(item => {
                    const hasDetails = Boolean(item.desc);
                    const escapedName = item.name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
                    groupHTML += `
                        <div class="menu-item">
                            <div class="item-left">
                                <h4>${item.name}</h4>
                                ${hasDetails ? `
                                    <button class="learn-more-link" onclick="showItemDetail('${categoryKey}', '${index}', '${escapedName}')">
                                        ${t.learnMore}
                                    </button>
                                ` : ''}
                            </div>
                            <span class="price">${item.price}</span>
                        </div>
                    `;
                });

                groupHTML += `</div>`;
                container.innerHTML += groupHTML;
            });
        } else {
            const singleGroup = groups[0];
            singleGroup.items.forEach(item => {
                const hasDetails = Boolean(item.desc);
                const escapedName = item.name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
                let itemHTML = `
                    <div class="menu-item">
                        <div class="item-left">
                            <h4>${item.name}</h4>
                            ${hasDetails ? `
                                <button class="learn-more-link" onclick="showItemDetail('${categoryKey}', '0', '${escapedName}')">
                                    ${t.learnMore}
                                </button>
                            ` : ''}
                        </div>
                        <span class="price">${item.price}</span>
                    </div>
                `;
                container.innerHTML += itemHTML;
            });
        }
    } else {
        container.innerHTML = "<p>...</p>";
    }

    if (window.innerWidth <= 768 && btnElement) {
        setTimeout(() => {
            if (titleElement) {
                titleElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
}

function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.innerText = "▲";
    } else {
        content.style.display = "none";
        icon.innerText = "▼";
    }
}

function showItemDetail(catKey, groupIndex, itemName) {
    if (typeof gtag === 'function') {
        gtag('event', 'detalji_jela', {
            'naziv_jela': itemName,
            'kategorija': catKey
        });
    }
    const container = document.getElementById('items-container');
    const currentData = menuData[currentLang];
    const t = translations[currentLang];

    const group = currentData.items[catKey][groupIndex];
    if (!group) return;
    const item = group.items.find(i => i.name === itemName);
    if (!item) return;

    const imagePath = item.img ? item.img : 'images/placeholder.jpg';
    const showSideRecommendations = ['cevapi', 'ostala', 'piletina', 'mijesano', 'dnevna'].includes(catKey);

    container.innerHTML = `
        <button class="back-btn" onclick="selectCategory('${currentCategory}')">${t.backBtn}</button>
        <div class="detail-view">
            <div class="detail-info">
                <h3>${item.name}</h3>
                <div class="detail-price">${item.price}</div>
                <p class="detail-desc">${item.desc || ''}</p>
                ${showSideRecommendations ? `
                    <button class="side-rec-btn" onclick="openModal()">${t.sideRecBtn}</button>
                ` : ''}
            </div>
            <div class="detail-image-box" onclick="openImageModal('${imagePath}')" title="${t.zoomTitle}">
                <img src="${imagePath}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/220x220?text=Slika+Jela'">
                <span class="zoom-hint">${t.zoomHint}</span>
            </div>
        </div>
    `;

    if (window.innerWidth <= 768) {
        const displaySection = document.querySelector('.menu-display');
        if (displaySection) {
            const y = displaySection.getBoundingClientRect().top + window.pageYOffset - 110;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}

function showSideDetail(sideKey) {
    closeModal();
    const currentData = menuData[currentLang];
    const t = translations[currentLang];
    const item = currentData.sideDetails[sideKey];
    if (!item) return;

    const container = document.getElementById('items-container');

    container.innerHTML = `
        <button class="back-btn" onclick="selectCategory('${currentCategory}')">${t.backBtn}</button>
        <div class="detail-view">
            <div class="detail-info">
                <h3>${item.name}</h3>
                <div class="detail-price">${item.price}</div>
                <p class="detail-desc">${item.desc}</p>
            </div>
            <div class="detail-image-box" onclick="openImageModal('${item.img}')" title="${t.zoomTitle}">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/220x220?text=Slika+Priloga'">
                <span class="zoom-hint">${t.zoomHint}</span>
            </div>
        </div>
    `;

    if (window.innerWidth <= 768) {
        const displaySection = document.querySelector('.menu-display');
        if (displaySection) {
            const y = displaySection.getBoundingClientRect().top + window.pageYOffset - 110;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}

function openModal() {
    document.getElementById('recommendation-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('recommendation-modal').style.display = 'none';
}

function openImageModal(imgSrc) {
    const modal = document.getElementById('image-lightbox');
    const modalImg = document.getElementById('lightbox-img');
    if (modal && modalImg) {
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
    }
}

function closeImageModal() {
    const modal = document.getElementById('image-lightbox');
    if (modal) {
        modal.style.display = 'none';
    }
}

function updateOpenStatus() {
    const badge = document.getElementById('open-status');
    const textEl = document.getElementById('status-text');
    if (!badge || !textEl) return;

    const bihTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Sarajevo" }));
    const hour = bihTime.getHours();

    const openHour = 7;
    const closeHour = 23;

    const isOpen = (hour >= openHour && hour < closeHour);

    const statusLabels = {
        bs: { open: `Otvoreno do 23:00`, closed: `Zatvoreno · Otvara u 07:00` },
        en: { open: `Open until 23:00`, closed: `Closed · Opens at 07:00` },
        tr: { open: `23:00'e kadar açık`, closed: `Kapalı · 07:00'da açılır` },
        ar: { open: `مفتوح حتى 23:00`, closed: `مغلق · يفتح الساعة 07:00` }
    };

    const labels = statusLabels[currentLang] || statusLabels.bs;

    badge.classList.remove('open', 'closed');
    if (isOpen) {
        badge.classList.add('open');
        textEl.innerText = labels.open;
    } else {
        badge.classList.add('closed');
        textEl.innerText = labels.closed;
    }
}

function searchMenu(query) {
    const searchTerm = query.toLowerCase().trim();
    const clearBtn = document.getElementById('clear-search');
    const titleElement = document.getElementById('active-category-name');
    const container = document.getElementById('items-container');

    if (clearBtn) {
        clearBtn.style.display = searchTerm.length > 0 ? 'block' : 'none';
    }

    if (searchTerm === '') {
        selectCategory(currentCategory, null);
        return;
    }

    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));

    const currentData = menuData[currentLang];
    const t = translations[currentLang];
    titleElement.innerText = `Rezultati za: "${query}"`;
    container.innerHTML = "";

    let foundCount = 0;

    Object.keys(currentData.items).forEach(catKey => {
        const groups = currentData.items[catKey];
        if (!groups) return;

        groups.forEach((group, groupIndex) => {
            group.items.forEach(item => {
                const matchName = item.name.toLowerCase().includes(searchTerm);
                const matchDesc = item.desc && item.desc.toLowerCase().includes(searchTerm);

                if (matchName || matchDesc) {
                    foundCount++;
                    const hasDetails = Boolean(item.desc);
                    const escapedName = item.name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
                    const catLabel = currentData.categories[catKey] || '';

                    container.innerHTML += `
                        <div class="menu-item">
                            <div class="item-left">
                                <small style="color: #888; font-size: 11px; text-transform: uppercase;">${catLabel}</small>
                                <h4>${item.name}</h4>
                                ${hasDetails ? `
                                    <button class="learn-more-link" onclick="showItemDetail('${catKey}', '${groupIndex}', '${escapedName}')">
                                        ${t.learnMore}
                                    </button>
                                ` : ''}
                            </div>
                            <span class="price">${item.price}</span>
                        </div>
                    `;
                }
            });
        });
    });

    if (foundCount === 0) {
        container.innerHTML = `<p style="text-align:center; color:#777; padding: 20px;">Nema rezultata za "${query}".</p>`;
    }
}

function clearSearch() {
    const input = document.getElementById('menu-search');
    if (input) {
        input.value = '';
        searchMenu('');
        input.focus();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    selectCategory('pica');
    updateOpenStatus();
});
setInterval(updateOpenStatus, 60000);
