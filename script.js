const subscribeForm = document.getElementById('subscribe-form');
const input = subscribeForm.querySelector('.form-input');
const errorMessageElement = document.getElementById('error-message');
const subscriptionEmail = document.getElementById('email-for-subscribe');

const newsletterContainer = document.querySelector('.newsletter');
const successMessageContainer = document.querySelector('.success-message');

const dismissBtn = successMessageContainer.querySelector('.dismiss-message-btn');

const handleSubmit = (e) => {
  e.preventDefault();

  const email = input.value;

  const errorMessage = validateEmail(email);

  if (errorMessage){
    errorMessageElement.innerText = errorMessage;
    input.classList.add('error-state', 'error-text');
  } else {
    newsletterContainer.style.display = 'none';
    successMessageContainer.style.display = 'flex';
    subscriptionEmail.innerText = email;
  }
};

const validateEmail = (email) => {
  if (!email) return 'Email is required';

  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return 'Valid email required';
  }

  return '';
};

const handleDismissBtn = (e) => {
  e.preventDefault();
  newsletterContainer.style.display = 'flex';
  successMessageContainer.style.display = 'none';
  input.value = '';
  errorMessageElement.innerText = '';
    input.classList.remove('error-state', 'error-text');
};

subscribeForm.addEventListener('submit', handleSubmit);

dismissBtn.addEventListener('click', handleDismissBtn);