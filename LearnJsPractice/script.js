"use strict";

// console.log(alert("Я JavaScript!"));
// ---------------------------------------------------------------------
// 1) Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert 
// (должна показать «Джон»).

// let admin, hisName;

//     hisName = "Джон";
//     admin = hisName;
    
// console.log(admin);

// 2) Создайте переменную для названия нашей планеты. Как бы 
// вы её назвали ?
// Создайте переменную для хранения имени текущего посетителя сайта.
// Как бы вы назвали такую переменную ?

// let ourPlanetName = "Earth";
// let currentUser;


// ---------------------------------------------------------------------
// let askName = prompt("Ваше имя?", "");

// alert(askName);


// ---------------------------------------------------------------------
// 1)
// let a = 2;

// let x = 1 + (a *= 2);

// console.log(a);

// 2)
// "" + 1 + 0      10
// "" - 1 + 0      -1
// true + false     (1)
// 6 / "3"          2
// "2" * "3"        6
// 4 + 5 + "px"     9px
// "$" + 4 + 5      ($45)
// "4" - 2          2
// "4px" - 2        NaN
// 7 / 0            Infinity
// "  -9  " + 5     (-9 5)
// "  -9  " - 5     -14
// null + 1          1
// undefined + 1     (NaN)
// " \t \n" - 2      (-2)

// 3)
// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// alert(a + b); // 12

// )
// 5 > 4                   true
// "ананас" > "яблоко"     false
// "2" > "12"              true
// undefined == null       true
// undefined === null      false
// null == "\n0\n"         false
// null === +"\n0\n"       {false}


// ---------------------------------------------------------------------
// 1)
// let ask = prompt("Какое «официальное» название JavaScript?", "");

// if (ask == "ECMAScript") {
//     alert("Все верно!");
//     } else {
//         alert("Не знаете? ECMAScript!");
// }

// 2)
// Используя конструкцию if..else, напишите код, который получает число
// через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

// let userNumber = +prompt("Введите число", "");

// if (userNumber > 0) {
//     alert("1");
// } else if (userNumber < 0) {
//     alert("-1");
// } else {
//     alert("0");
// }

// 2)
// Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let result,
//     a = 1,
//     b = 2;

// result = (a + b < 4) ? "Мало" : "Много";
// console.log(result);

// 3)
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message,
//     login;

// login = "Директор";
// // login = "Сотрудник";
// // login = "";

// message = (login == "Сотрудник") ? "Привет" :
//     (login == "Директор") ? "Здравствуйте" :
//         (login == "") ? 'Нет логина' : "";

// console.log(message);


// --------------------------------------------------------------------
// 1)
// Напишите условие if для проверки, что значение переменной age НЕ
// находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ!,
// второй – без этого оператора.
// let age = 91;

// // if (!(age >= 14 && age <= 90)) {
// //     console.log("Топчик. Не входит в диапазон");
// // } else {
// //     console.log("лол не круто, попадает в диапазон");
// // }

// if (age <= 14 || age >= 90) {
//     console.log("Топчик. Не входит в диапазон");
// } else {
//     console.log("лол не круто, даай другое число");
// }

// 3) 
// let ask = prompt("Введите логин", "");

// if (ask == "Админ" && ask != "" && ask != null) {
//     let pass = prompt("Введите пароль", "");
//     if (pass == "Я главный") {
//         console.log("Здравствуйте!");
//     } else if (pass == "" || pass == null) {
//         console.log("Отмена");
//     } else {
//         console.log("Неверный пароль");
//     }
// } else {
//     console.log("Отмена");
// }


// --------------------------------------------------------------------
// 1)
// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 1; i <= 10; i++) {
//     const oddNumber = i;
//     if (!(oddNumber % 2)) {
//         console.log(oddNumber);
//     }
    
// }

// for (let i = 1; i <= 10; i++) {
//     const oddNumber = i;
//     if (oddNumber % 2 == 0) {
//         console.log(oddNumber);
//     }
    
