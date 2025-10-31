// @ts-nocheck
//Les variables de Base //

const maTache = document.querySelector("#Tache");
const monBouton = document.querySelector("#monBouton");
const listeTache = document.querySelector("#maListe");

// Creer le clic //
let Tasks = [];

function ajouterTache() {
  const texte = maTache.value.trim();
  if (texte === "") {
    alert("Veuillez rentrer un tâche");
  } else {
    Tasks.push(texte);
    const NouvelleTask = document.createElement("li");
    NouvelleTask.textContent = texte;
    listeTache.appendChild(NouvelleTask);

    const AddDelete = document.createElement("button");

    AddDelete.textContent = "Supprimer";

    NouvelleTask.appendChild(AddDelete);
    AddDelete.addEventListener("click", () => {
      NouvelleTask.remove();
    });
    maTache.value = "";
  }
}
monBouton.addEventListener("click", ajouterTache);
maTache.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    ajouterTache(maTache.value);
  }
});
