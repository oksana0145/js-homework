// Домашка: теми 14–16
// Кожне завдання — у своєму блоці { }, щоб змінні з різних завдань не конфліктували

// ===== 1.1 · Назви мають збігатися — ✅ пройдено
// Мій прогноз: Оксана | 25 | undefined
//   const user = { name: "Оксана", age: 25 };
//   
//   const { age, name } = user;
//   console.log(name);
//   console.log(age);
//   
//   const { nmae } = user;
//   console.log(nmae);

// ===== 1.2 · Коли спрацьовує значення за замовчуванням — ✅ пройдено
// Мій прогноз: 0 | 10
//   const { count = 5, size = 10 } = { count: 0 };
//   
//   console.log(count);
//   console.log(size);

// ===== 1.3 · Масив: пропуски й значення за замовчуванням — ✅ пройдено
// Мій прогноз: x | z | "тільки" | "нема"
//   const [a, , c] = ["x", "y", "z"];
//   console.log(a);
//   console.log(c);
//   
//   const [p, q = "нема"] = ["тільки"];
//   console.log(p);
//   console.log(q);

// ===== 1.4 · Кнопка з налаштуваннями — ✅ пройдено
{
  function createButton({ text, color = "pink", size = "m" }) { 
  return `${text}: ${color}, ${size}`; 
  }

  console.log(createButton({ text: "OK" }));
  console.log(createButton({ text: "Вийти", color: "red" }));
}

// ===== 1.5 · Деструктуризація в колбеку — ✅ пройдено
{
  const users = [
    { name: "Оля", age: 25 },
    { name: "Іван", age: 17 },
  ];

  const names = users.map(({ name }) => name);
  const adults = users.filter(({ age }) => age >= 18);

  console.log(names.join(", "));
  console.log(adults.length);
}

// ===== 1.6 · Функція повертає кілька значень — ✅ пройдено
{
  function getRange(nums) {
  return {min: Math.min(...nums), max: Math.max(...nums)};
  }

  const { min, max } = getRange([5, 1, 9]);

  console.log(`Мін: ${min}, макс: ${max}`);
}

// ===== 2.1 · Порядок у spread — ✅ пройдено
// Мій прогноз: dark | light
//   const base = { theme: "light", size: "m" };
//   
//   const first = { ...base, theme: "dark" };
//   const second = { theme: "dark", ...base };
//   
//   console.log(first.theme);
//   console.log(second.theme);

// ===== 2.2 · Налаштування користувача — ✅ пройдено
{
  const defaults = { theme: "light", lang: "uk" };
  const userSettings = { theme: "dark" };

  const config = { ...defaults, ...userSettings };

  console.log(config.theme);
  console.log(config.lang);
}

// ===== 2.3 · Позначити виконаним — ✅ пройдено
{
  const tasks = [
    { id: 1, title: "Теорія", done: true },
    { id: 2, title: "Домашка", done: false },
  ];

  function complete(tasks, id) { return tasks.map
  ((task) => task.id === id ? { ...task, done: true} : task); 
  }

  const updated = complete(tasks, 2);

  console.log(tasks[1].done);
  console.log(updated[1].done);
}

// ===== 2.4 · Видалити без змін оригіналу — ✅ пройдено
{
  function removeItem(cart, name) { 

  return cart.filter((cart) => cart !== name); }

  const cart = ["кава", "чай", "торт"];
  const newCart = removeItem(cart, "чай");

  console.log(newCart);
  console.log(cart);
}

// ===== 2.5 · Нове хобі — ✅ пройдено
{
  const user = { name: "Оля", hobbies: ["читання", "йога"] };

  const updated = {
  ...user,
  hobbies: [...user.hobbies, "біг"],
   };

  console.log(user.hobbies.length);
  console.log(updated.hobbies);
}

// ===== 2.6 · Привітати всіх — ✅ пройдено
{
  function greetAll(greeting, ...names) { 
  return names.map((name) => `${greeting}, ${name}!`).join(" ");
   }

  console.log(greetAll("Привіт", "Оля", "Іван"));
}

