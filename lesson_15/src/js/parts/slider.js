// 
function slider() {
    ///////    СЛАЙДЕР      Slider

    //переменная которая отвечает за то, какой слайд показывается
    let slideIndex = 1,

    // сами слайды. получаем все слайды
        slides = document.querySelectorAll('.slider-item'),
    // элементы навигации, стрелочки ВПЕРЕД и НАЗАД
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
    // взаимодействие с нашими точками. получаем обертку точек и сами точки
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    //

    let showSlides = (n) => {
   
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }
 
        slides.forEach((item) => item.style.display = 'none');     
        // //     ! старый аналогичный способ !
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }


        // удаляем класс dot-active
        dots.forEach((item) => item.classList.remove('dot-active')); 

        // покажем тот слайд который нам нужен

        slides[slideIndex - 1].style.display = 'block';

        // добавляем класс dot-active
        dots[slideIndex - 1].classList.add('dot-active');
    };

    showSlides(slideIndex); 

    // функция которая увеличивает наш параметр slideIndex
    let plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    // функция которая определяет текущий слайд и устанавливает его
    let currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    // кнопки стрелочка назад и стрелочка вперед
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    });

    // реализуем точки
    dotsWrap.addEventListener('click', (event) => {

        for (let i = 0; i < dots.length + 1; i++) {

            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }      
    });
}

module.exports = slider;
