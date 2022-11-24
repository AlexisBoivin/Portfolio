const bouton = document.getElementsByClassName('boutonMail');

bouton = addEventListener('click', apparitionForm)

function apparitionForm(e){
    bouton.classList.toggle("formulaire")
}