// HELPOTETAAN OPETTAJAN ELÄMÄÄ : 

const buttoni = (buttonClass, funktio) => {
    const selectedButton = document.querySelector(`.${buttonClass}`);
    selectedButton.addEventListener("click", funktio);
};

//TEHTÄVÄ 1

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

//TEHTÄVÄ 2

const Tehtävä2 = () => {
   const numberParticipant = parseInt(prompt("How many participants?"));
   const participants = [];
   for (let i = 0; i < numberParticipant; i++) {
    const participant = prompt(`Name of participant nr.${i+1}?`);
    participants.push(participant);
   }
   participants.sort()
   participants.forEach(participant => {
    const newlist = document.createElement("li");
    const list = document.querySelector(".T2");
    list.appendChild(newlist).innerHTML = `${participant}`
   });
};

buttoni("Kaksi", Tehtävä2);

//TEHTÄVÄ 3

const Tehtävä3 = () => {
    const dogs  = [];
    for (let i = 0; i < 6; i++){
        const dog = prompt(`Whats the name of dog nr${i+1}. ?`)
        dogs.push(dog);
    }
    dogs.sort().reverse();
    dogs.forEach(dog => {
        const newlist = document.createElement("li");
        const list = document.querySelector(".T3");
        list.appendChild(newlist).innerHTML = `${dog}`
    });
};

buttoni("Kolme", Tehtävä3);

//TEHTÄVÄ 4

const Tehtävä4 = () => {
    let status = true;
    const numbers = [];
    while (status === true){
        const askNumber = parseInt(prompt("Give me a number!"));
        if (askNumber === 0) {
            status = false;
            break;
        } else {
            numbers.push(askNumber)
        };
    }
    numbers.sort((a, b) => b - a);
    numbers.forEach(number => {
        const newlist = document.createElement("li");
        const list = document.querySelector(".T4");
        list.appendChild(newlist).innerHTML = `${number}`
    });
};

buttoni("Neljä", Tehtävä4);

//TEHTÄVÄ 5

const Tehtävä5 = () => {
    let status = true;
    const numbers = []
    while (status === true){
        const askNumber = parseInt(prompt("Give me a number"));
        if (numbers.includes(askNumber)){
            status = false;
            break;
        } else {
            numbers.push(askNumber);
        }
    }
    numbers.sort((a, b) => a - b);
    numbers.forEach(number => {
        const newlist = document.createElement("li");
        const list = document.querySelector(".T5");
        list.appendChild(newlist).innerHTML = `${number}`
    });
}

buttoni("Viisi", Tehtävä5);

//TEHTÄVÄ 6 ja TEHTÄVÄ 7

function rollDice(diceSides){
    const dice = Math.floor(Math.random() * diceSides) + 1;
    return dice;
};

const Tehtävä6 = (maxDice) => {
    let status = true;
    const diceSides = parseInt(prompt("How many sides should the dice have?"))
    const rolledDices = []
    while (status === true){
        const dice = rollDice(diceSides);
        if (dice === diceSides){
            rolledDices.push(dice)
            status = false;
            break;
        } else {
            rolledDices.push(dice)
        }
    }
    rolledDices.sort((a, b) => a - b);
    rolledDices.forEach(dice => {
        const newlist = document.createElement("li");
        const list = document.querySelector(".T6");
        list.appendChild(newlist).innerHTML = `R ${dice}`
    });
}

buttoni("Kuusi", Tehtävä6)

//TEHTÄVÄ 8

const itemArray = ["Johnny", "Deedee", "Joey", "Marky"];

function concat(array){
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    return string;
}

const Tehtävä8 = () => {
    const joinedNames = concat(itemArray);
    document.querySelector(".T8").innerHTML = `The joined names are ${joinedNames}!`
}

buttoni("Kahdeksan", Tehtävä8)

//TEHTÄVÄ 9

const numberArrays = [10, 5, 7, 9, 11, 15, 20, 21, 23, 25, 28, 33, 30, 4, 2];

function even(numberArray){
    const newNumbersArray = [];
    numberArrays.forEach(number => {
        if (number % 2 === 0){
            newNumbersArray.push(number)
        } 
    });
    return newNumbersArray;
};

const Tehtävä9 = () => {
    const array = even(numberArrays);
    console.log("Old numbers:" + numberArrays);
    console.log("Even numbers:" + array);
    document.querySelector(".T9").innerHTML = "Check the console for results"
};

buttoni("Yhdeksän", Tehtävä9)

const Tehtävä10 = () => {
    const candidates = [];
    const askForCandidates = parseInt(prompt("How many candidates?"));
    for (let i = 0; i < askForCandidates; i++){
        const askname = prompt(`Whats the name of candidate nr ${i+1}`);
        candidates.push({name : askname, vote: 0 }); 
    }
    const askVoters = parseInt(prompt("How many voters?"));
    for (let i = 0; i < askVoters; i++){
        const whoVotes = parseInt(prompt(`Voter ${i+1}! Enter candidate number who you want to vote for :`));
        candidates[whoVotes-1].vote += 1;
    };
    candidates.sort((a, b) => b.vote - a.vote);
    console.log(`The winner is ${candidates[0].name} with ${candidates[0].vote} votes! \n
        results:`);
    candidates.forEach(candidate => {
        console.log(candidate.name + " : " + candidate.vote + "votes");
    });
    document.querySelector(".T10").innerHTML = "Check console for results!"
}

buttoni("Kymmenen", Tehtävä10);

