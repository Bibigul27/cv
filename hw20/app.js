function putTitlesHTML(products){
    for(prod of products) {
        const result = document.createElement("div")
        const pp = document.createElement("p");
        pp.textContent = prod.title
        result.appendChild(pp);
        document.body.append(result)
    }
}

function getNames() {
    let zapros = fetch('https://dummyjson.com/products');

 zapros 
    .then((otvetZaprosa) => otvetZaprosa.json())
    .then((otvetZaprosaVJson) => {
        console.log(otvetZaprosaVJson);

        putTitlesHTML(otvetZaprosaVJson.products)
    })

    .catch(error => {
        console.log("error: ", error)
    })
}

getNames()
