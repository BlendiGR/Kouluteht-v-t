"use strict";

const formi = document.getElementById("getShow");
const resultsContainer = document.createElement("div");
resultsContainer.id = "results";
document.body.appendChild(resultsContainer);

formi.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchResult = document.getElementById("query").value;

    resultsContainer.innerHTML = '';

    try {
        const vastaus = await fetch(`https://api.tvmaze.com/search/shows?q=${searchResult}`);
        if (!vastaus.ok) {
            throw new Error("Error fetching TV show data");
        }
        const data = await vastaus.json();

        data.forEach(tvShow => {
            const article = document.createElement("article");

            const nameElement = document.createElement("h2");
            nameElement.textContent = tvShow.show.name || "No Name Available";
            article.appendChild(nameElement);

            if (tvShow.show.url) {
                const linkElement = document.createElement("a");
                linkElement.href = tvShow.show.url;
                linkElement.textContent = "Details";
                linkElement.target = "_blank";
                article.appendChild(linkElement);
            }

            if (tvShow.show.image?.medium) {
                const imageElement = document.createElement("img");
                imageElement.src = tvShow.show.image.medium;
                imageElement.alt = tvShow.show.name || "No Name Available";
                article.appendChild(imageElement);
            }

            if (tvShow.show.summary) {
                const summaryElement = document.createElement("div");
                summaryElement.innerHTML = tvShow.show.summary;
                article.appendChild(summaryElement);
            }

            resultsContainer.appendChild(article);
        });
    } catch (error) {
        console.error("Error:", error);
        resultsContainer.innerHTML = '<p>An error occurred. Please try again.</p>';
    }
});
