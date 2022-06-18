const allButtons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator')
const display = document.querySelector('.calc-display');
let output = ''
disabled()
allButtons.forEach(button => {
    button.addEventListener('click', ev => {
        if(button.classList.contains('operator')){
            disabled()
            opHandler(button.innerText)
        }
        else{
            output += button.innerText
            enable()
        }
        display.innerText = output
    })
});

function disabled() {
    operators.forEach(op => {
        op.disabled = true
    });
}
function enable() {
    operators.forEach(op => {
        op.disabled = false
    });
}
function opHandler(op){
    switch (op) {
        case '\367': output += '/'
            break;
        case '\327': output += '*'
            break;
        case '=' : 
            output = eval(output)
            enable()
            break;
        default: output += op
            break;
    }
}