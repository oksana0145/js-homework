//===============================
console.log("       Task: 11.3")
//===============================
// Допиши методи: deposit(sum) збільшує balance, withdraw(sum) зменшує, але якщо грошей 
// не вистачає — виводить Недостатньо коштів і баланс не змінює. Стеж за balance у таблиці під консоллю.

const wallet = {
  owner: "Оксана",
  balance: 100,
  deposit(sum) {
    return this.balance = this.balance + sum;
  },
  withdraw(sum) {
    if (sum <= this.balance) {
    return this.balance = this.balance - sum;
    } else {
        console.log("Недостатньо коштів");
    }
  },
};

wallet.deposit(50);
wallet.withdraw(30);
wallet.withdraw(500);
console.log(wallet.balance);



//===============================
console.log("       Task: 11.4")
//===============================
// Допиши три методи: increment() додає 1, decrement() віднімає 1, reset() повертає до 0.

const counter = {
  count: 0,
  increment() {
    this.count = this.count + 1;
  },
  decrement() {
    this.count = this.count - 1;
  },
  reset() {
    this.count = 0
  },
};

counter.increment();
console.log(counter.count);
counter.increment();
console.log(counter.count);
counter.increment();
console.log(counter.count);
counter.decrement();
console.log(counter.count);

counter.reset();
console.log(counter.count);

//===============================
console.log("       Task: 8.1")
//===============================
// Напиши тіло функції divide(a, b): якщо b дорівнює 0 — вона повертає Ділення на нуль, 
// інакше — результат ділення. Виклики вже написані.

function divide(a, b) {

if (b === 0 ) {
return "Ділення на нуль"
} else {
return a / b
}}

console.log(divide(6, 3));
console.log(divide(6, 0));
console.log(divide(0, 0));

//===============================
console.log("       Task: 10.7")
//===============================
// Знайди в меню найдорожчу позицію через for...in і виведи Найдорожче: cake (90 грн). 
// Потім додай у меню щось дорожче і перевір.

const prices1 = { coffee: 65, tea: 45, cake: 90 };

let expensiveProduct = 0;
let nameExpensiveProduct = "";

for (let expensive in prices1) {
if (prices1[expensive] > expensiveProduct){
expensiveProduct = prices1[expensive]
nameExpensiveProduct = expensive
}}
console.log(`Найдорожче: ${nameExpensiveProduct} (${expensiveProduct} грн)`);



//===============================
console.log("       Task: 10.8")
//===============================
// Порахуй, скільки властивостей товару мають тип number, і виведи Числових властивостей: 2.

const product = { name: "Кава", price: 65, inStock: true, rating: 4.5 };

let qty = 0;

for (let numb in product) {
if (typeof(product[numb]) === "number") {
qty = qty + 1
}}

console.log(`Числових властивостей: ${qty}`);



//===============================
console.log("       Task: 10.9")
//===============================
// Збери новий об'єкт sale: ті самі позиції, але кожна на 10 грн дешевша. 
// Оригінальний prices не змінюй. У таблиці під консоллю видно, як sale заповнюється.

const prices = { coffee: 65, tea: 45, cake: 90 };
let sale = {};

for (let promo in prices) {
sale[promo] = prices[promo] - 10;
}

console.log(sale.coffee);
console.log(sale.cake);
console.log(prices.coffee);

