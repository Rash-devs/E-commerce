const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("#nav-menu")

hamburger.onclick = () => {
    nav.classList.toggle("active")
    hamburger.classList.toggle("active")
    console.log("clicking")

}