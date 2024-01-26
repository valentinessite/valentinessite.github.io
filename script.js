// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Fetch quotes from the JSON file
  fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
      // Get the current day (0-6, where 0 is Sunday)
      const today = new Date().getDay();

      // Display the quote of the day
      const quoteElement = document.getElementById('quote');
      const authorElement = document.getElementById('author');

      const quoteOfTheDay = data[today % data.length];
      quoteElement.textContent = `"${quoteOfTheDay.quote}"`;
      authorElement.textContent = `- ${quoteOfTheDay.author}`;
    })
    .catch(error => console.error('Error fetching quotes:', error));
});
