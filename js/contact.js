/* variable du formulaire */
let nom = document.getElementById("name");
let prenom = document.getElementById("firstName");
let message = document.getElementById("message");
let valid = document.getElementById("submit");

/* variable reponse formulaire */

let result = document.getElementById("variableForm");

/**
* Fonction lancé au click sur le bouton valider
*/
valid.addEventListener("click",function(e){
    e.preventDefault(); /* Annule l'événement par défaut */


    /* Si tous les champs souhaité ne sont pas vide alors affiche la réponse */
    if(nom.value!="" && prenom.value!="" && message.value!=""){
        var genre;

        /* Verifie le genre sélectionné */
        if(document.getElementById("Mme").checked==true){
            genre="Madame";
        }else if(document.getElementById("M").checked==true){
            genre="Monsieur";
        }

        /* Implémente la réponse à afficher */
        result.innerHTML="Bonjour "+genre+" "+nom.value+" "+prenom.value+", Malheureusement votre message : <p>''"+ message.value+"''</p> ne peut etre envoyé en l'absence de PHP."

        /* Affiche l'élément "réponse" */
        document.getElementById("reponseForm").style.display="block";
    }
    /* Sinon */
    else{
        /* Cache l'élément "réponse" */
        document.getElementById("reponseForm").style.display="none";

        /* Si rien n'est complété */
        if(nom.value=="" && prenom.value=="" && message.value==""){
            alert("Veuillez vous identitfiez et écrire votre message");
        }
    
        /* Si le message est vide */
        else if(message.value==""){
            /* Si les champs nom et prénom ne sont pas vide */
            if(nom.value!="" && prenom.value!=""){
                alert("Veuillez écrire un message");
            }
            /* Si un des champs nom et prénom est vide */
            else{
                alert("Veuillez finir votre identitfication et écrire votre message");
            }
        }
        /* Si le message n'est pas vide */
        else if(message.value!=""){   
            /* Si le nom ou le prenom est vide */ 
            if(nom.value=="" || prenom.value==""){
                alert("Veuillez terminer votre identitfication");
            }
        }
    }
})

/**
* Fonction lancé au chargement de la page Contact
*/
window.onload= function(){
    /*Cache l'élément "réponse" */
    document.getElementById("reponseForm").style.display="none";
}