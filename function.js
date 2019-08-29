// var  = ['1', '+', '1']
function time() {
    var number1 = getfirstnumber();
    var number1 = getsecondnumber();
    var result = number(number1) * number(number2);
    sendResult(result);
}
function divide() {
    var number1 = getfirstnumber();
    var number1 = getsecondnumber();
    var result = number(number1) / number(number2);
    sendResult(result);
}
function plus() {
    var number1 = getfirstnumber();
    var number1 = getsecondnumber();
    var result = number(number1) + number(number2)
    sendResult(result);
}
function minus() {
    var number1 = getfirstnumber();
    var number1 = getsecondnumber();
    var result = number(number1) - number(number2)
    sendResult(result);
}
function sendResult(result_1) {
    var num = document.getElementById("result")
    num.innerHTML = result_1;
    }
function getFirstNumber() {
    var firstNumber = document.getElementById("thefirstnumber").value;
    return firstNumber;
    }
function getsecondNumber() {
    var secondnumber = document.getElementById("thesecondnumber").value;
    return secondNumber;
    }
// var functions[0] = 
// decide('+')

// square(2);