let buttonValider = document.querySelector(".btn-valider")
let resultatParagraphe = document.createElement("p")
let divAffichage = document.querySelector(".div-affichage")

divAffichage.display = "none"

buttonValider.addEventListener("click", () => {
    const nombre1 = document.querySelector("#nombre1")
    const operateur = document.querySelector("#operateur")
    const nombre2 = document.querySelector("#nombre2")
    let resultat;

    function affichage(reponse) {
        resultatParagraphe.innerText = `Le résultat est : ${reponse}`
        divAffichage.appendChild(resultatParagraphe)
    }

    divAffichage.display = ""
    
    switch (operateur.value){
        case "+":
            resultat = Number(nombre1.value) + Number(nombre2.value)
            affichage(resultat)
            break;
        case "-":
            resultat = Number(nombre1.value) - Number(nombre2.value)
            affichage(resultat)
            break;
        case "*":
            resultat = Number(nombre1.value) * Number(nombre2.value)
            affichage(resultat)
            break;
        case "/":
            resultat = Number(nombre1.value) / Number(nombre2.value)
            if ( resultat == Infinity ){
                affichage("Impossible")
            }else if (resultat === NaN){
                affichage("LOL")
            }else{
                affichage(resultat)
            }
            break;
    }

    window.addEventListener("change", () => {
        resultat = 0
    })
})

