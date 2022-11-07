// JavaScript Document
console.log("Howdy!");

var inputNaam = prompt('Wie speelt er?');
var outputNaam = document.querySelector("ul li:nth-of-type(2) h3");

function deNaam(){
if (inputNaam == 'Sanne'){
    outputNaam.innerHTML = 'PepsiMaxLover1971'
    console.log('hey')

} else {outputNaam.innerHTML = inputNaam;}
    
}


deNaam();


