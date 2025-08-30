// задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];

//  // Допишите колбэк для sort, изучите, как работает колбэк, в документации
//  console.log(people.sort((a, b)=>{
//     if (a.age > b.age) {
//         return 1;
//     } else if (a.age < b.age){
//         return -1;
//     }
//  }));

// задание 2

// function isPositive(number) {
//     return number > 0;
// }
// function isMale(person) {
//     return person.gender === 'male';
// }
// function filter(arr, cb) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale));

// задание 3

// let timerId = setInterval(() => {
//     let yesterDay = new Date();
//     console.log(yesterDay);
// }, 3000);

// setTimeout(() => {
//     console.log("30 секунд прошло");
//     clearTimeout(timerId);
// },30000);

// задание 4

// function delayForSecond(callback) {
//     setTimeout(() => {
//         callback();
//     }, 1000);

// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })

// задание 5

// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) {  cb(); }
//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(()=>{ 
//     sayHi('Глеб');
// })