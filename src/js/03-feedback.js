import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener('onput', throttle(inStorage, 500));

const dataLocal = localStorage.getItem('feedback-form-state');
PageReload();

form.addEventListener('submit', onSubmit);

function inStorage() {
    const data = {
        email: email.value,
        message:message.value
    }
    localStorage.setItem('feedback-from-state', JSON.stringify(data));
}

function onSubmit(event) {
    event.preventDefault();
    if ((email.value.length && message.value.length) < 1) {
        alert('All fields must be filled');
    } else {
        const data = {
            email: email.value,
            message: message.value
        }
        console.log(data);
        event.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
    }
}

function PageReload() {
    if (dataLocal) {
        email.value = JSON.parse(dataLocal).email;
        message.value = JSON.parse(dataLocal).message;
    } else {
        email.value = '';
        message.value = '';
    }
}