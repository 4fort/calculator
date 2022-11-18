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
        else if(el.dataset.key == 'op') {
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
                num1 = num1.substring(0, num1.length - 1)
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