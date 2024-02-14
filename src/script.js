// script.js
document.addEventListener("DOMContentLoaded", function () {
    const jarContainer = document.getElementById("jar-container");
    const quoteContainer = document.getElementById("quote-container");
    const imageElement = document.getElementById("jar");

    // Function to toggle between bottle and quote view
    function toggleView() {
        imageElement.style.transform = "scale(0.9)";
        setTimeout(() => {
            jarContainer.classList.add("hidden");
            quoteContainer.classList.remove("hidden");
        }, 500);
    }

    // Fetch quotes from the JSON file
    fetch("../data/quotes.json")
        .then((response) => response.json())
        .then((data) => {
            //Fetch elements from documents
            const quoteElement = document.getElementById("quote");

            //Get the current date
            const day = new Date().getDate();
            let month = new Date().getMonth();
            let year = new Date().getFullYear();

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
            switch(jarType) {
                case 0:
                    imageElement.src = "../res/jar1.PNG";
                    break;
                case 1:
                    imageElement.src = "../res/jar2.PNG";
                    break;
                case 2:
                    imageElement.src = "../res/jar3.PNG";
                    break;
                default:
                    imageElement.src = "../res/jar4.PNG";
            }

            let numColors = 4;
            if(day < 14) {
                numColors = 8;
            } else if(day > 26) {
                numColors = 6;
            }
            const paperType = Math.floor(Math.random() * numColors);

            // Update the image source
            switch(paperType) {
                case 0:
                    quoteContainer.style.backgroundImage = "url(../res/blue.jpg)";
                    break;
                case 1:
                    quoteContainer.style.backgroundImage = "url(../res/orange.jpg)";
                    break;
                case 2:
                    quoteContainer.style.backgroundImage = "url(../res/red.jpg)";
                    break;
                case 3:
                    quoteContainer.style.backgroundImage = "url(../res/pink.jpg)";
                    break;
                case 4:
                    quoteContainer.style.backgroundImage = "url(../res/green.jpg)";
                    break;
                case 5:
                    quoteContainer.style.backgroundImage = "url(../res/purple.jpg)";
                    break;
                case 6:
                    quoteContainer.style.backgroundImage = "url(../res/cork.jpg)";
                    break;
                default:
                    quoteContainer.style.backgroundImage = "url(../res/chalk.jpg)";
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
