let products = [
    //Световые короба
    { parentBlock: "light-box", formulaType: "whp", blockId: "acrylic-box", name: 'Световой короб акриловый', price: 14000, units: "кв.м" },
    { parentBlock: "light-box", formulaType: "free", blockId: "double-sided", name: 'Кронштейн световой двухсторонний'},
    { parentBlock: "light-box", formulaType: "whp", blockId: "milled-box", name: 'Световой короб фрезерованный', price: 14000, units: "кв.м" },
    { parentBlock: "light-box", formulaType: "free", blockId: "one-sided", name: 'Кронштейн световой односторонний'},
    { parentBlock: "light-box", formulaType: "whp", blockId: "banner-box", name: 'Световой короб баннерный', price: 14000, units: "кв.м" },
    { parentBlock: "light-box", formulaType: "whp", blockId: "laitix-box", name: 'Световой короб "Лайтикс"', price: 25000, units: "кв.м" },
    { parentBlock: "light-box", formulaType: "whp", blockId: "notlight-box", name: 'Несветовой объемный короб', price: 7000, units: "кв.м" },

    //Световые буквы
    { parentBlock: "light-letters", formulaType: "atxp"  , blockId: "letter-small", name: 'Световые объемные буквы (до 100 см)', price: 100, units: "cм", inputname: "Высота"},
    { parentBlock: "light-letters", formulaType: "whp" , blockId: "letter-large", name: 'Световые объемные буквы (больше 100 см)', price: 14000 , units: "кв.м" },
    { parentBlock: "light-letters", formulaType: "free", blockId: "letter-neon", name: 'Вывеска из гибкого неона' },
    { parentBlock: "light-letters", formulaType: "free", blockId: "letter-pixel", name: 'Световые буквы пиксельные' },
    { parentBlock: "light-letters", formulaType: "atxp"  , blockId: "letter-acrylic", name: 'Световые объемные буквы с акриловыми бортами', price: 150, units: "см", inputname: "Высота"},
    { parentBlock: "light-letters", formulaType: "atxp"  , blockId: "letter-openwork", name: 'Световые буквы с подсветкой "Контражур"', price: 100, units: "см", inputname: "Высота"},
    { parentBlock: "light-letters", formulaType: "atxp"  , blockId: "letter-notlight", name: 'Несветовые объемные буквы', price: 50, units: "см", inputname: "Высота"},

    //Таблички
    { parentBlock: "plaques", formulaType: "whp" , blockId: "plaques-metal-plastic", name: 'Табличка Металлопластик', price: 3500, units: "кв.м" },
    { parentBlock: "plaques", formulaType: "whp" , blockId: "plaques-3mm", name: 'Табличка ПВХ 3 мм', price: 2000, units: "кв.м" },
    { parentBlock: "plaques", formulaType: "whp" , blockId: "plaques-5mm", name: 'Табличка ПВХ 5 мм', price: 2500, units: "кв.м" },
    { parentBlock: "plaques", formulaType: "whp", blockId: "plaques-acrylic", name: 'Табличка акриловая 3мм', price: 4000, units: "кв.м" },
    { parentBlock: "plaques", formulaType: "free", blockId: "remote-holder", name: 'Дистанционный держатель'},
    { parentBlock: "plaques", formulaType: "free", blockId: "plaques-numbers", name: 'Номерки'},
    { parentBlock: "plaques", formulaType: "compplus", blockId: "stand", name: 'Стенд информационный',  price: 2500, units: "кв.м",
        materials: [
            { materialType: "ПВХ 5мм", matCode: "mat-pvx5",  price: 2500 },
            { materialType: "ПВХ 10мм", matCode: "mat-pvx10",  price: 3500 },
            { materialType: "Металлопластик", matCode: "mat-metplast",  price: 3500 },
            { materialType: "Акрил прозрачный 3мм", matCode: "mat-acrylic",  price: 4000 },
            // { materialType: "Свободный ввод", matCode: "mat-freeEnter",  price: 0 }
        ],
       additions: [
           {  price: 100, addCode: "pocket-fc", name: "Карман для визиток"},
           {  price: 100, addCode: "pocket-A5", name: "Карман A5"},
           {  price: 130, addCode: "pocket-A4", name: "Карман A4"},
           {  price: 150, addCode: "pocket-A3", name: "Карман A3"},
           {  price: 120, addCode: "pocketVA5", name: "Карман объемный A5"},
           {  price: 150, addCode: "pocketVA4", name: "Карман объемный A4"},
           {  price: 180, addCode: "pocketVA3", name: "Карман объемный A3"},
       ]
    },
    { parentBlock: "plaques", formulaType: "free", blockId: "chalk-board", name: 'Меловая доска'},
    { parentBlock: "plaques", formulaType: "free", blockId: "painting-making", name: 'Изготовление картины'},

    //Металлокаркас
    { parentBlock: "metal-frame", formulaType: "free", blockId: "baguette", name: 'Багет из металлопластика'},
    { parentBlock: "metal-frame", formulaType: "free", blockId: "cassette", name: 'Кассета из металлопластика'},
    { parentBlock: "metal-frame", formulaType: "wh2p", blockId: "suboption-frame", name: 'Металлокаркас', price: 600, units: "пг.м." },
    { parentBlock: "metal-frame", formulaType: "wh2p", blockId: "composite-frame", name: 'Металлокаркас сложный', price: 700, units: "пг.м." },

    //Мобильные конструкции
    { parentBlock: "mobile-structures", formulaType: "free", blockId: "pavement-sign", name: 'Штендер сварной'},
    { parentBlock: "mobile-structures", formulaType: "free", blockId: "one-sided-figure", name: 'Ростовая фигура односторонняя'},
    { parentBlock: "mobile-structures", formulaType: "free", blockId: "two-sided-figure", name: 'Ростовая фигура двусторонняя'},
    { parentBlock: "mobile-structures", formulaType: "atxp"  , blockId: "x-rack-s", name: 'Х-стойка 60х160 см с баннером', price: 2100, units: "шт.", inputname: "штук"},
    { parentBlock: "mobile-structures", formulaType: "atxp"  , blockId: "x-rack-l", name: 'Х-стойка 80х180 см с баннером', price: 3500, units: "шт.", inputname: "штук" },
    { parentBlock: "mobile-structures", formulaType: "atxp"  , blockId: "pavement-sign-one-sided", name: 'Штендер односторонний', price: 5500, units: "шт.", inputname: "штук" },
    { parentBlock: "mobile-structures", formulaType: "atxp"  , blockId: "pavement-sign-two-sided", name: 'Штендер двусторонний', price: 7000, units: "шт.", inputname: "штук" },
    { parentBlock: "mobile-structures", formulaType: "atxp"  , blockId: "roll-up-s", name: 'Roll Up классик 80х200 см', price: 3000, units: "шт.", inputname: "штук" },
    { parentBlock: "mobile-structures", formulaType: "atxp"  , blockId: "roll-up-l", name: 'Roll Up классик 120х200 см', price: 4000, units: "шт.", inputname: "штук" },

    //Печать
    { parentBlock: "printing", formulaType: "comp", blockId: "banner440", name: 'Баннер 440 гр/м', price: 300, units: "кв.м" },
    { parentBlock: "printing", formulaType: "comp", blockId: "banner510", name: 'Баннер 510 гр/м', price: 450, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "translucent-ban", name: 'Баннер транслюсцентный', price: 450, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "vinyl", name: 'Виниловая пленка', price: 500, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "vinyl-lam", name: 'Виниловая пленка с ламинацией', price: 800, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "vinyl-cut", name: 'Виниловая пленка с контурной резкой', price: 1200, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "vinyl-lam-cut", name: 'Виниловая пленка с ламинацией и контурной резкой', price: 1500, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "perforated-film", name: 'Перфорированная пленка', price: 500, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "translucent-film", name: 'Транслюсцентная пленка', price: 650, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "banner-grid", name: 'Сетка баннерная', price: 300, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "roll-plastic", name: 'Рулонный пластик', price: 1000, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "canvas", name: 'Холст', price: 1200, units: "кв.м" },
    { parentBlock: "printing", formulaType: "whp" , blockId: "photo-paper", name: 'Фотобумага', price: 800, units: "кв.м" },

    //Резка
    { parentBlock: "cutting", formulaType: "atxp", blockId: "plotter", name: 'Плоттерная резка', price: 2000, units: "кв.м", inputname: "метры"},
    { parentBlock: "cutting", formulaType: "complex", blockId: "frez-rez", name: 'Фрезерная резка', units: "пг.м.", inputname: "метры",
        materials: [
            { materialType: 'Акрил 3мм', matCode: 'mat-acrylic3', price: [48, 42, 36, 30] },
            { materialType: 'Акрил 5мм', matCode: 'mat-acrylic5', price: [58, 51, 43.5, 36.5] },
            { materialType: 'Акрил 10мм', matCode: 'mat-acrylic10', price: [82, 72, 61.5, 51.5] },
            { materialType: 'ПВХ 3мм', matCode: 'mat-pvx3', price: [30, 26.5, 22.5, 19] },
            { materialType: 'ПВХ 5мм', matCode: 'mat-pvx5', price: [42, 37, 31.5, 26.5] },
            { materialType: 'ПВХ 8мм', matCode: 'mat-pvx8', price: [54, 47.5, 40.5, 34] },
            { materialType: 'ПВХ 10мм', matCode: 'mat-pvx10', price: [58, 51, 43.5, 36.5] },
            { materialType: 'АКП 3-4мм', matCode: 'mat-akp', price: [45, 40, 34, 28.5] },
            { materialType: 'Фанера 10мм', matCode: 'mat-plywood10', price: [82, 72, 61.5, 51.5] },
            { materialType: 'Фанера 12мм', matCode: 'mat-plywood12', price: [85, 74.5, 64, 53.5] },
            { materialType: 'Фанера 21мм', matCode: 'mat-plywood21', price: [110, 96.5, 82.5, 69] }
        ]
    },
    { parentBlock: "cutting", formulaType: "complex", blockId: "laser-rez", name: 'Лазерная резка', price: 2000, units: "пг.м.", inputname: "метры",
        materials: [
            { materialType: 'Акрил 3мм', matCode: 'mat-acrylic3', price: [45, 39.5, 34, 28.5] },
            { materialType: 'Акрил 5мм', matCode: 'mat-acrylic5', price: [55, 48.5, 41.5, 34.5] },
            { materialType: 'Акрил 10мм', matCode: 'mat-acrylic10', price: [82, 72, 61.5, 51.5] },
            { materialType: 'ПЭТ 0,7-1мм', materialCode: 'mat-pet', price: [20, 17.5, 15, 12.5] },
            { materialType: 'ПЭТ 1,5мм', materialCode: 'mat-pet', price: [22, 20, 16.5, 14] },
            { materialType: 'Фанера 3мм', materialCode: 'mat-plywood3', price: [40, 35, 30, 25] },
            { materialType: 'Фанера 4мм', materialCode: 'mat-plywood4', price: [43, 38, 32.5, 27] },
            { materialType: 'Фанера 6мм', materialCode: 'mat-plywood6', price: [60, 52.5, 45, 37.5] }
        ] },
    { parentBlock: "cutting", formulaType: "whp", blockId: "engraving", name: 'Гравировка', price: 2.5 , units: "кв,см" },

     //Спецтехника
    { parentBlock: "special-equipment", formulaType: "atxp", blockId: "aerial-platform-s", name: 'Аренда автовышки 15 м', price: 2000, units: "час", inputname: "часы" },
    { parentBlock: "special-equipment", formulaType: "atxp", blockId: "aerial-platform-l", name: 'Аренда автовышки 30 м', price: 2500, units: "час", inputname: "часы" },

     //Монтаж
    { parentBlock: "mounting", formulaType: "free", blockId: "replacing-power", name: 'Замена блока питания'},
    { parentBlock: "mounting", formulaType: "free", blockId: "film-gluing", name: 'Поклейка пленки'},
    { parentBlock: "mounting", formulaType: "free", blockId: "instal-board", name: 'Монтаж вывески'},
    { parentBlock: "mounting", formulaType: "free", blockId: "outlet-design", name: 'Оформление торговой точки'},
    { parentBlock: "mounting", formulaType: "free", blockId: "outlet-design-comp", name: 'Комплексное оформление торговой точки'},
    { parentBlock: "mounting", formulaType: "free", blockId: "entrance-group", name: 'Оформление входной группы'},
    { parentBlock: "mounting", formulaType: "free", blockId: "commutation", name: 'Коммутация'},
    { parentBlock: "mounting", formulaType: "free", blockId: "rent-equipment", name: 'Аренда спецтехники'},
    { parentBlock: "mounting", formulaType: "free", blockId: "repair", name: 'Ремонт'},
    { parentBlock: "mounting", formulaType: "free", blockId: "replacement-lighting", name: 'Замена светотехники'},
    { parentBlock: "mounting", formulaType: "free", blockId: "dismantling", name: 'Демонтаж'},
    { parentBlock: "mounting", formulaType: "free", blockId: "mount-banner-screws", name: 'Монтаж баннера на саморезы'},
    { parentBlock: "mounting", formulaType: "free", blockId: "mount-banner-lacing", name: 'Монтаж баннера шнурованием'},
    { parentBlock: "mounting", formulaType: "free", blockId: "gallery-stretch", name: 'Галерейная натяжка'},
    { parentBlock: "mounting", formulaType: "free", blockId: "mount", name: 'Монтаж'},

    //Доставка
    { parentBlock: "delivery", formulaType: "free", blockId: "packaging", name: 'Упаковка'},
    { parentBlock: "delivery", formulaType:  "atxp" , blockId: "delivery-s", name: 'Доставка мелкого груза', price: 500, units: "шт", inputname: "штук" },
    { parentBlock: "delivery", formulaType:  "atxp" , blockId: "delivery-l", name: 'Доставка грузовиком', price: 1500, units: "шт", inputname: "штук" },


    //Дизайн
    { parentBlock: "design", formulaType:  "atxp" , blockId: "layout-simple", name: 'Макет простой', price: 800, units: "шт", inputname: "штук" },
    { parentBlock: "design", formulaType: "free", blockId: "design-project", name: 'Дизайн-проект'},
    { parentBlock: "design", formulaType: "free", blockId: "sketch", name: 'Эскизный проект'},
    { parentBlock: "design", formulaType: "free", blockId: "matching", name: 'Согласование рекламно информационных конструкций'},
    { parentBlock: "design", formulaType: "free", blockId: "architectural-project", name: 'Архитектурный проект'},
    { parentBlock: "design", formulaType:  "atxp" , blockId: "layout-one-side", name: 'Макет визитки односторонней', price: 800, units: "шт", inputname: "штук" },
    { parentBlock: "design", formulaType:  "atxp" , blockId: "layout-double-side", name: 'Макет визитки двусторонней', price: 1000, units: "шт", inputname: "штук" },
    { parentBlock: "design", formulaType:  "atxp" , blockId: "layout-ban-simple", name: 'Макет баннера простой', price: 1000, units: "шт", inputname: "штук" },
    { parentBlock: "design", formulaType:  "atxp" , blockId: "layout-ban", name: 'Макет баннера', price: 1500, units: "шт", inputname: "штук" },
    { parentBlock: "design", formulaType:  "atxp" , blockId: "rendering-logo", name: 'Отрисовка логотипа', price: 1500, units: "шт", inputname: "штук" },
    { parentBlock: "design", formulaType: "free", blockId: "layout-sign", name: 'Макет вывески'},
    { parentBlock: "design", formulaType: "free", blockId: "development-logo", name: 'Разработка логотипа'},


    //Светотехника
    { parentBlock: "lighting-engineering", formulaType: "free", blockId: "dynamic-controller", name: 'Контроллер динамический'},
    { parentBlock: "lighting-engineering", formulaType: "free", blockId: "controller-prog", name: 'Программирование контроллера'},
    { parentBlock: "lighting-engineering", formulaType: "free", blockId: "power-supply", name: 'Блок питания'},
    { parentBlock: "lighting-engineering", formulaType: "atxp", blockId: "projector", name: 'Прожектор', price: 2300, units: "шт", inputname: "штук" },
    { parentBlock: "lighting-engineering", formulaType: "atxp", blockId: "projector-spotlight", name: 'Прожектор с выносом', price: 2800, units: "шт", inputname: "штук" },



    //торговое оборудование
    { parentBlock: "trade-software", formulaType: "free", blockId: "making-rec", name: 'Изготовления ресепшена'},
    { parentBlock: "trade-software", formulaType: "free", blockId: "making-ts", name: 'Изготовление торгового оборудования'},
    { parentBlock: "trade-software", formulaType: "free", blockId: "making-wr", name: 'Изготовления сварного стеллажа'},
    { parentBlock: "trade-software", formulaType: "free", blockId: "making-rack", name: 'Изготовления стеллажа'},

    //Полиграфия
    { parentBlock: "polygrahy", formulaType: "free", blockId: "making-flier-os", name: 'Изготовления листовок односторонних'},
    { parentBlock: "polygrahy", formulaType: "free", blockId: "making-flier-ds", name: 'Изготовления листовок двусторонних'},
    { parentBlock: "polygrahy", formulaType: "free", blockId: "making-card-os", name: 'Изготовления визиток односторонних'},
    { parentBlock: "polygrahy", formulaType: "free", blockId: "making-card-ds", name: 'Изготовления визиток двусторонних'},

    //Брендирование автомобилей
    { parentBlock: "auto-branding", formulaType: "free", blockId: "ab-option", name: 'Брендирование автомобилей'},

    //Вознаграждение
    { parentBlock: "reward", formulaType: "free", blockId: "rew-option", name: 'Вознаграждение'},

    //Аванс за изготовление вывески
    { parentBlock: "advance", formulaType: "free", blockId: "adv-option", name: 'Аванс за изготовление вывески'},

    //Доплата за изготовления вывески
    { parentBlock: "surcharge", formulaType: "free", blockId: "sc-option", name: 'Доплата за изготовления вывески'}

    // { parentBlock: "", formulaType: "", blockId: "", name: '', price: , units: "" },
];