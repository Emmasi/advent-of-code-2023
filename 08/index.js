
const leftRightCommand = ['LRRLRLRRLRRRLRLRLRRLRRRLRRRLRRLRRRLRLRLRLRLRLRLRRRLRRLRRRLLLLRRRLRLLLRRRLLRLLRRRLRRRLRLRRLRRRLRRRLLRRRLRLRRRLLRRRLRLLRRRLRRLLRLRLRLRRRLRLLRLRLRRRLRLLRLRLRRRLLRRRLRRLRRRLRLRRLRLRRLRLRRLRRRLLRRRLLLRRRLLRRLRRLRRLRLLRRLRRRLRRLRLRLRRLRRLLLRRLRLRRRLRRRLRRRLLLRLRRRLLRRRLRLLRRRR']
const commandOrder = leftRightCommand.join('').split('');
const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8');
const lines = data.trim().split('\n');

const pairs = lines.map(line => {
    const [key, values] = line.split(' = ');
    const pair = values.substring(1, values.length - 1).split(', ');
    return { [key.trim()]: pair };
});

let current = 'AAA';
let steps = 0;

while (current !== 'ZZZ') {
    commandOrder.forEach((step) => {
        steps++;
        const Objekt = findKeyFromObject(pairs, current)
        if (step === 'L') {
            current = Object.values(Objekt)[0][0]
        } else {
            current = Object.values(Objekt)[0][1]
        }

    })
}

function findKeyFromObject(array, value) {
    return array.find(key => Object.keys(key).includes(value));
}

console.log(steps)
