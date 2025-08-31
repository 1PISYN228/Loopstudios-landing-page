export const initBurgerMenu = () => {
    if (typeof document !== "undefined") {
        const buttonBurgerOpenElement = document.querySelector("[data-js-burger-open]")
        const buttonBurgerCloseElement = document.querySelector("[data-js-burger-close]")
        const burgerMenuElement = document.querySelector("[data-js-burgerMenu]")

        buttonBurgerOpenElement.addEventListener("click", () => {
            burgerMenuElement.classList.add("is-visible")
        })

        buttonBurgerCloseElement.addEventListener("click", () => {
            burgerMenuElement.classList.remove("is-visible")
        })    
    }
}






