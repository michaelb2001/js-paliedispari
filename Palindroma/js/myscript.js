bottone = document.getElementById("controlla");

bottone.addEventListener("click",function(){

    str = document.getElementById("parola").value;

    strContrario = revString(str);

    if(strContrario == str){
        alert("la parola è palindroma");
    } else{
        alert("la parola non è palindroma");
    };
});

function revString(stringa) {
     return stringa.split("").reverse().join("");
}

