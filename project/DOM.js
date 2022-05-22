const renderMyBooks = (array) => {
  const myBooks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < myBooks.length; i++) {
    const grid = document.createElement("div");

    // Author of the book
    const authorElement = document.createElement("h4");
    const authorTextNode = document.createTextNode(array[i].author);

    authorElement.appendChild(authorTextNode);

    //Book title
    const titleElement = document.createElement("h2");
    const titleTextNode = document.createTextNode(array[i].title);

    titleElement.appendChild(titleTextNode);

    // Description of book
    const descriptionElement = document.createElement("p");
    const descriptionTextNode = document.createTextNode(array[i].description);

    descriptionElement.appendChild(descriptionTextNode);

    // Image/Thumbnail
    const imageElement = document.createElement("img");
    imageElement.src = array[i].image.thumbnail;

    // append each piece of data to the result
    grid.appendChild(titleElement);
    grid.appendChild(authorElement);
    grid.appendChild(descriptionElement);
    grid.appendChild(imageElement);

    // this is the outside div
    document.querySelector(".results").appendChild(grid);
  }
};

export default renderMyBooks;
