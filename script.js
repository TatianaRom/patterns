
// Функция для валидации ввода данных
function validate() {
    let result = false;
    const submit = document.querySelector(".form__button");
    const inputs = document.querySelectorAll('.form input');

    for (let i = 0;i < inputs.length; i++) {
        const input = inputs[i];
        const value = input.value;
        const minLength = input.getAttribute("minlength");
        const maxLength = input.getAttribute("maxlength");

        if (minLength && value.length < minLength || maxLength && value.length > maxLength) {
            input.nextElementSibling.textContent = `Поле должно содержать от ${ minLength } до ${ maxLength } символов!`;
            result = true;
            break;
        } else {
            if (input.name == "name") {
                input.nextElementSibling.textContent = "Имя в формате: Андрей, Анна-Мария";
            }
        }
        const pattern = new RegExp(input.pattern);
        if (!pattern.test(value)) {
            result = true;
            break;
        }
    }
    submit.disabled = result;
}
validate();