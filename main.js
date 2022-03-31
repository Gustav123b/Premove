/* === SCROLL === */

const callToActionElement = document.querySelector(".btn-hero");
const openingsElement = document.getElementById("openings");
const homeElement = document.querySelector("#home")
const homeLinks = document.querySelectorAll(".home-link")

homeLinks.forEach(element => {
    element.addEventListener("click", () => { scrollToElement(homeElement) })
});

callToActionElement.addEventListener("click", function () {
    scrollToElement(openingsElement);
});


function scrollToElement(e) {
    console.log(e)
    window.scroll({
        top: e.offsetTop,
        behavior: 'smooth'
    });
}

function scrollToId(id) {
    const e = document.getElementById(id)
    scrollToElement(e)
}



/* === Fade in animation ===  */

const fadeInElements = document.querySelectorAll(".fade-in")

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let e = entry.target
        let fadeDirection = capitalizeFirstLetter(e.dataset.fadeDir);
        let duration = (e.dataset.fadeDur == undefined) ? 0.5 : e.dataset.fadeDur;
        let delay = (e.dataset.fadeDelay == undefined) ? 0 : e.dataset.fadeDelay;

        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeIn${fadeDirection}Animation ${duration}s forwards ease-out ${delay}s`
            observer.unobserve(entry.target)
        }
    })
},
    {
        threshold: 0.4,
    })

fadeInElements.forEach(element => {
    observer.observe(element)
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



/* === NAVBAR MENU BTN ===  */

let navBtnItems = []
let navBreakPoints = [950, 600]

const navBar = document.querySelector(".nav-content")

let navItems = document.querySelectorAll(".nav-item")

console.log(navBar)