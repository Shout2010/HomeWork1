const rockPaperScissor = () => {
    const versionArr = ["камень", "ножницы", "бумага"];
    alert("Приветствую Вас в игре Камень, Ножницы, Бумага");
    let randomIndex = Math.floor(Math.random()*3);
    let computerVersion = versionArr[randomIndex];
    let userVersion = (prompt('Введите ваш выбор: ')).toLowerCase();
    if (userVersion === versionArr[0] && computerVersion === versionArr[1]) {
        alert(`Победа!!! Ваш выбор: ${userVersion}, выбор компьютера: ${computerVersion}.`);
    } else if (userVersion === versionArr[1] && computerVersion === versionArr[2]) {
        alert(`Победа!!! Ваш выбор: ${userVersion}, выбор компьютера: ${computerVersion}.`);
    } else if (userVersion === versionArr[2] && computerVersion === versionArr[0]) {
        alert(`Победа!!! Ваш выбор: ${userVersion}, выбор компьютера: ${computerVersion}.`);
    } else if (userVersion === computerVersion){
        alert(`Ничья!!! Ваш выбор: ${userVersion}, выбор компьютера: ${computerVersion}.`);
    } else  alert(`Поражение!!! Ваш выбор: ${userVersion}, выбор компьютера: ${computerVersion}.`);
}