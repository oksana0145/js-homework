 //===============================
 console.log("          Task 1:")
 //===============================
// Через switch виведи ціну: "s" → 45, "m" → 55, "l" → 65, інакше — Невідомий розмір. Потім спробуй "xl".
// const size = "m";
// // TODO: switch (size) { ... }

const size = "xl";

switch (size) {

    case "s":
        console.log(45);
        break;

    case "m":
        console.log(55);
        break;
    
    case "l":
        console.log(65);
        break;

    default:
        console.log("Невідомий розмір");
}



 //===============================
 console.log("          Task 2:")
 //===============================
// Маючи номер дня тижня day (1–7), виведи Будній день для 1–5 і Вихідний для 6 і 7. Не повторюй однаковий console.log п'ять разів — згрупуй case.
// const day = 6;
// // // TODO: switch, де кілька case ведуть до однієї дії

const day = 5;

switch (day) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Будній день");
        break;
    
    case 6:
    case 7:
        console.log("Вихідний")
        break;

    default:
        console.log("Не день тижня");
}



 //===============================
 console.log("          Task 3:")
 //===============================
// Цей код для level = 1 виводить два рядки замість одного. Запусти, подивись, що 
// виходить, і виправ
//  Відповідь: проблема була в тому, що не було break у case 1

const level = 1;

switch (level) {
  case 1:
    console.log("Новачок");
    break;

  case 2:
    console.log("Досвідчений");
    break;

  default:
    console.log("Експерт");
}



 //===============================
 console.log("          Task 4:")
 //===============================
// Маючи два числа й операцію op (+, -, *, /), виведи результат. 
// добреДля іншої операції — Невідома операція. Потім перевір / з b = 0 — що вийде?
// // TODO: switch (op) { ... }

const a = 0;
const b = 0;
const op = "/";

switch (op) {

    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Невідома операція");
}
