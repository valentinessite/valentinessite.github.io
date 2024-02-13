// script.js
document.addEventListener("DOMContentLoaded", function () {
    const jarContainer = document.getElementById("jar-container");
    const quoteContainer = document.getElementById("quote-container");

    // Function to toggle between bottle and quote view
    function toggleView() {
        jarContainer.classList.add("hidden");
        quoteContainer.classList.remove("hidden");
    }

    // Fetch quotes from the JSON file
    fetch("../data/quotes.json")
        .then((response) => response.json())
        .then((data) => {
            //Fetch elements from documents
            const quoteElement = document.getElementById("quote");
            const imageElement = document.getElementById("jar");

            //Get the current date
            const day = new Date().getDate();
            let month = new Date().getMonth();
            const year = new Date().getFullYear();

            if (day < 14) {
                if (month == 0) {
                    month = 11;
                    year = year - 1;
                } else {
                    month = month - 1; // If it is not the yet the 14th, prevent the month from advancing
                }
            }

            //Calculate the number of days since the last 14th
            const valDate = new Date(year, month, 14).getTime();
            const currDate = new Date().getTime();
            const daysSinceValDay = Math.round(
                (currDate - valDate) / (1000 * 3600 * 24)
            );

            const jarType = Math.floor(daysSinceValDay / 9);

            // Update the image source
            if (jarType == 0) {
                imageElement.src = "../res/jar1.PNG";
            } else if (jarType == 1) {
                imageElement.src = "../res/jar2.PNG";
            } else if (jarType == 2) {
                imageElement.src = "../res/jar3.PNG";
            } else {
                imageElement.src = "../res/jar4.PNG";
            }

            const paperType = Math.floor(Math.random() * 4);

            // Update the image source
            if (paperType == 0) {
                quoteContainer.style.backgroundImage = "url(../res/blue.jpg)";
            } else if (paperType == 1) {
                quoteContainer.style.backgroundImage = "url(../res/orange.jpg)";
            } else if (paperType == 2) {
                quoteContainer.style.backgroundImage = "url(../res/red.jpg)";
            } else {
                quoteContainer.style.backgroundImage = "url(../res/green.jpg)";
            }

            console.log(paperType);

            //Use json data to populate page
            const dayData = data[day % data.length];
            quoteElement.textContent = `${dayData.quote}`;

            // Attach click event to the bottle to toggle views
            jarContainer.addEventListener("click", toggleView);
        })
        .catch((error) => console.error("Error fetching quotes:", error));
});
