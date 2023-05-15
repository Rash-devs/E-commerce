const hamburger = document.querySelector(".fa-bars")
const nav = document.querySelector("#nav-menu")

hamburger.onclick = () => {
    nav.classList.toggle("active")
    hamburger.classList.toggle("active")
    console.log("clicking")

}