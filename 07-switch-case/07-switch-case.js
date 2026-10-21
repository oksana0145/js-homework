console.log("           Task 1:")
// =================================
// 1. Маючи змінну plan ('free'/'pro'/'premium'), через switch виведи в консоль ціну: 
// 0 / 199 / 399, інакше 'Невідомий план'.

const plan = "";

switch (plan) {
    case "free":
        console.log(0);
        break;

    case "pro":
        console.log(199);
        break;
    
    case "premium":
        console.log(399);
        break;

    default:
        console.log("Невідомий план");
};



// =================================
console.log("           Task 2:")
// =================================
// 2. Маючи число day (1–7), через switch виведи в консоль назву дня тижня.

 const day = 5;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5: 
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break; 
    
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Not a week day");
}


// =================================
console.log("           Task 3:")
// =================================
// 3. Маючи змінну color ('red'/'yellow'/'green'), через switch виведи в консоль дію 
// світлофора ('Стій'/'Увага'/'Їдь').

const color = "green";

switch (color) {

    case "red":
        console.log("Стій");
        break;

    case "yellow":
        console.log("Увага");
        break;

    case "green":
        console.log("Їдь");
        break;

    default:
        console.log("Це не колір світлофору");
}



// =================================
console.log("           Task 4:")
// =================================
// 4. Маючи число month (1–12), через switch виведи в консоль відповідну пору року.

const month = 4;

switch (month) {
    
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;

    default:
        console.log("Not a year season");
}



// =================================
console.log("           Task 5:")
// =================================
// 5. Поясни, навіщо в switch потрібен break і що станеться, якщо його прибрати.

// break потрібен для того щоб припинити виконувати інструкції після того, як знайшов правильний case
// нижче наведу приклад результату пропуску break у конструкції switch
// у цьому прикладі буде вірним case 2 та виконається його інструкція але через відсутність break
// також виконається інструкція case 3 але вже без первірки умови
// case 4 не буде перевіряти умову, а також виконувати інструкцію, тому що у case 3 є break

const numb = 2;

switch (numb) {

    case 1:
        console.log("Your number is 1");
        break;

    case 2:
        console.log("Your number is 2");

    case 3:
        console.log("Your number is 3");
        break;
    
    case 4:
        console.log("Your number is 4");
        break;
}