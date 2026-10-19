// Baza podataka za Restoran Vezir sa prilagođenim kategorijama i multijezičnom podrškom za slike
const menuData = {
    bs: {
        categories: {
            pica: "Pića",
            supe: "Supe",
            cevapi: "Ćevapi",
            ostala: "Ostala jela",
            piletina: "Pileći Specijaliteti",
            mijesano: "Miješana Mesa & Plate",
            riba: "Riba & Morski Plodovi",
            salate: "Salate",
            prilozi: "Prilozi & Sosevi",
            slatko: "Deserti"
        },
        items: {
            pica: [
                { 
                    subcategory: "GAZIRANA PIĆA", 
                    items: [ 
                        { name: "Coca-Cola", price: "3,00 KM" }, 
                        { name: "Coca-Cola Zero", price: "3,00 KM" }, 
                        { name: "Cockta", price: "3,00 KM" }, 
                        { name: "Cockta Zero", price: "3,00 KM" }, 
                        { name: "Cola za van", price: "2,50 KM" }, 
                        { name: "Fanta", price: "3,00 KM" }, 
                        { name: "Sprite", price: "3,00 KM" },
                        { name: "Energetsko piće", price: "4,00 KM" },
                        { name: "Hidra", price: "3,00 KM" },
                        { name: "Exotic Kruška", price: "3,00 KM" },
                        { name: "Schweppes Tangerina", price: "3,00 KM" },
                        { name: "Schweppes Bitter Lemon", price: "3,00 KM" },
                        { name: "Schweppes Tonic Water", price: "3,00 KM" }
                    ] 
                },
                { 
                    subcategory: "PRIRODNI SOKOVI & LEDENI ČAJEVI", 
                    items: [ 
                        { name: "Limunada", price: "3,00 KM" }, 
                        { name: "Cedevita", price: "2,00 KM" }, 
                        { name: "Sok od narandže", price: "3,00 KM" }, 
                        { name: "Sok od jabuke", price: "3,00 KM" },
                        { name: "Sok od borovnice", price: "3,00 KM" },
                        { name: "Sok od breskve", price: "3,00 KM" },
                        { name: "Sok od jagode", price: "3,00 KM" },
                        { name: "Ledeni čaj breskva", price: "3,00 KM" },
                        { name: "Ledeni čaj brusnica", price: "3,00 KM" }
                    ] 
                },
                { 
                    subcategory: "TOPLI NAPITCI", 
                    items: [ 
                        { name: "Kafa", price: "2,00 KM" }, 
                        { name: "Turska kafa", price: "3,00 KM" }, 
                        { name: "Nescafe 3u1", price: "2,50 KM" },
                        { name: "Nescafe Vanilija", price: "2,50 KM" },
                        { name: "Nescafe Irish", price: "2,50 KM" },
                        { name: "Nescafe Čokolada", price: "2,50 KM" },
                        { name: "Ledena kafa", price: "4,00 KM" }, 
                        { name: "Topla čokolada", price: "3,00 KM" }, 
                        { name: "Čaj", price: "2,00 KM" } 
                    ] 
                },
                { 
                    subcategory: "VODA", 
                    items: [ 
                        { name: "Mineralna voda 0.33l", price: "2,00 KM" }, 
                        { name: "Mineralna voda 1l", price: "5,00 KM" }, 
                        { name: "Prirodna voda 0.33l", price: "2,00 KM" },
                        { name: "Voda limun & limeta", price: "2,00 KM" }
                    ] 
                }
            ],
            supe: [
                { subcategory: "TRADICIONALNE SUPE I ČORBE", items: [
                    { name: "Begova čorba", price: "3,00 KM", desc: "Tradicionalna bosanska čorba od pilećeg mesa, bamije, povrća i začina. Guste, kremaste teksture. Poslužuje se topla. Halal meso.", img: "images/begova.jpg" },
                    { name: "Trahana", price: "4,00 KM", desc: "Tradicionalna supa od fermentirane smjese brašna i začina sa paradajzom. Blago kiselkastog ukusa.", img: "images/trahana.jpg" },
                    { name: "Goveđa supa", price: "4,00 KM", desc: "Topla domaća supa od kuhanog goveđeg mesa sa tjesteninom i začinima. Halal meso.", img: "images/govedja.jpg" }
                ]}
            ],
            cevapi: [
                { subcategory: "ĆEVAPI", items: [
                    { name: "Petica u pola", price: "6,00 KM", desc: "5 travničkih ćevapa na roštilju u polovini lepinje uz svježi luk. Halal meso.", img: "images/petica-pola.jpg" },
                    { name: "Petica u cijeloj", price: "7,00 KM", desc: "5 travničkih ćevapa na roštilju u cijeloj lepinji uz svježi luk. Halal meso.", img: "images/petica-cijela.jpg" },
                    { name: "Desetka u pola", price: "10,00 KM", desc: "10 travničkih ćevapa na roštilju u polovini lepinje uz svježi luk. Halal meso.", img: "images/desetka-pola.jpg" },
                    { name: "Desetka u cijeloj", price: "12,00 KM", desc: "10 travničkih ćevapa na roštilju u cijeloj lepinji uz svježi luk. Halal meso.", img: "images/desetka-cijela.jpg" },
                    { name: "Petnaestka u cijeloj", price: "15,00 KM", desc: "15 travničkih ćevapa na roštilju u cijeloj lepinji uz svježi luk. Halal meso.", img: "images/petnaeska.jpg" },
                    { name: "Dvadesetka u cijeloj", price: "20,00 KM", desc: "20 travničkih ćevapa na roštilju u cijeloj lepinji uz svježi luk. Halal meso.", img: "images/dvadesetka.jpg" }
                ]}
            ],
            ostala: [
                { subcategory: "OSTALA JELA SA ROŠTILJA I BURGERI", items: [
                    { name: "Punjena pljeskavica", price: "15,00 KM", desc: "Pljeskavica od mljevenog mesa punjena sirom, pečena na roštilju u lepinji. Halal meso.", img: "images/punjena-pljeskavica.jpg" },
                    { name: "Obična pljeskavica", price: "10,00 KM", desc: "Tradicionalna začinjena pljeskavica na roštilju u lepinji. Halal meso.", img: "images/pljeskavica.jpg" },
                    { name: "Sudžukice – mala porcija", price: "7,00 KM", desc: "2 začinjene sudzukice sa roštilja uz lepinju i senf. Halal meso.", img: "images/sudzukice-mala.jpg" },
                    { name: "Sudžukice – velika porcija", price: "9,00 KM", desc: "3 začinjene sudzukice sa roštilja uz lepinju i senf. Halal meso.", img: "images/sudzukice-velika.jpg" },
                    { name: "Vezir Burger", price: "8,00 KM", desc: "Hamburger/Cheeseburger sa salatom i namazima, sa prilogom pomfrija. Halal meso.", img: "images/vezir-burger.jpg" }
                ]}
            ],
            piletina: [
                { subcategory: "PILEĆI SPECIJALITETI", items: [
                    { name: "Pileći file – mala porcija", price: "10,00 KM", desc: "2 komada pilećeg filea sa roštilja uz lepinju i salatu. Halal piletina.", img: "images/file-mali.jpg" },
                    { name: "Pileći file – velika porcija", price: "12,00 KM", desc: "3 komada pilećeg filea sa roštilja uz lepinju i salatu. Halal piletina.", img: "images/file-veliki.jpg" },
                    { name: "Pileći ražnjići – mala porcija", price: "12,00 KM", desc: "2 pileća ražnjića sa roštilja uz lepinju i salatu. Halal piletina.", img: "images/raznjici-mali.jpg" },
                    { name: "Pileći ražnjići – velika porcija", price: "14,00 KM", desc: "3 pileća ražnjića sa roštilja uz lepinju i salatu. Halal piletina.", img: "images/raznjici-veliki.jpg" },
                    { name: "Batak u lepinji", price: "10,00 KM", desc: "Sočni otkošteni pileći batak sa roštilja poslužen u lepinji. Halal piletina.", img: "images/batak.jpg" },
                    { name: "Pileća krilca", price: "10,00 KM", desc: "6-7 sočnih pilećih krilaca pečenih na roštilju, sa pomfritom u lepinji. Halal piletina.", img: "images/krila.jpg" },
                    { name: "Pileća bečka šnicla", price: "12,00 KM", desc: "Hrskava pohovana piletina sa pomfritom, sosom i salatom. Halal piletina.", img: "images/becka.jpg" },
                    { name: "Piletina – dnevna ponuda", price: "7,00 KM", desc: "Pileći file uz sos od šampinjona i prilog (pomfrit/riža). Halal piletina.", img: "images/dnevna.jpg" }
                ]}
            ],
            mijesano: [
                { subcategory: "MIJEŠANA MESA I PLATE", items: [
                    { name: "Miješano meso za 1 osobu", price: "15,00 KM", desc: "3 ćevapa, 1 ražnjić, 1 pljeskavica, 1 kobasica, pohovana piletina, file + lepinja, pomfrit i salata. Halal meso.", img: "images/mijesano1.jpg" },
                    { name: "Miješano meso za 2 osobe", price: "28,00 KM", desc: "6 ćevapa, 2 pileća ražnjića, 2 pljeskavice, 2 kobasice, 2 pohovane piletine, 2 pileća filea + 2 lepinje, pomfrit i salata. Halal meso.", img: "images/mijesano2.jpg" },
                    { name: "Miješano meso za 3 osobe", price: "38,00 KM", desc: "9 ćevapa, 3 pileća ražnjića, 3 pljeskavice, 3 kobasice, 3 pohovane piletine, 3 pileća filea + 3 lepinje, pomfrit i salata. Halal meso.", img: "images/mijesano3.jpg" },
                    { name: "Vezir plata", price: "65,00 KM", desc: "Bogata plata: 10 ćevapa, 4 filea, 4 kotleta, 4 kobasice, 4 pljeskavice, 4 ražnjića + 4 lepinje, pomfrit i sos. Halal meso.", img: "images/vezir-plata.jpg" }
                ]}
            ],
            riba: [
                { subcategory: "RIBA I MORSKI PLODOVI", items: [
                    { name: "Pastrmka s roštilja – mala porcija", price: "12,00 KM", desc: "1 komad pastrmke na roštilju uz pomfrit, sos i limun.", img: "images/pastrmka1.jpg" },
                    { name: "Pastrmka s roštilja – velika porcija", price: "20,00 KM", desc: "2 komad pastrmke na roštilju uz pomfrit, sos i limun.", img: "images/pastrmka2.jpg" },
                    { name: "Lignje s roštilja", price: "18,00 KM", desc: "Mekane lignje sa roštilja uz pomfrit i sos.", img: "images/lignje.jpg" }
                ]}
            ],
            salate: [
                { subcategory: "SALATE", items: [
                    { name: "Miješana salata", price: "3,00 KM", desc: "Svježi paradajz, krastavac i kupus.", img: "images/mijesana.jpg" },
                    { name: "Šopska salata", price: "5,00 KM", desc: "Paradajz, krastavac, paprika, luk i bijeli sir.", img: "images/sopska.jpg" },
                    { name: "Kupus salata", price: "3,00 KM", desc: "Svježi narezani kupus.", img: "images/kupus.jpg" },
                    { name: "Paradajz salata", price: "3,00 KM", desc: "Sočan narezani paradajz.", img: "images/paradajz.jpg" }
                ]}
            ],
            prilozi: [
                { subcategory: "PRILOZI I DODACI", items: [
                    { name: "Jogurt", price: "2,00 KM", desc: "Kremasti mliječni napitak.", img: "images/jogurt.jpg"},
                    { name: "Ajran", price: "2,00 KM", desc: "Hladni slankasti jogurt.", img: "images/ajran.jpg"},
                    { name: "Kajmak", price: "2,50 KM", desc: "Domaći gusti mliječni kajmak.", img: "images/kajmak.jpg"},
                    { name: "Ajvar", price: "1,00 KM", desc: "Domaći namaz od paprika.", img: "images/ajvar.jpg"},
                    { name: "Pomfrit", price: "3,00 KM", desc: "Hrskavi prženi krompir.", img: "images/pomfrit.jpg"},
                    { name: "Komad sudžukice", price: "2,00 KM", desc: "Začinjena kobasica na roštilju. Halal.", img: "images/sudzukica.jpg"},
                    { name: "Komad kobasice", price: "2,00 KM", desc: "Kobasica na roštilju. Halal.", img: "images/kobasica.jpg"},
                    { name: "Dodatna lepinja", price: "2,00 KM", desc: "Topla lepinja natopljena saftom.", img: "images/lepinja.jpg"},
                    { name: "Majoneza", price: "1,00 KM" },
                    { name: "Kečap", price: "Gratis" },
                    { name: "Senf", price: "1,00 KM" },
                    { name: "Blagi sos", price: "2,00 KM" }
                ]}
            ],
            slatko: [
                { subcategory: "DESERTI", items: [
                    { name: "Slatke palačinke s Nutellom", price: "7,00 KM", desc: "Mekane palačinke sa Nutellom i posute keksom.", img: "images/palacinke.jpg" }
                ]}
            ]
        },
        sideDetails: {
            kajmak: { name: "Domaći Kajmak", price: "2,50 KM", desc: "Tradicionalni kremasti kajmak uz roštilj.", img: "images/kajmak.jpg" },
            ajvar: { name: "Domaći Ajvar", price: "1,00 KM", desc: "Namaz od pečene crvene paprike.", img: "images/ajvar.jpg" },
            lepinja: { name: "Dodatna Lepinja", price: "2,00 KM", desc: "Topla sočna lepinja sa roštilja.", img: "images/lepinja.jpg" },
            jogurt: { name: "Domaći Jogurt / Ajran", price: "2,00 KM", desc: "Osvježavajući napitak uz meso.", img: "images/jogurt.jpg" },
            sudzukica_komad: { name: "Komad Sudžukice", price: "2,00 KM", desc: "Začinjena kobasica na roštilju. Halal.", img: "images/sudzukica.jpg" },
            kobasica_komad: { name: "Komad Kobasice", price: "2,00 KM", desc: "Roštiljska kobasica. Halal.", img: "images/kobasica.jpg" },
            senf: { name: "Senf", price: "1,00 KM", desc: "Umak od gorušice.", img: "images/senf.jpg" }
        }
    },
    en: {
        categories: {
            pica: "Drinks",
            supe: "Soups",
            cevapi: "Cevapi",
            ostala: "Other Dishes",
            piletina: "Chicken Specialties",
            mijesano: "Platters & Mixed Meat",
            riba: "Fish & Seafood",
            salate: "Salads",
            prilozi: "Sides & Sauces",
            slatko: "Desserts"
        },
        items: {
            pica: [
                { 
                    subcategory: "CARBONATED DRINKS", 
                    items: [ 
                        { name: "Coca-Cola", price: "3,00 KM" }, 
                        { name: "Coca-Cola Zero", price: "3,00 KM" }, 
                        { name: "Cockta", price: "3,00 KM" }, 
                        { name: "Cockta Zero", price: "3,00 KM" }, 
                        { name: "Cola To-Go", price: "2,50 KM" }, 
                        { name: "Fanta", price: "3,00 KM" }, 
                        { name: "Sprite", price: "3,00 KM" },
                        { name: "Energy Drink", price: "4,00 KM" },
                        { name: "Hidra Iso-Drink", price: "3,00 KM" },
                        { name: "Exotic Pear", price: "3,00 KM" },
                        { name: "Schweppes Tangerine", price: "3,00 KM" },
                        { name: "Schweppes Bitter Lemon", price: "3,00 KM" },
                        { name: "Schweppes Tonic Water", price: "3,00 KM" }
                    ] 
                },
                { 
                    subcategory: "JUICES & ICED TEAS", 
                    items: [ 
                        { name: "Lemonade", price: "3,00 KM" }, 
                        { name: "Cedevita", price: "2,00 KM" }, 
                        { name: "Orange Juice", price: "3,00 KM" }, 
                        { name: "Apple Juice", price: "3,00 KM" },
                        { name: "Blueberry Juice", price: "3,00 KM" },
                        { name: "Peach Juice", price: "3,00 KM" },
                        { name: "Strawberry Juice", price: "3,00 KM" },
                        { name: "Peach Iced Tea", price: "3,00 KM" },
                        { name: "Cranberry Iced Tea", price: "3,00 KM" }
                    ] 
                },
                { 
                    subcategory: "HOT BEVERAGES", 
                    items: [ 
                        { name: "Coffee", price: "2,00 KM" }, 
                        { name: "Turkish Coffee", price: "3,00 KM" }, 
                        { name: "Nescafe 3in1", price: "2,50 KM" },
                        { name: "Nescafe Vanilla", price: "2,50 KM" },
                        { name: "Nescafe Irish", price: "2,50 KM" },
                        { name: "Nescafe Chocolate", price: "2,50 KM" },
                        { name: "Iced Coffee", price: "4,00 KM" }, 
                        { name: "Hot Chocolate", price: "3,00 KM" }, 
                        { name: "Tea", price: "2,00 KM" } 
                    ] 
                },
                { 
                    subcategory: "WATER", 
                    items: [ 
                        { name: "Sparkling Water 0.33l", price: "2,00 KM" }, 
                        { name: "Sparkling Water 1l", price: "5,00 KM" }, 
                        { name: "Still Water 0.33l", price: "2,00 KM" },
                        { name: "Lemon & Lime Water", price: "2,00 KM" }
                    ] 
                }
            ],
            supe: [
                { subcategory: "TRADITIONAL SOUPS", items: [
                    { name: "Bey's Soup (Begova Čorba)", price: "3,00 KM", desc: "Traditional Bosnian thick chicken soup with okra and vegetables. Rich and creamy. Halal.", img: "images/begova.jpg" },
                    { name: "Trahana Soup", price: "4,00 KM", desc: "Fermented dough soup with tomatoes, traditional sour taste.", img: "images/trahana.jpg" },
                    { name: "Beef Noodle Soup", price: "4,00 KM", desc: "Warm beef broth served with noodles. Halal.", img: "images/govedja.jpg" }
                ]}
            ],
            cevapi: [
                { subcategory: "CEVAPI", items: [
                    { name: "5 Cevapi in Half Flatbread", price: "6,00 KM", desc: "5 grilled cevapi in half flatbread with fresh onions. 100% Halal.", img: "images/petica-pola.jpg" },
                    { name: "5 Cevapi in Whole Flatbread", price: "7,00 KM", desc: "5 grilled cevapi in whole flatbread with onions. 100% Halal.", img: "images/petica-cijela.jpg" },
                    { name: "10 Cevapi in Half Flatbread", price: "10,00 KM", desc: "10 grilled cevapi in half flatbread with onions. 100% Halal.", img: "images/desetka-pola.jpg" },
                    { name: "10 Cevapi in Whole Flatbread", price: "12,00 KM", desc: "10 grilled cevapi in whole flatbread with onions. 100% Halal.", img: "images/desetka-cijela.jpg" },
                    { name: "15 Cevapi in Whole Flatbread", price: "15,00 KM", desc: "15 grilled cevapi served in whole flatbread. 100% Halal.", img: "images/petnaeska.jpg" },
                    { name: "20 Cevapi in Whole Flatbread", price: "20,00 KM", desc: "20 grilled cevapi served in whole flatbread. 100% Halal.", img: "images/dvadesetka.jpg" }
                ]}
            ],
            ostala: [
                { subcategory: "OTHER DISHES & BURGERS", items: [
                    { name: "Vezir Burger", price: "8,00 KM", desc: "Hamburger/Cheeseburger with salad and spreads, served with french fries. Halal.", img: "images/vezir-burger.jpg" }
                ]}
            ],
            piletina: [
                { subcategory: "CHICKEN SPECIALTIES", items: [
                    { name: "Chicken Fillet – Small Portion", price: "10,00 KM", desc: "2 pieces of grilled chicken fillet with flatbread and salad. 100% Halal.", img: "images/file-mali.jpg" },
                    { name: "Chicken Fillet – Large Portion", price: "12,00 KM", desc: "3 pieces of grilled chicken fillet with flatbread and salad. 100% Halal.", img: "images/file-veliki.jpg" },
                    { name: "Chicken Skewers – Small Portion", price: "12,00 KM", desc: "2 grilled chicken skewers with flatbread and salad. 100% Halal.", img: "images/raznjici-mali.jpg" },
                    { name: "Chicken Skewers – Large Portion", price: "14,00 KM", desc: "3 grilled chicken skewers with flatbread and salad. 100% Halal.", img: "images/raznjici-veliki.jpg" },
                    { name: "Chicken Drumstick in Flatbread", price: "10,00 KM", desc: "Juicy boneless grilled chicken drumstick served in flatbread. 100% Halal.", img: "images/batak.jpg" },
                    { name: "Chicken Wings", price: "10,00 KM", desc: "6 to 7 juicy grilled chicken wings with fries in flatbread. 100% Halal.", img: "images/krila.jpg" },
                    { name: "Chicken Viennese Schnitzel", price: "12,00 KM", desc: "Crispy breaded chicken fillet with fries, sauce and salad. 100% Halal.", img: "images/becka.jpg" },
                    { name: "Chicken – Daily Special", price: "7,00 KM", desc: "Grilled chicken fillet with mushroom sauce and side dish (fries/rice). 100% Halal.", img: "images/dnevna.jpg" }
                ]}
            ],
            mijesano: [
                { subcategory: "PLATTERS & MIXED MEAT", items: [
                    { name: "Mixed Meat Platter for 1 Person", price: "15,00 KM", desc: "3 cevapi, 1 skewer, 1 patty, 1 sausage, breaded chicken, fillet + flatbread, fries and salad. 100% Halal.", img: "images/mijesano1.jpg" },
                    { name: "Mixed Meat Platter for 2 Persons", price: "28,00 KM", desc: "6 cevapi, 2 chicken skewers, 2 patties, 2 sausages, 2 breaded chickens, 2 chicken fillets + 2 flatbreads, fries and salad. 100% Halal.", img: "images/mijesano2.jpg" },
                    { name: "Mixed Meat Platter for 3 Persons", price: "38,00 KM", desc: "9 cevapi, 3 chicken skewers, 3 patties, 3 sausages, 3 breaded chickens, 3 chicken fillets + 3 flatbreads, fries and salad. 100% Halal.", img: "images/mijesano3.jpg" },
                    { name: "Vezir Grand Platter", price: "65,00 KM", desc: "Grand platter: 10 cevapi, 4 fillets, 4 veal chops, 4 sausages, 4 patties, 4 skewers + 4 flatbreads, fries and sauce. 100% Halal.", img: "images/vezir-plata.jpg" }
                ]}
            ],
            riba: [
                { subcategory: "FISH & SEAFOOD", items: [
                    { name: "Grilled Trout – Small Portion", price: "12,00 KM", desc: "1 fresh grilled trout served with fries, fish sauce and lemon.", img: "images/pastrmka1.jpg" },
                    { name: "Grilled Trout – Large Portion", price: "20,00 KM", desc: "2 pieces of fresh grilled trout served with fries, sauce and lemon.", img: "images/pastrmka2.jpg" },
                    { name: "Grilled Calamari (Squid)", price: "18,00 KM", desc: "Tender grilled squid served with french fries.", img: "images/lignje.jpg" }
                ]}
            ],
            salate: [
                { subcategory: "SALADS", items: [
                    { name: "Mixed Fresh Salad", price: "3,00 KM", desc: "Fresh tomatoes, cucumbers and cabbage.", img: "images/mijesana.jpg" },
                    { name: "Shopska Salad", price: "5,00 KM", desc: "Tomatoes, cucumbers, peppers, onions with grated white cheese.", img: "images/sopska.jpg" },
                    { name: "Cabbage Salad", price: "3,00 KM", desc: "Fresh crispy cabbage salad.", img: "images/kupus.jpg" },
                    { name: "Tomato Salad", price: "3,00 KM", desc: "Freshly sliced tomatoes.", img: "images/paradajz.jpg" }
                ]}
            ],
            prilozi: [
                { subcategory: "SIDES & SAUCES", items: [
                    { name: "Yogurt Drink", price: "2,00 KM", desc: "Refreshing dairy drink.", img: "images/jogurt.jpg" },
                    { name: "Ayran", price: "2,00 KM", desc: "Salted chilled yogurt drink.", img: "images/ajran.jpg" },
                    { name: "Homemade Kajmak Spread", price: "2,50 KM", desc: "Rich traditional dairy cream.", img: "images/kajmak.jpg" },
                    { name: "Homemade Ajvar Relish", price: "1,00 KM", desc: "Roasted pepper spread.", img: "images/ajvar.jpg" },
                    { name: "French Fries", price: "3,00 KM", desc: "Crispy golden potato fries.", img: "images/pomfrit.jpg" },
                    { name: "One Piece of Sausage", price: "2,00 KM", desc: "Grilled sausage. 100% Halal.", img: "images/sudzukica.jpg" },
                    { name: "One Piece of Grilled Sausage", price: "2,00 KM", desc: "Grilled sausage. 100% Halal.", img: "images/kobasica.jpg" },
                    { name: "Extra Flatbread", price: "2,00 KM", desc: "Fresh warm flatbread dipped in grill juice.", img: "images/lepinja.jpg" },
                    { name: "Mayonnaise", price: "1,00 KM" },
                    { name: "Ketchup", price: "Free" },
                    { name: "Mustard", price: "1,00 KM" },
                    { name: "Mild Sauce", price: "2,00 KM" }
                ]}
            ],
            slatko: [
                { subcategory: "DESSERTS", items: [
                    { name: "Nutella Sweet Pancakes", price: "7,00 KM", desc: "Soft pancakes filled with Nutella and biscuit crumbs.", img: "images/palacinke.jpg" }
                ]}
            ]
        },
        sideDetails: {
            kajmak: { name: "Homemade Kajmak", price: "2,50 KM", desc: "Rich and creamy traditional cream spread.", img: "images/kajmak.jpg" },
            ajvar: { name: "Homemade Ajvar", price: "1,00 KM", desc: "Roasted red pepper relish.", img: "images/ajvar.jpg" },
            lepinja: { name: "Extra Flatbread", price: "2,00 KM", desc: "Fresh flatbread dipped in grill sauce.", img: "images/lepinja.jpg" },
            jogurt: { name: "Yogurt / Ayran", price: "2,00 KM", desc: "Refreshing dairy drink.", img: "images/jogurt.jpg" },
            sudzukica_komad: { name: "One Sausage Piece", price: "2,00 KM", desc: "Spicy grilled sausage. Halal.", img: "images/sudzukica.jpg" },
            kobasica_komad: { name: "One Grilled Sausage Piece", price: "2,00 KM", desc: "Grilled sausage. Halal.", img: "images/kobasica.jpg" },
            senf: { name: "Mustard", price: "1,00 KM", desc: "Classic mustard sauce.", img: "images/senf.jpg" }
        }
    },
    tr: {
        categories: {
            pica: "İçecekler",
            supe: "Çorbalar",
            cevapi: "Köfteler",
            ostala: "Diğer Yemekler",
            piletina: "Tavuk Yemekleri",
            mijesano: "Karışık Izgara & Tabağı",
            riba: "Balık & Deniz Ürünleri",
            salate: "Salatalar",
            prilozi: "Mezeler & Soslar",
            slatko: "Tatlılar"
        },
        items: {
            pica: [
                { 
                    subcategory: "GAZLI İÇECEKLER", 
                    items: [ 
                        { name: "Coca-Cola", price: "3,00 KM" }, 
                        { name: "Coca-Cola Zero", price: "3,00 KM" }, 
                        { name: "Cockta", price: "3,00 KM" }, 
                        { name: "Cockta Zero", price: "3,00 KM" }, 
                        { name: "Paket Cola", price: "2,50 KM" }, 
                        { name: "Fanta", price: "3,00 KM" }, 
                        { name: "Sprite", price: "3,00 KM" },
                        { name: "Enerji İçeceği", price: "4,00 KM" },
                        { name: "Hidra İzo-İçecek", price: "3,00 KM" },
                        { name: "Exotic Armut", price: "3,00 KM" },
                        { name: "Schweppes Mandalina", price: "3,00 KM" },
                        { name: "Schweppes Bitter Lemon", price: "3,00 KM" },
                        { name: "Schweppes Tonik", price: "3,00 KM" }
                    ] 
                },
                { 
                    subcategory: "MEYVE SULARI & BUZLU ÇAYLAR", 
                    items: [ 
                        { name: "Limonata", price: "3,00 KM" }, 
                        { name: "Cedevita", price: "2,00 KM" }, 
                        { name: "Portakal Suyu", price: "3,00 KM" }, 
                        { name: "Elma Suyu", price: "3,00 KM" },
                        { name: "Yaban Mersini Suyu", price: "3,00 KM" },
                        { name: "Şeftali Suyu", price: "3,00 KM" },
                        { name: "Çilek Suyu", price: "3,00 KM" },
                        { name: "Şeftalili Buzlu Çay", price: "3,00 KM" },
                        { name: "Yaban Mersinli Buzlu Çay", price: "3,00 KM" }
                    ] 
                },
                { 
                    subcategory: "SICAK İÇECEKLER", 
                    items: [ 
                        { name: "Kahve", price: "2,00 KM" }, 
                        { name: "Türk Kahvesi", price: "3,00 KM" }, 
                        { name: "Nescafe 3'ü 1 Arada", price: "2,50 KM" },
                        { name: "Nescafe Vanilya", price: "2,50 KM" },
                        { name: "Nescafe Irish", price: "2,50 KM" },
                        { name: "Nescafe Çikolata", price: "2,50 KM" },
                        { name: "Buzlu Kahve", price: "4,00 KM" }, 
                        { name: "Sıcak Çikolata", price: "3,00 KM" }, 
                        { name: "Çay", price: "2,00 KM" } 
                    ] 
                },
                { 
                    subcategory: "SU & MADEN SUYU", 
                    items: [ 
                        { name: "Maden Suyu 0.33l", price: "2,00 KM" }, 
                        { name: "Maden Suyu 1l", price: "5,00 KM" }, 
                        { name: "Doğal Su 0.33l", price: "2,00 KM" },
                        { name: "Limon & Misket Limonlu Su", price: "2,00 KM" }
                    ] 
                }
            ],
            supe: [
                { subcategory: "GELENEKSEL ÇORBALAR", items: [
                    { name: "Begova Çorbası", price: "3,00 KM", desc: "Tavuk eti, bamya ve sebzelerle hazırlanan geleneksel Bosna çorbası. Kremamsı lezzet. %100 Helal.", img: "images/begova.jpg" },
                    { name: "Trahana Çorbası", price: "4,00 KM", desc: "Geleneksel fermante hamur ve domates çorbası.", img: "images/trahana.jpg" },
                    { name: "Dana Etli Şehriye Çorbası", price: "4,00 KM", desc: "Dana eti suyu ve erişte ile hazırlanan sıcak çorba. Helal et.", img: "images/govedja.jpg" }
                ]}
            ],
            cevapi: [
                { subcategory: "KÖFTELER", items: [
                    { name: "Yarım Pidede 5 Köfte", price: "6,00 KM", desc: "Geleneksel Travnik ızgara köftesi, yarım pidede taze soğan ile. %100 Helal et.", img: "images/petica-pola.jpg" },
                    { name: "Tam Pidede 5 Köfte", price: "7,00 KM", desc: "Geleneksel Travnik ızgara köftesi, tam pidede soğan ile. %100 Helal et.", img: "images/petica-cijela.jpg" },
                    { name: "Yarım Pidede 10 Köfte", price: "10,00 KM", desc: "10 adet ızgara köfte yarım pidede soğan ile. %100 Helal et.", img: "images/desetka-pola.jpg" },
                    { name: "Tam Pidede 10 Köfte", price: "12,00 KM", desc: "10 adet ızgara köfte tam pidede soğan ile. %100 Helal et.", img: "images/desetka-cijela.jpg" },
                    { name: "Tam Pidede 15 Köfte", price: "15,00 KM", desc: "15 adet ızgara köfte tam pidede. %100 Helal et.", img: "images/petnaeska.jpg" },
                    { name: "Tam Pidede 20 Köfte", price: "20,00 KM", desc: "20 adet ızgara köfte dev porsiyon. %100 Helal et.", img: "images/dvadesetka.jpg" }
                ]}
            ],
            ostala: [
                { subcategory: "DİĞER YEMEKLER & BURGERLER", items: [
                    { name: "Vezir Burger", price: "8,00 KM", desc: "Salata ve soslarla birlikte hazırlanan Hamburger/Cheeseburger, patates kızartması eşliğinde. Helal.", img: "images/vezir-burger.jpg" }
                ]}
            ],
            piletina: [
                { subcategory: "TAVUK YEMEKLERİ", items: [
                    { name: "Tavuk Bonfile – Küçük Porsiyon", price: "10,00 KM", desc: "2 parça ızgara tavuk bonfile, pide ve salata ile. %100 Helal.", img: "images/file-mali.jpg" },
                    { name: "Tavuk Bonfile – Büyük Porsiyon", price: "12,00 KM", desc: "3 parça ızgara tavuk bonfile, pide ve salata ile. %100 Helal.", img: "images/file-veliki.jpg" },
                    { name: "Tavuk Şiş – Küçük Porsiyon", price: "12,00 KM", desc: "2 adet ızgara tavuk şiş pide ile. %100 Helal.", img: "images/raznjici-mali.jpg" },
                    { name: "Tavuk Şiş – Büyük Porsiyon", price: "14,00 KM", desc: "3 adet ızgara tavuk şiş pide ile. %100 Helal.", img: "images/raznjici-veliki.jpg" },
                    { name: "Pidede Tavuk Pirzola", price: "10,00 KM", desc: "Kemiksiz yumuşak ızgara tavuk pirzola pidede. %100 Helal.", img: "images/batak.jpg" },
                    { name: "Izgara Tavuk Kanat", price: "10,00 KM", desc: "6-7 adet ızgara kanat, pidede patates kızartması ile. %100 Helal.", img: "images/krila.jpg" },
                    { name: "Tavuk Viyana Şnitzeli", price: "12,00 KM", desc: "Çıtır paneli tavuk bonfile, patates kızartması ve salata ile. %100 Helal.", img: "images/becka.jpg" },
                    { name: "Mantarlı Tavuk Bonfile", price: "7,00 KM", desc: "Kremalı mantar soslu ızgara tavuk bonfile. %100 Helal.", img: "images/dnevna.jpg" }
                ]}
            ],
            mijesano: [
                { subcategory: "KARIŞIK IZGARA & TABAĞI", items: [
                    { name: "Tek Kişilik Karışık Izgara", price: "15,00 KM", desc: "3 köfte, 1 şiş, 1 pljeskavica, 1 sosis, çıtır tavuk, bonfile + pide, patates ve salata. %100 Helal.", img: "images/mijesano1.jpg" },
                    { name: "İki Kişilik Karışık Izgara", price: "28,00 KM", desc: "6 köfte, 2 tavuk şiş, 2 pljeskavica, 2 sosis, 2 çıtır tavuk, 2 tavuk bonfile + 2 pide, patates ve salata. %100 Helal.", img: "images/mijesano2.jpg" },
                    { name: "Üç Kişilik Karışık Izgara", price: "38,00 KM", desc: "9 köfte, 3 tavuk şiş, 3 pljeskavica, 3 sosis, 3 çıtır tavuk, 3 tavuk bonfile + 3 pide, patates ve salata. %100 Helal.", img: "images/mijesano3.jpg" },
                    { name: "Vezir Özel Ziyafet Tabağı", price: "65,00 KM", desc: "Zengin tabağı: 10 köfte, 4 bonfile, 4 pirzola, 4 sosis, 4 pljeskavica, 4 şiş + 4 pide, patates ve sos. %100 Helal.", img: "images/vezir-plata.jpg" }
                ]}
            ],
            riba: [
                { subcategory: "BALIK & DENİZ ÜRÜNLERİ", items: [
                    { name: "Izgara Alabalık – Küçük", price: "12,00 KM", desc: "1 adet ızgara alabalık patates kızartması ve limon ile.", img: "images/pastrmka1.jpg" },
                    { name: "Izgara Alabalık – Büyük", price: "20,00 KM", desc: "2 adet ızgara alabalık patates kızartması ve limon ile.", img: "images/pastrmka2.jpg" },
                    { name: "Izgara Kalamar", price: "18,00 KM", desc: "Yumuşak ızgara kalamar patates kızartması ile.", img: "images/lignje.jpg" }
                ]}
            ],
            salate: [
                { subcategory: "SALATALAR", items: [
                    { name: "Karışık Salata", price: "3,00 KM", desc: "Taze domates, salatalık ve lahana.", img: "images/mijesana.jpg" },
                    { name: "Şopska Salatası", price: "5,00 KM", desc: "Domates, salatalık, biber ve üzerine rendelenmiş beyaz peynir.", img: "images/sopska.jpg" },
                    { name: "Lahana Salatası", price: "3,00 KM", desc: "Taze doğranmış lahana salatası.", img: "images/kupus.jpg" },
                    { name: "Domates Salatası", price: "3,00 KM", desc: "Taze dilimlenmiş domates.", img: "images/paradajz.jpg" }
                ]}
            ],
            prilozi: [
                { subcategory: "MEZELER & SOSLAR", items: [
                    { name: "Yoğurt", price: "2,00 KM", desc: "Fermente süt içeceği.", img: "images/jogurt.jpg" },
                    { name: "Ayran", price: "2,00 KM", desc: "Soğuk tuzlu ayran.", img: "images/ajran.jpg" },
                    { name: "Ev Yapımı Kaymak", price: "2,50 KM", desc: "Geleneksel yoğun kaymak.", img: "images/kajmak.jpg" },
                    { name: "Ev Yapımı Ajvar", price: "1,00 KM", desc: "Közlenmiş kırmızı biber ezmesi.", img: "images/ajvar.jpg" },
                    { name: "Patates Kızartması", price: "3,00 KM", desc: "Çıtır patates kızartması.", img: "images/pomfrit.jpg" },
                    { name: "1 Adet Sucuk", price: "2,00 KM", desc: "Izgara sucuk. %100 Helal.", img: "images/sudzukica.jpg" },
                    { name: "1 Adet Sosis", price: "2,00 KM", desc: "Izgara sosis. %100 Helal.", img: "images/kobasica.jpg" },
                    { name: "Ekstra Pide", price: "2,00 KM", desc: "Et suyuna batırılmış sıcak pide.", img: "images/lepinja.jpg" },
                    { name: "Mayonez", price: "1,00 KM" },
                    { name: "Ketçap", price: "Ücretsiz" },
                    { name: "Hardal", price: "1,00 KM" },
                    { name: "Hafif Sos", price: "2,00 KM" }
                ]}
            ],
            slatko: [
                { subcategory: "TATLI", items: [
                    { name: "Nutellalı Krep", price: "7,00 KM", desc: "Nutella ve bisküvi parçacıklı tatlı krep.", img: "images/palacinke.jpg" }
                ]}
            ]
        },
        sideDetails: {
            kajmak: { name: "Ev Yapımı Kaymak", price: "2,50 KM", desc: "Geleneksel yoğun kremamsı kaymak.", img: "images/kajmak.jpg" },
            ajvar: { name: "Ev Yapımı Ajvar", price: "1,00 KM", desc: "Közlenmiş biber ezmesi.", img: "images/ajvar.jpg" },
            lepinja: { name: "Ekstra Pide", price: "2,00 KM", desc: "Et suyuna batırılmış taze pide.", img: "images/lepinja.jpg" },
            jogurt: { name: "Yoğurt / Ayran", price: "2,00 KM", desc: "Soğuk ayran içeceği.", img: "images/jogurt.jpg" },
            sudzukica_komad: { name: "1 Adet Sucuk", price: "2,00 KM", desc: "Baharatlı ızgara sucuk. Helal.", img: "images/sudzukica.jpg" },
            kobasica_komad: { name: "1 Adet Sosis", price: "2,00 KM", desc: "Izgara sosis. Helal.", img: "images/kobasica.jpg" },
            senf: { name: "Hardal", price: "1,00 KM", desc: "Klasik hardal sosu.", img: "images/senf.jpg" }
        }
    },
    ar: {
        categories: {
            pica: "المشروبات",
            supe: "الشوربات",
            cevapi: "الكباب",
            ostala: "أطباق أخرى",
            piletina: "أطباق الدجاج",
            mijesano: "مشاوي مشكلة والأطباق",
            riba: "الأسماك والمأكولات البحرية",
            salate: "السلطات",
            prilozi: "المقبلات والصلصات",
            slatko: "الحلويات"
        },
        items: {
            pica: [
                { 
                    subcategory: "مشروبات غازية", 
                    items: [ 
                        { name: "كوكا كولا", price: "3,00 KM" }, 
                        { name: "كوكا كولا زيرو", price: "3,00 KM" }, 
                        { name: "كوكيتا", price: "3,00 KM" }, 
                        { name: "كوكيتا زيرو", price: "3,00 KM" }, 
                        { name: "كولا سفري", price: "2,50 KM" }, 
                        { name: "فانتا", price: "3,00 KM" }, 
                        { name: "سبرايت", price: "3,00 KM" },
                        { name: "مشروب الطاقة", price: "4,00 KM" },
                        { name: "مشروب هيدرا الرياضي", price: "3,00 KM" },
                        { name: "إكزوتيك كمثرى", price: "3,00 KM" },
                        { name: "شوِبس يوسفي", price: "3,00 KM" },
                        { name: "شوِبس بيتر ليمون", price: "3,00 KM" },
                        { name: "شوِبس تونك", price: "3,00 KM" }
                    ] 
                },
                { 
                    subcategory: "عصائر طبيعية والشاي المثلج", 
                    items: [ 
                        { name: "عصير ليمون", price: "3,00 KM" }, 
                        { name: "سيديفيتا", price: "2,00 KM" }, 
                        { name: "عصير برتقال", price: "3,00 KM" }, 
                        { name: "عصير تفاح", price: "3,00 KM" },
                        { name: "عصير التوت الأزرق", price: "3,00 KM" },
                        { name: "عصير الخوخ", price: "3,00 KM" },
                        { name: "عصير الفراولة", price: "3,00 KM" },
                        { name: "شاي مثلج بنكهة الخوخ", price: "3,00 KM" },
                        { name: "شاي مثلج بنكهة التوت البري", price: "3,00 KM" }
                    ] 
                },
                { 
                    subcategory: "مشروبات ساخنة", 
                    items: [ 
                        { name: "قهوة", price: "2,00 KM" }, 
                        { name: "قهوة تركية", price: "3,00 KM" }, 
                        { name: "نسكافيه 3 في 1", price: "2,50 KM" },
                        { name: "نسكافيه فانيليا", price: "2,50 KM" },
                        { name: "نسكافيه آيريش", price: "2,50 KM" },
                        { name: "نسكافيه شوكولاتة", price: "2,50 KM" },
                        { name: "قهوة مثلجة", price: "4,00 KM" }, 
                        { name: "شوكولاتة ساخنة", price: "3,00 KM" }, 
                        { name: "شاي", price: "2,00 KM" } 
                    ] 
                },
                { 
                    subcategory: "ماء", 
                    items: [ 
                        { name: "ماء غازي 0.33 ليتر", price: "2,00 KM" }, 
                        { name: "ماء غازي 1 ليتر", price: "5,00 KM" }, 
                        { name: "ماء عادي 0.33 ليتر", price: "2,00 KM" },
                        { name: "ماء بنكهة الليمون واللايم", price: "2,00 KM" }
                    ] 
                }
            ],
            supe: [
                { subcategory: "شوربات تقليدية", items: [
                    { name: "شوربة الباي (Begova čorba)", price: "3,00 KM", desc: "شوربة بوسنية تقليدية بالدجاج والبامية والخضار. طعم غني وكريمي. لحم حلال 100%.", img: "images/begova.jpg" },
                    { name: "شوربة ترهانا", price: "4,00 KM", desc: "شوربة بوسنية تقليدية بالعجين المخمر والطماطم ذات طعم حامض مميز.", img: "images/trahana.jpg" },
                    { name: "شوربة لحم البقر", price: "4,00 KM", desc: "مرق لحم بقري دافئ يقدّم مع الشعيرية. لحم حلال 100%.", img: "images/govedja.jpg" }
                ]}
            ],
            cevapi: [
                { subcategory: "الكباب", items: [
                    { name: "5 كباب في نصف خبز", price: "6,00 KM", desc: "5 قطع كباب مشوي على الفحم في نصف خبز مع البصل الطازج. لحم حلال 100%.", img: "images/petica-pola.jpg" },
                    { name: "5 كباب في خبز كامل", price: "7,00 KM", desc: "5 قطع كباب مشوي في خبز كامل مع البصل. لحم حلال 100%.", img: "images/petica-cijela.jpg" },
                    { name: "10 كباب في نصف خبز", price: "10,00 KM", desc: "10 قطع كباب مشوي في نصف خبز مع البصل. لحم حلال 100%.", img: "images/desetka-pola.jpg" },
                    { name: "10 كباب في خبز كامل", price: "12,00 KM", desc: "10 قطع كباب مشوي في خبز كامل مع البصل. لحم حلال 100%.", img: "images/desetka-cijela.jpg" },
                    { name: "15 كباب في خبز كامل", price: "15,00 KM", desc: "15 قطعة كباب مشوي تقدم في خبز كامل. لحم حلال 100%.", img: "images/petnaeska.jpg" },
                    { name: "20 كباب في خبز كامل", price: "20,00 KM", desc: "20 قطعة كباب مشوي وجبة ملكية فاخرة. لحم حلال 100%.", img: "images/dvadesetka.jpg" }
                ]}
            ],
            ostala: [
                { subcategory: "أطباق أخرى والبرغر", items: [
                    { name: "برغر الوزير", price: "8,00 KM", desc: "هامبرغر / تشيز برغر مع السلطة والصوصات، ويقدّم مع بطاطس مقلية. حلال.", img: "images/vezir-burger.jpg" }
                ]}
            ],
            piletina: [
                { subcategory: "أطباق الدجاج", items: [
                    { name: "فيليه دجاج – وجبة صغيرة", price: "10,00 KM", desc: "قطعتان من فيليه الدجاج المشوي مع الخبز والسلطة. دجاج حلال 100%.", img: "images/file-mali.jpg" },
                    { name: "فيليه دجاج – وجبة كبيرة", price: "12,00 KM", desc: "ثلاث قطع من فيليه الدجاج المشوي مع الخبز والسلطة. دجاج حلال 100%.", img: "images/file-veliki.jpg" },
                    { name: "شيش طاووق – وجبة صغيرة", price: "12,00 KM", desc: "سيخان من شيش طاووق الدجاج المشوي. دجاج حلال 100%.", img: "images/raznjici-mali.jpg" },
                    { name: "شيش طاووق – وجبة كبيرة", price: "14,00 KM", desc: "ثلاثة أسياخ من شيش طاووق الدجاج المشوي. دجاج حلال 100%.", img: "images/raznjici-veliki.jpg" },
                    { name: "فخذ دجاج في الخبز", price: "10,00 KM", desc: "فخذ دجاج طري مخل من العظم ومشوي يقدم في الخبز. دجاج حلال 100%.", img: "images/batak.jpg" },
                    { name: "أجنحة دجاج مشوية", price: "10,00 KM", desc: "6 إلى 7 أجنحة دجاج مشوية تقدم مع البطاطس المقلية. دجاج حلال 100%.", img: "images/krila.jpg" },
                    { name: "شنيتزل دجاج فيينا", price: "12,00 KM", desc: "فيليه دجاج مقرمش مقلي بالبقسماط يقدم مع البطاطس المقلية والسلطة. دجاج حلال 100%.", img: "images/becka.jpg" },
                    { name: "دجاج بصوص الفطر", price: "7,00 KM", desc: "فيليه دجاج مشوي مع صوص الفطر الكريمي والبطاطس أو الأرز. دجاج حلال 100%.", img: "images/dnevna.jpg" }
                ]}
            ],
            mijesano: [
                { subcategory: "مشاوي مشكلة والأطباق", items: [
                    { name: "مشاوي مشكلة لشخص واحد", price: "15,00 KM", desc: "3 كباب، 1 شيش طاووق، 1 برغر، 1 سجق، دجاج مقرمش، فيليه + خبز، بطاطس وسلطة. لحم حلال 100%.", img: "images/mijesano1.jpg" },
                    { name: "مشاوي مشكلة لشخصين", price: "28,00 KM", desc: "6 كباب، 2 شيش طاووق، 2 برغر، 2 سجق، 2 دجاج مقرمش، 2 فيليه دجاج + 2 خبز، بطاطس وسلطة. لحم حلال 100%.", img: "images/mijesano2.jpg" },
                    { name: "مشاوي مشكلة لثلاثة أشخاص", price: "38,00 KM", desc: "9 كباب، 3 شيش طاووق، 3 برغر، 3 سجق، 3 دجاج مقرمش، 3 فيليه دجاج + 3 خبز، بطاطس وسلطة. لحم حلال 100%.", img: "images/mijesano3.jpg" },
                    { name: "طبق الوزير الفاخر", price: "65,00 KM", desc: "طبق فاخر غني: 10 كباب، 4 فيليه، 4 ريش، 4 سجق، 4 برغر، 4 شيش طاووق + 4 خبز، بطاطس وصلصة. لحم حلال 100%.", img: "images/vezir-plata.jpg" }
                ]}
            ],
            riba: [
                { subcategory: "الأسماك والمأكولات البحرية", items: [
                    { name: "سمك تروات مشوي – وجبة صغيرة", price: "12,00 KM", desc: "قطعة سمك تروات طازجة مشوية تقدم مع البطاطس والليمون.", img: "images/pastrmka1.jpg" },
                    { name: "سمك تروات مشوي – وجبة كبيرة", price: "20,00 KM", desc: "قطعتان من سمك التروات المشوي تقدم مع البطاطس والليمون.", img: "images/pastrmka2.jpg" },
                    { name: "كاليماري مشوي", price: "18,00 KM", desc: "حبار طري مشوي على الفحم يقدم مع البطاطس المقلية.", img: "images/lignje.jpg" }
                ]}
            ],
            salate: [
                { subcategory: "السلطات", items: [
                    { name: "سلطة مشكلة", price: "3,00 KM", desc: "طماطم طازجة، خيار وملفوف.", img: "images/mijesana.jpg" },
                    { name: "سلطة شوبسكا", price: "5,00 KM", desc: "طماطم، خيار، بصل وفلفل يعلوها الجبن الأبيض المبشور.", img: "images/sopska.jpg" },
                    { name: "سلطة الملفوف", price: "3,00 KM", desc: "ملفوف طازج ومقرمش.", img: "images/kupus.jpg" },
                    { name: "سلطة الطماطم", price: "3,00 KM", desc: "طماطم طازجة مقطعة ومتبلة.", img: "images/paradajz.jpg" }
                ]}
            ],
            prilozi: [
                { subcategory: "المقبلات والصلصات", items: [
                    { name: "لبن رائب", price: "2,00 KM", desc: "مشروب لبن مخمر طازج." },
                    { name: "عيران", price: "2,00 KM", desc: "لبن مالح بارد ومنعش." },
                    { name: "قيمر بلدي", price: "2,50 KM", desc: "قشطة تقليدية غنية وكريمية." },
                    { name: "أيفار بلدي", price: "1,00 KM", desc: "معجون الفلفل الأحمر المشوي." },
                    { name: "بطاطس مقلية", price: "3,00 KM", desc: "بطاطس مقرمشة ذهبية." },
                    { name: "قطعة سجق", price: "2,00 KM", desc: "سجق مشوي على الفحم. لحم حلال 100%." },
                    { name: "قطعة سجق مشوي", price: "2,00 KM", desc: "سجق مشوي على الفحم. لحم حلال 100%." },
                    { name: "خبز إضافي", price: "2,00 KM", desc: "خبز دافئ مغموس بمرق المشاوي." },
                    { name: "مايونيز", price: "1,00 KM" },
                    { name: "كاتشب", price: "مجاناً" },
                    { name: "خردل", price: "1,00 KM" },
                    { name: "صلصة خفيفة", price: "2,00 KM" }
                ]}
            ],
            slatko: [
                { subcategory: "الحلويات", items: [
                    { name: "كريب بالنوتيلا", price: "7,00 KM", desc: "كريب ناعم محشو بالنوتيلا ومزين بالبسكويت المطحون.", img: "images/palacinke.jpg" }
                ]}
            ]
        },
        sideDetails: {
            kajmak: { name: "قيمر بلدي", price: "2,50 KM", desc: "قشطة بلدي تقليدية غنية ورائعة مع المشاوي.", img: "images/kajmak.jpg" },
            ajvar: { name: "أيفار بلدي", price: "1,00 KM", desc: "معجون الفلفل الأحمر المشوي.", img: "images/ajvar.jpg" },
            lepinja: { name: "خبز إضافي", price: "2,00 KM", desc: "خبز طازج دافئ مغموس بالمرق.", img: "images/lepinja.jpg" },
            jogurt: { name: "لبن رائب / عيران", price: "2,00 KM", desc: "مشروب لبن بارد ومنعش.", img: "images/jogurt.jpg" },
            sudzukica_komad: { name: "قطعة سجق", price: "2,00 KM", desc: "سجق متبل مشوي. لحم حلال 100%.", img: "images/sudzukica.jpg" },
            kobasica_komad: { name: "قطعة سجق مشوي", price: "2,00 KM", desc: "سجق مشوي. لحم حلال 100%.", img: "images/kobasica.jpg" },
            senf: { name: "خردل", price: "1,00 KM", desc: "صلصة الخردل الكلاسيكية.", img: "images/senf.jpg" }
        }
    }
};

