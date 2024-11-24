"use strict";

const formi = document.getElementById("getShow");

formi.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchResult = document.getElementById("query").value;

    try {
        const vastaus = await fetch(`https://api.tvmaze.com/search/shows?q=${searchResult}`);
        if (!vastaus.ok) {
            throw new Error("Error");
        }
        const data = await vastaus.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
});
