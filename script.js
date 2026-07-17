const button = document.querySelector(".interaction");
const main = document.querySelector(".main");

// When the user clicks the "interaction" button, which is displayed as a white button that says "PRESS ME!" at the bottom of the page, and changes the site theme to an "evil" mode,
// changing the background and font. The event listener waits for the click on that button and then swaps the css theme for the .main class.
button.addEventListener("click", () => {
    main.classList.toggle("evil");
});