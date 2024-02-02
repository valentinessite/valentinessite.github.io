// script.js
document.addEventListener("DOMContentLoaded", function() {
  const bottleContainer = document.getElementById('bottle-container');
  const quoteContainer = document.getElementById('quote-container');

  // Function to toggle between bottle and quote view
  function toggleView() {
    bottleContainer.classList.add('hidden');
    quoteContainer.classList.remove('hidden');
  }

  // Fetch quotes from the JSON file
  fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
      // Get the current day (0-6, where 0 is Sunday)
      const today = new Date().getDate();

      // Display the quote of the day
      const quoteElement = document.getElementById('quote');
      const authorElement = document.getElementById('author');

      const quoteOfTheDay = data[today % data.length];
      quoteElement.textContent = `"${quoteOfTheDay.quote}"`;
      authorElement.textContent = `- ${quoteOfTheDay.author}`;

      // Attach click event to the bottle to toggle views
      bottleContainer.addEventListener('click', toggleView);
    })
    .catch(error => console.error('Error fetching quotes:', error));
});
