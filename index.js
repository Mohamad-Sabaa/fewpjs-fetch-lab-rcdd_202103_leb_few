function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(renderBooks(response) {
//     console.log(response);
//    return response.JSON();
//  }).then(renderBooks(JSON) {
//  console.log(JSON);
// });
fetch('https://anapioficeandfire.com/api/books')
  .then(resp => {
    return resp.json()
  )}
  .then(json => console.log(json));
 }
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  renderBooks(json);
});
