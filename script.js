const enterButton = document.querySelector('#button-login');
const getInput = document.getElementById('user-email-phone');

const alertExhibit = () => alert(getInput.value);

enterButton.addEventListener('click', alertExhibit);
