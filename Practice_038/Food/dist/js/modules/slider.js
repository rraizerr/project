function slider() {
    // Slider Обычный

    // const slides = document.querySelectorAll(".offer__slide"),
    //     prev = document.querySelector(".offer__slider-prev"),
    //     next = document.querySelector(".offer__slider-next"),
    //     total = document.querySelector("#total"),
    //     current = document.querySelector("#current");
    // let slideIndex = 1;
       
    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }

    //     slides.forEach(item => item.classList.add("hide"));

    //     slides[slideIndex - 1].classList.add("show");
    //     slides[slideIndex - 1].classList.remove("hide");
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener("click", () => {
    //     plusSlides(-1);
        
    // });

    // next.addEventListener("click", () => {
    //     plusSlides(1);
    // });

    // Slider Карусель слайдов

    const slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector(".offer__slider"),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width;
    
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + "%"; // Устанавливаем ширину блока
    // Чтобы слайды вытроились в одну линию, добавляем свойство display: flex
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";
    //Скрываем лишниее элементы
    slidesWrapper.style.overflow = "hidden";

    // Перебираем все слайды и устанавливаем им одинаковую ширину
    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = "relative";

    const indicators = document.createElement("ol"),
        dots = [];
    indicators.classList.add("carousel-indicators");
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        // утанавливаем каждой точке атрибут, к какому слайду она будет
        // относиться, и устанавливаем нумерацию начиная с 1(1й слайд это 1я точка)
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function addZero(index) {
        if (slides.length < 10) {
            current.textContent = `0${index}`;
        } else {
            current.textContent = index;
        }
    }

    function activeDot() {
        // перебираем все точки и устанавливаем значение opacity 50%
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex - 1].style.opacity = 1;
    }

    function deleteNotDigits (str) {
        return +str.replace(/\D/g, ""); // ищем все не цифры \D, глобально \g и заменяем на пустое место ""
    }

    next.addEventListener("click", () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
                      // Удаляем "px" от размера слайда (500px/ станет 500) 
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        addZero(slideIndex);
        activeDot();
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
                      // Удаляем "px" от размера слайда (500px/ станет 500) 
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        addZero(slideIndex);
        activeDot();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");

            // Устанавливаем индекс слайдов в позицию slideTo
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            addZero(slideIndex);
            activeDot();
        });
    });
}

module.exports = slider;