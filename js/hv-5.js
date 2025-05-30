// задача 1
const smallerNumber = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }

}
// задача 2
const evenNumber = (a) => {
    if (a % 2 === 0) {
        return 'число четное';
    } else {
        return 'число не четное'
    }
}
// задача 3

const squareNumberConsole = (a) => console.log(a ** 2);
const squareNumber = (a) => {
    return a ** 2;
}

// задача 4

const userAge = () => {
    let age = Number(prompt('Сколько вам полных лет?'));

    if (age < 0) {
        alert('Вы ввели не правильное значение');
    } else if (age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать');
    }
}

// задача 5
const correctNumber = (a, b) => {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

// задача 6

const cubeNumber = () => {
    let userNumber = prompt('Введите число');

    if (isNaN(Number(userNumber))) {
        return 'переданный параметр не является числом'
    } else {
        return `${userNumber} в кубе равняется ${userNumber ** 3}`
    }
}

// задача 7 
const getArea = function () {
    return Math.PI * this.radius ** 2;
}

const getPerimetr = function () {
    return 2 * Math.PI * this.radius;
}
let circle1 = {
    radius: 12,
    getArea,
    getPerimetr,
}
let circle2 = {
    radius: 9,
    getArea,
    getPerimetr,
}

