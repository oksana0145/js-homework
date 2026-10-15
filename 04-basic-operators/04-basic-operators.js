/*1. Поясни різницю між == і === та наведи приклад, де вони дають різний результат.

== це перевірка з перетворенням типів даних
 === це перевірка без перетворення типів даних

 у наведеному нижче прикладі:
 перший console.log = true, тому що тип даних рядок перетворився на число
 другий console.log = false, тому що не відбулось перетворення типу даних*/

let a = 5;
let b = "5";
console.log(a == b);
console.log(a === b);

//=====================================
// 2. Маючи число в змінній, виведи в консоль true, якщо воно парне, і false — якщо ні (оператор %).

//solution1
let number = 3;
//solution1
let isEvenNumb = number % 2 ? console.log("не парне число") : console.log("парне число");

//solution2
console.log(number % 2);

//solution3
if (number % 2) {
    console.log("не парне число")
} else {
    console.log("парне число")
};

//=====================================
// 3. Створи дві змінні з числами та виведи в консоль, яке з них більше (оператори порівняння).

//solution1
let numb1 = 10;
let numb2 = 5;
if (numb1 > numb2){
    console.log(`${numb1}`)
} else {
    console.log(`${numb2}`)
};

//solution2
let result = numb1 > numb2 ? console.log(`${numb1}`) : console.log(`${numb2}`);

//=====================================
// 4. Маючи змінні email і password, виведи в консоль 'Дані введені',
//  якщо обидві не порожні, інакше 'Заповніть усі поля' (логічні оператори).

let email = "";
let password =  "";
if (!email == "" && !password == "" || !email == null && !password == null) {
    console.log("Дані введено")
} else {
    console.log("Введіть дані")
};

//=====================================
// 5. Маючи змінну hour (0–23), виведи в консоль 'Ніч', 'Ранок', 'День' або 'Вечір' 
// через if/else.

let hour = 24;

if (hour >= 0 && hour < 6) {
    console.log("Night")
} else if (hour >= 6 && hour < 12) {
    console.log("Morning")
} else if (hour >= 12 && hour < 18) {
    console.log("Day") 
} else if (hour >= 18 && hour <= 23 ) {
    console.log("Evening")
} else {
    console.log("not day hours")
};

//=====================================
// 6. Маючи число в змінній, виведи в консоль 'fizz' (кратне 3), 'buzz' (кратне 5), 
// 'fizzbuzz' (кратне обом) або саме число.



// 7. Маючи дві змінні-числа a і b, виведи в консоль їх суму, різницю, добуток і залишок від ділення.