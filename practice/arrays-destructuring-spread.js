// Домашка: масиви, деструктуризація, spread
// Кожне завдання — у своєму блоці { }, щоб змінні з різних завдань не конфліктували

// ===== 1.1 · Індекси і length — ✅ пройдено
// Мій прогноз: червоний | undefined | 3 | синій
//   const colors = ["червоний", "зелений", "синій"];
//   
//   console.log(colors[0]);
//   console.log(colors[3]);
//   console.log(colors.length);
//   console.log(colors[colors.length - 1]);

// ===== 1.2 · push і pop — ✅ пройдено
// Мій прогноз: 3 | сир | ["хліб", "молоко"]
//   const list = ["хліб", "молоко"];
//   
//   list.push("сир");
//   console.log(list.length);
//   
//   const last = list.pop();
//   console.log(last);
//   console.log(list);

// ===== 1.3 · Черга — ✅ пройдено
{
  const queue = ["Оля", "Іван"];

  queue.push("Марта");
  const served = queue.shift();


  // TODO: Марта стає в кінець черги
  // TODO: забери першого з черги і збережи його в змінну served

  console.log("Обслуговуємо: " + served);
  console.log(queue);
}

// ===== 1.4 · Кожен елемент — ✅ пройдено
{
  const pets = ["кіт", "пес", "папуга"];

  for (const pet of pets){
  console.log(pet);
  }

  // TODO: for...of
}

// ===== 1.5 · Цикл з індексом — ✅ пройдено
// Мій прогноз: 0: яблуко | 1: груша | 2: слива
//   const fruits = ["яблуко", "груша", "слива"];
//   
//   for (let i = 0; i < fruits.length; i++) {
//     console.log(i + ": " + fruits[i]);
//   }

// ===== 1.6 · Знайди баг: сума — ✅ пройдено
{
  const prices = [10, 20, 30];

  let sum = 0;

  for (const price of prices) {
    sum += price;
  }

  console.log(sum);
}

// ===== 1.7 · Скільки витратили — ✅ пройдено
{
  const expenses = [120, 45, 300, 80];
  const budget = 1000;

  let sumExp = 0;

  for (let expens of expenses){
  sumExp += expens
  };

  console.log(`Витрачено: ${sumExp} грн`);
  console.log(`Залишок: ${budget - sumExp} грн`);



  // TODO: сума витрат через for...of
  // TODO: виведи "Витрачено: ... грн" і "Залишок: ... грн"
}

// ===== 1.8 · Морозні дні — ✅ пройдено
{
  const temps = [3, -2, 5, -7, 0, -1];

  let coldDay = 0;

  for (let temp of temps){
  if(temp < 0) {
  coldDay = coldDay + 1;
  }
  }

  console.log(`Морозних днів: ${coldDay}`);
  // TODO: лічильник + for...of + if
}

// ===== 1.9 · Новий масив у циклі — ✅ пройдено
{
  const prices = [100, 250, 80];
  const doubled = [];

  for(let price of prices) {
  doubled.push(price * 2)
  }
  // TODO: for...of + push

  console.log(doubled);
}

// ===== 1.10 · Тільки великі — ✅ пройдено
{
  const numbers = [3, 12, 7, 20, 5];
  const big = [];

  for (let numb of numbers) {
  if (numb > 6) {
  big.push(numb)
  }
  }
  // TODO: for...of + if + push

  console.log(big);
}

// ===== 1.11 · Масив об'єктів — ✅ пройдено
{
  const menu = [
    { name: "Кава", price: 65 },
    { name: "Чай", price: 45 },
    { name: "Торт", price: 90 },
  ];

  for (let product of menu) {
  console.log(`${product.name}: ${product.price} грн`)
  }

  // TODO: for...of — виведи "назва: ціна грн"
}

// ===== 2.1 · map не змінює оригінал — ✅ пройдено
// Мій прогноз: [2, 4, 6] | [1, 2, 3]
//   const nums = [1, 2, 3];
//   const doubled = nums.map((n) => n * 2);
//   
//   console.log(doubled);
//   console.log(nums);

// ===== 2.2 · 1.9 через map — ✅ пройдено
{
  const prices = [100, 250, 80];

  const doubled = prices.map((price) => price * 2);

  console.log(doubled);
}

// ===== 2.3 · 1.10 через filter — ✅ пройдено
{
  const numbers = [3, 12, 7, 20, 5];

  const big = numbers.filter((numb) => numb > 6);

  console.log(big);
}

