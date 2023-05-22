// const productsDisplay = document.querySelector("#products")
const productsDisplay = document.querySelector("#products")
const sectionsDisplay = document.querySelector("#sections")
const more = document.getElementById("more")
// Get the element with the class name ".students"
// const studentsElement = document.querySelector("#students");

// Function to generate star HTML based on the rating value
function generateStarRating(rating) {
    const fullStars = Math.floor(rating); // Number of full stars
    // console.log(fullStars)
    const halfStars = Math.ceil(rating - fullStars); // Number of half stars
    // console.log(halfStars)
    const emptyStars = 5 - fullStars - halfStars; // Number of empty stars
    // console.log(emptyStars)
    

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

// const starRatings = generateStarRating(2.5);

// Create a new element to contain the star rating
// const starRatingsElement = document.createElement("div");
// starRatingsElement.innerHTML = starRatings;

// Append the star rating to the studentsElement
// studentsElement.appendChild(starRatingElement);


// let ratings = starRatings


// const sections = [
//     {
//         name: "Men T-shirt",
//         description: "this is a high quality <br> t-shirt",
//         ratings: [],
//         price: "$120",
//         price1: "$220",
//         image: "https://images.unsplash.com/photo-1626806851009-c98659eb1af0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     },
//     {
//         name: "Women Bag",
//         info: "this is a high quality <br> bag",
//         ratings: [],
//         price: "$120",
//         price1: "$220",
//         image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//     },
//     {
//         name: "Men Shoes",
//         info: "this is a high quality <br>shoe",
//         ratings: [],
//         price: "$120",
//         price1: "$220",
//         image: "https://static.nike.com/a/images/t_default/317eb7a9-2be7-4c88-83ab-0835e44c3f0b/air-jordan-1-next-chapter-big-kids-shoes-lv5m2C.png"
//     },
//     {
//         name: "Men T-shirt",
//         info: "this is a high quality <br> t-shirt",
//         ratings: [],
//         price: "$120",
//         price1: "$220",
//         image: "https://images.unsplash.com/photo-1588731234159-8b9963143fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     },

// ]

async function getData() {
    response = await fetch('https://fakestoreapi.com/products')
    data = await response.json()
    console.log(data)
    return data
}

async function showProducts() {
    products = await getData()
    console.log(products)
    products.forEach(product => {

        product.rating = generateStarRating(product.rating.rate)
       
    });
    for (let i = 0; i < 4; i++) {
        productsDisplay.innerHTML += `
        
         <div class=" flex border-b-4 gap-7 pb-4 w-[90%]">
         <img src=${products[i].image} class="w-[150px] h-[150px] object-cover  ">
         <div>
         <div class="font-semibold text-red-500">${products[i].title}</div>
         
         <div class="text-orange-500  "  >${products[i].rating}</div>
         <div class="text-orange-500 font-bold">${products[i].price}</div>
         </div>
        
         </div>
            `

    }
}
showProducts()



async function showSections() {
    sections = await getData()
    console.log(sections)
    sections.forEach(section => {

        section.rating = generateStarRating(section.rating.rate)

    });
    for (let i = 5; i < 9; i++) {
        sectionsDisplay.innerHTML += `
         <div class="flex flex-col  justify-center items-center bg-white   w-[28%] py-5" >
         <img src=${sections[i].image} class="w-[200px] h-[10rem] object-fit border-b-4 pb-5 ">
         <div>
         <div class="mb-2 mt-4 font-semibold text-red-500">${sections[i].title}</div>
        
         <div class="text-orange-500  mb-1"  >${sections[i].rating}</div>
         <div class="text-orange-500  font-bold">${sections[i].price}</div>
         </div>
        
         </div>
            `

    }
}
showSections()















