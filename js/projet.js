/* Liste des boutons du "collapse"  */
let collapse_Elt = document.getElementsByClassName("btn_collapse");

/* Pour chaque bouton "1" */
for (let i = 0; i < collapse_Elt.length; i++) {

    /* ajoute un evenement click */
    collapse_Elt[i].addEventListener("click", function() {

        /* pour chaque bouton "2" */
        for (let j = 0; j < collapse_Elt.length; j++) {

            /* Si le bouton "1" n'est pas le bouton "2" */
            if(collapse_Elt[i]!=collapse_Elt[j]){

                /* 
                    Si le bouton "2" est activé, on le désactive
                    et on cache "le projet" correspondant
                */
                if(collapse_Elt[j].classList=='btn_collapse active'){
                    collapse_Elt[j].classList.toggle("active");

                    var otherProjet = collapse_Elt[j].nextElementSibling;
                    otherProjet.style.display = "none";
                }
            }            
            else{

                /* On inverse l'état actuel du bouton (activé/desactivé) */
                this.classList.toggle("active");
                var projCourant = this.nextElementSibling;

                /* On inverse l'affichage de projet correspondant (visible/caché) */
                if (projCourant.style.display === "block") {
                    projCourant.style.display = "none";
                } else {
                    projCourant.style.display = "block";
                }
            }
        }
    });
}