import renderMyBooks from "./DOM.js";

const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";

// Lets concatenate the User's search with the API url
const getSearchUrl = (searchTerm) => {
  return urlBase + searchTerm;
};

// test this
// console.log(getSearchUrl("javascript"));

// Function to fetch the data--->
const search = async (searchTerm) => {
  const requestPromise = fetch(getSearchUrl(searchTerm));
  const response = await requestPromise;
  const searchData = await response.json();

  // Let's test it-->
  //this object is the result-->
  // console.log(searchData);

  //Let's target the desired info.-->
  // console.log(searchData.items[0].volumeInfo);

  // Authors

  const info = searchData.items.map((x) => {
    let output = {};

    if (x.volumeInfo.authors) {
      output.author = x.volumeInfo.authors[0];
    } else output.author = "Unknown";
    output.publisher = x.volumeInfo.publisher;
    // return output;

    if (x.volumeInfo.title) {
      output.title = x.volumeInfo.title;
    } else output.title = "Title cannot be found";
    output.title = x.volumeInfo.title;
    // return output;

    if (x.volumeInfo.description) {
      output.description = x.volumeInfo.description;
    } else output.description = "Description cannot be found";
    if (output.description.length > 600) {
      output.description = `${output.description.slice(0, 600)}...`;
    }

    // return output;

    if (x.volumeInfo.imageLinks) {
      output.image = x.volumeInfo.imageLinks;
    } else output.image = "Image cannot be found";
    output.image = x.volumeInfo.imageLinks;
    return output;
  });
  // Let's test it
  // console.log(info);

  renderMyBooks(info);
  //Description
};

const searchInput = document.getElementById("searchField");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
  const removeAllChildren = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };
  removeAllChildren(document.getElementById("result"));

  search(searchInput.value);
});
