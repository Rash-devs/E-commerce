async function getproduct (){
    const response = await fetch("https://e-commerce-api-f1u7.onrender.com/api/v1/products",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },

    })
    
    const data = await response.json()
    console.log(data)
    
}
getproduct()