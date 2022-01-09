function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

function loadMenu() {
    const menu = document.createElement("div");
    menu.className = "content-menu";

    const looseLeaf = document.createElement("div");
    looseLeaf.className = "loose-leaf";
    const looseLeafCat = document.createElement("div");
    looseLeafCat.className = "category";
    looseLeafCat.textContent = "Loose Leaf Tea";
    looseLeaf.appendChild(looseLeafCat);
    looseLeaf.appendChild(createParagraph("Irish breakfast"));
    looseLeaf.appendChild(createParagraph("Lady gray"));
    looseLeaf.appendChild(createParagraph("Brussels breakfast"));
    looseLeaf.appendChild(createParagraph("Vanilla almond"));
    looseLeaf.appendChild(createParagraph("Earl gray"));
    looseLeaf.appendChild(createParagraph("Chamomile mint"));
    looseLeaf.appendChild(createParagraph("Lemongrass"));

    const sigDrinks = document.createElement("div");
    sigDrinks.className = "sig-drinks";
    const sigDrinksCat = document.createElement("div");
    sigDrinksCat.className = "category";
    sigDrinksCat.textContent = "Signature Drinks";
    sigDrinks.appendChild(sigDrinksCat);
    sigDrinks.appendChild(createParagraph("Dirty chai"));
    sigDrinks.appendChild(createParagraph("Lavender tea latte"));
    sigDrinks.appendChild(createParagraph("Rose tea latte"));
    sigDrinks.appendChild(createParagraph("Cinnamon oatmilk tea latte"));
    sigDrinks.appendChild(createParagraph("Marzipan tea latte"));
    sigDrinks.appendChild(createParagraph("Raspberry ribbon tea latte"));

    const nonTea = document.createElement("div");
    nonTea.className = "non-tea";
    const nonTeaCat = document.createElement("div");
    nonTeaCat.className = "category";
    nonTeaCat.textContent = "Non Tea";
    nonTea.appendChild(nonTeaCat);
    nonTea.appendChild(createParagraph("Hot chocolate"));
    nonTea.appendChild(createParagraph("Vanilla steamer"));
    nonTea.appendChild(createParagraph("Chestnut steamer"));

    const pastries = document.createElement("div");
    pastries.className = "pastries";
    const pastriesCat = document.createElement("div");
    pastriesCat.className = "category";
    pastriesCat.textContent = "Pastries";
    pastries.appendChild(pastriesCat);
    pastries.appendChild(createParagraph("Almond croissant"));
    pastries.appendChild(createParagraph("Pain au chocolat"));
    pastries.appendChild(createParagraph("Princess cake"));
    pastries.appendChild(createParagraph("Sacher torte"));
    pastries.appendChild(createParagraph("Rainbow cake"));
    pastries.appendChild(createParagraph("Jammy biscuits"));
    pastries.appendChild(createParagraph("Raspberry millefeuille"));
    pastries.appendChild(createParagraph("Five perfect macarons"));

    const breads = document.createElement("div");
    breads.className = "breads";
    const breadsCat = document.createElement("div");
    breadsCat.className = "category";
    breadsCat.textContent = "Breads";
    breads.appendChild(breadsCat);
    breads.appendChild(createParagraph("Rye bagel"));
    breads.appendChild(createParagraph("Bialy"));
    breads.appendChild(createParagraph("Ciabatta breaksticks"));
    breads.appendChild(createParagraph("Garlic bread"));

    menu.appendChild(looseLeaf);
    menu.appendChild(sigDrinks);
    menu.appendChild(nonTea);
    menu.appendChild(pastries);
    menu.appendChild(breads);

    const content = document.querySelector('#content');
    content.appendChild(menu);
}

export default loadMenu;