// ===== 2.4 · find чи filter — ✅ пройдено
// Мій прогноз: 8 | [8, 12] | undefined
//   const nums = [3, 8, 12, 5];
//   
//   console.log(nums.find((n) => n > 6));
//   console.log(nums.filter((n) => n > 6));
//   console.log(nums.find((n) => n > 100));

// ===== 2.5 · Тільки повнолітні — ✅ пройдено
{
  const users = [
    { name: "Оля", age: 25 },
    { name: "Іван", age: 17 },
    { name: "Марта", age: 30 },
  ];

  const adults = users.filter(user => user.age >= 18);
  const name = adults.map(userName => userName.name);
  const joinName = name.join(", ");

  // TODO: імена через map, рядок через join(", ")
  console.log(name);
  console.log(joinName);
}

// ===== 2.6 · Пастка sort — ✅ пройдено
// Мій прогноз: [1, 10, 100, 5]
//   const nums = [10, 1, 5, 100];
//   
//   nums.sort();
//   console.log(nums);

// ===== 2.7 · Від дешевого до дорогого — ✅ пройдено
{
  const products = [
    { name: "Чай", price: 45 },
    { name: "Кава", price: 65 },
    { name: "Вода", price: 20 },
  ];

  products.sort((product1, product2) => product1.price - product2.price)

  const productsUpdate = products.map(product => product.name);
  const stringProducts = productsUpdate.join(", ");

  console.log(stringProducts);


  // TODO: sort за ціною
  // TODO: виведи назви через ", "
}

// ===== 2.8 · Чи все зроблено — ✅ пройдено
{
  const tasks = [
    { title: "Прочитати теорію", done: true },
    { title: "Зробити домашку", done: false },
    { title: "Відкрити PR", done: true },
  ];

  const hasUndone = tasks.some(task => task.done === false);

  const allDone = tasks.every(task => task.done === true)

  console.log(`Є незроблені: ${hasUndone}`);
  console.log(`Усе зроблено: ${allDone}`);
}

// ===== 3.1 · Що лежить в акумуляторі — ✅ пройдено
// Мій прогноз: 0 + 5 | 5 + 10 | 15 + 20 | 35
//   const nums = [5, 10, 20];
//   
//   const total = nums.reduce((sum, n) => {
//     console.log(sum + " + " + n);
//     return sum + n;
//   }, 0);
//   
//   console.log(total);

// ===== 3.2 · Забутий return — ✅ пройдено
// Мій прогноз: undefined
//   const nums = [5, 10, 20];
//   
//   const total = nums.reduce((sum, n) => {
//     sum + n;
//   }, 0);
//   
//   console.log(total);

// ===== 3.3 · Сума кошика — ✅ пройдено
{
  const cart = [
    { name: "Кава", price: 65, qty: 2 },
    { name: "Торт", price: 90, qty: 1 },
  ];

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  console.log(`Разом: ${total} грн`);
}

// ===== 3.4 · Скільки склали — ✅ пройдено
{
  const scores = [72, 45, 90, 58, 81];

  const passed = scores.reduce((count, score) => count + (score >= 60), 0);

  console.log(`Склали: ${passed}`);
}

// ===== 3.5 · Скільки кожного фрукта — ✅ пройдено
{
  const fruits = ["яблуко", "банан", "яблуко", "груша", "банан", "яблуко"];

  const counts = fruits.reduce((acc, fruit) => {
  if (fruit in acc) {
  acc[fruit]++;
  } else { 
  acc[fruit] = 0; 
  acc[fruit]++
  }
  return acc
  }, {});

  console.log(counts["яблуко"]);
  console.log(counts["банан"]);
  console.log(counts["груша"]);
}

// ===== 3.6 · Задачі за статусом — ✅ пройдено
{
  const tasks = [
    { title: "Теорія", status: "done" },
    { title: "Домашка", status: "todo" },
    { title: "PR", status: "todo" },
    { title: "Live coding", status: "done" },
  ];

  const grouped = tasks.reduce((acc, task) => { 
  if ( task.status in acc) {
  acc[task.status].push(task);
  } else {
  acc[task.status] = [];
  acc[task.status].push(task);
  }
  return acc;
  }, {});

  console.log(grouped.todo.length);
  console.log(grouped.done.map((task) => task.title).join(", "));
}

console.log("       ==================");
// ===== 3.7 · Найдорожче (бонус) — ✅ пройдено
{
  const prices = [65, 45, 90, 30];

  const max = prices.reduce((max, price) => price > max ? price : max, 0);


  console.log(`Найдорожче: ${max}`)
}

