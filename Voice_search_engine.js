$(document).ready(function() {
  const searchForm = $('#search_form');
  const searchInput = $('#search_bar');
  const voiceSearchButton = $('#voice_search');
  
  // create an instance for speeech recognition 
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  
  // listening in voice search mode when user clicks it
  voiceSearchButton.click(function() {
    recognition.start();
  });
  
  // text of the asked query
  recognition.addEventListener('result', function(event) {
    const transcript = event.results[0][0].transcript;
    searchInput.val(transcript);
    searchForm.submit();
  });
  
  // error page
  recognition.addEventListener('error', function(event) {
    console.log(event.error);
  });
  
  // creating search button
  const searchButton = $('<button>', {
    id: 'search-button',
    text: 'Search'
  });
  searchButton.click(function() {
    const searchTerm = searchInput.val();
  });
  
  // adding search button to the page
  searchForm.append(searchButton);
});
