// import renderMyBooks from "/DOM.js";

// Lets concatenate the User's search with the API url
const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";

const getSearchUrl = (searchTerm) => {
  return urlBase + searchTerm;
};

// test this
console.log(getSearchUrl("javascript"));

const search = async (searchTerm) => {
  const requestPromise = fetch(getSearchUrl(searchTerm));
  const response = await requestPromise;
  const searchData = await response.json();

  // Let's test it-->
  //this object a the collection of results from the search-->
  console.log(searchData);

  //Let's target the desired info we want-->
  console.log(searchData.items[0].volumeInfo.title);

  // Function to fetch our results from the API
  const publishers = searchData.items.map((volume) => {
    const output = {};

    // Title info
    if (volume.volumeInfo.authors) output.author = volume.volumeInfo.authors[0];
    else output.author = "Unknown";
    output.publisher = volume.volumeInfo.publisher;
    return output;
  });
  console.log(publishers);
};
