"use strict";

// function showThis() {
//     console.log(this);
// }

// showThis();

//  1) Обычная функция: this = window, в строгом режиме - this = undefined

// function showThis(a, b) {
//     console.log(this);
//     function sum() {            // Замыкание
//         console.log(this);      // функция sum берет значения a и b
//         return a + b;           // у функции showThis
//     }
//     console.log(sum());
// }

// showThis(4, 5);


// 2) Контекст у методов объекта - это сам объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {      // Это простой вызов функции, а не метод
//          console.log(this);     // объекта, а функция, которая запускается
//         }                       // внутри метода, поэтому контекст вызова
//         shout();                // теряется
//     }
// };
// obj.sum();


// 3) this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// let ivan = new User("Ivan", 23);


// 4) 

function sayName() {
    console.log(this);
    console.log(this.name);
}

const user = {
    name: "John"
};

sayName.call(user);
sayName.apply(user);
