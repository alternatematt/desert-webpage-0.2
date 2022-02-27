/* click toggle button to show a drop box */

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () =>{
    navbarLinks.classList.toggle("active")
})
