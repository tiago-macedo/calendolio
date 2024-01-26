const G_days_this_year = new Date().getFullYear() % 4 == 0 ? 366 : 365;
const miliseconds_in_day = 1000 * 60 * 60 * 24;

const days_in_week = 10
const days_in_month = days_in_week * 3
const days_in_quarter = days_in_month * 3 + 1

const months = [
    "Janeiro",  "Fevereiro", "Março",    "Abril",
    "Maio",     "Junho",     "Julho",    "Agosto",
    "Setembro", "Outubro",   "Novembro", "Dezembro"
]

const txt1 = document.getElementById('day');
const txt_extra = document.getElementById('extra');
const txt2 = document.getElementById('time');

calculate();
setInterval(calculate,1000);

function calculate() {
    let oliday = false;

    // In the Gregorian calendar
    const start = new Date((new Date()).getFullYear(), 0, 0);
    const diff = (new Date()) - start;
    let current_day = Math.floor(diff / miliseconds_in_day);

    // Super Oliday
    if (current_day === 122) {
        txt1.innerText = "🎉 It's Super Oliday! 🎉";
        txt2.innerText = `${(new Date()).toLocaleTimeString("br-BR")}`;
        return;
    } else if (current_day > 122) { current_day--; }

    // In Calendolio
    // Quarter
    if (current_day === 1*days_in_quarter) { oliday = 1;       }
    if (current_day >   1*days_in_quarter) { current_day -= 1; }
    if (current_day === 2*days_in_quarter) { oliday = 2;       }
    if (current_day >   2*days_in_quarter) { current_day -= 1; }
    if (current_day === 3*days_in_quarter) { oliday = 3;       }
    if (current_day >   3*days_in_quarter) { current_day -= 1; }
    if (current_day === 4*days_in_quarter) { oliday = 4;       }
    if (current_day >   4*days_in_quarter) { current_day -= 4; }
    // Month
    let month = Math.floor(current_day / days_in_month);
    if (current_day % days_in_month === 0) { month--; }
    let day_of_the_month = (current_day % days_in_month);
    if (day_of_the_month === 0) day_of_the_month = days_in_month;

    // Week
    let day_of_the_week = (current_day % days_in_week);
    if (day_of_the_week === 0) day_of_the_week = days_in_week;

    // Printing
    if (oliday) {
        let suffix;
        switch (oliday) {
            case 1: suffix = "st";
            case 2: suffix = "nd";
            case 3: suffix = "rd";
            case 4: suffix = "th";
        }
        txt_extra.innerText = `It's the ${oliday}${suffix} an Oliday!`
        return;
    }
    txt1.innerText = `${day_of_the_week}a Feira, ${day_of_the_month} de ${months[month]} de ${new Date().getFullYear()}`
    txt2.innerText = `${(new Date()).toLocaleTimeString("br-BR")}`;
}

function oliday_detector() {

}