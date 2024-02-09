// script.js
document.addEventListener("DOMContentLoaded", function() {
  const jarContainer = document.getElementById('jar-container');
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
      const imageElement = document.getElementById('jar');
      const jarType = Math.floor(today/9);
      console.log(jarType);
      // Update the image source
      if( jarType == 0 ) {
        imageElement.src = 'jar1.jpg';
      } else if( jarType == 1 ) {
        imageElement.src = 'jar2.jpg';
      } else if ( jarType == 2 ){
        imageElement.src = 'jar3.jpg';
      } else {
        imageElement.src = 'jar4.jpg';
      }

      const quoteOfTheDay = data[today % data.length];
      quoteElement.textContent = `"${quoteOfTheDay.quote}"`;
      authorElement.textContent = `- ${quoteOfTheDay.author}`;

      // Attach click event to the bottle to toggle views
      jarContainer.addEventListener('click', toggleView);
    })
    .catch(error => console.error('Error fetching quotes:', error));
});
