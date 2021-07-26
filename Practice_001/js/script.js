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

let a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d =  prompt("На сколько оцените его?", "");

perdonalMovieDB.movies[a] = b;
perdonalMovieDB.movies[c] = d;

console.log(perdonalMovieDB);