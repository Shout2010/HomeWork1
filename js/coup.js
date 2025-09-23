const coupText = () => {
    let usetText = prompt('Введите текст который нужно перевернуть:');
    if (usetText === null) {
        return;
    }
    alert(usetText.split('').reverse().join(''));
}