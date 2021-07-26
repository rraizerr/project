"use strict";

let numberOfFilms;

// console.log(numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", ""));

let perdonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


//     for (let i = 0; i < 2; i++) {
//          let a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt("На сколько оцените его?", "");
//         if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
//             perdonalMovieDB.movies[a] = b;
//             console.log("Done");
//         } else {
//             console.log("Error");
//             i--;
//         }
//     }

// console.log(perdonalMovieDB);


// if (perdonalMovieDB.count >= 1 && perdonalMovieDB.count < 10) {
//     console.log("Просмотрено мало фильмов");
// } else {
//     if (perdonalMovieDB.count >= 10 && perdonalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else {
//         if (perdonalMovieDB.count >= 30) {
//             console.log("Вы киноман");    
//         } else {
//             console.log("Произошла ошибка");
//         }
        
//     }
//     }


// ------ Методы и свойства строк и чисел

const fruit = "Some fruit";

console.log(fruit.length);
console.log(fruit.indexOf("fruit"));
console.log(fruit[5].toUpperCase());
console.log(fruit);
console.log(fruit.indexOf("q"));

const logg = "Hello world";

console.log(logg.indexOf("world"));
console.log(logg.indexOf("d"));
console.log("");
console.log(logg.slice(6, 11)); // d на 10 месте, чтобы не отрезало букву ставим 11
console.log(logg.slice(6));
console.log(logg.slice(-5, -1)); // Начинает работу с права налево
console.log("");
console.log(logg.substring(6, 11)); // не поддежривает отрицательные
console.log("");
console.log(logg.substr(6, 5)); // начиная с 6 позиции вырезать 5 символов
console.log("");

const num = 12.2;
console.log(Math.round(num));
console.log("");

const test = "12.2px";
console.log(parseInt(test)); // переводит число в другую систему исчисления
console.log(parseFloat(test)); // возвращает число в десятичном варианте
