import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const localData = localStorage.getItem('feedback-form-state'); 

form.addEventListener('input', throttle(inStorage, 500));
pageReload();

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
     if ((email.value.length && message.value.length) < 1) {
         alert('You must write something');
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

function inStorage() {
    const data = {
            email: email.value,
            message: message.value
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function pageReload() {
    if (localData) {
        email.value = JSON.parse(localData).email;
        message.value = JSON.parse(localData).message;
    } else {
        email.value = '';
        message.value = '';
    }

}