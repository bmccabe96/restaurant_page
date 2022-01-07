import loadWebsite from "./website";

loadWebsite("initial");


const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.addEventListener("click", () => {
    loadWebsite("home");
});

menuBtn.addEventListener("click", () => {
    loadWebsite("menu");
});

contactBtn.addEventListener("click", () => {
    loadWebsite("contact");
});