// }

// 2)
// Перепишите код, заменив цикл for на while, без изменения 
// поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let numb = 0;
// while (numb < 3) {
//     console.log(`Number ${numb++}`);
// }

// 3)
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так
// далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Отмена(ESC).

// Предполагается, что посетитель вводит только числа.Предусматривать
// обработку нечисловых строк в этой задаче необязательно.

// let ask;

// do {
//     ask = +prompt("Введите число больше 100", "0");
// } while (ask < 100 && ask);

// 4)
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

// console.log(i); // простое число
// }

// 5)
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// let browser = "Edge";

// if (browser == "Edge") {
//   console.log("You've got the Edge!");
// } else if (browser == "Chrome" || browser == "Firefox" ||
//   browser == "Safari" || browser == "Opera") {
//   console.log("Okay we support these browsers too");
// } else {
//   console.log("We hope that this page looks ok!");
// }

// 6)
// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const numb = 4;

// switch (numb) {
//   case 0:
//     console.log("Вы ввели число 0");
//     break;
//   case 1:
//     console.log("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     console.log("Вы ввели число 2, а может и 3");
//     break;
  
//   default:
//   console.log("Вы за пределами вселенной!");
// }


// --------------------------------------------------------------------
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

// 1.1)
// function checkAge(age) {
//  return (age > 18) ? console.log(true) : console.log("Родители разрешили?");
// }
// checkAge(19);

// 1.2)
// function checkAgeTwo(age) {
//  return (age > 18) || console.log("Родители разрешили?");
// }
// checkAgeTwo(17);

// 2)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// 2.1)
// function min(a, b) {
//   if (a < b) {
//     return console.log(a);
//   } else {
//     return console.log(b);
//   }
// }

// 2.2) 
// function min(a, b) {
//   return (a < b) ? console.log(a) : console.log(b);
// }

// min(3, -1);

// 3)
// Напишите функцию pow(x, n), которая возвращает x в степени n.Иначе говоря,
//   умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// 3.1)
// function pow(a, b) {
//   return console.log(Math.pow(a, b));
// }

// pow(3, 3);

// 3.2)
// function pow(a, b) {
//   let result = a;
//   for (let i = 1; i < b; i++) {
//     result *= a;
//   }
//   return console.log(result);
// }

// pow(3, 3);


// --------------------------------------------------------------------
// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// 1.1)
// let ask = (question, yes, no) => {
//   return confirm(question) ? yes(alert("You in")) : no(alert("You skip"));
// };

// ask("Do you in?");

// 1.2)
// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// 1.3)
// let question = confirm("Вы согласны?", "");
// let ask = (question) ? () => alert("Да, Вы в деле") : () => alert("Вы отказались");

// ask();


// --------------------------------------------------------------------
// Hello Objects
// --------------------------------------------------------------------

// 1)
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// const user = {};

// user.name = "John";
// user.surmame = "Smith";
// console.log(user);

// user.name = "Pete";
// console.log(user);

// delete user.name;
// console.log(user);

// 2)
// Напишите функцию isEmpty(obj), которая возвращает true, если у
// объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// let schedule = {};

// function isEmpty(object) {
//   for (const key in object) {
//      return false; 
//   }
//   return true;
// }

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false

// 3)
// const user = {
//   name: "John"
// };

// console.log(user);
// // это будет работать?
// user.name = "Pete";
// console.log(user);

// 4)
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат
// в переменной sum.Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// },
//   users = {};

// function sumSal(object) {
//   let sum = 0;
//   for (const key in object) {
//     sum += object[key];
//   }
//   return console.log(sum);
// }

// sumSal(salaries);
// sumSal(users);

// 5)
// Создайте функцию multiplyNumeric(obj), которая умножает все
// числовые свойства объекта obj на 2.
// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать.
// Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (typeof(obj[key]) == "number") {
//      obj[key] *= 2;
//     }
//   }
//   // return obj;
// }

