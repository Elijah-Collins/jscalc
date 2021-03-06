// Global Variables

var num1 = "";
var num2 = "";
var operator;
var flag = false;
var display = document.getElementById("display");
var equalTo = false;
var opString = "";

// Calculator

function setValue(number){
    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        num1 += number;
        display.innerHTML = num1;
    }
    else{
        num2 += number;
        display.innerHTML += number;
    }
    if(num1.length > 10 || num2.length > 10){
        display.innerHTML = "Max number of digits reached.";
    }
}
function setOperators(number){
    operator = number;
    flag = true;
    if(operator === 4){
        display.innerHTML += " / ";
        opString = " / ";
    }
    else if(operator === 3){
        display.innerHTML += " * ";
        opString = " * ";
    }
    else if(operator === 2){
        display.innerHTML += " - ";
        opString = " - ";
    }
    else if(operator === 1){
        display.innerHTML += " + ";
        opString = " + ";
    }
    if(flag === true){
        display.innerHTML = num1 + opString;
        num2 = "";
    }
    if(flag === true && num1 === ""){
        clearButton();
    }
    if(equalTo === true){
        clearButton();
    }
}

function clearButton(){
    display.innerHTML = "";
    num1 = "";
    num2 = "";
    flag = false;
    equalTo = false;
}
function equalClick(){
    equalTo = true;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult = "";

    if(operator === 1){
        result = num1 + num2;
    }
    else if(operator === 2){
        result = num1 - num2;
    }
    else if(operator === 3){
        result = num1 * num2;
    }
    else{
        result = num1 / num2;
    }

    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    if(roundedResult === "Infinity"){
        display.innerHTML = "You cannot divide by zero.";
    }
    if(roundedResult === "NaN"){
        display.innerHTML = "This doesn't give a number.";
    }
}
function backspace(){
    var temp1 = "";
    var temp2 = "";

    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        temp1 = num1.substring(0, num1.length-1);
        num1 = temp1;
        display.innerHTML = num1;
    }
    else if(flag === true){
        display.innerHTML = num1;
        flag = false;
    }
    if(num2 != ""){
        temp2 = num2.substring(0, num2.length-1);
        num2 = temp2;
        flag = true;
        display.innerHTML = num1 + opString + num2;
    }
}
function setDecimal(){
    if(flag === false){
        if(num1 === ""){
            num1="0.";
            display.innerHTML=num1;
        }
        if(num1.indexOf(".") === -1){
            num1 += ".";
            display.innerHTML = num1l
        }
    }

    if(flag === true){
        if(num2 === ""){
            num2="0.";
            display.innerHTML += num2;
        }
        if(num2.indexOf(".") === -1){
            num2 += ".";
            display.innerHTML = num1 + opString + num2;
        }
    }
}
function clearEntry(){
    if(flag===false){
        clearButton();
    }else if(flag===true){
        num2 = "";
        display.innerHTML = num1 + opString;
    }
}
function xButton(){
    if(flag === false){
        num1 = 1/num1;
        display.innerHTML = num1;
        equalTo = true;
    }else if(flag===true){
        display.innerHTML = "Cannot do with two variables.";
    }
}
function powerButton(){
    if(flag===false){
        equalTo = true;
        num1=Math.pow(num1, 2);
        display.innerHTML = num1;
    }
}
function sqrtButton(){
    if(flag===false){
        num1=Math.sqrt(num1);
        display.innerHTML = num1;
        equalTo = true;
    }
}