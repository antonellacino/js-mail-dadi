//1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;


//creo un array di indirizzi mail
var msg;
var indirizziMail = ['lunedi@libero.it','martedi@libero.it','mercoledi@libero.it','giovedi@libero.it','venerdi@libero.it','sabato@libero.it','domenica@libero.it'];
msg = "Le tue credenziali sono errate!"
//chiedo all'utente di inserire la sua mail e la salvo in una variabile
var mailUtente = prompt('Inserisci la tua mail');
console.log(mailUtente);
//effettuo il controllo della presenza della mail inserita e l'elenco creato in precedenza
for (var i = 0; i < indirizziMail.length; i++) {
  //var indice = indirizziMail[i];
  //console.log(indice);
  //se presente manderò il msg di ok
  if (indirizziMail[i] === mailUtente){
    console.log(indirizziMail[i], mailUtente);
    msg = "Ciao! Benvenuto nella tua Area Personale";
  }
}
document.getElementById('id').innerHTML = msg;
