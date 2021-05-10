
document.getElementById('button').addEventListener('click', ToonContent);

function ToonContent() {
    let tekst = document.getElementById('comment').value;
    document.getElementsByTagName('p')[0].innerHTML = tekst;

}
