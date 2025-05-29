// // Задание 1

let i = 0;
while (i < 2){
    alert('Привет!!!');
    i++;
}

// задание 2

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5)

// // задание 3

for (let i = 7; i <= 22; i++){
    console.log(i);
}

// задание 4

let obj = {
    'Коля':'200',
    'Вася': '300',
    'Петя' : '400' 
}
for (let key in obj) {
    console.log(`${key} зарплата ${obj[key]}$`);
}

// задание 5
let n = 1000;
let num = 0;

do {
    n /= 2;
    num++;

    if (n < 50) {
        console.log(`Результат равен ${n}`);
        console.log(`Количество итераций ${num}`);
    }
} while (n > 50)

// задание 6

let weekDay = Number(prompt('Введите дату первой пятницы:','от 1 до 7'));
if (weekDay >=1 && weekDay <= 7){
    for (let i = weekDay; i <= 31; i +=7){
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет`)
    }
}else {
    console.log('не корректвное число');
}
