import loadNav from "./nav";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";


function removeContentNode() {
    const content = document.querySelector("#content");
    content.removeChild(content.childNodes[2]); // content section always 3rd element
}

function loadWebsite(input) {
    if (input === "initial") {
        loadNav();
        tabSelected("home");
        loadHome();
    }
    else if (input === "home") {
        removeContentNode();
        tabSelected("home");
        loadHome();
    } else if (input === "menu") {
        removeContentNode();
        tabSelected("menu");
        loadMenu();
    } else {
        removeContentNode();
        tabSelected("contact");
        loadContact();
    }

}

function tabSelected(tab) {
    const tabs = document.querySelector(".tabs").childNodes;
    for (let i=0; i<tabs.length; i++) {
        if (tabs[i].classList[0] === tab) {
            tabs[i].classList.add("selected");
        }
        else {
            tabs[i].classList.remove("selected");
        }
    }
}

export default loadWebsite;