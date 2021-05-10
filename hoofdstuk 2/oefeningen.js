let zin1, zin2, zin3;
zin1= 'dit is zin 1';
zin2 ='dit is zin 2';
zin3 = 'dit is zin 2';

console.log(zin1);
console.log(zin2);
console.log(zin3);

document.getElementById('zin1').innerHTML = zin1;
document.getElementById('zin2').innerHTML = zin2;
document.getElementById('zin3').innerHTML = zin3;

//oefening 2
let LangeZin = zin1 + ' '+ zin2 + ' ' + zin3;
console.log(LangeZin);
alert(LangeZin);

//oefening 3
let koekje = 'ik wik een koekje';
let uitkomst;

uitkomst = koekje.charAt(0);
uitkomst = koekje.charAt(3);
console.log(koekje.lastIndexOf('k'));
console.log(koekje.lastIndexOf('e'));
console.log(koekje.length);

//oefening 4
let lasagne = koekje.replace('koekje','lasagne van de PXL').toUpperCase();
console.log(lasagne);

//oefening 5
let woord = prompt('Geef een random woord in');
alert(woord.length);

//oefening 6
//hier ontbreekt nog wat!
let uitkomst;

uitkomst = zin.indexOf(' ');
window.alert('De eerste spatie staat op positie: ' + ' ' + uitkomst);
window.alert(`De eerste spatie staat op positie: ${uitkomst} .`);

//oefening 7
let getal1 = prompt('Geef het eerste getal in');
let getal2 = prompt('Geef het tweede getal in');

let uitkomst = parseFloat(getal1) * parseFloat(getal2);
document.getElementById('uitkomst').innerHTML = uitkomst;

//oefening 8
let getal1 = prompt('Geef het eerste getal in');
let getal2 = prompt('Geef het tweede getal in');

let uitkomst = parseFloat(getal1) * parseFloat(getal2);
document.getElementById('uitkomst').innerHTML = uitkomst;
let uitkomst = parseFloat(getal1) + parseFloat(getal2);
document.getElementById('uitkomst').innerHTML = uitkomst;
let uitkomst = parseFloat(getal1) - parseFloat(getal2);
document.getElementById('uitkomst').innerHTML = uitkomst;
let uitkomst = parseFloat(getal1) / parseFloat(getal2);
document.getElementById('uitkomst').innerHTML = uitkomst;

//oefening 9
//is oefening 8, doordat er een parseFloat gebruikt word kan dat ook met gebroken getallen.

//oefening 10
let leeftijd = prompt('Geef je leeftijd in');

if(leeftijd < 18){
    alert('Probeer volgend jaar opnieuw');
}
else {
    alert('Welkom!')
}

