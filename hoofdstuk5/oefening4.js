document.getElementById('groter').addEventListener('click', MaakGroter);
document.getElementById('kleiner').addEventListener('click', MaakKleiner);

function MaakGroter() {
    document.getElementsByTagName('h1')[0].style.fontSize = "48px";
    document.getElementsByTagName('div')[0].style.fontSize = "24px";
}

function MaakKleiner() {
    document.getElementsByTagName('h1')[0].style.fontSize = "22px";
    document.getElementsByTagName('div')[0].style.fontSize = "14px";
}