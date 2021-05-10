document.getElementById('plakken').addEventListener('click', ToonContent);
document.getElementById('wissen').addEventListener('click', wisTekst);

function ToonContent() {

    let tekst3 = document.getElementById('comment3').value;
    document.getElementsByTagName('p')[0].innerHTML = tekst3;

}

function wisTekst(){
    document.getElementsByTagName('p')[0].innerHTML = "";
}