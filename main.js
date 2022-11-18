let calc_key = document.querySelectorAll('.calc_key');

var num1 = '';
var num2 = '';
var op;
var result;

// console.log(num1)

calc_key.forEach(el => {
    el.addEventListener('click', () => {
        if(el.dataset.key == 'num' && op == null) {
            num1 += el.value;
            console.log('num1 ' + num1)
        }
        else if(el.dataset.key == 'op') {
            op = el.value
            console.log(op)
        }
        else if(el.dataset.key == 'num' && num1 != '' && op != null) {
            num2 += el.value;
            console.log('num2 ' + num2)
        }
        else if(el.dataset.key == 'backsp') {
            if(num1 != '' && result == null) {
                num1 = num1.substring(0, num1.length - 1)
                console.log('num1 ' + num1)
            }
            else if(num2 == '' && result == null) {
                num2 = num2.substring(0, num2.length - 1)
                console.log('num2 ' + num2)
            }
            else{
                result = String(result);
                result = result.substring(0, result.length - 1)
                console.log(result)
            }
        }
        else if(el.dataset.key == 'clr') {
            num1 = null;
            num2 = null;
            op = null;
            console.log('cleared')
        }
        else if(el.dataset.key == 'equals' && num2 != '' && num1 != '' && op != null) {
            num1 = Number(num1);
            num2 = Number(num2);
            
            if(result != null) {
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
                console.log(result);
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
                console.log(result);
            }
            // num1 = ''
            num2 = ''
            op = ''
        }
    })
})