"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
        }
    },
    rememberMyFilms: function() {
      for (let i = 0; i < 2; i++) {
         let a = prompt("Один из последних просмотренных фильмов?", ""),
             b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            console.log("Error");
            i--;
        }
    }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else {
            if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель");
            } else {
                if (personalMovieDB.count >= 30) {
                    console.log("Вы киноман");    
                } else {
                    console.log("Произошла ошибка");
            }
            
            }
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);        
        } else {
            console.log("Error");
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        return console.log(`Значение параметра после замены - ${personalMovieDB.privat}`);    
        
    },
    // Мой вариант ответа
    // writeYourGenres: function () {
    //     for (let i = 1; i <= 3; i++) {
    //         let question = prompt(`Ваш любимый жанр под номером ${i}`);
    //         if (question != null && question != "") {
    //             personalMovieDB.genres[i - 1] = question;
    //             console.log("Все Ок");
    //         } else {
    //             console.log("Error");
    //             i--;
    //         }
    //     }
    //     return console.log(personalMovieDB.genres.forEach(function(element, index, genres) {
        
    //     }));
    // }
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre == null || genre === "") {
            //     console.log("Вы ввели некорректные данные или не ввели их вовсе");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Введите Ваши любимые жанры через запятую`).toLowerCase();
            if (genres == null || genres === "") {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        
        });
    }

};






