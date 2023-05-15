const hotDeals = document.getElementById("hot-deals")
const productDisplay = document.getElementById("display-product")

const hotProduct = [
    {
        id: 1,
        image: "./assets/shirt3.jpg", 
        brandName: "Men T-Shirt",
        rating: "./assets/img/fiveStar.jpg",
        currency1: 700,
        currency2: 1450,
    }

]

function hotDeal() {
    hotProduct.forEach(details => {
    hotDeals.innerHTML +=`
    <div class="mt-3 mx-auto w-[250px] h-[450px] p-2 bg-white">
    <div><img class="border-b-4 h-[300px]" src=${details.image} alt=""</div>
    <p class="font-bold text-red-500 ml-[15px] mt-[10px]">${details.brandName}</p>
    <p><img class="w-[150px]" src=${details.rating} alt=""</p>
    <div class="flex flex-row justify-between font-bold ml-[10px]">
        <div class="font-bold">$${details.currency1}</div>
        <div class="text-[#fb5607] line-through">$${details.currency2}</div>
    </div>
    <div>
`
}
)}

hotDeal()


const products = [
    {
        id: 2,
        image: "./assets/shirt4.jpg", 
        brandName: "Men T-Shirt",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quasi?",
        rating: "./assets/img/fiveStar.jpg",
        currency1: 200,
        currency2: 425,
    },
    {
        id: 3,
        image: "./assets/shirt5.jpg",
        brandName: "Men T-Shirt Beige",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quasi?",
        rating: "./assets/img/fiveStar.jpg",
        currency1: 225,
        currency2: 535,
    },
    {
        id: 4,
        image: "./assets/shoeImg.jpg",
        brandName: "Men Shoes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quasi?",
        rating: "./assets/img/fiveStar.jpg", 
        currency1: 500,
        currency2: 800,
    },
    {
        id: 5,
        image:  "./assets/shoeImg2.jpg",
        brandName: "Men Shoes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quasi?",
        rating: "./assets/img/fiveStar.jpg",
        currency1: 555,
        currency2: 815,
    },
]



function displayProducts() {
    products.forEach(product => {
    productDisplay.innerHTML += `<div  class="flex-col w-[300px] lg:flex-row lg:w-[23%] lg:h-[450px]  bg-white mt-3 p-2 rounded-xl border-2 border-black-500 justify-between mx-auto">
    <div><img class="border-b-4" src=${product.image} alt="">
    </div>
    <p class="text-red-500 font-bold">${product.brandName}</p>
    <p class=" font-sm">${product.description}</p>
    <p><img class="w-[150px] " src=${product.rating} alt=""></p>
    <div class="flex flex-row justify-between">
        <div class="font-bold">$${product.currency1}</div>
        <div class="line-through font-bold  text-orange-500">$${product.currency2}</div>
    </div>
    </div>

`

    })
}
displayProducts()
