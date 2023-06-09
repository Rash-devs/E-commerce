const hotDeals = document.getElementById("hot-deals")
const productDisplay = document.getElementById("display-product")


// Function to generate star HTML based on the rating value
function generateStarRating(rating) {
  const fullStars = Math.floor(rating); // Number of full stars
  console.log(fullStars)
  const halfStars = Math.ceil(rating - fullStars); // Number of half stars
  console.log(halfStars)
  const emptyStars = 5 - fullStars - halfStars; // Number of empty stars
  console.log(emptyStars)

  let starsHTML = '';

  // Generate full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star star"></i>';
  }

  // Generate half stars
  for (let i = 0; i < halfStars; i++) {
    starsHTML += '<i class="fas fa-star-half-alt star"></i>';
  }

  // Generate empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star star"></i>';
  }
  return starsHTML;

  
}

// Generate star ratings for each object in the array and append them to the studentsElement

  const starRating = generateStarRating();

  // Create a new element to contain the star rating
  const starRatingElement = document.createElement("div");
  starRatingElement.innerHTML = starRating;
  starRatingElement.style.color = "orange"
  starRatingElement.style.fontSize = "40px"

let rating = starRating
const hotProduct = [
    {
        id: 1,
        image: "./assets/shirt3.jpg", 
        brandName: "Men T-Shirt",
        rating: generateStarRating(3.5),
        currency1: 700,
    }

]

function hotDeal() {
    hotProduct.forEach(details => {
    hotDeals.innerHTML +=`
    <div class="mt-3 mx-auto w-[250px] h-[450px] p-2 bg-white">
    <div><img class="border-b-4 h-[300px]" src=${details.image} alt=""</div>
    <p class="font-bold text-red-500 ml-[15px] mt-[10px]">${details.brandName}</p>
    <p class="text-orange-500">${details.rating}</p>
    <div class="flex flex-row justify-between font-bold ml-[10px]">
        <div class="font-bold text-orange-500">$${details.currency1}</div>
    </div>
    <div>
`
}
)}

hotDeal()


// const products = [
//     {
//         id: 2,
//         image: "./assets/shirt4.jpg", 
//         brandName: "Men T-Shirt",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quasi?",
//         rating: "./assets/img/fiveStar.jpg",
//         currency1: 200,
//         currency2: 425,
//     },
//     {
//         id: 3,
//         image: "./assets/shirt5.jpg",
//         brandName: "Men T-Shirt Beige",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quasi?",
//         rating: "./assets/img/fiveStar.jpg",
//         currency1: 225,
//         currency2: 535,
//     },
//     {
//         id: 4,
//         image: "./assets/shoeImg.jpg",
//         brandName: "Men Shoes",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quasi?",
//         rating: "./assets/img/fiveStar.jpg", 
//         currency1: 500,
//         currency2: 800,
//     },
//     {
//         id: 5,
//         image:  "./assets/shoeImg2.jpg",
//         brandName: "Men Shoes",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quasi?",
//         rating: "./assets/img/fiveStar.jpg",
//         currency1: 555,
//         currency2: 815,
//     },
// ]
async function getData() {
    response = await fetch('https://fakestoreapi.com/products')
    data = await response.json()
    console.log(data)
    return data 
}

async function displayProducts() {
    products = await getData()
    products.forEach(product => {
        product.rating =  generateStarRating(product.rating.rate)
});

for (let i = 0; i < 4; i++) {
    productDisplay.innerHTML += `<div  class="flex-col w-[300px] lg:flex-row lg:w-[23%] lg:h-[450px]  bg-white mt-3 lg:mt-[20px] p-2 rounded-xl border-2 border-black-500 justify-between mx-auto">
    <div><img class="border-b-4 w-[270px] h-[270px]" src=${products[i].image} alt="">
    </div>
    <p class="text-red-500 font-bold tracking-tighter">${products[i].title}</p>
    <p class=" font-sm truncate">${products[i].description}</p>
    <p class="text-orange-500">${products[i].rating}</p>
    <div class="flex flex-row justify-between">
        <div class="font-bold text-[#fb5607]">$${products[i].price}</div>
    </div>
    </div>`
}

}
displayProducts()

