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
            const today = new Date().getDate();
            const quoteElement = document.getElementById("quote");
            const imageElement = document.getElementById("jar");
            const jarType = Math.floor(today / 9);
            console.log(jarType);

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

            const quote = data[today % data.length];
            quoteElement.textContent = `"${quote.quote}"`;

            // Attach click event to the bottle to toggle views
            jarContainer.addEventListener("click", toggleView);
        })
        .catch((error) => console.error("Error fetching quotes:", error));
});
