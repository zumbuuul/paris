const overlay = document.querySelector("#pavle");

let verticalScroll = 0;

const images = document.getElementsByClassName("opacity-30");
const hamburger = document.querySelector("#hamburger");
const hiddencard = document.querySelector("#hiddencard");

window.addEventListener("scroll", () => {
  verticalScroll = window.scrollY;
  if (verticalScroll > 0) {
    document.querySelector("header").classList.add("urke");
    document.querySelector("header").classList.remove("velja");
    document.querySelector("#title").classList.add("urke");
    document.querySelector("#title").classList.remove("velja");
    for (item of images) {
      item.classList.remove("odzi");
      item.classList.add("japa");
    }
  } else {
    document.querySelector("header").classList.remove("urke");
    document.querySelector("header").classList.add("velja");
    document.querySelector("#title").classList.add("velja");
    document.querySelector("#title").classList.remove("urke");

    for (item of images) {
      item.classList.add("odzi");
      item.classList.remove("japa");
    }
  }
});
let opened = false;
hamburger.addEventListener("click", () => {
  if (opened == false) {
    console.log("press");
    opened = true;
    hiddencard.style.display = "flex";
  } else {
    opened = false;
    hiddencard.style.display = "none";
  }
});
