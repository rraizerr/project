import { getResource } from "../services/services";

function cards() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement("div");

            // Проверяем, передан ли параметр класса, если нет ,используем умолчание
            if (this.classes.length === 0) {
                this.element = "menu__item"; // Параметр по умолчанию
                element.classList.add(this.element);
            } else { // Если параметры переданы
               this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    // //при помощи сервера запроса мы получаем массив, который содержит menu
    // //это массив с объектами. Перебераем этот массив методом forEach
    // //создаем новый класс MenuCard для каждого объекта, деструктуризируем
    // //его по отдельным частям и передаем эти части во внутрь нашего
    // //конструктора MenuCard, который создает новую карточку на страничке
    getResource("http://localhost:3000/menu")
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });

    // используем библиотеку axios
    // axios.get("http://localhost:3000/menu")
    //     .then(data => {
    //         data.data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    //         });
    //     });

}

export default cards;