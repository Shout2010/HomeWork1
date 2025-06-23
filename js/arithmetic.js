const arithmetic = {
    addition: () => {
        let number1 = Math.floor(Math.random() * 100) + 1;
        let number2 = Math.floor(Math.random() * 100) + 1;
        let result = number1 + number2;
        do {
            let userAnswer = prompt(`Введите ответ на пример ${number1} + ${number2}`);
            if (result == userAnswer) {
                alert('Верно, ты молодец');
                break;
            } else alert('не верно, пробуй еще');
        } while (true)
    },
    subtraction: () => {
        let number1 = Math.floor(Math.random() * 100) + 1;
        let number2 = Math.floor(Math.random() * 100) + 1;
        let temporaryNumber;
        if (number1 < number2) {
            temporaryNumber = number1;
            number1 = number2;
            number2 = temporaryNumber;
        }
        let result = number1 - number2;
        do {
            let userAnswer = prompt(`Введите ответ на пример ${number1} - ${number2}`);
            if (result == userAnswer) {
                alert('Верно, ты молодец');
                break;
            } else alert('не верно, пробуй еще');
        } while (true)
    },
    multiplication: () => {
        let number1 = Math.floor(Math.random() * 10) + 1;
        let number2 = Math.floor(Math.random() * 10) + 1;
        let result =  number1 * number2;
        do {
            let userAnswer = prompt(`Введите ответ на пример ${number1} * ${number2}`);
            if (result == userAnswer) {
                alert('Верно, ты молодец');
                break;
            } else alert('не верно, пробуй еще');
        } while (true)
    },
    dividing: () => {
        let number1 = Math.floor(Math.random() * 100) + 1;
        let number2 = Math.floor(Math.random() * 10) + 1;
        let result = Math.round(number1 / number2);
        do {
            let userAnswer = prompt(`Введите ответ на пример ${number1} : ${number2}`);
            if (result == userAnswer) {
                alert('Верно, ты молодец');
                break;
            } else alert('не верно, пробуй еще');
        } while (true)
    },
}
const arithmeticArr = ['addition', 'subtraction', 'multiplication', 'dividing'];
const arithmeticGame = () => {
    let quantityExample = prompt("Добро пожаловать в игру. Какое количество примеров в готовы решить?");
    for (let i = 0; i < quantityExample; i++) {
        let indexOp = Math.floor(Math.random() * arithmeticArr.length);
        arithmetic[arithmeticArr[indexOp]]();
    }
}