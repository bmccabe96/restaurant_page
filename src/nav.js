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

function loadNav() {
    const content = document.querySelector('#content');
    content.appendChild(createNav());
}

export default loadNav;