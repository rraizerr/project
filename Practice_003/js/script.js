"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    }
}

start();

let perdonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms() {
      for (let i = 0; i < 2; i++) {
         let a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
            perdonalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            console.log("Error");
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (perdonalMovieDB.count >= 1 && perdonalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else {
    if (perdonalMovieDB.count >= 10 && perdonalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else {
        if (perdonalMovieDB.count >= 30) {
            console.log("Вы киноман");    
        } else {
            console.log("Произошла ошибка");
        }
        
    }
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(perdonalMovieDB);        
    } else {
        console.log("Error");
    }

}

showMyDB(perdonalMovieDB.privat);

// Мой вариант ответа
// function writeYourGenres(x) {
//     for (let i = 1; i <= 3; i++) {
//         x[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
                
//     }
// }

// writeYourGenres(perdonalMovieDB.genres);

// Ответ куратора
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         perdonalMovieDB.genres[i - 1] = genre;
                
//     }
// }

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        perdonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
                
    }
}

writeYourGenres();

// console.log(perdonalMovieDB);