// ===== 3.8 · Сума за категоріями (бонус) — ✅ пройдено
{
  const purchases = [
    { category: "їжа", price: 120 },
    { category: "напої", price: 45 },
    { category: "їжа", price: 80 },
  ];

  const totals = purchases.reduce((total, product) => { 
  if (product["category"] in total) {
  total[product.category] += product["price"];
  } else {
  total[product.category] = 0;
  total[product.category] += product["price"]; 
  }
  return total;
  }, {})

  console.log(totals["їжа"]);
  console.log(totals["напої"]);
}

// ===== 3.9 · Ланцюжок (бонус) — ✅ пройдено
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let newArr = nums.filter(numb => numb % 2 === 0).map((numb) => numb * numb).reduce((sum, numb) => sum + numb, 0);

  console.log(`Сума квадратів парних: ${newArr}`);
}

// ===== 4.1 · Розпакувати об'єкт — ✅ пройдено
// Мій прогноз: Оксана | 25 | undefined
//   const user = { name: "Оксана", age: 25 };
//   
//   const { name, age } = user;
//   console.log(name);
//   console.log(age);
//   
//   const { city } = user;
//   console.log(city);

// ===== 4.2 · Три рядки — в один — ✅ пройдено
{
  const book = { title: "Кобзар", author: "Тарас Шевченко", year: 1840 };

  const { title, author, year} = book;

  console.log(`${title}, ${author}, ${year}`);
}

// ===== 4.3 · Розпакувати масив — ✅ пройдено
// Мій прогноз: 10 | 20 | 30
//   const [first, second] = [10, 20, 30];
//   console.log(first);
//   console.log(second);
//   
//   const [, , third] = [10, 20, 30];
//   console.log(third);

// ===== 4.4 · Значення за замовчуванням — ✅ пройдено
{
  const settings = { theme: "dark" };

  const { theme, fontSize = 16 } = settings;

  console.log(`Тема: ${theme}, шрифт: ${fontSize}`);
}

// ===== 4.5 · Деструктуризація в параметрах — ✅ пройдено
{
  function describe({ name, age }) { 
  return `${name}, ${age} років`;
  };

  console.log(describe({ name: "Оля", age: 25 }));
  console.log(describe({ name: "Іван", age: 30 }));
}

// ===== 4.6 · Деструктуризація в циклі (бонус) — ✅ пройдено
{
  const menu = [
    { name: "Кава", price: 65 },
    { name: "Чай", price: 45 },
    { name: "Торт", price: 90 },
  ];

   for (const { name, price } of menu) { 
  console.log(`${name}: ${price} грн`);
   }
}

// ===== 5.1 · Розсипати масив — ✅ пройдено
// Мій прогноз: [1, 2, 3, 4] | [1, 2] | [1, 2, 99]
//   const a = [1, 2];
//   const b = [3, 4];
//   console.log([...a, ...b]);
//   
//   const copy = [...a];
//   copy.push(99);
//   console.log(a);
//   console.log(copy);

// ===== 5.2 · Загадка const b = a — ✅ пройдено
// Мій прогноз: 99 | 99 | 5
//   const a = { score: 1 };
//   
//   const b = a;
//   b.score = 99;
//   console.log(a.score);
//   
//   const c = { ...a };
//   c.score = 5;
//   console.log(a.score);
//   console.log(c.score);

// ===== 5.3 · Оновити без зміни оригіналу — ✅ пройдено
{
  const user = { name: "Оля", age: 25 };

  const updated = { ...user, age: 26 };

  console.log(user.age);
  console.log(updated.age);
  console.log(updated.name);
}

// ===== 5.4 · sort без сюрпризів — ✅ пройдено
{
  const prices = [30, 10, 20];

  const sorted = [...prices].sort( (a, b) => a - b);

  console.log(sorted);
  console.log(prices);
}

// ===== 5.5 · Максимум — ✅ пройдено
{
  const scores = [7, 3, 9, 5];
  console.log(`Максимум: ${Math.max(...scores)}`);
  // TODO: виведи "Максимум: ..." через Math.max і spread
}

// ===== 5.6 · Скільки завгодно чисел — ✅ пройдено
{
  function sum(...numbers) { 
  return numbers.reduce((total, numb) => total + numb, 0);
   }

  console.log(sum(1, 2));
  console.log(sum(1, 2, 3, 4));
  console.log(sum());
}

// ===== 5.7 · Кошик без мутацій (бонус) — ✅ пройдено
{
  function addToCart(cart, item) { 
  return [...cart, item];
   }

  const cart = ["кава"];
  const newCart = addToCart(cart, "торт");

  console.log(cart);
  console.log(newCart);
}
git 