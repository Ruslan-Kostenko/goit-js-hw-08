import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const formState = JSON.parse(localStorage.getItem('feedback-form-state')) ?? { email: '', message: '' };

inputEl.value = formState.email;
textareaEl.value = formState.message;

inputEl.addEventListener('input', () => {
    const emailValue = inputEl.value;
    formState.email = emailValue;
});

textareaEl.addEventListener('input', () => {
    const messageValue = textareaEl.value;
    formState.message = messageValue;
});

formEl.addEventListener('input', throttle(() => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500));

formEl.addEventListener('submit', event => {
    if(inputEl.value !== '' && textareaEl.value !== '') {
        event.preventDefault();
        console.log('Form data:', formState);
        localStorage.removeItem('feedback-form-state');
        formState.email = '';
        formState.message = '';
        inputEl.value = '';
        textareaEl.value = '';
    } else{alert('Заповніть поля форми!');}
});