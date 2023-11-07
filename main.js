let calc_key = document.querySelectorAll('.calc_key');
let element_solution = document.querySelector('.solution');
let element_result = document.querySelector('.result');

var num1 = '';
var num2 = '';
var num3 = ''
var op = '';
var result = '';

// console.log(num1)

const display = () => {
    element_solution.innerHTML = `${num1} ${op} ${num2} ${num3}`
    element_result.innerHTML = `${result}`
}

calc_key.forEach(el => {
    el.addEventListener('click', () => {
        if(el.dataset.key == 'num') {
            if(op == '') {
                num1 += el.value;
            }
            else if(num1 != '' && op != '') {
                num2 += el.value;
                result = ''
            }
            else {
                num3 += el.value
            }

            console.log(`
                num1 = ${num1}
                num2 = ${num2}
                num3 = ${num3}
                op = ${op}
                result = ${result}
            `)
        }
        else if(el.dataset.key == 'op' && (result != '' || num1 != '')) {
            op = el.value
            console.log(`
                num1 = ${num1}
                num2 = ${num2}
                num3 = ${num3}
                op = ${op}
                result = ${result}
            `)
        }
        else if(el.dataset.key == 'backsp') {
            if(num1 != '' && op == '') {
                if(num1 != '') {
                    num1 = num1.substring(0, num1.length - 1)
                } else {
                    op = '';
                }
                console.log(`
                num1 = ${num1}
                num2 = ${num2}
                num3 = ${num3}
                op = ${op}
                result = ${result}
            `)
            }
            else if(num2 != '') {
                num2 = num2.substring(0, num2.length - 1)
                console.log(`
                num1 = ${num1}
                num2 = ${num2}
                num3 = ${num3}
                op = ${op}
                result = ${result}
            `)
            }
            else if(num3 != '') {
                num3 = num3.substring(0, num3.length -1)
                console.log(num3)
            }
            else{
                result = String(result);
                result = result.substring(0, result.length - 1)
                console.log(`
                num1 = ${num1}
                num2 = ${num2}
                num3 = ${num3}
                op = ${op}
                result = ${result}
            `)
            }
        }
        else if(el.dataset.key == 'clr') {
            num1 = '';
            num2 = '';
            op = '';
            result = ''
            console.log('cleared')
        }
        else if(el.dataset.key == 'equals' && op != '') {
            num1 = Number(num1);
            num2 = Number(num2);
            num3 = Number(num3);
            
            if(result != '') {
                result = Number(result);
                switch (op){
                    case '+':
                        result = result + num3;
                    break;
                    case '-':
                        result = result - num3;
                    break;
                    case '*':
                        result = result * num3;
                    break;
                    case '/':
                        result = result / num3;
                    break;
                    default:
                        result = 'Syntax Error';
                    break;
                }
                console.log(`
                num1 = ${num1}
                num2 = ${num2}
                num3 = ${num3}
                op = ${op}
                result = ${result}
            `)
            }
            else {
                switch (op){
                    case '+':
                        result = num1 + num2;
                    break;
                    case '-':
                        result = num1 - num2;
                    break;
                    case '*':
                        result = num1 * num2;
                    break;
                    case '/':
                        result = num1 / num2;
                    break;
                    default:
                        result = 'Syntax Error';
                    break;
                }
                console.log(`
                num1 = ${num1}
                num2 = ${num2}
                num3 = ${num3}
                op = ${op}
                result = ${result}
            `)
            }

            if(result == Infinity) {
                result = 'Cannot be divided by 0';
            }

            num1 = ''
            num2 = ''
            num3 = ''
            op = ''
        }

        if(el.dataset.key == 'int') {
            if(num1 != '' && op == '') {
                num1 = num1 * -1;
            }
            else if(num2 != '') {
                num2 = num2 * -1;
            }
            else if(num3 != '') {
                num3 = num3 * -1;
            }
        }
        
        display();
    })
})

document.body.onkeydown = (e) => {
    if(e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9 || e.key == 0 || e.key == '.'){
        if(op == '') {
            num1 += e.key;
        }
        else if(num1 != '' && op != ''){
            num2 += e.key;
            result = '';
        }
        else {
            num3 += e.key;
        }
    }
    else if((result != '' || num1 != '') && ((e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/'))) {
        op = e.key
        if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/'){
        }
    }
    else if(e.keyCode == 8) {
        if(num1 != '' && op == '') {
            num1 = num1.substring(0, num1.length - 1)
        }
        else if(num2 != '') {
            num2 = num2.substring(0, num2.length - 1)
        }
        else if(num3 != '') {
            num3 = num3.substring(0, num3.length -1)
            console.log(num3)
        }
        else{
            result = String(result);
            result = result.substring(0, result.length - 1)
        }
        console.log(e.key);
    }
    else if(e.keyCode == 13 && op != '') {
        console.log(e.key);
        num1 = Number(num1);
        num2 = Number(num2);
        num3 = Number(num3);
        
        if(result != '') {
            result = Number(result);
            switch (op){
                case '+':
                    result = result + num3;
                break;
                case '-':
                    result = result - num3;
                break;
                case '*':
                    result = result * num3;
                break;
                case '/':
                    result = result / num3;
                break;
                default:
                    result = 'Syntax Error';
                break;
            }
            console.log(`
            num1 = ${num1}
            num2 = ${num2}
            num3 = ${num3}
            op = ${op}
            result = ${result}
        `)
        }
        else {
            switch (op){
                case '+':
                    result = num1 + num2;
                break;
                case '-':
                    result = num1 - num2;
                break;
                case '*':
                    result = num1 * num2;
                break;
                case '/':
                    result = num1 / num2;
                break;
                default:
                    result = 'Syntax Error';
                break;
            }
            console.log(`
            num1 = ${num1}
            num2 = ${num2}
            num3 = ${num3}
            op = ${op}
            result = ${result}
        `)
        }

        if(result == Infinity) {
            result = 'Cannot be divided by 0';
        }

        num1 = ''
        num2 = ''
        num3 = ''
        op = ''
    }
    display();
}
