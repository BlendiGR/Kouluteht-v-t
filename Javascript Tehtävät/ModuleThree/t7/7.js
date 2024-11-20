document.querySelector("#trigger").addEventListener("mouseover", () => {
    document.querySelector("#target").src = "./img/picB.jpg";
})
document.querySelector("#trigger").addEventListener("mouseout", () => {
    document.querySelector("#target").src = "./img/picA.jpg";
});