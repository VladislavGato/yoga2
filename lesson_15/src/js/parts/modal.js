// 
function modal() {
    // Modal ( наше модальное окно)

    let overlay = document.querySelector('.overlay');
        // more = document.querySelector('.more'),
        // close = document.querySelector('.popup-close'),
        // content = document.querySelector('.content');
        // body = document.querySelector('body');

    //функция для всех кнопок УЗНАТЬ ПОДРОБНЕЕ в табах и для УЗНАТЬ БОЛЬШЕ
    let bindModal = ( btn, overlayStatus, overflowStatus ) => {
        overlay.style.display = overlayStatus;
        btn.classList.add('more-splash');
        document.body.style.overflow = overflowStatus;
        setTimeout(() => {
            btn.classList.remove('more-splash');
        }, 1500);
    };

    //событие при клике
    document.body.addEventListener('click', (e) => {
        let target = e.target;
        (target.classList.contains('more') || target.classList.contains('description-btn')) ? bindModal(target, 'block', 'hidden') : '';
        (target.classList.contains('popup-close')) ? bindModal(target, 'none', '') : '';
    });
}

module.exports = modal;
