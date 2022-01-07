function loadContact() {
    const contact = document.createElement("div");
    contact.className = "content-contact";
    contact.textContent = "CONTACT TBD";

    const content = document.querySelector('#content');
    content.appendChild(contact);
}

export default loadContact;