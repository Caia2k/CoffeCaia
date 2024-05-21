const baseURL = "https://api.sampleapis.com/coffee/hot";

function Armotarjetas() {

    fetch(baseURL).then (r => r.json()).then(result => {
     for (var kv of result) {
       var option = document.createElement("option");
       option.text = kv.title;
       option.id= kv.id;
       // aqui filtro estos valores porque la API me trae basura con esos dos titulos 
       if (kv.title != 'hookéh²²' && kv.title !='hookah') {
        const article = document.createRange().createContextualFragment(`
        <article>
            <div class="col">
            <div class="card h-100">
            <img src="${kv.image}" class="card-img-top object-fit-cover" alt="imagen">
            <div class="card-body">
                <h5 class="card-title">${kv.title}</h5>
                <p class="card-text">${kv.description}.</p>
            </div>
            </div>
        </div>
        </article>
                
        `);
        const main = document.querySelector(".cards-container");
        main.append(article)
       }

     }
 
    });
}

Armotarjetas();




/*
function MakeCard(dato) {
     const {title ,image ,description}=dato;
     const cardsConteiner = document.querySelector(".cards-container");

     const titulo =document.createElement("h5");
     titulo.textContent=title;

     const descripcion=document.createElement("p");
     descripcion.textContent=description;

     const imagen = document.createElement("img");
    imagen.src = image;

    const Card = document.createElement("div");
    Card.appendChild(titulo);
    Card.appendChild(descripcion);
    Card.appendChild(imagen);

    cardsConteiner.appendChild(Card);

}  


async function GetData() {

    const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const { results } = await response.json();
    for (let i=0 ; i < results.length ; i++) {
        MakeCard(results[i]);
    }
    results.forEach(element => {
        
    });

}

GetData();

/*
function GetData(done) {
    const results = fetch("https://api.sampleapis.com/coffee/hot");
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        })
    }


/*

GetData(data => { 
    console.log(data);

    data.results.forEach(elemento => {
        const article = document.createRange().createContextualFragment(`

        <article>
        <div class="col">
            <div class="card h-100">
            <img src="${elemento.image}" class="card-img-top object-fit-cover" alt="imagen">
            <div class="card-body">
                <h5 class="card-title">${elemento.tittle}</h5>
                <p class="card-text">${elemento.description}.</p>
            </div>
            </div>
        </div>
       </article>
               
       `);
       const main = document.querySelector(main);
       main.append(article)
    });
});
*/
