function loadMenu() {
    const menu = document.createElement("div");
    menu.className = "content-menu";
    menu.textContent = "MENU TBD";

    const content = document.querySelector('#content');
    content.appendChild(menu);
}

export default loadMenu;