const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2,
        correctAnswerText: 'Синий'
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2,
        correctAnswerText: 'Семь'
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2,
        correctAnswerText: 'Пять'
    }
];

const quizGame = (questionsArray) => {
    let correctCount = 0;
    for (let i = 0; i < questionsArray.length; i++) {
        let userAnswer = prompt(questionsArray[i].question + '\n' + questionsArray[i].options);
        if (userAnswer != null && (userAnswer.toLocaleLowerCase() === questionsArray[i].correctAnswerText.toLocaleLowerCase() || userAnswer == questionsArray[i].correctAnswer)) {
            alert('Верно');
            correctCount++;
        } else {
            alert('Не верно');
        }
    }
    alert(`Вы ответили правильно на ${correctCount} из ${questionsArray.length} вопросов.`);
}



