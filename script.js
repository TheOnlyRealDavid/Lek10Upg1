const rubrik_ruta = document.querySelector("#rubrik");
const text_ruta = document.querySelector("#text");
const main = document.querySelector("main");

let array = [];
const nyckel = "artiklar";

function add_text(){

    let artikel = {
        rubrik: rubrik_ruta.value,
        text: text_ruta.value
    }

    array.push(artikel);

    let json = JSON.stringify(array);

    window.localStorage.setItem(nyckel, json);

    let article = document.createElement("article");

    let h2 = document.createElement("h2");
    h2.textContent = artikel.rubrik;

    let p = document.createElement("p");
    p.textContent = artikel.text;

    article.appendChild(h2);
    article.appendChild(p);

    main.appendChild(article);

    rubrik_ruta.value = "";
    text_ruta.value = "";
}


function read_from_ls(){

    let json_data = window.localStorage.getItem(nyckel, json);

    if(json_data != null){

        array = JSON.parse(json_data);

        for(let i = 0; i < array.length; i++){

            let article = document.createElement("article");

            let h2 = document.createElement("h2");
            h2.textContent = array[i].rubrik;

            let p = document.createElement("p");
            p.textContent = array[i].text;

            article.appendChild(h2);
            article.appendChild(p);

            main.appendChild(article);
        }

    }
}