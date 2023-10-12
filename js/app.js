var now = new Date();

var curentMonth = now.getMonth();
var curentYear = now.getFullYear();

var monthIndexToName = {
    0: 'Січень',
    1: 'Лютий',
    2: 'Березень',
    3: 'Квітень',
    4: 'Травень',
    5: 'Червень',
    6: 'Липень',
    7: 'Серпень',
    8: 'Вересень',
    9: 'Жовтень',
    10: 'Листопад',
    11: 'Грудень',
}

var monthIndexToImage = {
    0: "url('./assets/images/bg/bayda.webp')",
    1: "url('./assets/images/bg/bohun.webp')",
    2: "url('../assets/images/bg/doroshenko.webp')",
    3: "url('../assets/images/bg/hmelnitskiy.webp')",
    4: "url('../assets/images/bg/mazepa.webp')",
    5: "url('../assets/images/bg/nalyvayko.webp')",
    6: "url('../assets/images/bg/orlyk.webp')",
    7: "url('../assets/images/bg/samoylovych.jpg')",
    8: "url('../assets/images/bg/pidkova.webp')",
    9: "url('../assets/images/bg/sagaydachny.webp')",
    10: "url('../assets/images/bg/sirko.webp')",
    11: "url('../assets/images/bg/sulyma.webp')",
}

var monthElement = document.querySelector('.month');
var previusButton = document.querySelector('.previous');
var nextiusButton = document.querySelector('.next');

previusButton.addEventListener('click', () => {
    curentMonth--;
    if (curentMonth < 0) {
        curentMonth = 11;
        curentYear--;
    }
    renderMonth(curentMonth, curentYear);
})

nextiusButton.addEventListener('click', () => {
    curentMonth++;
    if (curentMonth > 11) {
        curentMonth = 0;
        curentYear++;
    }
    renderMonth(curentMonth, curentYear);
})

var dateNumberElements = [...document.querySelectorAll('.date-number')];

var renderMonth = (monthIndex, year) => {
    monthElement.innerHTML = `${monthIndexToName[monthIndex]} / ${year}`;

    var firstDay = new Date(year, monthIndex, 0).getDay();

    var numDaysInMonth = new Date(year, monthIndex + 1, 0).getDate()

    dateNumberElements.forEach((element, index) => {
        var date = (index + 1) - firstDay;       

        element.innerHTML = (date > 0) && (date <= numDaysInMonth) ? date : '';

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".wrapper::before { background-image: " + monthIndexToImage[monthIndex] + "; }";
        document.body.appendChild(css);     
        
        var today = new Date();
        if (today.getMonth() === monthIndex && today.getFullYear() === year && today.getDate() === date) {
            element.classList.add('today');
        } else {
            element.classList.remove('today');
        }

    })
}

renderMonth(curentMonth, curentYear);