// multiplyNumeric(menu);
// console.log(menu);
// // console.log(multiplyNumeric(menu));


// --------------------------------------------------------------------
// this
// --------------------------------------------------------------------

// 1)
// Создайте объект calculator (калькулятор) с тремя методами:

// read()(читать) запрашивает два значения и сохраняет их как
// свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let calculator = {
//   read: () => {
//     this.a = +prompt("Введите первое значение", "0");
//     this.b = +prompt("Введите второе значение", "0");
//   },
//   sum: () => {
//     return this.a + this.b;
//   },
//   mul: () => {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


// 2)
// Это ladder(лестница) – объект, который позволяет подниматься вверх и
// спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов,
// мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их
// вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { 
//     console.log((this.step));
//     return this;
//   }
// };

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();

// ladder.up().up().down().showStep();

// --------------------------------------------------------------------
// 1)
// Создайте функцию - конструктор Calculator, который создаёт объекты с
// тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их
// значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() )

// function Calculator() {
//   this.read = () => {
//     this.a = +prompt("Введите a", "0");
//     this.b = +prompt("Введите b", "0");
//   };
//   this.sum = () => {
//     return this.a + this.b;
//   };
//   this.mul = () => {
//     return this.a * this.b;
//   };
//   this.pow = () => {
//     return Math.pow(this.a, this.b);
//   };
  
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
// alert("Pow=" + calculator.pow());

// 2)
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value.Начальное значение
// устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет
// его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что
// ввёл пользователь при вызовах метода read(), с учётом начального
// значения startingValue.

// Ниже вы можете посмотреть работу кода:

// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений


// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = () => {
//     let ask = +prompt("Введите число", "0");
//     this.value += ask;
//     return this.value;
//   };
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// --------------------------------------------------------------------

// 1)
// Создайте функцию readNumber, которая будет запрашивать ввод числового
// значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив
// пустую строку или нажав «Отмена».В этом случае функция должна
// вернуть null.

// function readNumber() {
//     let param = +prompt("Введите число", "0");
//     while (!isFinite(param)) {
//         param = +prompt("Введите число", "0");
//     }
//     return console.log(param);
// }

// readNumber();

// function readNumber() {
//     let param;

//     do {
//         param = +prompt("Введите число", "0");
//     } while (!isFinite(param)); {
//         if (param == null || param == "") {
//             return console.log(null);
//         }
//     }

//     return console.log(param);
// }

// readNumber();

// 2)
// Встроенный метод Math.random() возвращает случайное число от 0
// (включительно) до 1(но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное
// число с плавающей точкой от min до max(но не включая max).

// Пример работы функции:
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

// function random(min, max) {
//     return Math.random() * (max - min) + min;
// }

// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

// 3)
// Напишите функцию randomInteger(min, max), которая генерирует случайное
// целое(integer) число от min до max(включительно).
// Любое число из интервала min..max должно появляться с одинаковой
// вероятностью.

// Пример работы функции:
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

// 3.1)
// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));

// 3.2)
// function randomInteger(min, max) {
//     // получить случайное число от (min-0.5) до (max+0.5)
//      let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
// }

// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));

// --------------------------------------------------------------------
// 1)
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным
// первым символом.Например:

// ucFirst("вася") == "Вася";

// 1.1)
// function ucFirst(str) {
//     let strTwo = str[0].toUpperCase() + str.slice(1);
    
//     return strTwo;
// }

// console.log(ucFirst("вася"));

// 1.2)
// function ucFirst(str) {
//     let strTwo = str.charAt(0).toUpperCase() + str.slice(1);
    
//     return strTwo;
// }

// console.log(ucFirst("вася"));

// 1.3)
// function ucFirst(str) {
//     if (!str) {
//         return str;
//     }
//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("вася"));
