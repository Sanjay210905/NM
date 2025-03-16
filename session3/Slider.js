const con = document.getElementById("container");
const miniImg = document.getElementsByClassName("myimg");

let img = [
  "https://wallpaperaccess.com/full/1872757.jpg",
  "https://wallpaperaccess.com/full/2663418.jpg",
  "https://wallpaperaccess.com/full/2663401.jpg",
  "https://wallpaperaccess.com/full/957416.png",
];

let i = 0;

function next() {
  miniImg[i].classList.remove("active");
  i++;
  if (i == img.length) {
    i = 0;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = `url("${img[i]}")`;
  con.style.transitionDuration = "1s";
}

function prev() {
  miniImg[i].classList.remove("active");
  i--;
  if (i < 0) {
    i = img.length - 1;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = `url("${img[i]}")`;
  con.style.transitionDuration = "1s";
}

document.querySelector(".prev").addEventListener("click", prev);
