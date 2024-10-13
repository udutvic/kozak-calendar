const now = new Date();

let currentMonth = now.getMonth();
let currentYear = now.getFullYear();

const monthIndexToName = [
    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 
    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
];

const monthIndexToImage = [
    "url('./assets/images/bg/bayda.webp')",
    "url('./assets/images/bg/bohun.webp')",
    "url('./assets/images/bg/doroshenko.webp')",
    "url('./assets/images/bg/hmelnitskiy.webp')",
    "url('./assets/images/bg/mazepa.webp')",
    "url('./assets/images/bg/nalyvayko.webp')",
    "url('./assets/images/bg/orlyk.webp')",
    "url('./assets/images/bg/samoylovych.webp')",
    "url('./assets/images/bg/pidkova.webp')",
    "url('./assets/images/bg/sagaydachny.webp')",
    "url('./assets/images/bg/sirko.webp')",
    "url('./assets/images/bg/sulyma.webp')"
];

const monthElement = document.querySelector('.month');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

previousButton.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderMonth(currentMonth, currentYear);
});

nextButton.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderMonth(currentMonth, currentYear);
});

const dateNumberElements = [...document.querySelectorAll('.date-number')];

const wrapperStyle = document.createElement("style");
wrapperStyle.type = "text/css";
document.head.appendChild(wrapperStyle);

const renderMonth = (monthIndex, year) => {
    monthElement.textContent = `${monthIndexToName[monthIndex]} / ${year}`;

    const firstDay = new Date(year, monthIndex, 1).getDay(); // Перший день місяця
    const numDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    wrapperStyle.innerHTML = `.wrapper::before { background-image: ${monthIndexToImage[monthIndex]}; }`;

    dateNumberElements.forEach((element, index) => {
        const date = index + 1 - firstDay;

        element.textContent = (date > 0 && date <= numDaysInMonth) ? date : '';

        const today = new Date();
        if (today.getMonth() === monthIndex && today.getFullYear() === year && today.getDate() === date) {
            element.classList.add('today');
        } else {
            element.classList.remove('today');
        }
    });
};

renderMonth(currentMonth, currentYear);
