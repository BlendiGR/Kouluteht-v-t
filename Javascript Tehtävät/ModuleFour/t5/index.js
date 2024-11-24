"use strict";

const chucknorris = async () => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }
        const data = await response.json();
        console.log(data.value);
    } catch (error) {
        console.error("Error:", error);
    }
};

chucknorris();
