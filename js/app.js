const now = new Date();

let currentMonth = now.getMonth();
let currentYear = now.getFullYear();

const monthIndexToName = [
    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 
    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
];

const monthIndexToImage = [
    "./assets/images/bg/bayda.webp",
    "./assets/images/bg/bohun.webp",
    "./assets/images/bg/doroshenko.webp",
    "./assets/images/bg/hmelnitskiy.webp",
    "./assets/images/bg/mazepa.webp",
    "./assets/images/bg/nalyvayko.webp",
    "./assets/images/bg/orlyk.webp",
    "./assets/images/bg/samoylovych.webp",
    "./assets/images/bg/pidkova.webp",
    "./assets/images/bg/sagaydachny.webp",
    "./assets/images/bg/sirko.webp",
    "./assets/images/bg/sulyma.webp"
];

// Завчасне завантаження зображень
const preloadImages = () => {
    monthIndexToImage.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};
preloadImages();

const monthElement = document.querySelector('.month');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

const updateMonthAndYear = (direction) => {
    if (direction === 'previous') {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
    } else if (direction === 'next') {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
    }
    renderMonth(currentMonth, currentYear);
};

previousButton.addEventListener('click', () => updateMonthAndYear('previous'));
nextButton.addEventListener('click', () => updateMonthAndYear('next'));

const dateNumberElements = [...document.querySelectorAll('.date-number')];

// Оновлення стилю без використання innerHTML
const wrapperElement = document.querySelector('.wrapper');

const renderMonth = (monthIndex, year) => {
    monthElement.textContent = `${monthIndexToName[monthIndex]} / ${year}`;

    const firstDay = new Date(year, monthIndex, 1).getDay();
    const numDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    // Зміна зображення через CSS-властивість style
    wrapperElement.style.setProperty('--background-image', `url(${monthIndexToImage[monthIndex]})`);

    const today = new Date();
    dateNumberElements.forEach((element, index) => {
        const date = index + 1 - firstDay;

        element.textContent = (date > 0 && date <= numDaysInMonth) ? date : '';

        if (today.getMonth() === monthIndex && today.getFullYear() === year && today.getDate() === date) {
            element.classList.add('today');
        } else {
            element.classList.remove('today');
        }
    });
};

renderMonth(currentMonth, currentYear);
