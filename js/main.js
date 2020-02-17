var name = prompt('Inserisci il nome');
document.getElementById('nome').innerHTML = name;
console.log(name);
var surname = prompt('Inserisci il cognome');
document.getElementById('cognome').innerHTML = surname;
console.log(surname);
var color = prompt('Inserisci il tuo colore preferito');
document.getElementById('colore').innerHTML = color;
console.log(color);
var pwdgen = name + surname + color + 20
document.getElementById('password').innerHTML = pwdgen;
document.getElementById('centra').setAttribute('class','visible');
