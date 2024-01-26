function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  
    var queryParams = { "api-key": "0QM7FTtDo3PpE2Ax0RJWaVeSdFxu9pHT" };





$("#run-search").on("click", function (event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
  
    // Empty the region associated with the articles
    clear();
  
    // Build the query URL for the Fetch request to the NYT API
    var queryURL = buildQueryURL();
  
    // Make the Fetch request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(updatePage);
  });