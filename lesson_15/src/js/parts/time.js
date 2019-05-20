// 
function time() {
// Timer
    let deadLine = '2019-06-03'; //наш дэдлайн, по какое время
    
    // функция получает все данные о времени
    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date());

        let seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t / (1000*60*60)));

        return {
            'total' : (t > 0) ? t : '0',
            'hours' : (t > 0) ? hours : '0',
            'minutes' : (t > 0) ? minutes : '0',
            'seconds' : (t > 0) ? seconds : '0'
        };    
    };

    // устанавливает наши часы
    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
        // функция которая будет обновлять наши часы каждую секунду
        //получает разницу между временем
            updateClock = () => {
                let t = getTimeRemaining(endtime);
                //подставлять 0 перед значениями, которые состоят из одной цифры
                let finalDateFunc = () => { 
                    let finalDateFunc = {};
                    for (let i in t) {
                        finalDateFunc[i] = ( (parseInt(t[i]) < 10 ) ? ('0'+t[i]) : (t[i]) );
                    }
                    return finalDateFunc;
                };
                
                let finalDate = finalDateFunc();

                // из полученных данных мы записываем эти данные прямо в верстку:
                hours.textContent = finalDate.hours;
                minutes.textContent = finalDate.minutes;
                seconds.textContent = finalDate.seconds;

                //как только разница дойдет до нуля остановим интервал таймер
                (finalDate.total <= 0) ? (clearInterval(timeInterval)) : '';
            },
            timeInterval = setInterval(updateClock, 1000);// интервал, каждую секунду запуск функции updateClock 
    };
    setClock('timer', deadLine );
}

module.exports = time;
