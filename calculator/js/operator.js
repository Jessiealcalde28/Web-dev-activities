function sum() {
  const display1 = document.getElementById('display1').value;
  const display2 = document.getElementById('display2').value;
  const operator = document.getElementById('operator').value;

  if (display2 !== "") {
    let answer;
    if (operator === "+") {
      answer = Number(display2) + Number(display1);
    } else if (operator === "-") {
      answer = Number(display2) - Number(display1);
    } else if (operator === "*") {
      answer = Number(display2) * Number(display1);
    } else if (operator === "/") {
      answer = Number(display2) / Number(display1);
    }
    document.getElementById('display2').value = answer;
    document.getElementById('display1').value = "0";
  } else {
    document.getElementById('display1').value = "0";
    document.getElementById('display2').value = display1;
  }
  document.getElementById('operator').value = "+";
}

function sub() {
  const display1 = document.getElementById('display1').value;
  const display2 = document.getElementById('display2').value;
  const operator = document.getElementById('operator').value;

  if (display2 !== "") {
    let answer;
    if (operator === "+") {
      answer = Number(display2) + Number(display1);
    } else if (operator === "-") {
      answer = Number(display2) - Number(display1);
    } else if (operator === "*") {
      answer = Number(display2) * Number(display1);
    } else if (operator === "/") {
      answer = Number(display2) / Number(display1);
    }
    document.getElementById('display2').value = answer;
    document.getElementById('display1').value = "0";
  } else {
    document.getElementById('display1').value = "0";
    document.getElementById('display2').value = display1;
  }
  document.getElementById('operator').value = "-";
}

function mul() {
  const display1 = document.getElementById('display1').value;
  const display2 = document.getElementById('display2').value;
  const operator = document.getElementById('operator').value;

  if (display2 !== "") {
    let answer;
    if (operator === "+") {
      answer = Number(display2) + Number(display1);
    } else if (operator === "-") {
      answer = Number(display2) - Number(display1);
    } else if (operator === "*") {
      answer = Number(display2) * Number(display1);
    } else if (operator === "/") {
      answer = Number(display2) / Number(display1);
    }
    document.getElementById('display2').value = answer;
    document.getElementById('display1').value = "0";
  } else {
    document.getElementById('display1').value = "0";
    document.getElementById('display2').value = display1;
  }
  document.getElementById('operator').value = "*";
}

function div() {
  const display1 = document.getElementById('display1').value;
  const display2 = document.getElementById('display2').value;
  const operator = document.getElementById('operator').value;

  if (display2 !== "") {
    let answer;
    if (operator === "+") {
      answer = Number(display2) + Number(display1);
    } else if (operator === "-") {
      answer = Number(display2) - Number(display1);
    } else if (operator === "*") {
      answer = Number(display2) * Number(display1);
    } else if (operator === "/") {
      answer = Number(display2) / Number(display1);
    }
    document.getElementById('display2').value = answer;
    document.getElementById('display1').value = "0";
  } else {
    document.getElementById('display1').value = "0";
    document.getElementById('display2').value = display1;
  }
  document.getElementById('operator').value = "/";
}

function equals() {
  const num = document.getElementById('display1').value;
  const num2 = document.getElementById('display2').value;
  const operator = document.getElementById('operator').value;
  let answer;

  if (operator === "+") {
    answer = Number(num2) + Number(num);
  } else if (operator === "-") {
    answer = Number(num2) - Number(num);
  } else if (operator === "*") {
    answer = Number(num2) * Number(num);
  } else if (operator === "/") {
    answer = Number(num2) / Number(num);
  }

  document.getElementById('display1').value = answer;
  document.getElementById('display2').value = "";
  document.getElementById('operator').value = "";
}

function clearAll() {
  document.getElementById('display1').value = "0";
  document.getElementById('display2').value = "";
  document.getElementById('operator').value = "";
}
