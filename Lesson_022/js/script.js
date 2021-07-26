"use strict";

// Передача данных по ссылке и по значению

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // передает ссылку на объект
// при изменении cory изменяется объект

// copy.a = 10;

// console.log(copy);
console.log(obj);


// создание "поверхностной" копии (вложенные объекты и массивы
// будут ссылками на оригинал)
// Создание копии с помощью функции
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;

newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

//Метод Object.assign() - объединение объектов

const add = {
    d: 17,
    e: 20
};

// создаем независимую поверхностную копию объекта
console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

console.log("");
//Метод для создания копии массива slice()
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "adsadasdas";
console.log(newArray);
console.log(oldArray);

//Новые стандарты, оператор спред ... - оператор разворота
const video = ["toutube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);
    
//использование оператора ... в функциях
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);    
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

console.log(array);
console.log(newAarray);

const q = {
    one: 1,
    two: 2
};

const newObj = { ...q };
