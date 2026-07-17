const button = document.querySelector(".interaction");
const main = document.querySelector(".main");

button.addEventListener("click", () => {
    main.classList.toggle("evil");
});