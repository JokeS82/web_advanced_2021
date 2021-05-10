    document.getElementById("red").style.color = "darkred";

    document.getElementById("weg").remove();

    let add = document.createElement("h1");
    let title = document.createTextNode("Welkom PandiX.");
    add.appendChild(title);
    let element = document.getElementById("header");
        element.appendChild(add);

   let aside = document.createElement("aside");
   let adress = document.createTextNode(" Elfde-Liniestraat 24. B-3500 Hasselt");
   aside.appendChild(adress);
   let main = document.getElementById('main');
   main.appendChild(aside);

