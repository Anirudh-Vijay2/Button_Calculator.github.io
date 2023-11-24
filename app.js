let numbersBtn = document.querySelectorAll('.numbers') || []
let displayOne = document.querySelector('.display-one')
let displayTwo = document.querySelector('.display-two')
let secondDisplay = false
let operator = ''
let firstValue = ''
let secondValue =''
let answer;
console.log(numbersBtn)

numbersBtn.forEach((btn)=>{
    // console.log(btn.value)
    btn.addEventListener('click', ()=>{
        console.log(btn.value)
        if(secondDisplay == false){
            displayOne.value += btn.value;
        }
        else if(secondDisplay == true){
            displayTwo.value += btn.value;
        }
        else{
            alert("Some error occured")
        };
    });
});

document.querySelector(".backspace").addEventListener('click', ()=>{
    if(secondDisplay == false){
        displayOne.value = displayOne.value.slice(0, -1);
    }
    else if(secondDisplay == true){
        displayTwo.value = displayOne.value.slice(0, -1);
    }
});

document.querySelector('.AllClear').addEventListener('click', ()=>{
    displayOne.value = "";
    displayTwo.value="";
    secondDisplay = false
    displayOne.style.display='block';
    displayTwo.style.display='none';
    operator = "";
    firstValue=""
    secondValue=""
    answer=""
});

let operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach((OpBtn)=>{
    OpBtn.addEventListener('click', ()=>{
        operator = OpBtn.value;
        displayOne.style.display='none';
        displayTwo.style.display='block';
        secondDisplay = true;
    });
});

document.querySelector('.equal').addEventListener('click', ()=>{
 if(displayOne.value != "" && displayTwo.value != ""){
    firstValue = parseFloat(displayOne.value);
    secondValue = parseFloat(displayTwo.value);
    console.log(parseInt(firstValue), secondValue)
    if(operator == "+"){
        answer = firstValue + secondValue
        displayTwo.value = answer
    }
    else if(operator == "-"){
        answer = firstValue - secondValue
        displayTwo.value = answer
    }
    else if(operator == "*"){
        answer = firstValue * secondValue
        displayTwo.value = answer
    }
    else if(operator == "/"){
        answer = firstValue / secondValue
        displayTwo.value = answer
    }
    else if(operator == "%"){
        answer = firstValue % secondValue
        displayTwo.value = answer
    };
}
 else{
    alert("First Enter a Value")
 }
});