// ===== 2.7 · Копія не така вже й повна (бонус) — ✅ пройдено
// Мій прогноз: 2
//   const a = { tags: ["js"] };
//   const b = { ...a };
//   
//   b.tags.push("css");
//   console.log(a.tags.length);

// ===== 3.1 · Безпечний доступ — ✅ пройдено
// Мій прогноз: undefined | undefined | 3
//   const user = { name: "Оля" };
//   
//   console.log(user.address);
//   console.log(user.address?.city);
//   console.log(user.name?.length);

// ===== 3.2 · || чи ?? — ✅ пройдено
// Мій прогноз: 10 | 0 | Гість | ""
//   const count = 0;
//   console.log(count || 10);
//   console.log(count ?? 10);
//   
//   const name = "";
//   console.log(name || "Гість");
//   console.log(name ?? "Гість");

// ===== 3.3 · Місто або нічого — ✅ пройдено
{
  function getCity(user) {
  return user.address?.city ?? "Місто не вказане"
  }

  console.log(getCity({ name: "Оля", address: { city: "Львів" } }));
  console.log(getCity({ name: "Іван" }));
}

// ===== 3.4 · Знайди баг: гучність — ✅ пройдено
{
  function getVolume(settings) {
    return settings.volume ?? 50;
  }

  console.log(getVolume({ volume: 0 }));
  console.log(getVolume({ volume: 80 }));
  console.log(getVolume({}));
}

// ===== 3.5 · Метод, якого може не бути — ✅ пройдено
{
  const olya = {
    name: "Оля",
    onNotify(text) {
      console.log("Оля отримала: " + text);
    },
  };
  const ivan = { name: "Іван" };

  function notify(user) {
    return user.onNotify?.("Нове повідомлення");
  }

  notify(olya);
  notify(ivan);
}

// ===== 3.6 · Міста всіх — ✅ пройдено
{
  const users = [
    { name: "Оля", address: { city: "Львів" } },
    { name: "Іван" },
    { name: "Марта", address: { city: "Київ" } },
  ];

  console.log(users.map( (user) => user.address?.city ?? "невідомо").join(", "));
}

// ===== 3.7 · Глибоко вкладене (бонус) — ✅ пройдено
{
  const orders = [
    { id: 1, customer: { name: "Оля", address: { city: "Львів" } } },
    { id: 2 },
  ];

  for (const order of orders) {
  console.log(`${order.id}: ${order.customer?.address?.city ?? "без адреси"}`)}
}

// ===== 4.1 · Дорожчі за 50 — ✅ пройдено
{
  const products = [
    { name: "Кава", price: 65 },
    { name: "Новинка" },
    { name: "Торт", price: 90 },
    { name: "Чай", price: 45 },
  ];

  const product = products.filter( ({ price }) => (price ?? 0) >= 50 ).map( ({name}) => name ).join(", ");

  console.log(product)
}

// ===== 4.2 · Категорії з «іншим» — ✅ пройдено
{
  const products = [
    { name: "Кава", category: "напої" },
    { name: "Торт", category: "десерти" },
    { name: "Новинка" },
    { name: "Чай", category: "напої" },
  ];

  const counts = products.reduce((acc, product) => { 
  const key = (product.category ?? "інше");
  if (acc[key] === undefined) {
  acc[key] = 0;
  }
  acc[key]++
  return acc
  }, {});

  console.log(counts["напої"]);
  console.log(counts["інше"]);
}

// ===== 4.3 · Перемкнути статус — ✅ пройдено
{
  const tasks = [
    { id: 1, done: true },
    { id: 2, done: false },
  ];

  function toggle(tasks, id) { 
  return tasks.map( (task) => task.id === id ? {...task, done: !task.done } : task )
   };

  const updated = toggle(tasks, 1);

  console.log(updated[0].done);
  console.log(tasks[0].done);
}

// ===== 4.4 · Статистика (бонус) — ✅ пройдено
{
  function stats(...nums) { 
  return {
  min: Math.min(...nums), 
  max: Math.max(...nums), 
  avg: nums.reduce( (sum, number) => {
  return (sum + number) 
  }, 0 ) / nums.length
  }};

  const { min, max, avg } = stats(4, 8, 6);

  console.log(`${min} / ${max} / ${avg}`);
}
