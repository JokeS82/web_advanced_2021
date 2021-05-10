document.getElementById('button2').addEventListener('click', ToonContent);

function ToonContent() {
    let tekst = document.getElementById('comment2').value;

    let paragraaf = document.createElement('p');
    paragraaf.innerHTML = tekst;
    document.getElementById('extraP').appendChild('paragraaf');

}
