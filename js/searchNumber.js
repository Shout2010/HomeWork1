const randomGame = () =>{
    let randomNumber = Math.floor(Math.random()*100) + 1;
    
    do{
        let userNumber = prompt('Угадай число от 1 до 100',"Нажми отмена что бы закочнить игру");

        if (userNumber === null){
            alert(`Рано сдался, а число было ${randomNumber}`);
            break;
        }

        if (userNumber < 1 || userNumber > 100 || isNaN(userNumber) || userNumber == 0){
            alert('Мы в игру играем, или дурью маемся???');
            continue;
        }

        if (userNumber > randomNumber){
            alert("Попробуй число поменьше");
        } else if (userNumber < randomNumber){
            alert("Попробуй число побольше");
        } else if (userNumber == randomNumber){
            alert(`Поздравлем ты угадал. Это было число ${userNumber}`);
            break;
        }
    } while (true)
}