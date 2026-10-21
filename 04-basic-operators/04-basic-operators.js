/*1. Поясни різницю між == і === та наведи приклад, де вони дають різний результат.

== це перевірка з перетворенням типів даних
 === це перевірка без перетворення типів даних

 у наведеному нижче прикладі:
 перший console.log = true, тому що тип даних рядок перетворився на число
 другий console.log = false, тому що не відбулось перетворення типу даних*/
console.log("   Task 1:");
//=====================================

const a = 5;
const b = "5";
console.log(a == b);
console.log(a === b);



//=====================================
// 2. Маючи число в змінній, виведи в консоль true, якщо воно парне, 
// і false — якщо ні (оператор %).
console.log("   Task 2:");
//=====================================

const number = 3;

//solution1
const isEvenNumb = number % 2 ? "не парне число" : "парне число";
console.log(isEvenNumb);

///solution2
console.log(number % 2);

//solution3
if (number % 2) {
    console.log("не парне число")
} else {
    console.log("парне число")
};

// solution4
console.log(number % 2 === 0);



//=====================================
// 3. Створи дві змінні з числами та виведи в консоль, яке з них більше (оператори порівняння).
console.log("   Task 3:");
//=====================================

//solution1
const numb1 = 10;
const numb2 = 10;

if (numb1 > numb2){
    console.log(`${numb1}`)
} else if (numb1 < numb2) {
    console.log(`${numb2}`)
} else {
    console.log("числа рівні")
};

// //solution2
const result = numb1 > numb2 ? numb1 : numb1 < numb2 ? numb2 : "числа рівні";
console.log(result);



//=====================================
// 4. Маючи змінні email і password, виведи в консоль 'Дані введені',
//  якщо обидві не порожні, інакше 'Заповніть усі поля' (логічні оператори).
console.log("   Task 4:");
//=====================================

const email = "";
const password = "bt";

if (email !== "" && password !== "") {
    console.log("Дані введені")
} else {
    console.log("Заповніть усі поля")
};



//=====================================
// 5. Маючи змінну hour (0–23), виведи в консоль 'Ніч', 'Ранок', 'День' або 'Вечір' 
// через if/else.
console.log("   Task 5:");
//=====================================
const hour = 23;

if (hour >= 0 && hour < 6) {
    console.log("Ніч")
} else if (hour >= 6 && hour < 12) {
    console.log("Ранок")
} else if (hour >= 12 && hour < 18) {
    console.log("День") 
} else if (hour >= 18 && hour <= 23 ) {
    console.log("Вечір")
} else {
    console.log("Не година дня")
};



//=====================================
// 6. Маючи число в змінній, виведи в консоль 'fizz' (кратне 3), 'buzz' (кратне 5), 
// 'fizzbuzz' (кратне обом) або саме число.
console.log("   Task 6:");
//=====================================
const numb5 = 15;

if ((numb5 % 3) === 0 && (numb5 % 5) === 0) {
    console.log("fizzbuzz")
} else if ((numb5 % 3) === 0) {
    console.log("fizz")
} else if ((numb5 % 5) === 0) {
    console.log("buzz")
} else {
    console.log(numb5)
}



//=====================================
// 7. Маючи дві змінні-числа a і b, виведи в консоль їх суму, різницю, добуток 
// і залишок від ділення.
console.log("   Task 7:");
//=====================================
const numb3 = 2;
const numb4 = 5;

console.log(numb3 + numb4);
console.log(numb3 - numb4);
console.log(numb3 * numb4);
console.log(numb3 % numb4);