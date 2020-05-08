const colorBtn = document.querySelector('.colorBtn');
const colorRdn = document.querySelector('.colorRdn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'res', 'green', '#3b5998'];

colorBtn.addEventListener('click', changeColor);

function changeColor () {
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}


colorRdn.addEventListener('click', drawColor);

function drawColor () {
    let draw1 = Math.floor(Math.random() * 160);
    let draw2 = Math.floor(Math.random() * 160);
    let draw3 = Math.floor(Math.random() * 160);

    let arr = ['#', draw1, draw2, draw3, 1];
    let rndColors = arr.join('');

    bodyBcg.style.backgroundColor = rndColors;
}
    
