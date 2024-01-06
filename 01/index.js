const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8').split("\n\r").flatMap(x => x.split("\n"))

const sum = data.map(rad => {
    const numbers = rad.replace(/[a-zA-Z]/g, '');
    if (numbers.length === 2) {
        return numbers;
    } else if (numbers.length > 2) {
        return numbers[0] + numbers[numbers.length - 1];
    } else if (numbers.length < 2) {
        return numbers[0] + numbers[0];
    }
})
.map(Number).reduce((total, currentNumber) => total + currentNumber, 0);

console.log('Amount:', sum);