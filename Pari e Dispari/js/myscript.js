
//funzione che controlla se l'utente ha inserito pari o dispari

function controllaScelta(sceltaUser){
     
    if((sceltaUser!= "pari") && (sceltaUser!= "dispari")){

        return alert("scegli o pari o dispari");

    }
    return sceltaUser
};

let risultato = "";
do{
    sceltaUser  = prompt("inserisci pari o dispari: ");
    risultato   = controllaScelta(sceltaUser);  

}while( ( risultato != "pari") && ( risultato != "dispari") );


let numero = Math.abs(parseInt(prompt("inserisci un numero")));
function randomNum(){
    let num = Math.floor(Math.random()*5)+1;
    return num;
}

function somma(numUno,numDue){
    let sum = Math.abs(numUno + numDue);
    return sum;
}


let risultatoSomma = somma(randomNum(),numero);

function vincitore(risultatoSomma,risultato){

    if( ((risultatoSomma%2==0) && (risultato == "pari")) || ((risultatoSomma%2!=0) && (risultato == "dispari")) ){
        document.getElementById("numero").innerHTML = "hai scelto "+ risultato +" ed è uscito il numero "+risultatoSomma;
        document.getElementById("risultato").inner.innerHTML = "HAI VINTO"
    } else {
        document.getElementById("numero").innerHTML = "hai scelto "+ risultato +" ed è uscito il numero "+risultatoSomma;
        document.getElementById("risultato").innerHTML = "HAI PERSO"
    } ;   
};

vincitore(risultatoSomma,risultato);



