let myLibrary = []

const addBookToLibrary = function (book) {
  myLibrary.push(book)
}

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// Book.prototype.info = function () {
//   return `${title} by ${author}, ${pages} pages, ${read}.`
// }

// THE LIST OF BOOKS
let book1 = new Book('Sudoku', 'Hikaru Nakamura', '67', 'not read')
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
let tableBody = document.querySelector('.table__body')

const displayBooks = function () {
  for (let book of myLibrary) {
    let tableRow = document.createElement('tr')
    tableRow.setAttribute('class', 'table__row')
    tableRow.dataset.index = myLibrary.indexOf(book)
    let delButton = document.createElement('button')
    delButton.textContent = 'Delete book'
    delButton.setAttribute('class', 'delete-button')

    for (let property in book) {
      let tableCell = document.createElement('td')
      tableCell.textContent = book[property]
      tableRow.append(tableCell)
      tableRow.append(delButton)
    }
    tableBody.append(tableRow)
  }
}
displayBooks()
// ADD NEW BOOK BUTTON
let addBookButton = document.querySelector('.add-book')
let formPopup = document.querySelector('.form-popup')
let submitButton = document.querySelector('.submit')
let form = document.querySelector('.form-container')

const openForm = function () {
  if (formPopup.style.display === 'none') {
    formPopup.style.display = 'block'
  } else {
    formPopup.style.display = 'none'
  }
}
addBookButton.addEventListener('click', openForm)

// const getBookFromInput = function () {
//   const title = document.getElementById('title').value
//   const author = document.getElementById('author').value
//   const pages = document.getElementById('pages').value
//   const isRead = document.getElementById('read-notread').value
//   return new Book(title, author, pages, isRead)
// }

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('read-notread').value
  let newBook = new Book(title, author, pages, isRead)
  addBookToLibrary(newBook)

  let tableRow = document.createElement('tr')
  tableRow.setAttribute('class', 'table__row')
  tableRow.dataset.index = myLibrary.indexOf(newBook)
  let delButton = document.createElement('button')
  delButton.textContent = 'Delete book'
  delButton.setAttribute('class', 'delete-button')

  for (let property in newBook) {
    let tableCell = document.createElement('td')
    tableCell.textContent = newBook[property]
    tableRow.append(tableCell)
    tableRow.append(delButton)
  }
  tableBody.append(tableRow)

  form.reset()
})

//DELETE BOOK

tableBody.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-button')) {
    const index = event.target.parentNode.dataset.index
    myLibrary.splice(index, 1)
    tableBody.innerHTML = ''
    displayBooks()
  }
})

// READ NOT READ
