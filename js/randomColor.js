const randomColorArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const getRamdomColor = () => {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += randomColorArr[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}

const bgPageEl = document.querySelector('.games');
const randomButtonEl = document.querySelector('.random_btn');
randomButtonEl.addEventListener('click', () => {
    bgPageEl.style.backgroundColor = getRamdomColor();
});
