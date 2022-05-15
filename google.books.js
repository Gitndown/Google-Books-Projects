const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";

getSearchUrl = (searchTerm) => {
  return urlBase + searchTerm;
};

console.log(getSearchUrl("javascript"));

const search = async (searchTerm) => {
  const requestPromise = fetch(getSearchUrl(searchTerm));
  const response = await requestPromise;
  const searchData = await response.json();
  console.log(searchData);
  console.log(searchData.items[0].volumeInfo.title);

  const publishers = searchData.items.map((volume) => {
    const output = {};

    if (volume.volumeInfo.authors) output.author = volume.volumeInfo.authors[0];
    else output.author = "Unknown";
    output.publisher = volume.volumeInfo.publisher;
    return output;
  });
  console.log(publishers);
};
