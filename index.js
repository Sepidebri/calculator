const allButtons = document.querySelectorAll("button");
const disCalc = document.querySelector(".top");
const operators = document.querySelectorAll(".operator");
const root2 =document.querySelector(".root2");
let output = "";
disabled()
allButtons.forEach(button=>{
    button.addEventListener("click", ev => {
        if(button.classList.contains("operator")){
            disabled()
            handlerButton(button.innerText)
        }else if(button.classList.contains("operator1")){
            output = output.slice(0, -1)
            if (output == ["" , "*" , "/", "+", "-", ".", "^"]) {
                disabled()
            }
        }else if(button.classList.contains("root2")){
            output = Math.sqrt(output);
        }else if(button.classList.contains("pow")){
            output = Math.pow(output, 2);
        }
        else if(button.classList.contains("operator2")){
            output = "";
        }else if((button.classList.contains("root2"))){
            handlerButton(button.innerText)
            disabled()
        }else{
            output += button.innerText
            enabled()
        }

        disCalc.innerText = output
    })
})
function disabled(){
    operators.forEach( operator => {
        operator.disabled  = true; 
    });
}  
function enabled(){
    operators.forEach( operator => {
        operator.disabled  = false; 
    });
}
function handlerButton(operator){
    switch (operator) {
        case "×":
            output += "\52"
            break;
        case "÷":output += "\57"
            break;
        // case "√":    
        //         output += Math.sqrt(output);
        // break;
        // case "^":
        //     output += Math.pow(output);
        // break;
        case "=" : output = eval(output)
        enabled()
        break;
        default:
            output += operator
            break;
    }
}       
