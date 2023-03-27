console.log('Hello world!')

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}.`
  }
}

let myBook = new Book(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  180,
  'not read yet',
)

console.log(myBook.info())

// All objects in JavaScript have a prototype. Stated simply, the prototype is another object that the original object inherits from,
// which is to say, the original object has access to all of its prototype’s methods and properties.

function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function () {
  console.log(this.name)
}
Student.prototype.goToProm = function () {
  console.log('Eh.. go to prom?')
}

// TO DO : read https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors ASSIGNMENT

const gimli = {
  name: 'Gimli',
  race: 'dwarf',
  weapon: 'axe',
  greet: function () {
    return `Hi! My name is ${this.name}`
  },
}

gimli.age = 39
gimli['attack'] = function () {
  return `Gimli attack with an ${this.weapon}!`
}
console.log(gimli.attack())
//console.log(gimli)

console.log(Object.keys(gimli))

let x = {}

console.log(Object.getPrototypeOf(x))

let y = [1, 2, 3]
console.log(Object.getPrototypeOf(y))

function Hero(name, level) {
  this.name = name
  this.level = level
}

Hero.prototype.greet = function () {
  return `${this.name} says Hello!`
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level)
  this.weapon = weapon
}

function Healer(name, level, spell) {
  Hero.call(this, name, level)
  this.spell = spell
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype)
Object.setPrototypeOf(Healer.prototype, Hero.prototype)

// All other prototype methods added below

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`
}

const hero1 = new Warrior('Bjorn', 1, 'axe')
const hero2 = new Healer('Kanin', 1, 'cure')

console.log(hero1.attack())
console.log(hero1.greet())

// TODO https://javascript.info/prototype-inheritance
