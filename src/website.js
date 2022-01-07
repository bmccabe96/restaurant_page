function createNav () {
    const nav = document.createElement("div");
    nav.className = "nav";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "Eve's Leaves";

    const tabs = document.createElement("div");
    tabs.className = "tabs";
    const home = document.createElement("button");
    home.className = "home";
    home.textContent = "Home";
    const menu = document.createElement("button");
    menu.className = "menu";
    menu.textContent = "Menu";
    const contact = document.createElement("button");
    contact.className = "contact";
    contact.textContent = "Contact";
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    nav.appendChild(title);
    nav.appendChild(tabs);

    return nav;

}

function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

function createHome() {
    const home = document.createElement("div");
    home.className = "content-home";

    const eveImage = document.createElement("img");
    eveImage.src = "images/IMG_0771.JPG";
    eveImage.alt = "Chef Eve";

    home.appendChild(createParagraph("Best tea in town"));
    home.appendChild(createParagraph("Brewed to perfection for 20 years"));
    home.appendChild(eveImage);
    home.appendChild(createParagraph("Come try it today!"));

    const content = document.querySelector('#content');
    content.appendChild(createNav());
    content.appendChild(home);
}

export default createHome;