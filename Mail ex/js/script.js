// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.




// Creo array con le mail che potranno accedere 

const listaMail = ["io@gmail.com", "andrea@gmail.com", "scarpandrea.1996@hotmail.com"];

let festaJs = document.getElementById("festa");
let emailDaInserire = document.getElementById("inserisci_mail");
const invioJs = document.getElementById("invio");


let emailinLista = 0;


invioJs.addEventListener ("click",
    function (){
        
        let emailInserita = emailDaInserire.value;
        console.log(emailInserita);

        for ( let i = 0; i < listaMail.length ; i++) {
            
            if ( emailInserita === listaMail[i]){
                emailinLista = 1;
            } 
        }
        if ( emailinLista === 1 ) {
            festaJs.innerHTML=`Complimenti, sei nella lista! `;
        } else {
            festaJs.innerHTML=`Mi dispiace non sei nella lista `;
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

