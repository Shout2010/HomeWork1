// задание 1
const titleEl = document.querySelector('.task-1__title');
const titleBtnEl = document.querySelector('.task-1__btn');
titleBtnEl.addEventListener('click', () => {
    titleEl.classList.toggle('hidden');
})

// задание 2
const taskSecTextEl = document.querySelector('.task-2__text');
const taskSecBtnEl = document.querySelector('.task-2__btn');
taskSecBtnEl.addEventListener('click', () => {
    taskSecTextEl.style.color = 'blue';
})

// задание 3

const taskThirdTitleEl = document.querySelector('.task-3__title');
const taskThirdBtnEl = document.querySelector('.task-3__btn');
taskThirdBtnEl.addEventListener('click', () => {
    taskThirdTitleEl.textContent = 'Привет мир!!!';
})

// задание 4

const descriptionAllEl = document.querySelectorAll('.description');
const descriptionBtnEl = document.querySelector('.description__btn');
descriptionBtnEl.addEventListener('click', () => {
    descriptionAllEl.forEach(element => {
        element.textContent = 'Измененный текст';
    });
})

// задание 5

const infoEl = document.querySelectorAll('.info');
const taskFifthBtnEl = document.querySelector('.task-5__tbn');
taskFifthBtnEl.addEventListener('click', () => {
    infoEl.forEach(element => {
        element.textContent = "Новый текст";
    });
})

//  задание 6

const contentEl = document.querySelector('.task-6');
const taskSixthBtnEl = document.querySelector('.task-6__btn');
taskSixthBtnEl.addEventListener('click', () => {
    const textEl = document.createElement('p');
    textEl.textContent = 'Lorem ipsum dolor sit amet.';
    textEl.classList.add('task-6__text');
    contentEl.append(textEl);
})


// задание 7

const removeBtnEl = document.querySelector('.remove__btn');
removeBtnEl.addEventListener('click', ()=>{
    const removeTextEl = document.querySelector('.text');
    if (removeTextEl) {
        removeTextEl.remove();
    }
})