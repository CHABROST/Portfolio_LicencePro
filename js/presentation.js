/*Variable qui permet la création de liste d'images (puces des listes) */
let pucesComp =  document.querySelectorAll('#MyKnowledge li');
let tabComp =["../img/Web_Dev.png","../img/prog_language.png","../img/database.png","../img/language.png","../img/Office-icon.png","../img/relationship.png"];

let pucesHobby =  document.querySelectorAll('#myHobbys li');
let tabHobby =["../img/archery.png","../img/voyage.png","../img/artistic-icon.png"];

/**
* Permet de créer une "puce image" différente pour chaque élément
* des listes "Compétence" et "Loisirs" 
*/
function changePuce(){

    /* Lance la création pour la liste des Compétences */
    if(tabComp.length!=null)
    {
        pucesComp.forEach((elt, nb) => {
            (tabComp[nb]!=null) ?
                elt.style.background='url("'+tabComp[nb]+'") no-repeat left center':
                elt.style.background='url("'+tabComp[0]+'") no-repeat left center';
        });
    }

    /* Lance la création pour la liste des loisirs */
    if(tabHobby.length!=null)
    {
        pucesHobby.forEach((elt, nb) => {
            (tabHobby[nb]!=null) ?
                elt.style.background='url("'+tabHobby[nb]+'") no-repeat left center':
                elt.style.background='url("'+tabHobby[0]+'") no-repeat left center';
        });
    }
};

/**
* Lance au chargement de la page la fonction changePuce
*/
window.onload = function(){
    changePuce();
}