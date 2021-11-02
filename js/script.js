/* 
Consegna L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).
*/

/* 
con difficoltà 1 => tra 1 e 100  10x10
con difficoltà 2 => tra 1 e 81   9x9
con difficoltà 3 => tra 1 e 49   7x7

-creo una funzione che mi genera un elemento e aggiunge una classe
    -potro andare a mettere i parametri:
        dell'elemento
        della classe
-creo una funzione con un ciclo for che mi vada a riempire il container di quadrati
    -potro andare a mettere i parametri:
        quante iterazioni deve fare

-creo un event listener click al pulsante easy
    -vado a inserire la funzione del ciclo mettendo i parametri di 100 iterazioni
-creo un event listener click al pulsante medium
    -vado a inserire la funzione del ciclo mettendo i parametri di 81 iterazioni
-creo un event listener click al pulsante hard
    -vado a inserire la funzione del ciclo mettendo i parametri di 49 iterazioni

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
potrei anche creare una funzione con i parametri che posso cambiare in base al pulsante premuto e alle iterazioni che deve fare
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*/

const sqrCont = document.getElementById("sqr-container");
const esBtn = document.getElementById("easy-btn")
const mdBtn = document.getElementById("medium-btn")
const hrBtn = document.getElementById("hard-btn")

/* let cicleEasy = cicleLimited (100, "sqr-easy");
let cicleMedium = cicleLimited (81, "sqr-medium");
let cicleHard = cicleLimited (49, "sqr-hard"); */


esBtn.addEventListener("click",
    function(){
        let cicleEasy = cicleLimited (100, "sqr-easy");
        return cicleEasy;
    }
)

mdBtn.addEventListener("click",
    function(){
        let cicleMedium = cicleLimited (81, "sqr-medium");
        return cicleMedium;
    }
)

hrBtn.addEventListener("click",
    function(){
        let cicleHard = cicleLimited (49, "sqr-hard");
        return cicleHard;
    }
)





function cicleLimited (cicles, classAssign2){
    for(i=0; i<cicles; i++){
        let eleDiv = elementGenerator ("div", classAssign2);
        sqrCont.append(eleDiv);
        console.log(eleDiv);

        eleDiv.addEventListener("click",
            function(){
                eleDiv.classList.add("active")
                console.log(eleDiv);
            }
        );
    } 
    
}


function elementGenerator (eleGen, classAssign){
    let square = document.createElement(eleGen);
    square.classList.add(classAssign);
    return square;
}

