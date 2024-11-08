// HELPOTETAAN OPETTAJAN ELÄMÄÄ : 
const buttoni = (buttonClass, funktio) => {
    const selectedButton = document.querySelector(`.${buttonClass}`);
    selectedButton.addEventListener("click", funktio);
};




//TEHTÄVÄ 1

console.log("I'm printing to console!");

//TEHTÄVÄ 2

const Tehtävä2 = () => {
    const nimi = prompt("What's your name?");
    document.querySelector(".T2").innerHTML = (`Hello, ${nimi}!`)
};

buttoni("Kaksi", Tehtävä2);

//TEHTÄVÄ 3

const Tehtävä3 = () => {
    const numbers = []
    for (let i = 0; i < 3 ; i++) {
        const number = prompt("Give us a number!");
        numbers.push(parseFloat(number));
    };
    const product = numbers[0] * numbers[1] * numbers[2];
    const sum = numbers[0] + numbers[1] + numbers[2];
    const average = sum / 3;
    const sektio = document.querySelector(".T3").innerHTML = `Product of numbers : ${product} <br> Sum : ${sum}<br> Average : ${average}`;
};

buttoni("Kolme", Tehtävä3);

//TEHTÄVÄ 4

const HarryPotterBook = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

const Tehtävä4 = () => {
    const name = prompt("What's your name?");
    const randomHat = Math.floor(Math.random() * HarryPotterBook.length);

    let assignedHat;
    
    switch (randomHat) {
        case 0:
            assignedHat = HarryPotterBook[0];
            break;
        case 1:
            assignedHat = HarryPotterBook[1];
            break;
        case 2:
            assignedHat = HarryPotterBook[2];
            break;
        case 3:
            assignedHat = HarryPotterBook[3];
            break;
    }
    document.querySelector(".T4").innerHTML = `${name}, you are a ${assignedHat}!`;
};

buttoni("Neljä", Tehtävä4);

//TEHTÄVÄ 5

const Tehtävä5 = () => {
    const year = prompt("Tell me a year!");
    const leapYear = (year) => {
        if (year % 4 === 0) {
            return true;
        } else if (year % 400 ===0){
            return true;
        } else if (year % 100 === 0){
            return false;
        } else {
            return false;
        }   
        }
        
    if (leapYear(year) === true) {
        document.querySelector(".T5").innerHTML = `The year ${year} is a leapyear!`
     } else {
        document.querySelector(".T5").innerHTML = `The year ${year} is not a leapyear!`
    }
    };

buttoni("Viisi", Tehtävä5);
