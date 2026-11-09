//================================
console.log("       Task: 1")
//================================
// 1. Маючи об'єкт user = { name: 'Аня', age: 20 }, дістань name та age 
// через деструктуризацію.

const user = { name: "Аня", age: 20};

const {name, age} = user;

console.log(`Твоє ім'я: ${name}, тобі ${age} років`);



//================================
console.log("       Task: 2")
//================================
// 2. Маючи масив [10, 20, 30], дістань перший і другий елементи 
// в окремі змінні.

const arr = [10, 20, 30];

const [first, second] = arr;

console.log(first, second);


//================================
console.log("       Task: 3")
//================================
// 3. Деструктуризуй об'єкт зі значенням за замовчуванням 
// для відсутнього ключа.

const car = {
    toyota: "RAV4",
    bmw: "X5",
}

const {toyota, bmw, ford = "Focus"} = car;

console.log(toyota, bmw, ford);



//================================
console.log("       Task: 4")
//================================
// 4. Напиши функцію, яка приймає об'єкт і одразу деструктуризує його параметри ({ title, price }).

function showMenu ({title, price}) {
    console.log(`Цей ${title} коштує ${price} грн`);
}
showMenu({title: "тістечко", price: 35});