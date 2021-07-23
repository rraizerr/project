"use strict";

let numberOfFilms;

console.log(numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", ""));

let perdonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


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

console.log(perdonalMovieDB);


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



