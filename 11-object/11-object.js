// ============================
console.log("       Task: 1");
// ============================
// 1. Створи об'єкт user з полями name, age та методом greet(), який через this виводить у 
// консоль 'Привіт, я '.

const user = {
    name: "Marta",
    age: 25,
    greet() {
        console.log(`Привіт, я ${this.name}`);
    },
}

user.greet();



// ============================
console.log("       Task: 2");
// ============================
// 2. Створи об'єкт-калькулятор з методами add, subtract, multiply, divide, що працюють 
// із двома переданими числами (результат у консоль).

const calculator = {
    add(a, b) {
        console.log(a + b);
    },
    subtract(a, b) {
        console.log(a - b);
    },
    multiply(a, b) {
        console.log(a * b);
    },
    divide(a, b) {
        console.log(a / b);
    },
}

calculator.add(6, 2);
calculator.subtract(6, 2);
calculator.multiply(6, 2);
calculator.divide(6, 2);



// ============================
console.log("       Task: 3");
// ============================
// 3. Створи об'єкт 'рахунок' з полем balance і методами deposit(sum) та withdraw(sum), 
// що оновлюють this.balance. Виведи баланс у консоль.

const account = {
    
    balance: 1000,

    deposit(amount ) {
       this.balance = this.balance + amount;
       console.log(this.balance);
    },
    withdraw(amount) {
        if (amount <= this.balance) {
        this.balance = this.balance - amount;
        console.log(this.balance);
    } else {
        console.log("Balance is too small");
    }
    },
}

console.log(account.balance);
account.deposit(200);
console.log(account.balance);
account.withdraw(1200);
console.log(account.balance);
account.withdraw(100);
console.log(account.balance)



// ============================
console.log("       Task: 4");
// ============================
// 4. Створи об'єкт 'прямокутник' з полями width, height і методами area() та perimeter(), 
// що використовують this.

const rectangle = {

    width: 100,
    height: 50,

    area() {
        const area = this.width * this.height
        console.log(area);
    },
    perimeter() {
        const perimeter = 2 * (this.width + this.height)
        console.log(perimeter);
    },
}

rectangle.area();
rectangle.perimeter()



// ============================
console.log("       Task: 5");
// ============================
// 5. Поясни, що таке this всередині методу об'єкта і чому стрілкова функція як метод 
// поводиться інакше.

// this в методі об'єкта дозвоволяє використовувати властивості об'єкта в якому 
// він викликається
// стрілкова функція не має власного this, вона використовує зовнішній this 