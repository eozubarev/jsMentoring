'use strict'

const animals = {
  age: 3,
  sound: 'Meow',
  loveFood: ['fish', 'milk'],
  sort: {
    type: 'cat',
  },
  canMeow() {
    console.log(this.sound)
  },
  hasWool: true,
}

console.log(typeof (animals.age)) // number
console.log(typeof (animals.sound)) // string
console.log(typeof (animals.sort)) // object
console.log(typeof (animals.canMeow)) // function
console.log(typeof (animals.loveFood)) //object
console.log(typeof (animals.hasWool)) // boolean

//type of key
const animals = {
  // []: 3, // expression expected
  let: 1,
  true: false,
  'sound': 'Meow',
  loveFood: ['fish', 'milk'],
  canMeow() {
    console.log(this.sound)
  },
  hasWool: true,
}

console.log(typeof (animals. [])) // expression expected
console.log(typeof (animals.let)) // number ||reserved word is ok (return, for, const etc.)
console.log(typeof (animals.true)) // boolean
console.log(typeof (animals.sound)) // string
console.log(typeof (animals.loveFood)) // object
console.log(typeof (animals.hasWool)) // boolean


const obj1 = {
  test: 123,
}
obj1.opa = '456'

const obj2 = Object.assign({}, obj1)
obj2.opa = '789' //  

obj2 = obj1 // same error when obj = 10
/*
Объявление const создает ссылку на значение, доступную только для чтения. 
Это не означает, что значение, которое он содержит, является неизменяемым — 
просто идентификатор переменной не может быть переназначен. 
Например, в случае, когда содержимое является объектом, это означает, 
что содержимое объекта (например, его свойства) может быть изменено.
*/

console.log(obj1 === obj2) // Assignment to constant variable
console.log(obj2.opa) // -||-

//fix with let
const obj1 = {
  test: 123,
}
obj1.opa = '456'

let obj2 = Object.assign({}, obj1)

obj2 = obj1

console.log(obj1 === obj2) // true
console.log(obj2.opa) // 456

// try another type 

const obj1 = {
  test: 123,
}
obj1.opa = '456'

let obj2 = Object.assign({}, obj1)

obj2 = 10

console.log(obj1 === obj2) // false
console.log(obj2.opa) // undefined

// test Object.freeze(obj);
const obj1 = {
  test: 123,
}
Object.freeze(obj1);

obj1.opa = '456'
obj1.test = 321 // don't add in obj1

console.log('obj1.opa:', obj1) // {test: 123}