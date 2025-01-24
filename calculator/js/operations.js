function sum() {
     const display1 = document.getElementById('display').value;
     const display2 = document.getElementById('display2').value;
     const operator = document.getElementById('operator').value;

     if(display2 !== ""){
        let answer;
        if(operator == "+") {
            answer = Number(display1) + Number(display2);
        } 
 
        document.getElementById('display2').value = answer;
        document.getElementById('display1').value = "0";
     }

     else {
        document.getElementById('display1').value = "0";
        document.getElementById('display2').value = display1;
     }

     document.getElementById('operator').value = "+";
}

function sub() {
   document.getElementById('operator').value = '-';
   const display1 = document.getElementById('display1').value;
     

     if (display1 !=="0"){
    document.getElementById('display2').value= display1;
    document.getElementById('display1').value = "0";
     }
}
function mul() {
   document.getElementById('operator').value = '*';
   const display1 = document.getElementById('display1').value;
     

     if (display1 !=="0"){
    document.getElementById('display2').value= display1;
    document.getElementById('display1').value = "0";
     }
}
function div() {
    document.getElementById('operator').value = '/';
    const display1 = document.getElementById('display1').value;
     

     if (display1 !=="0"){
    document.getElementById('display2').value= display1;
    document.getElementById('display1').value = "0";
     }
}
function dot() {
    const num = document.getElementById('display1').value;
    const newNum = num + '.';
    document.getElementById('display1').value = newNum;
    
}

function equals() {
    const num = document.getElementById('display1').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    let answer;

    if(operator == "+"){
        answer = Number(num) + Number(num2);
    }
    else if(operator == "-") {
        answer = Number(num) - Number(num2);
    }
    else if(operator == "*") {
        answer = Number(num) * Number(num2);
    }
    else if(operator == "/") {
        answer = Number(num) / Number(num2);
    }

    document.getElementById('display1').value = answer;
    document.getElementById('display2').value = "0";
    document.getElementById('operator').value = "";

}


    