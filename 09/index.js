const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8').split('\n').map(row => row.split(' ').map(Number));

const total = []
function calculateSteps(arr) {
    const steps = [];
    for (let i = 1; i < arr.length; i++) {
        const step = arr[i] - arr[i - 1];
        steps.push(step);
    }
    return steps;
}
data.forEach((array) => {
    let sumNum = []
    let continueProcessing = true;

    while (continueProcessing) {
        const nextArray = calculateSteps(array);
        const lastNumber = array[array.length - 1];
        sumNum.push(lastNumber)
        if (nextArray.every(num => num === 0)) {
            continueProcessing = false;
        }
        array = nextArray;
    }
    const sumLastNumbers = sumNum.reduce((acc, curr) => acc + curr, 0)
    total.push(sumLastNumbers)
});
console.log(total.reduce((acc, curr) => acc + curr, 0))
