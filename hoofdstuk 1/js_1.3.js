let getal;
do{
   getal = prompt('geef een getal tussen 1 en 5');
   getal = parseInt()
}while (getal < 1 || getal > 5);

console.log(getal);
let tekst = 'Het getal dat u opgaf was: '+ getal;
document.getElementById('gekozenGetal').innerHTML = tekst;