let currentCategory = 'pica';
let currentLang = 'bs';

const translations = {
    bs: {
        heroSub: "Mjesto gdje tradicija susreće kvalitet", btnScroll: "Pogledaj Meni ↓", catTitle: "Meni",
        learnMore: "Saznaj više / Detalji", backBtn: "← Nazad na listu", sideRecBtn: "💡 Najčešće naručivano uz ovo",
        modalTitle: "Najčešće naručivano uz ovo", modalSub: "Kliknite na dodatak za više detalja:",
        ratingTitle: "Ostavite Vašu Ocjenu", ratingSub: "Vaše mišljenje nam je izuzetno važno!",
        overall: "Sveukupni rejting:", googleBtn: "Ostavi ocjenu na Google-u",
        aboutTitle: "O Nama", aboutText: "Restoran Vezir - Mjesto gdje tradicija susreće kvalitet. Vrhunski roštiljski i tradicionalni specijaliteti od halal mesa.",
        contactTitle: "Kontakt & Lokacija", socialTitle: "Pratite Nas",
        mKajmak: "🧀 Domaći Kajmak", mAjvar: "🌶️ Domaći Ajvar", mLepinja: "🫓 Dodatna Lepinja",
        mJogurt: "🥛 Domaći Jogurt / Ajran", mSudzukica: "🌭 Komad Sudžukice", mKobasica: "🌭 Komad Kobasice", mSenf: "🟡 Senf"
    },
    en: {
        heroSub: "Where tradition meets quality", btnScroll: "View Menu ↓", catTitle: "Menu",
        learnMore: "Learn more / Details", backBtn: "← Back to list", sideRecBtn: "💡 Frequently ordered with this",
        modalTitle: "Frequently ordered with this", modalSub: "Click on a side dish for more details:",
        ratingTitle: "Leave Your Review", ratingSub: "Your opinion matters to us!",
        overall: "Overall rating:", googleBtn: "Leave a review on Google",
        aboutTitle: "About Us", aboutText: "Restaurant Vezir - Where tradition meets quality. Premium grilled specialties made from 100% Halal meat.",
        contactTitle: "Contact & Location", socialTitle: "Follow Us",
        mKajmak: "🧀 Homemade Kajmak", mAjvar: "🌶️ Homemade Ajvar", mLepinja: "🫓 Extra Flatbread",
        mJogurt: "🥛 Homemade Yogurt / Ayran", mSudzukica: "🌭 Sausage Piece", mKobasica: "🌭 Grilled Sausage Piece", mSenf: "🟡 Mustard"
    },
    tr: {
        heroSub: "Geleneğin kaliteyle buluştuğu yer", btnScroll: "Menüyü İncele ↓", catTitle: "Menü",
        learnMore: "Detaylar", backBtn: "← Listeye Dön", sideRecBtn: "💡 Yanında en çok tercih edilenler",
        modalTitle: "Yanında en çok tercih edilenler", modalSub: "Detaylar için tıklayın:",
        ratingTitle: "Değerlendirme Yapın", ratingSub: "Fikriniz önemli!",
        overall: "Genel Puan:", googleBtn: "Google'da Değerlendirin",
        aboutTitle: "Hakkımızda", aboutText: "Restoran Vezir - Geleneğin kaliteyle buluştuğu yer. %100 Helal ızgara lezzetleri.",
        contactTitle: "İletişim & Konum", socialTitle: "Bizi Takip Edin",
        mKajmak: "🧀 Kaymak", mAjvar: "🌶️ Ajvar", mLepinja: "🫓 Ekstra Pide",
        mJogurt: "🥛 Yoğurt / Ayran", mSudzukica: "🌭 1 Adet Sucuk", mKobasica: "🌭 1 Adet Sosis", mSenf: "🟡 Hardal"
    },
    ar: {
        heroSub: "حيث تلتقي التقاليد بالجودة", btnScroll: "عرض القائمة ↓", catTitle: "القائمة",
        learnMore: "التفاصيل", backBtn: "← العودة للقائمة", sideRecBtn: "💡 يُطلب كثيراً مع هذا الطبق",
        modalTitle: "يُطلب كثيراً مع هذا الطبق", modalSub: "انقر للتفاصيل:",
        ratingTitle: "اترك تقييمك", ratingSub: "رأيك يهمنا جداً!",
        overall: "التقييم العام:", googleBtn: "تقييم على Google",
        aboutTitle: "من نحن", aboutText: "مطعم الوزير - أشهى المشاوي والوجبات التقليدية من لحم حلال 100%.",
        contactTitle: "التواصل والموقع", socialTitle: "تابعنا",
        mKajmak: "🧀 قيمر", mAjvar: "🌶️ أيفار", mLepinja: "🫓 خبز إضافي",
        mJogurt: "لبن / عيران 🥛", mSudzukica: "🌭 سجق", mKobasica: "🌭 سجق مشوي", mSenf: "🟡 خردل"
    }
};

