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

      const today = new Date().getDate();
      const quoteElement = document.getElementById('quote');
      const authorElement = document.getElementById('author');
      const imageElement = document.getElementById('bottle');

      console.log(today/11);
      // Update the image source
      if( today/11 == 0 ) {
        imageElement.src = 'jar1';
      } else if(today/11 == 1 {
        imageElement.src = 'jar2';
      } else {
        imageElement.src = 'jar3';
      } 

      const quoteOfTheDay = data[today % data.length];
      quoteElement.textContent = `"${quoteOfTheDay.quote}"`;
      authorElement.textContent = `- ${quoteOfTheDay.author}`;

      // Attach click event to the bottle to toggle views
      bottleContainer.addEventListener('click', toggleView);
    })
    .catch(error => console.error('Error fetching quotes:', error));
});
