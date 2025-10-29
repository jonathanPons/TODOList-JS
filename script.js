// @ts-nocheck
//Les variables de Base //

const maTache = document.querySelector("#Tache");
const monBouton = document.querySelector("#monBouton");
const listeTache = document.querySelector("#maListe");

// Creer le clic //

monBouton.addEventListener("click", () => {
  // Recuperer la donné de l'utilisateur dans l'input au clic sur le button//
  const Task = maTache.value.trim();
  // S'assurer que le texte n'est pas vide //
  if (Task === "") {
    alert("Veuillez rentrer un tâche");
  } else {
    // Creer un nouvelle li //
    const NouvelleTask = document.createElement("li");

    // definir le li comme la nouvelle tache //
    NouvelleTask.textContent = Task;
    // la placer la liste ul//
    listeTache.appendChild(NouvelleTask);
    console.log(listeTache.appendChild(NouvelleTask));
    // AJouter la touche supprimer avec chaque task//

    const AddDelete = document.createElement("button");

    AddDelete.textContent = "Suppimer";
    console.log(AddDelete);
    NouvelleTask.appendChild(AddDelete);

    AddDelete.addEventListener("click", () => {
      NouvelleTask.remove(Task);
    });

    //Vider l'input
    maTache.value = "";
  }
});
