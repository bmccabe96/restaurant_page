function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

function loadHome() {
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
    content.appendChild(home);
}

export default loadHome;