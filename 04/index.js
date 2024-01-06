const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8').split("\n\r").flatMap(x=>x.split("\r\n"))
const formattedData = data.map(entry => {
    const [key, valuesStr] = entry.split(':');
    const cardKey = key.trim();
    const values = valuesStr.trim().split('|').map(card => card.trim().split(' ').map(num => parseInt(num, 10)));
    return { [cardKey]: values };
});

function calculatePoints(points) {
    const keys = { '1': 1, '2': 2, '3': 4, '4': 8, '5': 16, '6': 32, '7': 64, '8': 128, '9': 256, '10': 512 };
    const foundKeyValue = keys[points.toString()];
    if (foundKeyValue !== undefined) {
        return foundKeyValue;
    }
    return 0;
}

const totalSum = formattedData.reduce((accumulator, card) => {
    return accumulator + Object.entries(card).reduce((cardSum, [key, arrays]) => {
        const sameNumber = arrays[0].filter(number => arrays[1].includes(number));
        const cleanedArray = sameNumber.filter(number => !isNaN(number));
        return cardSum + calculatePoints(cleanedArray.length);
    }, 0);
}, 0);

console.log(totalSum);