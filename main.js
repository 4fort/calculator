let calc_key = document.querySelectorAll('.calc_key');

var num1 = '';
var num2 = '';
var op = '';
var result = '';

// console.log(num1)

calc_key.forEach(el => {
    el.addEventListener('click', () => {
        if(el.dataset.key == 'num' && op == '') {
            num1 += el.value;
            console.log(`
                num1 = ${num1}
                num2 = ${num2}
                op = ${op}
                result = ${result}
            `)
        }
        else if(el.dataset.key == 'op') {
            op = el.value
            console.log(`
                num1 = ${num1}
                num2 = ${num2}
                op = ${op}
                result = ${result}
            `)
        }
        else if(el.dataset.key == 'num' && num1 != '' && op != '') {
            num2 += el.value;
            console.log(`
                num1 = ${num1}
                num2 = ${num2}
                op = ${op}
                result = ${result}
            `)
        }
        else if(el.dataset.key == 'backsp') {
            if(num1 != '' && result == '') {
                num1 = num1.substring(0, num1.length - 1)
                console.log(`
                num1 = ${num1}
                num2 = ${num2}
                op = ${op}
                result = ${result}
            `)
            }
            else if(num2 == '' && result == '') {
                num2 = num2.substring(0, num2.length - 1)
                console.log(`
                num1 = ${num1}
                num2 = ${num2}
                op = ${op}
                result = ${result}
            `)
            }
            else{
                result = String(result);
                result = result.substring(0, result.length - 1)
                console.log(`
                num1 = ${num1}
                num2 = ${num2}
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
        else if(el.dataset.key == 'equals' && num2 != '' && num1 != '' && op != '') {
            num1 = Number(num1);
            num2 = Number(num2);
            
            if(result != '') {
                result = Number(result);
                switch (op){
                    case '+':
                        result = result + num2;
                    break;
                    case '-':
                        result = result - num2;
                    break;
                    case '*':
                        result = result * num2;
                    break;
                    case '/':
                        result = result / num2;
                    break;
                    default:
                        result = 'Syntax Error';
                    break;
                }
                console.log(`
                num1 = ${num1}
                num2 = ${num2}
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
                op = ${op}
                result = ${result}
            `)
            }
            // num1 = ''
            num2 = ''
            op = ''
        }
    })
})