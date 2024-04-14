document.addEventListener("DOMContentLoaded", function() {
    const studentInfo = document.getElementById("studentInfo");
    studentInfo.textContent = "My Georgian Student ID: 200552718,  My full Name: Datt BhaskarBhai Patel";

    const searchForm = document.getElementById("searchForm");
    const productInfo = document.getElementById("productInfo");
    const API = document.getElementById("API");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById("inputText").value;

        // Fetch information from Wikipedia API
        fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${searchTerm}&origin=*`)
        .then(response => response.json())
        .then(data => {
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            const extract = pages[pageId].extract;
            productInfo.innerHTML = `<p>${extract}</p>`;
        })
        .catch(error => {
            console.error("Error fetching product information:", error);
            productInfo.innerHTML = "<p>Error fetching information</p>";
        });

        // Update API link
        API.href = "https://www.mediawiki.org/wiki/API:Main_page";
    });
});