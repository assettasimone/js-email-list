/* 
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap,
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre),

Buon divertimento e confermate lettura come al solito  */


//conservo l'indirizzo API in una variabile

const APIUrl = "https://flynn.boolean.careers/exercises/api/random/mail";

//test Chiamata API con Fetch

fetch(APIUrl)
    .then(Response => Response.json())
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.error(error);
    })