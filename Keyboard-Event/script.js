window.addEventListener('keypress',checkKey);
function checkKey(num){
    var digit,digit1,digit2 = 0;
    var oper,key,isFirst = " ";
    console.log(digit);
    console.log(isFirst);
    isFirst = true;
    console.log(isFirst);
    if(isFirst===true){
        digit1 = oprend(num, digit);
        console.log("isFirst if true "+digit1);
    }else if(isFirst===false){
        digit2 = oprend(num, digit);
        console.log("isFirst if false "+digit2);
    }
    console.log(digit1+digit2);
    oper = operator(num,key);
    calculation(oper,digit1,digit2);
}

function oprend(num,key) {
    switch (num.keyCode) {
        case 48:
            key = 0;
            console.log(key);
            break;
        case 49:
            key = 1;
            break;
        case 50:
            key = 2;
            break;
        case 51:
            key = 3;
            break;
        case 52:
            key = 4;
            break;
        case 53:
            key = 5;
            break;
        case 54:
            key = 6;
            break;
        case 55:
            key = 7;
            break;
        case 56:
            key = 8;
            break;
        case 57:
            key = 9;
            break;
        default:
            console.log("Please Enter A Num");
            break;
    }
    isFirst = false;
    console.log(isFirst);
    return key;
}

function operator(num,digit){
    switch (num.keyCode) {
        case 42:
            digit = '*';
            break;
        case 43:
            digit = '+';
            break;
        case 44:
            digit = '+';
            break;
        case 47:
            digit = '/';
            break;
        default:
            console.log("Please enter a valid operator");
            break;
    }
    return digit;
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
// 44 , (Comma)
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