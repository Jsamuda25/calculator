let display = document.getElementById("display-input");
//let allclear = document.getElementById("allclear");
//let multiplication = document.getElementById("*");
let operatorButton = document.querySelectorAll("operator");
let buttonz = Array.from(document.getElementsByClassName("buttons"));
let display_value;
let str;
let operation;
let count = 0;

function add(a,b) {
    let sum = a + b;
    return sum;
};

function subtract(a,b) {
    let difference = a - b;
    return difference;
};

function multiply(a,b) {
    let product = a*b;
    return product;
};

function power(a,b) {
    let exponent = a**b;
    return exponent;
}

function divide(a,b) {
    let quotient = a/b;
    return quotient;
};


function modulo(a,b) {
    let remainder = a%b;
    return remainder;
};


function operate(a,b, operator){
    if(operator === "+"){
        return add(a,b);
    }

    else if(operator === "*"){
        return multiply(a,b);
    }

    else if(operator ==="^"){
        return power(a,b);
    }

    else if(operator ==="%"){
        return modulo(a,b);
    }

    else if(operator ==="-"){
        return subtract(a,b);
    }

    else if(operator ==="/"){
        return divide(a,b);
    }

    else{

    }
}


buttonz.map(buttons => {
    buttons.addEventListener('click',(e) =>{
        console.log("clicked");
    
        let text = e.target.innerText;

        display_value = display.innerHTML;
        let size = display_value.length;
        let lastChar = display_value.charAt(size-1);
        let current_text = display.textContent;

        if(text === "C"){
            clearIt()


        }

        else if(text ==="AC"){
            clearAll();
            count = 0;
        }

        else if(text ==="="){

            if (lastChar === "." || lastChar === "-"|| lastChar === "+" || lastChar === "^" || lastChar === "*" || lastChar === "÷" || lastChar === "%"){
                alert("Error!");
                count = count -1;
            }

            else if(!(current_text.includes("+") || current_text.includes("%") || current_text.includes("^") || current_text.includes("-") || current_text.includes("*") || current_text.includes("÷"))){
                display.innerHTML = display.textContent;
            }

            else if (!(lastChar === "." || lastChar === "-"|| lastChar === "+" || lastChar === "^" || lastChar === "*" || lastChar === "÷" || lastChar === "%")){
                let x =  equalSign(display.textContent);
                display.innerHTML = x;
                count = 0;
            }
        }

        else if(text === "." || text === "-"|| text  === "+" || text === "^" || text === "*" || text === "÷"  || text === "%"){
            if(!(lastChar === "." || lastChar === "-"|| lastChar === "+" || lastChar === "^" || lastChar === "*" || lastChar === "÷" || lastChar === "%")){
                if(text ==="."){
                    display.innerHTML = display.textContent + text;
                }

                else if(display.innerHTML.length < 0 && text ==="-"){
                    display.innerHTML = (display.textContent + text);
                }
                else if(display.innerHTML.length > 0){
                    display.innerHTML = (display.textContent + text);
                       
                    display_value = display.innerHTML;
                    console.log(display_value);
                }

                else{

                }
            }
        }

        else{
            display.innerHTML = (display.textContent + text);
               
            display_value = display.innerHTML;
            console.log(display_value);
        }

        /*
        
        if(text === "=" && !(lastChar === "." || lastChar === "-"|| lastChar === "+" || lastChar === "^" || lastChar === "*" || lastChar === "÷" || lastChar === "%")){
            let outcome = equalSign(display.textContent);
            display.innerHTML(outcome);
        }
        */


        if((text === "-"|| text  === "+" || text === "^" || text === "*" || text === "÷"  || text === "%") && !(text ==="=")){
            if(!(lastChar === "-"|| lastChar === "+" || lastChar === "^" || lastChar === "*" || lastChar === "÷" || lastChar === "%")){
                if(display.innerHTML.length > 0){
                    count = count + 1;
                    if (count ===2){
                        console.log(display.innerText.slice(0,-1) + " Yea");
                        let y = findCorrect(display.innerText.slice(0,-1));
                        count = 1;
                        display.innerHTML = (y + text);
                       
                        display_value = display.innerHTML;
                        
                       
                    }
                }
            }
        }
    });
});


function findCorrect(equation){


    let result; 
    let conversion = equation;

    if(equation.charAt() === "-"){
        conversion = conversion.substring(1);
    }

    else{
        conversion = equation;
    }
    

   
    
    if (conversion.includes("+")){
        let x = equation.indexOf("+");
        let first_operand = equation.substring(0,x);
        let second_operand = equation.substring(x+1);
        result = operate(Number(first_operand), Number(second_operand), "+");
    }

    else if (conversion.includes("-")){
        let x = equation.indexOf("-");
        let first_operand = equation.substring(0,x);
        let second_operand = equation.substring(x+1);
        result =  operate(Number(first_operand), Number(second_operand), "-");
    }


    else if (conversion.includes("%")){
        let x = equation.indexOf("%");
        let first_operand = equation.substring(0,x);
        let second_operand = equation.substring(x+1);
        result =  operate(Number(first_operand), Number(second_operand), "%");
    }

    else if (conversion.includes("^")){
        let x = equation.indexOf("^");
        let first_operand = equation.substring(0,x);
        let second_operand = equation.substring(x+1);
        result = operate(Number(first_operand), Number(second_operand), "^");
    }

    else if (conversion.includes("÷")){
        let x = equation.indexOf("÷");
        let first_operand = equation.substring(0,x);
        let second_operand = equation.substring(x+1);
        result = operate(Number(first_operand), Number(second_operand), "/");
    }

    else if (conversion.includes("*")){
        let x = equation.indexOf("*");
        let first_operand = equation.substring(0,x);
        let second_operand = equation.substring(x+1);
        result = operate(Number(first_operand), Number(second_operand), "*");
    }

    else{

    }

    return result;
}




function clearAll(){
    display.innerHTML = '';
    display_value = display.innerHTML;
    console.log(display_value);
}

function clearIt(){
    str = display.textContent;

    display_value = display.innerHTML;
    let size = display_value.length;
    let lastChar = display_value.charAt(size-1);

    if(lastChar === "-"|| lastChar === "+" || lastChar === "^" || lastChar === "*" || lastChar === "÷" || lastChar === "%"){
        count = count -1 ;
    }
    result = str.slice(0,-1);
    display.innerHTML = result;
    display_value = display.innerHTML;
    console.log(display_value);
}

function equalSign(equation){
    return findCorrect(equation);
}
