function forms() {
    const forms = document.querySelectorAll("form");

    const message = {
        loading: "img/form/spinner.svg",
        success: "Спасибо! Скоро мы с Вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => { // async говорит что внитри функции есть асинхронный код
        const res = await fetch(url, { // async будет ждать выполнение этой операции
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img"); // создаем изображение
            statusMessage.src = message.loading; // добавляем изображению атрибут src с ссылкой на него
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            
            form.insertAdjacentElement("afterend", statusMessage); // Добавляет спиннер после формы

            // Отправлляем форму в формате JSON
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // превращаем formData в массив массивов, затем с помощью
            // fromEntries в классический объект JS, и затем с помощью
            // stringify в json формат

            postData("http://localhost:3000/requests", json) // отправляем форму на сервер
            .then(data => {
                console.log(data);    // если все ок, вывводим в консоль результат  
                showThanksModal(message.success); // запускаем функцию с сообщением что все успешно и
                // и закрываем модальное окно вместе с текстом и возвращением изначального контента
                statusMessage.remove(); // удаляем спиннер загрузки
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset(); // Очищаем форму
            });
        });
    }

    function showThanksModal(message) {
        const prewModalDialog = document.querySelector(".modal__dialog");

        prewModalDialog.classList.add("hide");
        openModal(); // Функция отвечающая за открытие модальных окон

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>x</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prewModalDialog.classList.add("show");
            prewModalDialog.classList.remove("hide");
            closeModal();
        }, 4000);
    }
}

module.exports = forms;