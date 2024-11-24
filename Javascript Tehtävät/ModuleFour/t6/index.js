"use strict";

const form = document.createElement("form");
const input = document.createElement("input");
const submit = document.createElement("input");
const resultsContainer = document.createElement("div");

form.id = "jokeSearchForm";
input.id = "searchQuery";
input.type = "text";
input.placeholder = "Enter a chucknorris";
submit.type = "submit";
submit.value = "Search";

form.appendChild(input);
form.appendChild(submit);
document.body.appendChild(form);
document.body.appendChild(resultsContainer);

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    resultsContainer.innerHTML = '';

    const query = document.getElementById("searchQuery").value.trim();

    if (!query) {
        resultsContainer.innerHTML = "<p>Enter Chucknorris Joke</p>";
        return;
    }

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        if (!response.ok) {
            throw new Error("Error");
        }
        const data = await response.json();

        if (data.result.length === 0) {
            resultsContainer.innerHTML = "<p>Error</p>";
            return;
        }
        data.result.forEach((joke) => {
            const article = document.createElement("article");
            const jokeParagraph = document.createElement("p");

            jokeParagraph.textContent = joke.value;
            article.appendChild(jokeParagraph);
            resultsContainer.appendChild(article);
        });
    } catch (error) {
        console.error("Error:", error);
        resultsContainer.innerHTML = "<p>Error</p>";
    }
});
