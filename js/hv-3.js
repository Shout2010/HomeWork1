// // задача 1
// let password = 'голубь';
// let answer = prompt('Введите пароль: ');

// (password === answer) ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');

// // задача 2

// let c = Number(prompt('Введите число:'));

// (c > 0 && c < 10) ? console.log('Верно') : console.log('Не верно');

// // задача 3

// let d = Number(prompt('Введите первое число:'));
// let e = Number(prompt('Введите второе число:'));

// (d > 100 || e > 100) ? console.log('Верно') : console.log('Не верно');

// // задача 4

// let a = '2';
// let b = '3';

// alert(parseInt(a) + parseInt(b));

// задача 5

let monthNumber = Number(prompt("Введите номер месяца: "));

if (monthNumber > 0 && monthNumber < 13) {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
    }
} else {
    console.log('Такого месяца не существет');
}
