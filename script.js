const colorBtn = document.querySelector('.colorBtn');
const colorRdn = document.querySelector('.colorRdn');
const bodyBcg = document.querySelector('body');
const switchBox = document.querySelector('.switch-box');
const switchBtn = document.querySelector('.switch');
const colorName = document.querySelector('.colorName');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


const colors = ['yellow', 'red', 'green', '#3b5998'];

switchBtn.addEventListener('click', () => {
    if (switchBtn.getAttribute('class') == 'switch rgb') {
        switchBtn.setAttribute('class', 'switch hex')
    } else {
        switchBtn.setAttribute('class', 'switch rgb')
    }
})


colorBtn.addEventListener('click', changeColor);

function changeColor () {
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];
    
    colorName.textContent = colors[random];
}


colorRdn.addEventListener('click', drawColor);
    


    function drawColor () {

        if (switchBtn.classList.contains('rgb')) {
            let arr = ['rgb(',1,')'];
            let number = [];
            
            for (let i = 0; i < 3; i++) {
                
                let draw = Math.floor(Math.random() * 160);
                
                number.push(draw);
            
                arr.splice(1,1,number);

            }
            let arr1 = arr.join('');
            console.log(arr);
            bodyBcg.style.backgroundColor = arr1;
            
            arr = ['rgb(',1,')'];
            
            number = [];


            colorName.textContent = arr1;

        } else if (switchBtn.classList.contains('hex')) {
            let hexColor = '#';
            for (let i = 0; i < 6; i++) {
                let randomNumber = Math.floor(Math.random() * hex.length)
                hexColor += hex[randomNumber]
            }
            colorName.textContent = hexColor;
            bodyBcg.style.backgroundColor = hexColor;
        }
        }





/* switchBtn.addEventListener('click', () => {
    if (switchBtn.classList.contains('rgb')) {
        switchBtn.classList.remove('rgb');
        switchBtn.classList.add('hex');
    } else if (switchBtn.classList.contains('hex')) {
        switchBtn.classList.remove('hex');
        switchBtn.classList.add('rgb');
    }
}) */