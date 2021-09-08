{
   console.log("Hej! Cieszę się, że tu zajrzałeś :) Daj znać co myślisz o kodzie strony");

   const button = document.querySelector(".js-button");
   const header = document.querySelectorAll(".js-section__header");
   const tableCellHeader = document.querySelectorAll(".js-table__cell--header");

   const setDarkMode = () => {
      const body = document.querySelector(".js-body");
      const mainContainer = document.querySelector(".js-mainContainer");
      const navigation = document.querySelector(".js-navigation");
      const footer = document.querySelector(".js-footer");
      
      body.classList.toggle("body--darkMode");
      mainContainer.classList.toggle("mainContainer--darkMode");
      navigation.classList.toggle("navigation--darkMode");
      footer.classList.toggle("footer--darkMode");
      button.classList.toggle("button--darkMode");
      button.innerText = body.classList.contains("body--darkMode") ? "Jaśniejsze tło" : "Ciemniejsze tło";
   };

   header.forEach(item => {
      button.addEventListener('click', () => {
         item.classList.toggle("section__header--darkMode")
      })
   });

   tableCellHeader.forEach(item => {
      button.addEventListener('click', () => {
         item.classList.toggle("table__cell--darkmode")
      })
   });

   const init = () => {
      button.addEventListener("click", setDarkMode);
   };

   init();
}