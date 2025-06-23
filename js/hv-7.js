// задание 1
// let str = 'js';
// console.log(str.toUpperCase());

// Задание 2
// const carArray = ['Toyta Camry', 'Cerry Amulet','Toyta R4', "Chevrolet Camaro",'Toyta Corola']
// const arrContainsStr = (array, str) => {
//     return array.filter((model) => model.toLowerCase().startsWith(str.toLowerCase()));
// }

// console.log(arrContainsStr(carArray, 'toyta'));

// задание 3

// let number = 32.58884;
// console.log(`До меньшего целого. ${Math.floor(number)}`);
// console.log(`До большего целого ${Math.ceil(number)}`);
// console.log(`До ближайшего целого. ${Math.round(number)}`);

// задание 4

// console.log(`Максимальное значение ${Math.max(52, 53, 49, 77, 21, 32)}`);
// console.log(`Минимальное значение ${Math.min(52, 53, 49, 77, 21, 32)}`);

// задание 5

// console.log(Math.floor(Math.random()*10+1));

// задание 6

// const createArr = (number) => {
//     return Array.from({length: Math.trunc(number/2)}, () => Math.floor(Math.random()*number));
// }
// console.log(createArr(9));

// // задание 7 

// const randomNumber = (min, max) => {
//     return Math.floor(Math.random()*(max-min +1) +min);
// }
// console.log(randomNumber(5,10));

// задание 8
// let currentDate = new Date();
// console.log(currentDate);

// задание 9

// let currentDate = new Date();
// let newDate = new Date(currentDate);
// newDate.setDate(newDate.getDate() + 73);
// console.log('Сегодня: '+ currentDate);
// console.log('Через 73 дня будет: ' + newDate);


// задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let currentDate = new Date();
const formatDateRus = (date) =>{
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]} \nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} .`; 
}
console.log(formatDateRus(currentDate));