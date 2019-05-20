function forms() {
    // // FORM с промисами

    // объект с сообщениями, с различными состояниями нашего запроса
    let message = {
        loading: 'Загрузка...', // будет показываться пользователю когда наш запрос ещё не обработался
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...' //если сервер не отвечает
    };

    //
    let form = document.getElementsByClassName('main-form')[0], // форма в модальном окне
        formBottom = document.getElementById('form'), // контактная форма
        input = document.getElementsByTagName('input'),  // все input'ы        
        // создадим новый div на странице
        statusMessage = document.createElement('div');
        // добавим к переменной класс
        statusMessage.classList.add('status');
    ///// запрос на сервер
    // в любой форме для отправки данных необходимо чтобы был (button)  или  (input type=submit)


    // событие формы
    let sendForm = (elem) => {
        // elem.addEventListener('submit', function(e) { // для 1 варианта вызова
            // e.preventDefault();  // для 1 варианта вызова
            elem.appendChild(statusMessage);
            let formData = new FormData(elem); // помещаем сюда всё то что ответил пользователь (пара ключ: значение)
            // создаем новый объект в который мы поместим все эти данные

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    // сам запрос
                    let request = new XMLHttpRequest(); // запрос
                    request.open('POST', 'server.php'); // POST - для отправки введенных пользователем данных / URL нашего сервера
                    // заголовок запроса. вариант для JSON файлов , а не обычная форма
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    // получить данные которые ввел пользователь

                    // для того чтобы наблюдать за изменениями состояния нашего запроса
                    request.addEventListener('readystatechange', () => {
                        if (request.readyState < 4) { // наш запрос грузится если сервер будет долго отвечать 
                            resolve(); // 'Загрузка...' это если сервер немножко тупит
                        } else if (request.readyState == 4 && request.status == 200) { // если всё прошло успешно и сервер ответил 200-ым кодом и наш запрос уже в 4-ом состоянии
                            resolve(); // 'Спасибо! Скоро мы с вами свяжемся!' 
                        } else {
                            reject(); // ''Что-то пошло не так...'                 
                        }
                    });

                    ////////// вариант для JSON 
                    let obj = {}; // 
                    data.forEach(function(value, key) { // берем все данные из formData и помещаем в obj
                        obj[key] = value;
                    });
                    // превращаем обычные JS объекты в JSON формат
                    let json = JSON.stringify(obj); // получаем переменную со всеми данными в формате JSON, его мы и отправляем на сервер
                    request.send(json); // отправляет запрос на сервер
                })                
            }

            let clearInput = () => { // чтобы автоматически очищалось поле инпута
                for (let i = 0; i < input.length; i++) {
                    input[i].value = ''; // возмем каждый инпут тот что есть в форме, у каждого инпута возмем value и превратим в пустую строку
                }
            };

            postData(formData)
                .then( ()=> statusMessage.innerHTML = message.loading)
                .then( ()=> statusMessage.innerHTML = message.success)
                .catch( ()=> statusMessage.innerHTML = message.failure)
                .then(clearInput)
 
        // }); // для 1 варианта вызова
    };

    // можно вызвать так(1 вариант):
    // sendForm(form);
    // sendForm(formBottom);

    // или так:
    // // надо вешать НА ФОРМУ,  НЕ НА КНОПКУ.  Следим чтобы форма отправлялась
    document.body.addEventListener('submit', (event) => {  // submit - всегда отправка  СРАБАТЫВАЕТ ТОЛЬКО НА ФОРМАХ
        let target = event.target; // event. где произошло событие
        event.preventDefault(); // чтобы не перезагружалась страница отменим стандартное поведение

        sendForm(target);

        // console.log(target);
    });


    
    // // валидация input в поле телефона
    // document.body.addEventListener('input', e => {
    //     if (e.target.getAttribute('type') === 'tel') {
    //         e.target.value = '+' + e.target.value.replace(/[^\d]/g, '').slice(0, 11);
    //         if (e.target.value.length == 1) e.target.value = '';
    //     }
    // });
}

module.exports = forms;
