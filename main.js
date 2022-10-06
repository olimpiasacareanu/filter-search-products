let products = {
    data:[
    {
        productName: "500",
        category: "Cars",
        price: "30",
        image: "500.jpg"
    },
    {
        productName: "caffe",
        category: "Resto",
        price: "2",
        image: "caffe.jpg"
    },
    {
        productName: "chiara 01",
        category: "Chiara",
        price: "20",
        image: "chiara.jpg"
    },
    {
        productName: "chiara 02",
        category: "Chiara",
        price: "50",
        image: "chiara02.jpg"
    },
    {
        productName: "friends 01",
        category: "Friends",
        price: "80",
        image: "friends.jpg"
    },
    {
        productName: "friends 02",
        category: "Friends",
        price: "20",
        image: "friends02.jpg"
    },
    {
        productName: "picnic",
        category: "Friends",
        price: "50",
        image: "picnic.jpg"
    },
    {
        productName: "spaguetti",
        category: "Resto",
        price: "80",
        image: "spaghetti.jpg"
    },
]
    
}

for(let product of products.data){
    //create card
    let card = document.createElement('div')
    //ajouter les classes - product.category devient la class comme le nom du category
    card.classList.add('card', product.category, 'hide')
    //create image container
    let imgContainer = document.createElement('div')
    imgContainer.classList.add("image-container")
    // create image
    let image = document.createElement('img')
    // ajouter à src le nom de l'image - product.image
    image.setAttribute('src', product.image)
    // append all elements 
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)
    //container
    let container = document.createElement('div')
    container.classList.add('container')
    //product name
    let name = document.createElement('h5')
    name.classList.add('product-name')
    name.innerText = product.productName.toUpperCase();
    container.appendChild(name)
    // price
    let price = document.createElement('h6')
    price.innerText = '$' + product.price
    container.appendChild(price)
    

    card.appendChild(container)
    document.querySelector('#products').appendChild(card)
    
}

const filterProduct = (value)=>{
    let buttons = document.querySelectorAll('.button-value')
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase() ){
            button.classList.add('active')
        }else{
            button.classList.remove('active')
        }
    })

    let elements = document.querySelectorAll('.card')
    elements.forEach((element) => {
        if(value == "All"){
            element.classList.remove('hide')
        }else{
            if(element.classList.contains(value)){
                element.classList.remove('hide')
            }else{
                element.classList.add('hide')
            }
        }
    })
}

const search = () => {
    //recuperer input search
    let searchInput = document.querySelector('#search-input')
    // recuperer tous les cards
    let elements = document.querySelectorAll('.card')
    // loop les elements
    elements.forEach((element) => {
        // recuperer le text 
        let name = element.innerText
        //lorsque le text est identique à la valeur du input on enleve la class hide
        if(name.includes(searchInput.value.toUpperCase())){
            element.classList.remove('hide')
        }else{
            element.classList.add('hide')
        }
    })
}

window.onload = () => {
    // evenement pour la recherche (search)
    let btn = document.querySelector('#search')
    btn.addEventListener('click', search)
    // event pour filtrer les elements
    filterProduct('All')


}