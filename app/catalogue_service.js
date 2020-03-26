// eslint-disable-next-line no-unused-vars
const catalogue = [
  {title: 'The Catcher in the Rye', author: 'J.D. Salinger', quantity:10},
  {title: 'Dracula', author: 'Bram Stoker', quantity: 0},
  {title: 'Between the Assassinations', author: 'Aravind Adiga', quantity:9},
  {title: 'Wolf Hall', author: 'Hilary Mantel', quantity:33},
  {title: 'Bring Up The Bodies', author: 'Hilary Mantel', quantity:31},
  {title: 'A Place of Greater Safety', author: 'Hilary Mantel', quantity:11},
  {title: 'Giving Up the Ghost', author: 'Hilary Mantel', quantity:8},
  {title: 'The Assassination of Margaret Thatcher', author: 'Hilary Mantel', quantity:43},
  {title: 'The Yellow Wallpaper', author: 'Charlotte Perkins Gilman', quantity:12},
  {title: 'Conversations With Friends', author: 'Sally Rooney', quantity:1},
  {title: 'Normal People', author: 'Sally Rooney', quantity:2},
  {title: 'Everything I Never Told You', author: 'Celeste Ng', quantity:6},
  {title: '2666', author: 'Robert Bolaño', quantity:17},
  {title: 'By Night In Chile', author: 'Robert Bolaño', quantity:8},
  {title: 'A Tale of Two Cities', author: 'Charles Dickens', quantity:3},
  {title: 'Oliver Twist', author: 'Charles Dickens', quantity:7},
  {title: 'Great Expectations', author: 'Charles Dickens', quantity:1},
  {title: 'The Blind Assassin', author: 'Margaret Atwood', quantity:8},
  {title: 'Why Be Happy When You Could Be Normal?', author: 'Jeanette Winterson', quantity:19},
  {title: 'The Origin of Species', author: 'Charles Darwin', quantity:50}
];

function countBooksByAuthor(author) {

  let total = 0;

  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].author == author) {
      total++;
    }
  }
  return total;
}

function checkBookByTitle(title) {
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title == title) {
      return true;
    }
  }
  return false;
}

function countBooksByFirstLetter(letter) {
    
  let total = 0;

  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title[0].toUpperCase() === letter || catalogue[i].title[0].toLowerCase() === letter) {
      total++;
    }
  }
  return total;
}

function getQuantity(title) {
 
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title == title) {
      return catalogue[i].quantity;
    }
  }
  return 0;
}

function getBooksByAuthor(author) {
  const authorsWorks = [];

  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].author === author) {
      authorsWorks.push(catalogue[i]);
    }
  }
  return authorsWorks;
}

function checkQuantity(title, quantity) {
  for (i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title === title && catalogue[i].quantity >= quantity) {
      return true;
    }
  }
  return false;
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
