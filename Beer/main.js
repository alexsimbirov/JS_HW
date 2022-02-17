

fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
.then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        }
    )

    .then((beers) => {
         renderPage(beers);
        // что-то делаем с данными
    })

    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

let listOfBeer = document.getElementById("listOfBeer")


function renderPage(beers){
  beers.map(beer=>{
  console.log(beer)
        let newBeers = document.createElement('div');
        newBeers.className = 'product_item';      
        listOfBeer.appendChild(newBeers);

        let nameIng = document.createElement('div');
        nameIng.className = 'nameing';      
        newBeers.appendChild(nameIng);

        let imgProduct = document.createElement('div');
        imgProduct.className = 'img_product';  
        imgProduct.onclick = 'mw(this)';   
        nameIng.appendChild(imgProduct);

        let cardId = document.createElement('input');
        cardId.className = 'card_id';  
        cardId.type = 'hidden';    
        imgProduct.appendChild(cardId);

        let imgCard = document.createElement('img');
        imgCard.className = 'img_card';  
        imgCard.src = beer.image_url;   
        imgProduct.appendChild(imgCard);

        let contentProduct = document.createElement('div');
        contentProduct.className = 'content_product';      
        nameIng.appendChild(contentProduct);

        let contentHeading = document.createElement('h3');        
        contentHeading.innerText = beer.name;      
        contentProduct.appendChild(contentHeading);

        let countInStock = document.createElement('div');
        countInStock.className = 'count_in_stock';      
        nameIng.appendChild(countInStock);

        let beerDescription = document.createElement('p');        
        beerDescription.innerText = beer.description;      
        countInStock.appendChild(beerDescription);
    //     newBeers.classList.add('product_item');
    //    newBeers.innerHTML = `
    //    <div class="nameing">
    //         <div class="img_product" onclick="mw(this)">
    //             <input type="hidden" class="card_id">
    //             <img class="img_card" src="${beer.image_url}" alt="">
    //         </div>
    //         <div class="content_product">
    //             <h3>${beer.name}</h3>
    //         </div>

    //         <div class="count_in_stock">
    //             <p>${beer.description}</p>
    //         </div>
    //   </div>`    
})

}