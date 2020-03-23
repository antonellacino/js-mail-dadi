//2 Gioco dei dadi, chi fa di più vince.

//numero scelto dall'utente
var numUser = Math.floor(Math.random()*6);
//numero del pc
var numPc = Math.floor(Math.random()*6);
//confronto dei due numeri

document.getElementById('rispUser').innerHTML = "L'utente ha scelto il num" + numUser;
document.getElementById('rispPc').innerHTML = "L'utente ha scelto il num" + numPc;
if (numUser > numPc) {
  msg = "Hai vinto";
} else {
  msg = "Ha vinto il pc";
}
//dichiarazione vincitore
document.getElementById('vincitore').innerHTML = msg;
