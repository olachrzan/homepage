console.log("Hej! Cieszę się, że tu zajrzałeś :) Daj znać co myślisz o kodzie strony");

let body = document.querySelector(".js-body");
let button = document.querySelector(".js-button");
let mainContainer = document.querySelector(".js-mainContainer");
let header = document.querySelectorAll(".js-header");
let tableCellHeader = document.querySelectorAll(".js-table__cell--header");
let navigation = document.querySelector(".js-navigation");
let footer = document.querySelector(".js-footer");

button.addEventListener("click", () => {
   body.classList.toggle("body--darkMode");
   mainContainer.classList.toggle("mainContainer--darkMode");
   navigation.classList.toggle("navigation--darkMode");
   footer.classList.toggle("footer--darkMode");
   button.classList.toggle("button--darkMode");
   button.innerText = body.classList.contains("body--darkMode") ? "Jaśniejsze tło" : "Ciemniejsze tło";
});

header.forEach(item => {
   button.addEventListener('click', () => {
      item.classList.toggle("header--darkMode")
   })
});

tableCellHeader.forEach(item => {
   button.addEventListener('click', () => {
      item.classList.toggle("table__cell--darkmode")
   })
});