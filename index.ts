import { question } from 'readline-sync'

type Operator = '+' | '-' | '*' | '/' | '%' | '^' | 'root'

function main():void {

    const firstStr: string = question('Enter first number:\n')
    const operator: string = question('Enter operator(+,-,*,/,%,^,root):\n')
    const secondStr: string = question('Enter second number:\n')
    
    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr)

    if (validInput) {
        const firstNum: number = parseInt(firstStr)
        const secondNum: number = parseInt(secondStr)
        const result = calculate(firstNum, operator as Operator, secondNum)
        console.log('Result:\n', result)
    } else {
        console.log('\nInvalid input\n')
        main()
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number){
    switch(operator){
        case "+":
            return firstNum + secondNum
        case "-":
            return firstNum - secondNum
        case "*":
            return firstNum * secondNum
        case "/":
            return firstNum / secondNum
        case "%":
            return firstNum % secondNum
        case "^":
            return Math.pow(firstNum, secondNum)
        case "root":
            return Math.pow(firstNum, 1 / secondNum)
    }
}

function isOperator(operator: string): boolean {

    switch(operator){
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
        case "^":
        case "root":
            return true
        default:
            return false
    }
}

function isNumber(str: string): boolean {

    const maybeNum = parseInt(str)
    const isNum: boolean = !isNaN(maybeNum)

    return isNum
}

main()