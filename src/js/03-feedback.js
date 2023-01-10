import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));
const formData = JSON.parse( localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};

populateForm();

function onInput(evt) {
    formData [evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    

   const { email, message } = evt.target.elements;
      
     if ((email.value === '') || (message.value === '')) {
         return alert('Please fill in all the fields!');
     }
    
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsFormData = JSON.parse(savedFormData);
    console.log("send", parsFormData);
   
    localStorage.removeItem(STORAGE_KEY);
    evt.target.reset();
};

function populateForm() {
    const savedFormData1 = localStorage.getItem(STORAGE_KEY);
    const parsFormData1 = JSON.parse(savedFormData1);
    console.log(parsFormData1);

    if (parsFormData1) {
        input.value = parsFormData1.email ||'';
        textarea.value = parsFormData1.message ||'';
    }
}