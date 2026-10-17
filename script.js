// Podaci sa opisima jela i priloga
const menuData = {
    pica: [
        {
            subcategory: "GAZIRANA PIĆA",
            items: [
                { name: "Coca-Cola", price: "3,00 KM" },
                { name: "Coca-Cola Zero", price: "3,00 KM" },
                { name: "Cockta", price: "3,00 KM" },
                { name: "Cockta Zero", price: "3,00 KM" },
                { name: "Cola za van", price: "2,50 KM" },
                { name: "Exotic kruška", price: "2,50 KM" },
                { name: "Fanta", price: "3,00 KM" },
                { name: "Malt", price: "3,00 KM" },
                { name: "Richard", price: "3,00 KM" },
                { name: "Hydra limun", price: "3,00 KM" },
                { name: "Hydra narandža", price: "3,00 KM" },
                { name: "Schweppes Bitter Lemon", price: "3,00 KM" },
                { name: "Schweppes Tangerine", price: "3,00 KM" },
                { name: "Schweppes Tonic", price: "3,00 KM" },
                { name: "Sprite", price: "3,00 KM" }
            ]
        },
        {
            subcategory: "TOPLI NAPITCI",
            items: [
                { name: "Kafa", price: "2,00 KM" },
                { name: "Turska kafa", price: "3,00 KM" },
                { name: "Ledena kafa", price: "4,00 KM" },
                { name: "Ness Classic", price: "2,50 KM" },
                { name: "Ness 3in1", price: "2,50 KM" },
                { name: "Ness Čokolada", price: "2,50 KM" },
                { name: "Ness Vanilija", price: "2,50 KM" },
                { name: "Ness Irish", price: "2,50 KM" },
                { name: "Topla čokolada", price: "3,00 KM" },
                { name: "Čaj", price: "2,00 KM" },
                { name: "Kafa za van", price: "2,50 KM" }
            ]
        },
        {
            subcategory: "PRIRODNI SOKOVI",
            items: [
                { name: "Limunada", price: "3,00 KM" },
                { name: "Cedevita", price: "2,00 KM" },
                { name: "Narandža", price: "3,00 KM" },
                { name: "Jagoda", price: "3,00 KM" },
                { name: "Jabuka", price: "3,00 KM" },
                { name: "Breskva", price: "3,00 KM" },
                { name: "Borovnica", price: "3,00 KM" },
                { name: "Ledeni čaj - breskva", price: "3,00 KM" },
                { name: "Ledeni čaj - brusnica", price: "3,00 KM" }
            ]
        },
        {
            subcategory: "VODA",
            items: [
                { name: "Mineralna voda", price: "2,00 KM" },
                { name: "Mineralna voda 1l", price: "5,00 KM" },
                { name: "Prirodna voda", price: "2,00 KM" },
                { name: "Voda Limun-Limeta", price: "2,50 KM" }
            ]
        },
        {
            subcategory: "MLIJEČNI PROIZVODI",
            items: [
                { name: "Domaći Jogurt", price: "2,00 KM", desc: "Gusti domaći jogurt, idealan dodatak uz vruć roštilj.", img: "images/jogurt.jpg" },
                { name: "Ajran", price: "2,00 KM", desc: "Tradicionalni slani mliječni napitak koji savršeno balansira roštiljska jela.", img: "images/ajran.jpg" }
            ]
        }
    ],
    cevapi: [
        {
            subcategory: "ĆEVAPI I ROŠTILJ",
            items: [
                { name: "Petica u pola", price: "6,00 KM", desc: "5 autentičnih roštiljskih ćevapa serviranih u pola tople lepinje sa svježim lukom sa strane.", img: "images/petica-pola.jpg" },
                { name: "Petica u cijeloj", price: "7,00 KM", desc: "5 sočnih ćevapa od sto posto kvalitetnog mesa serviranih u čitavoj toploj lepinji, uz domaći sjeckani luk.", img: "images/petica-cijela.jpg" },
                { name: "Desetka u pola", price: "10,00 KM", desc: "10 ćevapa u pola somuna/lepinje, bogato i sočno tradicionalno jelo sa lukom sa strane.", img: "images/desetka-pola.jpg" },
                { name: "Desetka u cijeloj", price: "12,00 KM", desc: "Velika porcija od 10 sočnih ćevapa u cijeloj lepinji sa mekim sjeckanim crvenim lukom.", img: "images/desetka-cijela.jpg" },
                { name: "Petnaeska u cijeloj", price: "15,00 KM", desc: "Bogata porcija od 15 ćevapa u toploj cijeloj lepinji za prave ljubitelje roštilja.", img: "images/petnaeska.jpg" },
                { name: "Dvadesetka u cijeloj", price: "20,00 KM", desc: "Kraljevska porcija od 20 ćevapa u cijeloj lepinji, idealna za najveću glad.", img: "images/dvadesetka.jpg" },
                { name: "Sudžukica komad", price: "2,00 KM", desc: "Jedan komad roštiljske pikantne sudžukice sa roštilja na ćumur.", img: "images/sudzukica.jpg" },
                { name: "Mala porcija sudžukica", price: "7,00 KM", desc: "Domaće pikantne sudžukice u lepinji sa svježim lukom.", img: "images/sudzukice-mala.jpg" },
                { name: "Velika porcija sudžukica", price: "9,00 KM", desc: "Velika porcija mirisnih sočnih sudžukica u lepinji sa lukom.", img: "images/sudzukice-velika.jpg" },
                { name: "Pljeskavica", price: "8,00 KM", desc: "Tradiocionalna roštiljska pljeskavica u lepinji sa sjeckanim lukom.", img: "images/pljeskavica.jpg" },
                { name: "Punjena pljeskavica", price: "11,00 KM", desc: "Sočna pljeskavica punjena finim sirom, pečena na žaru, u lepinji sa lukom.", img: "images/punjena-pljeskavica.jpg" }
            ]
        }
    ],
    piletina: [
        {
            subcategory: "PILETINA",
            items: [
                { name: "Batak u lepinji", price: "10,00 KM", desc: "Otkošteni sočni pileći batak pečen na roštilju, serviran u toploj lepinji.", img: "images/batak.jpg" },
                { name: "Pileći file (mala porcija)", price: "10,00 KM", desc: "Nježni pileći file sa roštilja u lepinji sa prilogom po želji.", img: "images/file-mali.jpg" },
                { name: "Pileći file (velika porcija)", price: "12,00 KM", desc: "Velika porcija sočnog pilećeg filea sa roštilja u cijeloj lepinji.", img: "images/file-veliki.jpg" },
                { name: "Pileća krila", price: "10,00 KM", desc: "Hrskava i sočna pileća krilca sa roštilja na žaru.", img: "images/krila.jpg" },
                { name: "Pileći ražnjići (mali)", price: "9,00 KM", desc: "Mala porcija sočnih roštiljskih pilećih ražnjića u lepinji.", img: "images/raznjici-mali.jpg" },
                { name: "Pileći ražnjići (veliki)", price: "12,00 KM", desc: "Velika porcija pilećih ražnjića u lepinji sa roštilja sa lukom.", img: "images/raznjici-veliki.jpg" },
                { name: "Pileća bečka šnicla", price: "11,00 KM", desc: "Pohovani pileći file u hrskavim mrvicama serviran sa pomfritom.", img: "images/becka.jpg" },
                { name: "Piletina - Dnevna ponuda", price: "Upit", desc: "Dnevni specijaliteti od piletine, pitajte vašeg konobara za detalje.", img: "images/dnevna.jpg" }
            ]
        }
    ],
    supe: [
        {
            subcategory: "SUPE I ČORBE",
            items: [
                { name: "Goveđa supa", price: "4,00 KM", desc: "Domaća bistra goveđa supa sa finim rezancima i povrćem.", img: "images/govedja.jpg" },
                { name: "Begova čorba", price: "3,00 KM", desc: "Tradicionalna gusta čorba sa piletinom, povrćem i bamijom.", img: "images/begova.jpg" },
                { name: "Trahana", price: "4,00 KM", desc: "Domaća starinska trahana supa sa paradajzom.", img: "images/trahana.jpg" }
            ]
        }
    ],
    mijesano: [
        {
            subcategory: "MIJEŠANO MESO",
            items: [
                { name: "Miješano meso za jednu osobu", price: "15,00 KM", desc: "Kombinacija ćevapa, sudžukice, piletine i pljeskavice u lepinji sa lukom.", img: "images/mijesano1.jpg" },
                { name: "Miješano za dvije osobe", price: "28,00 KM", desc: "Bogata plata za dvoje sa više vrsta roštiljskog mesa i prilozima.", img: "images/mijesano2.jpg" },
                { name: "Miješano meso za tri osobe (Ljubo i Paćo)", price: "38,00 KM", desc: "Obilna plata specijaliteta kuće namenjena za tri osobe.", img: "images/mijesano3.jpg" },
                { name: "Vezir plata", price: "65,00 KM", desc: "Najveći i najraskošniji izbor svih roštiljskih specijaliteta restorana Vezir.", img: "images/vezir-plata.jpg" }
            ]
        }
    ],
    riba: [
        {
            subcategory: "RIBA",
            items: [
                { name: "Pastrmka sa žara 1 komad", price: "12,00 KM", desc: "Svježa rečna pastrmka pečena na žaru, servirana sa limunom.", img: "images/pastrmka1.jpg" },
                { name: "Pastrmka sa žara 2 komada", price: "20,00 KM", desc: "Dva komada svježe pastrmke sa žara.", img: "images/pastrmka2.jpg" },
                { name: "Lignje sa žara", price: "18,00 KM", desc: "Nježne lignje pečene na žaru sa prelivom od bijelog luka i maslinovog ulja.", img: "images/lignje.jpg" }
            ]
        }
    ],
    prilozi: [
        {
            subcategory: "PRILOZI",
            items: [
                { name: "Majoneza", price: "1,00 KM" },
                { name: "Senf", price: "1,00 KM" },
                { name: "Kečap", price: "Gratis" },
                { name: "Ajvar", price: "1,00 KM" },
                { name: "Kajmak", price: "2,50 KM" },
                { name: "Pomfrit", price: "3,00 KM" }
            ]
        }
    ],
    salate: [
        {
            subcategory: "SALATE",
            items: [
                { name: "Šopska salata", price: "5,00 KM", desc: "Svježi paradajz, krastavac, luk i rendani bijeli sir.", img: "images/sopska.jpg" },
                { name: "Miješana salata", price: "4,00 KM", desc: "Mješavina svježeg sezonskog povrća.", img: "images/mijesana.jpg" }
            ]
        }
    ],
    slatko: [
        {
            subcategory: "SLATKA JELA",
            items: [
                { name: "Baklava", price: "4,50 KM", desc: "Tradicionalni kolač od agde i oraha.", img: "images/baklava.jpg" },
                { name: "Tufahija", price: "5,00 KM", desc: "Kuvana jabuka punjena orasima i prelivena šlagom.", img: "images/tufahija.jpg" }
            ]
        }
    ]
};

