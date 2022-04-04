const btnCalculate = document.querySelector('#btnCalculate');
btnCalculate.addEventListener ('click', calculateBMR);
function calculateBMR(e) {
e.preventDefault();
const age = document.querySelector('#age').value;
const height = document.querySelector('#height').value;
const weight = document.querySelector('#weight').value;
const activity = document.querySelector('#activity').value;

if (age ==='' || age <= 0 || height ==='' || height <= 0 || weight ==='' || weight <= 0) {
Swal.fire({
icon: 'error',
iconColor: '#142F43',
title: 'Please enter your information!',
confirmButtonColor: '#142F43',
})

return false;
}

if(document.querySelector('#female').checked) {
let sumFemale = ((10 * +weight) + (6.25 * +height) - (5 * +age) - 161) * activity;
sumFemale = sumFemale.toFixed(2);
document.querySelector('#showResult').textContent = sumFemale;
}

else if(document.querySelector('#male').checked) {
let sumMale = ((10 * +weight) + (6.25 * +height) - (5 * +age) + 5) * activity;
sumMale = sumMale.toFixed(2);
document.querySelector('#showResult').textContent = sumMale;
}

}