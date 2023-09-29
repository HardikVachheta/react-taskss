const button = document.getElementById('#button');
const canvas = document.getElementById('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click',()=>{
    jsConfetti.addConfetti()
})