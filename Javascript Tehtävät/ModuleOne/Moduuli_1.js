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

const Tehtävä6 = () => {
    const kysymys = confirm("Should I calculate the Square root?");
    if (kysymys === true) {
        let askForNumber = prompt("Tell me a number!");
        if (askForNumber >= 0) {
            const answer = Math.sqrt(parseInt(askForNumber));
            document.querySelector(".T6").innerHTML = `The square root of ${askForNumber} is ${answer}!`
        } else {
            document.querySelector(".T6").innerHTML = "You cannot take a square root of a negative number!"
        };
    } else {
        document.querySelector(".T6").innerHTML = "The square root is not calculated!"   
    };
};

buttoni("Kuusi", Tehtävä6);

const Tehtävä7 = () => {
    const thrownDices = [];
    const rollNumber = parseInt(prompt("How many rolls of dice to throw?"));
    for (let i = 1; i <= rollNumber; i++) {
        const dice = Math.floor(Math.random() * 6) + 1;
        thrownDices.push(dice);
    };
    let sum = 0;
    for (let i = 0; i < thrownDices.length; i++) {
        sum += thrownDices[i];
    };
    document.querySelector(".T7").innerHTML = `The sum of the ${thrownDices.length}. rolls thrown is ${sum}! `
};

buttoni("Seitsemän", Tehtävä7);

const Tehtävä8 = () => {
    const leapYears = [];
    const startYear = parseInt(prompt("Give me a start year!"));
    const endYear = parseInt(prompt("Give me the end year!"));
    for (let year = startYear; year <= endYear; year++) {
        if (year % 400 === 0) {
            leapYears.push(year);
        } else if (year % 100 ===0){
            continue;
        } else if (year % 4 === 0){
            leapYears.push(year);
        };
    };
    const list = document.querySelector(".T8LIST");
    leapYears.forEach (year => {
        const li = document.createElement("li");
        li.textContent = year;
        list.appendChild(li);
    });
};

buttoni("Kahdeksan", Tehtävä8);

const Tehtävä9 = () => {
    const number = parseInt(prompt("Give me a number to check if it's prime!"));
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        document.querySelector(".T9").innerHTML = `The number ${number} is a prime number!`
    } else {
        document.querySelector(".T9").innerHTML = `The number ${number} is not a prime number!`
    };

};

buttoni("Yhdeksän", Tehtävä9);

