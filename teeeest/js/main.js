let i = document.querySelector("i");
let body = document.querySelector("body");
let mainDiv = document.querySelector(".mainDiv");

let theme = () => {
  i.classList.toggle("black");
  mainDiv.classList.toggle("whiteDiv");
};
i.addEventListener("click", theme);
