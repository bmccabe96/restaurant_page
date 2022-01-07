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
        loadHome();
    }
    else if (input === "home") {
        removeContentNode();
        loadHome();
    } else if (input === "menu") {
        removeContentNode();
        loadMenu();
    } else {
        removeContentNode();
        loadContact();
    }

    
}

export default loadWebsite;