// @ts-nocheck
//Les variables de Base //

const maTache = document.querySelector("Tache");
const monBouton = document.querySelector("monBouton");
const listeTache = document.querySelector("maListe");

monBouton.addEventListener("click", () => {
  if ((maTache = "")) {
    alert("Veuillez rentrer une tâche");
  }
});
