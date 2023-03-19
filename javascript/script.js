console.log('Hello world!');

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}.`
    }
}

let myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, 'not read yet');

console.log(myBook.info());

// All objects in JavaScript have a prototype. Stated simply, the prototype is another object that the original object inherits from,
// which is to say, the original object has access to all of its prototype’s methods and properties.

function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() {
  console.log(this.name)
}
Student.prototype.goToProm = function() {
  console.log("Eh.. go to prom?")
}

// TO DO : read https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors ASSIGNMENT