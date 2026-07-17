const button = document.querySelector(".interaction");
const main = document.querySelector(".main");

// addEventListener tells the website to wait for a click interaction on a certain aspect, in this case the "interaction" div, and does a certain action based on that interaction,
// in this case, it swaps the site theme.
button.addEventListener("click", () => {
    main.classList.toggle("evil");
});