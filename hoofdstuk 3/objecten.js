//window.onload = function () {
    //oefening3();
//}

//function oefening1() {
    var personalInfo = {
        firstName: "Joke",
        lastName: "Schoenmakers",
        phoneNumber: '0495/45.27.14',
        birthday: '21/09/1982',
        e_mail: "joke.schoenmakers@hotmail.com"
    };

//}

function oefening2() {


//Bvb. Mijn naam is Kimberly Willems en ik ben geboren op XX/XX/XXXX. Mijn telefoonnummer
// is 04XX XX XX XX en mijn mailadres is kimberly.willems@pxl.be. Via deze gegevens kan je mij
// altijd contacteren! op webpagina via object methode
}

//function oefening3() {
    let personalInfo = {
        firstName: "Joke",
        lastName: "Schoenmakers",
        phoneNumber: '0495/45.27.14',
        birthday: '21/09/1982',
        e_mail: "joke.schoenmakers@hotmail.com",
        zin: function (){
            return 'Mijn naam is ${this.voornaam}
        }
    };
    personalInfo.lengte = 1.68;
    personalInfo.gewicht = 'te veel';
    personalInfo.leeftijd = 38;
    personalInfo.huiskleur = 'glow in the dark';
    personalInfo.oogkleur = 'blauw';

    //Itereer (loop) over de eigenschappen van het object en geef ze weer op de webpagina.

//}

function oefening4() {
    var personalInfo = {
        firstName: "Joke",
        lastName: "Schoenmakers",
        phoneNumber: '0495/45.27.14',
        birthday: '21/09/1982',
        e_mail: "joke.schoenmakers@hotmail.com"
    };
    personalInfo.length = 1.68;
    personalInfo.weight = 'te veel';
    personalInfo.age = 38;
    personalInfo.skincolor = 'glow in the dark';
    personalInfo.eyecolor = 'blauw';
    return personalInfo;

    console.log(delete personalInfo.length);
    console.log(delete personalInfo.weight);
    //Converteert het object naar een array en geef de array weer in de console.

    const arrayInfo = Object.keys(personalInfo);
    console.log(arrayInfo);

    const arrayPersoon = Object.values(personalInfo);
    console.log(arrayPersoon);

}

function oefening5a() {

    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
    ];


}

