// getting form
const formCardDetails = document.forms.card_details;
// getting form inputs 
const cardholderName = formCardDetails.cardholder_name;
const cardNumber = formCardDetails.card_number;
const cardMonth = formCardDetails.card_month;
const cardYear = formCardDetails.card_year;
const cardCvc = formCardDetails.card_cvc;
const btnConfirm = formCardDetails.btn_confirm;
//getting placeholders inputs
const placeholderCardholderName = cardholderName.placeholder;
const placeholderCardNumber = cardNumber.placeholder;
const placeholderCardMonth = cardMonth.placeholder;
const placeholderCardYear = cardYear.placeholder;
const placeholderCardCvc = cardCvc.placeholder;
// mask input
const maskCardholderName = /^[a-zA-Z]+\s[a-zA-Z]+$/;
const maskCardNumber = /^(?:1[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
const regExCardholderName = /^\D+$/;
const regExCardNumber = /^[\d]+$/;
const regExCardMonth = /^\d{1,2}$/;
const regExCardYear = /^[\d]{2}$/;
const regExCardCvc = /^[\d]{3}$/;
// error text
const textErrorCardholderName = document.querySelector('.error-cardholder_name');
const textErrorCardNumber = document.querySelector('.error-card_number');
const textErrorCardMonth = document.querySelector('.error-card_month');
const textErrorCardYear = document.querySelector('.error-card_year');
const textErrorCardCvc = document.querySelector('.error-card_cvc');
// displaying card data
cardholderName.addEventListener('input', () => {
  const imgCardholderName = document.querySelector('.card-front__name-text');
  if(regExCardholderName.test(cardholderName.value)) {
    imgCardholderName.textContent = cardholderName.value;
  }
  if(!regExCardholderName.test(cardholderName.value)) {
    imgCardholderName.textContent = ``;
  }
  if (cardholderName.value === ''){
    imgCardholderName.textContent = `name surname`;
  }
});
cardNumber.addEventListener('input', () => {
  const imgCardNumber = document.querySelector('.card-front__card-number');
  const arrayCardNumber = Array.from(cardNumber.value);
  arrayCardNumber.splice(4,0," ");
  arrayCardNumber.splice(9,0," ");
  arrayCardNumber.splice(14,0," ");
  delete arrayCardNumber[19];
  imgCardNumber.textContent = arrayCardNumber.join('');
  if(cardNumber.value === ''){
    imgCardNumber.textContent = `0000 0000 0000 0000`;
  }
});
cardMonth.addEventListener('input', () => {
  const imgCardMonth = document.querySelector('.card-front__month');
  imgCardMonth.textContent = cardMonth.value;
  if(cardMonth.value.length > 2) {
    const deleteValue = cardMonth.value.substring(0, cardMonth.value.length - 1);
    imgCardMonth.textContent = deleteValue;
  }
  if(cardMonth.value === ''){
    imgCardMonth.textContent = `00`;
  }
});
cardYear.addEventListener('input', () => {
  const imgCardYear = document.querySelector('.card-front__year');
  imgCardYear.textContent = cardYear.value;
  if(cardYear.value.length > 2) {
    const deleteValue = cardYear.value.substring(0, cardYear.value.length - 1);
    imgCardYear.textContent = deleteValue;
  }
  if(cardYear.value === ''){
    imgCardYear.textContent = `00`;
  }
});
cardCvc.addEventListener('input', () => {
  const imgCardCvc = document.querySelector('.card-back__cvc');
  imgCardCvc.textContent = cardCvc.value;
  if(cardCvc.value.length > 3) {
    const deleteValue = cardCvc.value.substring(0, cardCvc.value.length - 1);
    imgCardCvc.textContent = deleteValue;
  }
  if (cardCvc.value === ''){
    imgCardCvc.textContent = `000`;
  }
});
// hiding placeholders
cardholderName.addEventListener('focus', () => {
  cardholderName.placeholder = '';
});
cardholderName.addEventListener('blur', () => {
  cardholderName.placeholder = placeholderCardholderName;
});
cardNumber.addEventListener('focus', () => {
  cardNumber.placeholder = '';
});
cardNumber.addEventListener('blur', () => {
  cardNumber.placeholder = placeholderCardNumber;
});
cardMonth.addEventListener('focus', () => {
  cardMonth.placeholder = '';
});
cardMonth.addEventListener('blur', () => {
  cardMonth.placeholder = placeholderCardMonth;
});
cardYear.addEventListener('focus', () => {
  cardYear.placeholder = '';
});
cardYear.addEventListener('blur', () => {
  cardYear.placeholder = placeholderCardYear;
});
cardCvc.addEventListener('focus', () => {
  cardCvc.placeholder = '';
});
cardCvc.addEventListener('blur', () => {
  cardCvc.placeholder = placeholderCardCvc;
});
// check cardholderName
cardholderName.addEventListener('input', () => {
  if(!regExCardholderName.test(cardholderName.value)) {
    cardholderName.classList.add('error-active');
    textErrorCardholderName.textContent = `Only english`;
  }
  if(cardholderName.value === '' || maskCardholderName.test(cardholderName.value)){
    cardholderName.classList.remove('error-active');
    textErrorCardholderName.textContent = ``;
  }
});
// check cardNumber
cardNumber.addEventListener('input', () => {
  if(cardNumber.value.length > 16) {
    const deleteValue = cardNumber.value.substring(0, cardNumber.value.length - 1);
    cardNumber.value = deleteValue;
  }
  if(!regExCardNumber.test(cardNumber.value)) {
    cardNumber.classList.add('error-active');
    textErrorCardNumber.textContent = `Only number`;
  }
  if(cardNumber.value === '' || maskCardNumber.test(cardNumber.value)){
    cardNumber.classList.remove('error-active');
    textErrorCardNumber.textContent = ``;
  }
});
// check cardMonth
cardMonth.addEventListener('input', () => {
  if(cardMonth.value.length > 2) {
    const deleteValue = cardMonth.value.substring(0, cardMonth.value.length - 1);
    cardMonth.value = deleteValue;
  }
  if(!regExCardMonth.test(cardMonth.value) || !cardMonth.validity.valid){
    cardMonth.classList.add('error-active');
    textErrorCardMonth.textContent = `Non-existent month`;
  }
  if(cardMonth.value === '' || cardMonth.validity.valid) {
    cardMonth.classList.remove('error-active');
    textErrorCardMonth.textContent = ``;
  }
});
// check cardYear
cardYear.addEventListener('input', () => {
  if(cardYear.value.length > 2) {
    const deleteValue = cardYear.value.substring(0, cardYear.value.length - 1);
    cardYear.value = deleteValue;
  }
  if(!cardYear.validity.valid) {
    cardYear.classList.add('error-active');
    textErrorCardYear.textContent = `Non-existent year`;
  }
  if(cardYear.value === '' || cardYear.validity.valid) {
    cardYear.classList.remove('error-active');
    textErrorCardYear.textContent = ``;
  }
});
// check cardCvc
cardCvc.addEventListener('input', () => {
  if(cardCvc.value.length > 3) {
    const deleteValue = cardCvc.value.substring(0, cardCvc.value.length - 1);
    cardCvc.value = deleteValue;
  }
  if(!cardCvc.validity.valid) {
    cardCvc.classList.add('error-active');
    textErrorCardCvc.textContent = `Non-existent cvc`;
  }
  if(cardCvc.value === '' || cardCvc.validity.valid) {
    cardCvc.classList.remove('error-active');
    textErrorCardCvc.textContent = ``;
  }
});
// sending form
btnConfirm.addEventListener('click', (event) => {
  if(!maskCardholderName.test(cardholderName.value)) {
    cardholderName.classList.add('error-active');
    textErrorCardholderName.textContent = `Invalid format`;
  } 
  if(!maskCardNumber.test(cardNumber.value)) {
    cardNumber.classList.add('error-active');
    textErrorCardNumber.textContent = `Invalid format`;
  }
  if(!regExCardMonth.test(cardMonth.value) || !cardMonth.validity.valid) {
    cardMonth.classList.add('error-active');
    textErrorCardMonth.textContent = `Non-existent month`;
  }
  if(!regExCardYear.test(cardYear.value) || !cardYear.validity.valid) {
    cardYear.classList.add('error-active');
    textErrorCardYear.textContent = `Non-existent year`;
  }
  if(!regExCardCvc.test(cardCvc.value) || !cardCvc.validity.valid){
    cardCvc.classList.add('error-active');
    textErrorCardCvc.textContent = `Non-existent cvc`;
  }
  if(maskCardholderName.test(cardholderName.value) && maskCardNumber.test(cardNumber.value) && regExCardMonth.test(cardMonth.value) && cardMonth.validity.valid && regExCardYear.test(cardYear.value) && cardYear.validity.valid && regExCardCvc.test(cardCvc.value) && cardCvc.validity.valid) {
    formCardDetails.classList.add('inactive');
    const activeSuccess = document.querySelector('.success');
    activeSuccess.classList.add('active')
  }
});