let array = [
    {
        title:"The theory of everything",
        auteur:"Steven Hawking",
        gelezen:"Ja"
    },
    {
        title:"12 rules for life",
        auteur:"Jordan Peterson",
        gelezen: "nee"
    }
];
let ul = document.createElement('ul');
array.forEach(book => {
    let li = document.createElement('li');
    let liContent = `title: ${book.title}, auteur: ${book.auteur}, gelezen: ${book.gelezen}`;
    li.innerHTML = '<p>' + liContent + '<p>';
    ul.appendChild(li);
});
document.body.appendChild(ul);