// Detalji priloga za pop-up
const sideDetails = {
    kajmak: {
        name: "Domaći Kajmak",
        price: "2,50 KM",
        desc: "Kajmak je tradicionalni autentični mliječni namaz bogatog i kremastog ukusa. Kada se stavi na vruće ćevape ili u toplu lepinju, blago se topi i daje jelu neponovljivu sočnost.",
        img: "images/kajmak.jpg"
    },
    ajvar: {
        name: "Domaći Ajvar",
        price: "1,00 KM",
        desc: "Aromatični namaz pripremljen od pažljivo pečenih crvenih paprika i patlidžana. Njegov bogat ukus savršeno se sljubljuje sa roštiljskim mesom.",
        img: "images/ajvar.jpg"
    },
    jogurt: {
        name: "Domaći Jogurt / Ajran",
        price: "2,00 KM",
        desc: "Hladan i osvježavajući mliječni napitak. Njegova kiselost i svježina savršeno balansiraju bogate i masnije ukuse roštilja.",
        img: "images/jogurt.jpg"
    },
    pomfrit: {
        name: "Hrskavi Pomfrit",
        price: "3,00 KM",
        desc: "Zlatno-žuti prženi krompirići, hrskavi spolja a mekani iznutra. Omiljeni prilog uz piletinu i roštilj.",
        img: "images/pomfrit.jpg"
    }
};

