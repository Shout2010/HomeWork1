// задание 1

// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]}`);
//     if (arr[i] == 10) {
//         break;
//     }
// }

// задание 2

// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] == 4){
//         console.log(i);
//         break;
//     }
// }

// задание 3

// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));

// задание 4

// const arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(1);
//     }
// }

// задание 5

// const arr = [1, 1, 1];
// arr.push(2,2,2);

// задание 6

// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// const newArr = arr.filter(item => typeof(item) == 'number');
// console.log(newArr);

// задание 7 

// const arr = [9, 8, 7, 6, 5];
// let userNumber = Number(prompt('Введите число чтобы угадать'));
// if (arr.includes(userNumber)) {
//     alert('Угадал')
// } else alert('такого числа нету в массиве');

// задание 8

// let word = 'abcdef';
// console.log(`${word.split("").reverse().join('')}`);

// задание 9

// const arr = [[1, 2, 3],[4, 5, 6]];
// const newArr = [].concat(...arr);
// console.log(newArr);

// задание 10

// const arr = Array.from({length: 10}, () => Math.floor(Math.random()*10));
// const newArr = [];
// for (let i=0; i < arr.length - 1; i++) {
//     newArr.push(arr[i] + arr[i+1]);
// }
// console.log(arr);
// console.log(newArr);

// задание 11

// const arr = Array.from({length: 10}, () => Math.floor(Math.random()*10));
// const squareNumbers = (numbers) =>{
//     return numbers.map(number => number * number);
// }
// const newArr = squareNumbers(arr);
// console.log(arr);
// console.log(newArr);

// задание 12

// const arr = ['asdasd', 'asdasertdfs','dsadogogkgkaad'];
// const stringLength = (items) =>{
//     return items.map(item => item.length);
// }
// const newArr = stringLength(arr);
// console.log(arr);
// console.log(newArr);

// задание 13

// const arr = [1, -3, 5, 7, -9];
// const negativeNumber = (numbers) =>{
//     return numbers.filter(number => number < 0);
// }
// const newArr = negativeNumber(arr);
// console.log(arr);
// console.log(newArr);

// задание 14

// const arr = Array.from({length: 10},() => Math.floor(Math.random()*10));
// const evenNumbers = (numbers) =>{
//     return numbers.filter(number => number % 2 === 0);
// }
// const evenArr = evenNumbers(arr);
// console.log(arr);
// console.log(evenArr);

// задание 15

const arr = Array.from({length: 6}, () => Math.floor(Math.random()*10));
const arithmeticMean = (arr) =>{
    return arr.reduce((total, number) => total + number, 0) / arr.length;
}
console.log(arr);
console.log(arithmeticMean(arr));