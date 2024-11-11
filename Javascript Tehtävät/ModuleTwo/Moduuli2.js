// HELPOTETAAN OPETTAJAN ELÄMÄÄ : 

const buttoni = (buttonClass, funktio) => {
    const selectedButton = document.querySelector(`.${buttonClass}`);
    selectedButton.addEventListener("click", funktio);
};

const Tehtävä1 = () => {
    const numbers = []
    for (let i = 0; i < 5; i++){
        const number = parseInt(prompt("Give me a number."))
        numbers.push(number)
    };
    for (let i = 4; i >= 0; i--) {
        console.log(numbers[i])
    };
}

buttoni("Yksi", Tehtävä1);

