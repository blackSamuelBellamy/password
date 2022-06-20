const password1 = '911';
const password2 = '714';

const inputPass1 = document.getElementById('inputPass1');
const inputPass2 = document.getElementById('inputPass2');
const inputPass3 = document.getElementById('inputPass3');
const verificar = document.querySelector('.verificar');

const inputBox = document.querySelector('.inputBox');
const error = document.querySelector('.error');

const entendido = document.querySelector('.entendido');
const validationAnimation = document.querySelector('.validationAnimation');
const message = document.querySelector('.message');
const validationResult = document.querySelector('.validationResult');

let sumatoria;


const desfase = () => {
    setTimeout(() =>{
                
        message.style.display = 'none';
        message.style.opacity = '0';
        inputBox.style.display = 'flex';
    }, 5000)    
}

const errorWindow = () =>{
    error.style.top = '50%';
    inputBox.style.opacity = '0';
    verificar.style.display = 'none';
    error.style.opacity = '1';
}

entendido.addEventListener('click', ()=> {
    verificar.style.display = 'block';
    inputBox.style.opacity = '1';
    error.style.opacity = '0';
    error.style.top = '-100%';
})

verificar.addEventListener('click', ()=>{
    sumatoria= inputPass1.value + inputPass2.value + inputPass3.value;

    if(inputPass1.value == '' || inputPass2.value == '' || inputPass3.value == '') {
        console.log('todos los numeros deben tener un código');
        errorWindow();
    } else {

        inputBox.style.display = 'none';
        validationAnimation.style.display = 'flex';
        validationAnimation.style.opacity = '.8';

        setTimeout(() =>{
            
            validationAnimation.style.display = 'none';
            validationAnimation.style.opacity = '0';

            if(sumatoria == password1) {
                validationResult.textContent = `Felicidades! password1 es correcta!!`;
                message.style.display = 'flex';
                message.style.opacity = '1';
                desfase();
            }
            else if(sumatoria == password2){
                validationResult.textContent = `Felicidades! password2 es correcta!!`;
                message.style.display = 'flex';
                message.style.opacity = '1';
                desfase();
            }
            else {
                validationResult.textContent = `No acertaste a ninguna de nuestras dos claves, 
                sigue intentando.`;
                message.style.display = 'flex';
                message.style.opacity = '1';
                desfase();
    
            }


        }, 8000)

        
        
    }   
})
