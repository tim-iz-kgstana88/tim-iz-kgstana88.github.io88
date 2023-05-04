let colorOne = document.getElementById('color-1');
let colorTwo = document.getElementById('color-2');
let currentDirection = 'to-bottom';
let outPutCode = document.getElementById('code');
let submitBtn = document.getElementById('submit');

function setDirection(value, _this){
    let directions = document.querySelectorAll('.buttons button');
    for(let i of directions){
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currentDirection = value;
}
function generateCode(){
    document.getElementsByTagName('BODY')[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    outPutCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    
}
submitBtn.addEventListener('click',  generateCode);


generateCode();

