"use strict";
let form = document.querySelector('form'), date_the_birth = document.querySelectorAll('input');
let day_now = new Date().getDay(), month_now = new Date().getMonth() + 1, year_now = new Date().getFullYear();
//Stack the time
let stack_year, stack_day, stack_month;
let arrow_down = document.querySelector('.arrow_down');
let years_display = document.querySelector('#years_display'), months_display = document.querySelector('#months_display'), days_display = document.querySelector('#days_display');
const year = document.querySelector('#year'), month = document.querySelector('#month'), day = document.querySelector('#day');
const year_label = document.querySelector('#year_label'), day_label = document.querySelector('#day_label'), month_label = document.querySelector('#month_label');
let regex_year = /^\{4}$/;
let borderInput = document.querySelector('.borderInput');
/**
 * Create function error
 * @param colorBorder
 * @param colorText
 */
const take_error = (time_label, time, colorBorder, colorText) => {
    time === null || time === void 0 ? void 0 : time.classList.add(colorBorder);
    time_label === null || time_label === void 0 ? void 0 : time_label.classList.add(colorText);
};
month === null || month === void 0 ? void 0 : month.addEventListener('input', (e) => {
    const inputElement = e.currentTarget;
    const inputValue = inputElement.value;
    if (inputValue.length > 2) {
        inputElement.value = inputValue.slice(0, 2);
    }
});
day === null || day === void 0 ? void 0 : day.addEventListener('input', (e) => {
    const inputElement = e.currentTarget;
    const inputValue = inputElement.value;
    if (inputValue.length > 2) {
        inputElement.value = inputValue.slice(0, 2);
    }
});
year === null || year === void 0 ? void 0 : year.addEventListener('input', (e) => {
    const inputElement = e.currentTarget;
    const inputValue = inputElement.value;
    if (inputValue.length >= 4) {
        inputElement.value = inputValue.slice(0, 4);
    }
});
/**
 * Full the data of date of birth
 */
date_the_birth.forEach(input => {
    input === null || input === void 0 ? void 0 : input.addEventListener('input', (e) => {
        if (input.value.length === 0) {
        }
        let select_value = (e.currentTarget.value);
        switch (e.currentTarget.id) {
            case 'year':
                input === null || input === void 0 ? void 0 : input.setAttribute('max', `${year_now - 2}`);
                if (regex_year && input.value.length === 4 && Number(input === null || input === void 0 ? void 0 : input.value) <= year_now) {
                    stack_year = year_now - parseInt(select_value);
                    take_error(year, year_label, 'border-slate-600', 'text-slate-600');
                }
                else if (Number(input === null || input === void 0 ? void 0 : input.value) > year_now) {
                    take_error(year, year_label, 'border-red-600', 'text-red-600');
                    return null;
                }
                break;
            case 'day':
                if (input.value.length <= 2) {
                    stack_day = Math.abs(day_now - parseInt(select_value));
                    take_error(day, day_label, 'border-slate-600', 'text-slate-600');
                }
                else {
                    take_error(day, day_label, 'border-red-600', 'text-red-600');
                }
                break;
            case 'month':
                stack_month = Math.abs(month_now - parseInt(select_value));
                break;
        }
    });
});
let display_years;
/**
 * Send form
 */
arrow_down === null || arrow_down === void 0 ? void 0 : arrow_down.addEventListener('click', () => {
    if (years_display && days_display && months_display) {
        years_display.innerHTML = (stack_year === null || stack_year === void 0 ? void 0 : stack_year.toString()) + ' ';
        days_display.innerHTML = (stack_day === null || stack_day === void 0 ? void 0 : stack_day.toString()) + ' ';
        months_display.innerHTML = (stack_month === null || stack_month === void 0 ? void 0 : stack_month.toString()) + ' ';
        if (arrow_down) {
            const closestCircleArrow = arrow_down.closest('.circle_arrow');
            closestCircleArrow && closestCircleArrow.classList.add('bg-purple-700');
        }
    }
    else {
        alert('Veuillez entre les données correctement!!');
    }
    years_display === null || years_display === void 0 ? void 0 : years_display.classList.add('text-purple-700');
    days_display === null || days_display === void 0 ? void 0 : days_display.classList.add('text-purple-700');
    if (stack_year === undefined || stack_day === undefined || stack_month === undefined) {
        alert('undefined correctly');
        if (years_display && days_display && months_display) {
            years_display.innerHTML = '--';
            days_display.innerHTML = '--';
            months_display.innerHTML = '--';
        }
    }
});
