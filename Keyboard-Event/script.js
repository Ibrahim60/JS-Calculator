window.addEventListener('keypress',checkKey);
var isFirst = true;
function checkKey(key){
    console.log(key.keyCode);
    var num,digit,digit1,digit2 = 0;
    var oper= " ";
    num = parseInt(key.keyCode);
    if(isFirst === true){
        digit1 = oprend(num, digit);
        console.log("isFirst if true "+digit1);
    }else if(isFirst === false){
        digit2 = oprend(num, digit);
        console.log("isFirst if false "+digit2);
    }else if(digit1 != 0){
        oper = operator(num);
    }else if (digit1 != 0 && digit2 != 0 && oper != " "){
        calculation(oper,digit1,digit1);
        console.log(`Calculation oper${oper} digit1${digit1} digit2${digit2}`);
    } 
}

function oprend(num,digit) {
    switch (num.keyCode) {
        case 48:
            digit = 0;
            console.log(digit);
            break;
        case 49:
            digit = 1;
            break;
        case 50:
            digit = 2;
            break;
        case 51:
            digit = 3;
            break;
        case 52:
            digit = 4;
            break;
        case 53:
            digit = 5;
            break;
        case 54:
            digit = 6;
            break;
        case 55:
            digit = 7;
            break;
        case 56:
            digit = 8;
            break;
        case 57:
            digit = 9;
            break;
        default:
            console.log("Please enter a num");
            break;
    }
    // if(isFirst===true){
    //     isFirst = false;
    // } else if(isFirst===false){
    //     isFirst = true;
    // }
    isFirst = false;
    return digit;
}

function operator(num,key){
    switch (num.keyCode) {
        case 42:
            key = '*';
            console.log("*");
            break;
        case 43:
            key = '+';
            console.log("+");
            break;
        case 45:
            key = '-';
            console.log("-");
            break;
        case 47:
            key = '/';
            console.log("/");
            break;
        default:
            console.log("Please enter a valid operator");
            break;
    }
    return key;
}

function calculation(oper,digit1,digit2){
    switch (oper) {
        case '+':
            console.log(digit1+digit2);
            break;
        case '-':
            console.log(digit1-digit2);
            break;
        case '*':
            console.log(digit1*digit2);
            break;
        case '/':
            console.log(digit1/digit2);
            break;
        default:
            console.log("Your Operation is not Valid");
            break;
    }
}

// 42 * (Asterisk)
// 43 + (Plus sign)
// 45 - (Hyphen)
// 47 / (Slash)
// 48 0 (number zero)
// 49 1 (number one)
// 50 2 (number two)
// 51 3 (number three)
// 52 4 (number four)
// 53 5 (number five)
// 54 6 (number six)
// 55 7 (number seven)
// 56 8 (number eight)
// 57 9 (number nine)