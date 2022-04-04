const tl = new TimelineMax()

tl.from('#myVideo', 1, {
    delay: 1,
    opacity: 0,
    y: '100%'
})

tl.from('#head', 1.5, {
    opacity: 0,
    y: -50
})

tl.from('#title', 1.5, {
    opacity: 0,
    x: 100,
    ease: "power2.out"
})

gsap.from('#main', 2, {
    delay: 2, 
    opacity: 0,
    y:100
}) 



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
