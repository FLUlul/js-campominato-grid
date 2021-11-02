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
    -vado a inserire la funzione del ciclo mettendo i parametri di 100 iterazioni e la classe specifica
    -vado a disabilitare gli altri pulsanti

-creo un event listener click al pulsante medium
    -vado a inserire la funzione del ciclo mettendo i parametri di 81 iterazioni e la classe specifica
    -vado a disabilitare gli altri pulsanti

-creo un event listener click al pulsante hard
    -vado a inserire la funzione del ciclo mettendo i parametri di 49 iterazioni e la classe specifica
    -vado a disabilitare gli altri pulsanti

-creo un event listener per il pulsante reset che mi reloadi la pagina per selezionare un'altro livello

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
potrei anche creare una funzione con i parametri che posso cambiare in base al pulsante premuto e alle iterazioni che deve fare
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

*/

const sqrCont = document.getElementById("sqr-container");
const easyBtn = document.getElementById("easy-btn");
const mediumBtn = document.getElementById("medium-btn");
const hardBtn = document.getElementById("hard-btn");
const resetBtn = document.getElementById("reset-btn");

easyBtn.addEventListener("click",
    function(){
        let cicleEasy = generateSquares(100, "sqr-easy");
        easyBtn.classList.add("active");
        buttonDisable (easyBtn, mediumBtn, hardBtn);
        return cicleEasy;
    }
);

mediumBtn.addEventListener("click",
    function(){
        let cicleMedium = generateSquares(81, "sqr-medium");
        mediumBtn.classList.add("active");
        buttonDisable (easyBtn, mediumBtn, hardBtn);
        return cicleMedium;
    }
);

hardBtn.addEventListener("click",
    function(){
        let cicleHard = generateSquares(49, "sqr-hard");
        hardBtn.classList.add("active");
        buttonDisable (easyBtn, mediumBtn, hardBtn);
        return cicleHard;
    }
);

resetBtn.addEventListener("click",
    function(){
        location.reload();
    }
);

function buttonDisable (buttonOne, buttonTwo, buttonThree){
    buttonOne.setAttribute("disabled", "");
    buttonTwo.setAttribute("disabled", "");
    buttonThree.setAttribute("disabled", "");
}

function generateSquares(maxCicles, defaultClass){
    for(i=1; i<=maxCicles; i++){
        let eleDiv = elementGenerator("div", defaultClass);
        let eleSpan = elementGenerator("span", "dnone");
        sqrCont.append(eleDiv);
        eleDiv.append(eleSpan);
        eleSpan.append(i);
        /* console.log(eleDiv); */

        eleDiv.addEventListener("click",
            function(){
                eleDiv.classList.add("active");
                eleSpan.classList.remove("dnone");
                /* console.log(eleDiv); */
            }
        );
    } 
    
}


function elementGenerator(element, className){
    let item = document.createElement(element);
    item.classList.add(className);
    return item;
}

