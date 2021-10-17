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

// ivan.hello();

// 4) Ручная привязка this: call, app;y, bind

// function sayName() {
//     console.log(this);          // Выведет объект, который мы передали
//     console.log(this.name);     // Выведет свойство переданного объекта
// }

// const user = {
//     name: "John"
// };

// sayName.call(user);
// sayName.apply(user);


// Разница между call и apply  в синтаксисе
// метод bind - создает новую функцию связанную с определенным контекстом

// function sayName(surname) {
//     console.log(this);          // Выведет объект, который мы передали
//     console.log(this.name + " " + surname);     // Выведет свойство переданного объекта
// }

// const user = {
//     name: "John"
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));

const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    console.log(this);
    this.style.backgroundColor = "red";
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this); // ссылается на родителя, которым является метод объекта, выведет объект
            console.log(this.num); // 5
        };
        say();
    }
};

obj.sayNumber();