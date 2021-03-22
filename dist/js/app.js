// Nav
const header = document.querySelector("header")
const navBtn = document.querySelector(".nav__btn")
const navImg = document.querySelector(".nav__btn img")
const navLinks = document.querySelector(".nav__links")

const responsiveNav = () => {
  navLinks.classList.toggle("nav__links--active")
  header.classList.toggle("header--fixed")
  navLinks.classList.contains("nav__links--active")
    ? (navImg.src = "./img/menu-close.png")
    : (navImg.src = "./img/menu-open.png")
}

navBtn.onclick = responsiveNav
window.onresize = () => {
  navLinks.classList.remove("nav__links--active")
  header.classList.remove("header--fixed")
  navImg.src = "./img/menu-open.png"
}

// Hero articles
const heroSlider = document.querySelectorAll(".hero__slider .slide")
const heroArticlesContainer = document.querySelector(".hero__articles")
const heroArticles = document.querySelectorAll(".hero__articles .article")

heroArticles.forEach((article) => {
  // Show active article
  article.addEventListener("mouseover", () => {
    heroArticles.forEach((article) => {
      article.classList.remove("article--active")
    })
    article.classList.add("article--active")
    // Show active slide
    heroArticles.forEach((child, i) => {
      if (child.classList.contains("article--active")) {
        heroSlider.forEach((slide) => slide.classList.remove("slide--active"))
        heroSlider[i].classList.add("slide--active")
      }
    })
  })
})

// Testimonials
const testimonialsData = [
  {
    testimonialText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    testimonialAuthor: "Jimmy Ferrara",
    authorTitle: "General manager",
  },
  {
    testimonialText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente autem fuga incidunt laudantium deleniti! Repellendus praesentium at sint dolorem distinctio",
    testimonialAuthor: "John Doe",
    authorTitle: "Business analyst",
  },
  {
    testimonialText:
      "Eligendi cupiditate, esse nam optio consectetur necessitatibus ea beatae, quis animi consequuntur quaerat eius laudantium alias dignissimos. Facilis temporibus",
    testimonialAuthor: "Anna Richards",
    authorTitle: "Consultant",
  },
]

const testimonialTextContainer = document.querySelector(".testimonials__review")
const testimonialAuthorContainer = document.querySelector(
  ".testimonials__author"
)
const testimonialsSlides = document.querySelectorAll(".testimonials__slide")

testimonialsSlides.forEach((slide, i) => {
  slide.addEventListener("click", () => {
    testimonialsSlides.forEach((slide) =>
      slide.classList.remove("testimonials__slide--active")
    )
    testimonialTextContainer.textContent = `“ ${testimonialsData[i].testimonialText} ”`
    testimonialAuthorContainer.innerHTML = `- <span>${testimonialsData[i].testimonialAuthor}</span> , ${testimonialsData[i].authorTitle}`
    slide.classList.add("testimonials__slide--active")
  })
})
