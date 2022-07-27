const overlay = document.querySelector("#pavle");

let verticalScroll = 0;

const images = document.getElementsByClassName("opacity-30");

window.addEventListener("scroll", () => {
  verticalScroll = window.scrollY;
  if (verticalScroll > 0) {
    console.log(images);
    document.querySelector("#title").style.display = "none";
    document.querySelector("header").style.display = "none";
    for (item of images) {
      item.style.opacity = "1";
    }
  } else {
    document.querySelector("#title").style.display = "flex";
    document.querySelector("header").style.display = "block";
    for (item of images) {
      item.style.opacity = "0.3";
    }
  }
});
