// ============================
console.log("       Task: 1")
// ============================
// 1. Маючи масив чисел, отримай новий масив із квадратами через map і виведи в консоль.

const numbers = [1, 2, 3, 4, 5]

const squareNumb = numbers.map((numb) => numb * numb);

console.log(squareNumb)


// ============================
console.log("       Task: 2")
// ============================
// 2. Відфільтруй масив об'єктів-користувачів, лишивши лише повнолітніх (age >= 18), через filter.

const users = [
    {id: 1, age: 15},
    {id: 2, age: 18},
    {id: 3, age: 20},
]

const adultUser = users.filter(adult => adult.age >= 18)

console.log(adultUser)



// ============================
console.log("       Task: 3")
// ============================
// 3. Відсортуй масив товарів за ціною за зростанням і за спаданням (sort).

// через те, що метод sort змінює початковий масив, вирішила створити 2 однакових масиви
// для того, щоб можна було побачити чи працюють написані мною методи

const catalog = [
    {name: "Tomato", price: 25},
    {name: "Pumpkin", price: 10},
    {name: "Cherry", price: 15}
]

const sortByAsc = catalog.sort((price1, price2) => price1.price - price2.price);
console.log(sortByAsc);

const catalog2 = [
    {name: "Tomato", price: 25},
    {name: "Pumpkin", price: 10},
    {name: "Cherry", price: 15}
]
const sortByDesc = catalog2.sort((price1, price2) => price2.price - price1.price);
console.log(sortByDesc);


// ============================
console.log("       Task: 4")
// ============================
// 4. За допомогою reduce порахуй загальну вартість кошика (масив об'єктів { name, price, qty }).

const shopList = [
    {name: "Apple", price: 5, qty: 2},
    {name: "Berry", price: 10, qty: 1},
    {name: "Tomato", price: 15, qty: 3},
];

const totalPrice = shopList.reduce((sum, product) => sum + product.price * product.qty, 0);

console.log(totalPrice);


// ============================
console.log("       Task: 5")
// ============================
// 5. Знайди через find перший товар, якого немає в наявності (inStock === false).

const shopCatalog = [
    {name: "Phone", inStock: true},
    {name: "TV", inStock: false}, 
    {name: "PlayStation", inStock: true},
    {name: "Computer", inStock: false},
];

const notInStock = shopCatalog.find(product => product.inStock === false);
console.log(notInStock);



// ============================
console.log("       Task: 6")
// ============================
// 6. Перевір через some, чи є товар дорожчий за 1000, і через every — чи всі товари в наявності.

const productCatalog = [
    {name: "TV", price: 100, inStock: true},
    {name: "Phone", price: 500, inStock: true},
    {name: "Computer", price: 200, inStock: true},
    {name: "PlayStation", price: 2000, inStock: false},
];

const expensiveProduct = productCatalog.some(product => product.price > 1000)
console.log(expensiveProduct);

const isInStock = productCatalog.every(product => product.inStock === true)
console.log(isInStock)




// ============================
console.log("       Task: 7")
// ============================
// 7. За допомогою reduce згрупуй масив товарів за полем category в об'єкт { category: [товари] }.

const newProducts = [
    {category: "toys", name: "Barbie"},
    {category: "electronics", name: "Phone"},
    {category: "toys", name: "Car"},
    {category: "electronics", name: "Computer"},
];

const groupedByCategory = newProducts.reduce((groups, product) => {
    if (groups[product.category] === undefined) {
        groups[product.category] = [];
    }
    groups[product.category].push(product)

    return groups
 } , {});

console.log(groupedByCategory);



// ============================
console.log("       Task: 8")
// ============================
// 8. Маючи масив імен, склей їх в один рядок через кому (join) і виведи в консоль.

const userName = ["Yana", "Maria", "Vitalii", "Vlad",];

const strUserName = userName.join(", ");

console.log(strUserName);