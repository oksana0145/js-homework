// Домашка: функції, об'єкти і this
// Кожне завдання — у своєму блоці { }, щоб змінні з різних завдань не конфліктували

// ===== 1.1 · Квиток — ✅ пройдено
{
  const age = 10;
  const price = 100;

  const newPrice = age < 12 ? price / 2 : price

  console.log(`Квиток: ${newPrice} грн`);
  // TODO: виведи "Квиток: 50 грн"
}

// ===== 1.2 · Зірочки — ✅ пройдено
{
  const n = 5;
  let star = "";
  for (let i = 0; i < n; i++) {
  star += "*"
  }

  console.log(star)
  // TODO: цикл, що збирає рядок "*****"
}

// ===== 1.3 · Оцінка словами — ✅ пройдено
{
  const grade = "B";

  switch (grade) {
  case "A": 
  console.log("Відмінно");
  break;

  case "B": 
  console.log("Добре");
  break;

  case "C": 
  console.log("Задовільно")
  break

  default:
  console.log("Невідома оцінка")
  }

  // TODO: switch (grade) { ... }
}

// ===== 1.4 · Парне? — ✅ пройдено
{
  function isEven(n) {
  return n % 2 === 0
  };

  console.log(isEven(4));
  console.log(isEven(7));
  console.log(isEven(0));
}

// ===== 1.5 · Двічі (бонус) — ✅ пройдено
{
  const square = (x) => x * x;

  const applyTwice = (fn, x) => {
  const result1 = fn(x);
  const result2 = fn(result1); 
  return result2;
  }

  console.log(applyTwice(square, 3));
}

// ===== 2.1 · Перший об'єкт — ✅ пройдено
// Мій прогноз: Бублик | 2 | undefined
//   const pet = { name: "Бублик", age: 2 };
//   
//   console.log(pet.name);
//   console.log(pet.age);
//   console.log(pet.color);

// ===== 2.2 · Прочитай з об'єкта — ✅ пройдено
{
  const movie = { title: "Тіні забутих предків", year: 1965 };

  // TODO: виведи "Тіні забутих предків (1965)"
  console.log(`${movie.title} (${movie.year})`);
}

// ===== 2.3 · Створи сам — ✅ пройдено
{
  const phone = {
  brand: "Samsung",
  model: "A54",
  price: 12000,
  };

  console.log(`${phone.brand} ${phone.model}: ${phone.price} грн`)

  // TODO: виведи "Samsung A54: 12000 грн"
}

// ===== 2.4 · Зміни й додай — ✅ пройдено
{
  const student = { name: "Оля", course: 1 };
  student.course = 2;
  student.city = "Київ";

  // TODO: зміни course на 2
  // TODO: додай city: "Київ"

  console.log(student.course);
  console.log(student.city);
}

// ===== 2.5 · Видали й перевір — ✅ пройдено
{
  const account = { login: "olya", password: "1234", email: "olya@mail.com" };
  delete account.password;
  // TODO: видали password

  console.log("password" in account);
  console.log(Object.keys(account).length);
}

// ===== 2.6 · Крапка чи дужки — ✅ пройдено
// Мій прогноз: undefined | red | Toyota
//   const car = { brand: "Toyota", color: "red" };
//   const prop = "color";
//   
//   console.log(car.prop);
//   console.log(car[prop]);
//   console.log(car["brand"]);

// ===== 2.7 · Словник — ✅ пройдено
{
  const dictionary = { cat: "кіт", dog: "пес", bird: "птах" };

  function translate(word) {
  if ( word in dictionary) {
  return `${word}: ${dictionary[word]}`;
  } else {
  return `Немає перекладу для ${word}`
  }

    // TODO: якщо word є в dictionary — поверни "слово: переклад"
    // TODO: інакше — поверни "Немає перекладу для ..."
  }

  console.log(translate("dog"));
  console.log(translate("fish"));
}

// ===== 2.8 · Меню кав'ярні — ✅ пройдено
{
  const prices = { coffee: 65, tea: 45, cake: 90 };
  let sum = 0;
  for (product in prices) {
  console.log(`${[product]}: ${prices[product]} грн`)
  sum += prices[product]
  }
  console.log(`Разом: ${sum} грн`)

  // TODO: for...in — виведи "назва: ціна грн"
  // TODO: після циклу — "Разом: ... грн"
}

// ===== 2.9 · Функція отримує об'єкт — ✅ пройдено
{
  function describe(person) {

  return `${person["name"]}, ${person["age"]} років`;

  }

  console.log(describe({ name: "Оля", age: 25 }));
  console.log(describe({ name: "Іван", age: 30 }));
}

// ===== 2.10 · Функція створює об'єкт (бонус) — ✅ пройдено
{
  function createUser(name, age) { return { 
  name,
  age,
  isAdult: (age < 18) ? false : true,
   }; }

  const user = createUser("Марко", 16);
  console.log(user.name);
  console.log(user.isAdult);
}

// ===== 3.1 · Функція всередині об'єкта — ✅ пройдено
// Мій прогноз: Гав! | Рекс
//   const dog = {
//     name: "Рекс",
//     bark() {
//       return "Гав!";
//     },
//   };
//   
//   console.log(dog.bark());
//   console.log(dog.name);

// ===== 3.2 · this — це «я сам» — ✅ пройдено
// Мій прогноз: Я Рекс
//   const dog = {
//     name: "Рекс",
//     introduce() {
//       return "Я " + this.name;
//     },
//   };
//   
//   console.log(dog.introduce());

// ===== 3.3 · Привітання — ✅ пройдено
{
  const user = {
    name: "Оля",
    greet () {
  return `Привіт, я ${this.name}`
  }
  };

  console.log(user.greet());
}

// ===== 3.4 · Лайки — ✅ пройдено
{
  const post = {
    likes: 0,
    like() {
       this.likes++
    },
  };

  post.like();
  post.like();
  post.like();
  console.log(post.likes);
}

// ===== 3.5 · Кошик (бонус) — ✅ пройдено
{
  const cart = {
    total: 0,
    add(price) {
      this.total = this.total + price
    },
  };

  cart.add(100);
  cart.add(250);
  console.log("Разом: " + cart.total + " грн");
}

// ===== 3.6 · Чому метод не стрілка (бонус) — ✅ пройдено
// Мій прогноз: Оля | undefined
  const user = {
    firstName: "Оля",
    regular() {
      return this.firstName;
    },
    arrow: () => this.firstName,
  };
  
  console.log(user.regular());
  console.log(user.arrow());
