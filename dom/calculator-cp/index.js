//handle when the number is pressed. It renders the number into #input element

let angka = "";
let hasil = "";
let operators = "";

function number(number) {
    // TODO: answer here
    hasil += number;
    document.getElementById("input").setAttribute("value", hasil)
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    // TODO: answer here
    if(operator === "."){
        hasil += "" + operator;
        document.getElementById("input").setAttribute("value", hasil)
    }
    if(operator === "+" || operator === "-" || operator === "*" || operator === "/"){
        operators = operator
        angka += operator;
        hasil += angka;
    }else if(operator === "Del"){
        let temp = hasil.slice(0, hasil.length-1);
        hasil = temp;
    }else if(operator === "AC"){
        hasil = "";
    }
    document.getElementById("input").setAttribute("value", hasil)
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    let ops = hasil.split(operators);
    if(operators === "+"){
        hasil = parseFloat(ops[0]) + parseFloat(ops[1]);
    }else if(operators === "-"){
        hasil = parseFloat(ops[0]) - parseFloat(ops[1]);
    }else if(operators === "*"){
        hasil = parseFloat(ops[0]) * parseFloat(ops[1]);
    }else if(operators === "/"){
        hasil = parseFloat(ops[0]) / parseFloat(ops[1]);
    }

    document.getElementById("input").setAttribute("value", hasil)
}