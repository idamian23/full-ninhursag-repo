let myLibrary = []

const addBookToLibrary = function (book) {
  myLibrary.push(book)
}

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}.`
  }
}

// THE LIST OF BOOKS
let book1 = new Book('Abracadabra', 'Piticot', '67', 'not read')
addBookToLibrary(book1)

let book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '180', 'read')
addBookToLibrary(book2)

let book3 = new Book('To Kill a Mockingbird', 'Harper Lee', '281', 'not read')
addBookToLibrary(book3)

let book4 = new Book('1984', 'George Orwell', '328', 'read')
addBookToLibrary(book4)

let book5 = new Book(
  'The Catcher in the Rye',
  'J.D. Salinger',
  '224',
  'not read',
)
addBookToLibrary(book5)

let book6 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', '1178', 'read')
addBookToLibrary(book6)

let book7 = new Book(
  "The Hitchhiker's Guide to the Galaxy",
  'Douglas Adams',
  '193',
  'not read',
)
addBookToLibrary(book7)

let book8 = new Book('The Hobbit', 'J.R.R. Tolkien', '304', 'read')
addBookToLibrary(book8)

let book9 = new Book('Pride and Prejudice', 'Jane Austen', '279', 'read')
addBookToLibrary(book9)

let book10 = new Book(
  'One Hundred Years of Solitude',
  'Gabriel Garcia Marquez',
  '417',
  'not read',
)
addBookToLibrary(book10)

// END OF BOOKS

//DISPLAY ON PAGE THE LIBRARY
const displayLibrary = function () {}
