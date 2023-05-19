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

const starRating = generateStarRating(2.5);

// Create a new element to contain the star rating
const starRatingElement = document.createElement("div");
starRatingElement.innerHTML = starRating;

// Append the star rating to the studentsElement
// studentsElement.appendChild(starRatingElement);


let rating = starRating
// const products = [
//     {
//         id: 1,
//         description: "Men Shoes",
//         rating: generateStarRating(3.6),
//         price: "$120",
//         image: "https://static.nike.com/a/images/t_default/317eb7a9-2be7-4c88-83ab-0835e44c3f0b/air-jordan-1-next-chapter-big-kids-shoes-lv5m2C.png"
//     },
//     {
//         id: 2,
//         description: "Men T-shirt",
//         rating: generateStarRating(4.5),
//         price: "$120",
//         image: "https://media.istockphoto.com/id/1403952374/photo/handsome-black-man-on-blue.jpg?s=612x612&w=0&k=20&c=7xzf1aa5nFHUuKUSuPtfdwgW-iHz2EoSDnTBaBJW-Rg="
//     },
//     {
//         id: 3,
//         description: "Women Bag",
//         rating: generateStarRating(5.5),
//         price: "$120",
//         image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//     },
//     {
//         id: 4,
//         description: "Men T-shirt",
//         rating: generateStarRating(3.3),
//         price: "$120",
//         image: "https://media.istockphoto.com/id/1403045856/photo/stunned-african-american-guy-looking-at-the-camera-with-mouth-open.jpg?s=612x612&w=0&k=20&c=t482yFTCg5uwi8Vi7lpnccO-1zjQ63xoAy77VGjdIBQ="
//     },

// ]

const sections = [
    {
        name: "Men T-shirt",
        description: "this is a high quality <br> t-shirt",
        ratings: [],
        price: "$120",
        price1: "$220",
        image: "https://images.unsplash.com/photo-1626806851009-c98659eb1af0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Women Bag",
        info: "this is a high quality <br> bag",
        ratings: [],
        price: "$120",
        price1: "$220",
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Men Shoes",
        info: "this is a high quality <br>shoe",
        ratings: [],
        price: "$120",
        price1: "$220",
        image: "https://static.nike.com/a/images/t_default/317eb7a9-2be7-4c88-83ab-0835e44c3f0b/air-jordan-1-next-chapter-big-kids-shoes-lv5m2C.png"
    },
    {
        name: "Men T-shirt",
        info: "this is a high quality <br> t-shirt",
        ratings: [],
        price: "$120",
        price1: "$220",
        image: "https://images.unsplash.com/photo-1588731234159-8b9963143fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },

]

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
         <div class="flex justify-center items-center justify-evenly bg-white   w-[23%] h-[20vh] border border-solid border-#000  ">
         <img src=${products[i].image} class="w-[7rem] h-[6rem] object-cover  ">
         <div>
         <div class="mb-2 font-semibold">${products[i].title}</div>
         <div class="mb-2 font-sm">${products[i].description}</div>
         <div class="text-blue-800 mb-1"  >${products[i].rating}</div>
         <div class="text-purple-600 font-bold">${products[i].price}</div>
         </div>
        
         </div>
            `

    }
}
showProducts()







function showSections() {
    sections.map(section => {
        sectionsDisplay.innerHTML += `
     
        
          <div class="flex flex-col justify-center items-center justify-evenly bg-white   w-[28%] h-[55vh]">
         
         <img src=${section.image} class="w-[9rem] h-[8rem] object-cover">
         <div>
         <div class="mb-2 font-semibold">${section.name}</div>

         <div class="mb-2 font-thin">${section.info}</div>
    

         <div class="text-blue-800 mb-1 "  >${section.ratings}
         <i class="fa-solid fa-star text-orange-300"></i>
         <i class="fa-solid fa-star text-orange-300"></i>
         <i class="fa-solid fa-star text-orange-300"></i>
         <i class="fa-solid fa-star text-orange-300"></i>
         <i class="fa-solid fa-star-half-stroke text-orange-300"></i>
         </div>

         <span class="text-purple-600 font-bold">${section.price}</span>
         <div class=" font-light float-right line-through">${section.price1}</div>
         </div>
         </div>
        
         
         `

    })
}

showSections()






