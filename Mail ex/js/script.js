// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.




// Creo array con le mail che potranno accedere 

const listaMail = ["io@gmail.com", "andrea@gmail.com", "scarpandrea.1996@hotmail.com"];

let festaJs = document.getElementById("festa");
let emailDaInserire = document.getElementById("inserisci_mail");
const invioJs = document.getElementById("invio");


let emailinLista = 0;
// console.log(emailinLista);
let emailInserita = emailDaInserire.value;
invioJs.addEventListener ("click",
    function (){

    emailInserita = emailDaInserire.value;
    // console.log(emailInserita);
    
    for (let i=0; i < listaMail.length ; i++ ){
        // console.log(listaMail[i]);
        if (emailInserita === listaMail[i]) {
            emailinLista = 1;
            console.log(emailinLista);
        }
    }
    if ( emailinLista === 1 ) {
        festaJs.innerHTML= `Complimenti ! La tua mail è inserita nella lista `;
    } else {
        festaJs.innerHTML=`Purtroppo non sei in lista`;
    }
    }
    
)


       
        



        
    //   for ( i = 0; i < listaMail.length ; i++) {
    //         if (emailInserita === listaMail[i]){
    //             emailinLista = 1;
    //             console.log(emailinLista);
    //         } else {
    //             emailinLista = 1;
    //             console.log(emailinLista);
    //         }
    //     }

