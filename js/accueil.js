let btnMore = document.getElementById("btn_DecouvrezMoi");

let btnComp = document.getElementById("btn_Competence");
let btnPass = document.getElementById("btn_Passions");
let btnProj = document.getElementById("btn_Project");
let btnContact = document.getElementById("btn_Contact");

/**
* Permet la redirection vers la "section info" de la page index.html
* au click sur le bouton "en savoir plus" de la "flip card"
*/
btnMore.addEventListener("click",function(){
    window.location.href="index.html#section_info";
});

/**
* Permettent la redirection vers la section correspondante sur une autre page
* au click sur le bouton des différentes "Card"
*/
btnComp.addEventListener("click",function(){
    window.location.href="Presentation.html#section_comp";
});

btnPass.addEventListener("click",function(){
    window.location.href="Presentation.html#section_loisir";
});

btnProj.addEventListener("click",function(){
    window.location.href="projets.html";
});

btnContact.addEventListener("click",function(){
    window.location.href="Contact.html";
});