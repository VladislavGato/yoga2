let calc = () => {
    // Calc      КАЛЬКУЛЯТОР

    // получим два инпута; базу на которой будут отдыхать;
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),

        totalValue = document.getElementById('total'), //общую сумму поездки
        
        personsSum = 0, // количество людей
        daysSum = 0, // на сколько дней
        total = 0; // итоговое значение общей суммы

    // запишем 0 в общую сумму на странице
    totalValue.innerHTML = 0;
  

    //валидация input в поле телефона и калькулятор
    document.body.addEventListener('input', e => {
        if (e.target.getAttribute('type') === 'tel') {
            e.target.value = '+' + e.target.value.replace(/[^\d]/g, '').slice(0, 11);
            if (e.target.value.length == 1) e.target.value = '';
        }

        if (e.target.classList == 'counter-block-input') {
            e.target.value = e.target.value.replace(/(^[0]{1})/, '');
        }

        personsSum = +persons.value;
        daysSum = +restDays.value;

        total = (daysSum + personsSum) * 4000;

        if (restDays.value === '' || persons.value === '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * place.options[place.selectedIndex].value;
        }
    });
};

module.exports = calc;