function changeLanguage(langKey) {
    if (!menuData[langKey]) langKey = 'bs';
    currentLang = langKey;
    const t = translations[currentLang];

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(document.querySelectorAll('.lang-btn')).find(b => b.innerText.toLowerCase() === langKey);
    if(activeBtn) activeBtn.classList.add('active');

    document.body.style.direction = (langKey === 'ar') ? 'rtl' : 'ltr';

    document.getElementById('hero-subtitle').innerText = t.heroSub;
    document.getElementById('btn-scroll').innerText = t.btnScroll;
    document.getElementById('cat-title').innerText = t.catTitle;

    const currentData = menuData[currentLang];
    const keys = ['pica','supe','cevapi','ostala','piletina','mijesano','riba','salate','prilozi','slatko'];
    keys.forEach(k => {
        const btn = document.getElementById(`btn-${k}`);
        if(btn) btn.innerText = currentData.categories[k] || k;
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
}

function selectCategory(categoryKey, btnElement) {
    currentCategory = categoryKey;
    
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
                    const hasDetails = item.desc ? true : false;
                    const escapedName = item.name.replace(/'/g, "\\'");
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
                const hasDetails = item.desc ? true : false;
                const escapedName = item.name.replace(/'/g, "\\'");
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

    if (window.innerWidth <= 768) {
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
            <div class="detail-image-box" onclick="openImageModal('${imagePath}')" title="Klikni za povećanje">
                <img src="${imagePath}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/220x220?text=Slika+Jela'">
                <span class="zoom-hint">🔍 Povećaj</span>
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

function showSideDetail(sideKey) {
    closeModal();
    const currentData = menuData[currentLang];
    const t = translations[currentLang];
    const item = currentData.sideDetails[sideKey];
    if(!item) return;

    const container = document.getElementById('items-container');

    container.innerHTML = `
        <button class="back-btn" onclick="selectCategory('${currentCategory}')">${t.backBtn}</button>
        <div class="detail-view">
            <div class="detail-info">
                <h3>${item.name}</h3>
                <div class="detail-price">${item.price}</div>
                <p class="detail-desc">${item.desc}</p>
            </div>
            <div class="detail-image-box" onclick="openImageModal('${item.img}')" title="Klikni za povećanje">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/220x220?text=Slika+Priloga'">
                <span class="zoom-hint">🔍 Povećaj</span>
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

document.addEventListener("DOMContentLoaded", function() {
    selectCategory('pica');
});
