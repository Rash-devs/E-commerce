const productDisplay = document.getElementById("display-product")
const more = document.getElementById("more")


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

for (let i = 5; i < 21; i++) {
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
