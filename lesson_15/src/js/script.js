window.addEventListener('DOMContentLoaded', () => {

    "use strict"; // переведем весь наш код в строгий режим

    // ТАБЫ 
    let tabs = require('./parts/tabs.js'),
    // Timer. устанавливает наши часы
        time = require('./parts/time.js'),
    // плавная анимация
        scroll = require('./parts/scroll.js'),
    // Calc и валидация input в поле телефона и калькулятор
        calc = require('./parts/calc.js'),
    //  СЛАЙДЕР      Slider
        slider = require('./parts/slider.js'),
    // Modal ( наше модальное окно)
        modal = require('./parts/modal.js'),
    // FORM с промисами
        forms = require('./parts/forms.js');




    tabs();
    time();
    scroll();
    calc();
    slider();
    modal();
    forms();

});