let currentCategory = 'pica';

// Funkcija za prikaz odabrane kategorije
function selectCategory(categoryKey, btnElement) {
    currentCategory = categoryKey;
    
    // Oznaka aktivnog dugmeta
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (btnElement) {
        btnElement.classList.add('active');
    } else {
        const matchedBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${categoryKey}'`));
        if (matchedBtn) matchedBtn.classList.add('active');
    }

    const categoryNames = {
        pica: "Pića",
        cevapi: "Ćevapi & Roštilj",
        piletina: "Piletina",
        supe: "Supe i Čorbe",
        mijesano: "Miješano Meso",
        riba: "Riba",
        prilozi: "Prilozi",
        salate: "Salate",
        slatko: "Slatka Jela"
    };

    document.getElementById('active-category-name').innerText = categoryNames[categoryKey];

    const container = document.getElementById('items-container');
    container.innerHTML = ""; 

    const groups = menuData[categoryKey];

    if (groups && groups.length > 0) {
        // Ako kategorija ima više unutrašnjih podgrupa (npr. Pića)
        if (groups.length > 1) {
            groups.forEach((group, index) => {
                const accordionID = `acc-${index}`;
                // Podkategorije su SKRIVENE na početku (display: none)
                let groupHTML = `
                    <button class="accordion-btn" onclick="toggleAccordion('${accordionID}')">
                        <span>${group.subcategory}</span>
                        <span id="icon-${accordionID}">▼</span>
                    </button>
                    <div class="accordion-content" id="${accordionID}" style="display: none;">
                `;
                
                group.items.forEach(item => {
                    const hasDetails = item.desc ? true : false;
                    groupHTML += `
                        <div class="menu-item">
                            <div class="item-left">
                                <h4>${item.name}</h4>
                                ${hasDetails ? `
                                    <button class="learn-more-link" onclick="showItemDetail('${item.name}', '${item.price}', '${item.desc}', '${item.img || ''}')">
                                        Saznaj više / Detalji
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
            // Jednostavne kategorije (Ćevapi, Piletina...)
            const singleGroup = groups[0];
            singleGroup.items.forEach(item => {
                const hasDetails = item.desc ? true : false;
                let itemHTML = `
                    <div class="menu-item">
                        <div class="item-left">
                            <h4>${item.name}</h4>
                            ${hasDetails ? `
                                <button class="learn-more-link" onclick="showItemDetail('${item.name}', '${item.price}', '${item.desc}', '${item.img || ''}')">
                                    Saznaj više / Detalji
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
        container.innerHTML = "<p>Nema stavki u ovoj kategoriji.</p>";
    }

    // Sigurno skrolovanje na mobilnom telefonu
    if (window.innerWidth <= 768 && btnElement) {
        setTimeout(() => {
            const displaySection = document.querySelector('.menu-display');
            if (displaySection) {
                const yOffset = -20;
                const y = displaySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 50);
    }
}

// Funkcija za harmoniku (skupi/raširi podkategoriju pića)
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

// Detaljan prikaz jela
function showItemDetail(name, price, desc, img) {
    const container = document.getElementById('items-container');
    const imagePath = img ? img : 'images/placeholder.jpg';

    const showSideRecommendations = ['cevapi', 'piletina', 'mijesano', 'riba'].includes(currentCategory);

    container.innerHTML = `
        <button class="back-btn" onclick="selectCategory('${currentCategory}')">← Nazad na listu</button>
        <div class="detail-view">
            <div class="detail-info">
                <h3>${name}</h3>
                <div class="detail-price">${price}</div>
                <p class="detail-desc">${desc}</p>
                ${showSideRecommendations ? `
                    <button class="side-rec-btn" onclick="openModal()">💡 Najčešće naručivano uz ovo</button>
                ` : ''}
            </div>
            <div class="detail-image-box">
                <img src="${imagePath}" alt="${name}" onerror="this.src='https://via.placeholder.com/220x220?text=Slika+Jela'">
            </div>
        </div>
    `;

    if (window.innerWidth <= 768) {
        const displaySection = document.querySelector('.menu-display');
        if (displaySection) {
            const y = displaySection.getBoundingClientRect().top + window.pageYOffset - 20;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}

// Prikaz detalja za prilog iz pop-up modala
function showSideDetail(sideKey) {
    closeModal();
    const item = sideDetails[sideKey];
    if(!item) return;

    const container = document.getElementById('items-container');
    container.innerHTML = `
        <button class="back-btn" onclick="selectCategory('${currentCategory}')">← Nazad na listu</button>
        <div class="detail-view">
            <div class="detail-info">
                <h3>${item.name}</h3>
                <div class="detail-price">${item.price}</div>
                <p class="detail-desc">${item.desc}</p>
            </div>
            <div class="detail-image-box">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/220x220?text=Slika+Priloga'">
            </div>
        </div>
    `;

    if (window.innerWidth <= 768) {
        const displaySection = document.querySelector('.menu-display');
        if (displaySection) {
            const y = displaySection.getBoundingClientRect().top + window.pageYOffset - 20;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}

// Kontrola pop-up modala
function openModal() {
    document.getElementById('recommendation-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('recommendation-modal').style.display = 'none';
}

// Inicijalno učitavanje
document.addEventListener("DOMContentLoaded", function() {
    selectCategory('pica');
});