function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

function loadContact() {
    const contact = document.createElement("div");
    contact.className = "content-contact";

    contact.appendChild(createParagraph("(123) 456 - 7890"));
    contact.appendChild(createParagraph("eve@evesleaves.com"));
    contact.appendChild(createParagraph("123 MacDougal Street"));


    const content = document.querySelector('#content');
    content.appendChild(contact);
}

export default loadContact;