// =============================
console.log("       Task: 1")
// =============================
// 1. Об'єднай два масиви [1, 2] і [3, 4] в один за допомогою spread.

const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2];
console.log(arr1);
console.log(arr2);
console.log(arr3);



// =============================
console.log("       Task: 2")
// =============================
// 2. Створи копію об'єкта і зміни в копії одне поле, не змінюючи оригінал.

const user = {
    name: "Vira",
    age: 25,
}

const user2 = {...user, age: 35};
console.log(user)
console.log(user2);



// =============================
console.log("       Task: 3")
// =============================
// 3. Напиши функцію sum(...numbers), яка приймає будь-яку кількість чисел і повертає їх суму (rest).

function sum (...numbers) {
    let sum = 0;

    for (const numb of numbers) {
        sum += numb;
    }
    return sum
}

console.log(sum(1, 2, 3, 4))



// =============================
console.log("       Task: 4")
// =============================
// 4. Знайди максимум у масиві чисел, передавши його в Math.max через spread.

const arrNumb = [10, 15, 100, 30, 25];

const maxNumb = Math.max(...arrNumb);
console.log(maxNumb);