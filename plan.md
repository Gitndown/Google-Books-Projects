Step by Step Breakdown of Google Books Project

Purpose: This breakdown should ensure that each function is pure and reusable.

1. Fetch the Data -->
   Create a function which start's by the user's input. -The function should request the data from the Google Books API.

2. Load the Data -->
   Create a function which retrieves the data from the chosen API and returns 10 search results(default) of the search to our console. Each result should contain a title, eg. search(cats); return [Book title: "Cat in the Hat, author: "Dr. Zseus" , published date: "12 March 1957", description: "The Cat in the Hat is a book where an eccentric stranger (who's a cat!) visits two children..."].

3. Display Search Results -->
   Create a function which displays 10 results on the HTML page. Each result should be displayed in its own div(card) and they should appear on the page as a grid.

4. Make the Grid interactive -->
   4.a. Create a function that shows more information about the result when it is clicked on.
   4.b. Create a separate SCSS file for each block.
   4.c. Create media queries so it looks good atleast on a phone screen, tablet screen, tv screen.
   4.d. Try to create and use more non-DOM functions.

5. Clear the Search Results -->
   Create a function which restarts the whole process and does not keep displaying previous searches.
