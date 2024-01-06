
const fs = require('fs')
const arrays = fs.readFileSync('input.txt', 'utf8').split("\n").map((x) => x.split(""))
const sum = []

for (let x = 0; x < arrays.length; x++) {
    for (let y = 0; y < arrays[x].length; y++) {
        const current = arrays[x][y];
        if (isNaN(parseInt(current)) && current !== '.') {

            const above = arrays[x - 1]?.[y]
            if (!isNaN(above)) {
                sum.push(extractNumbers(arrays, x - 1, y))
            }
            const aboveLeft = arrays[x - 1][y - 1];
            if (!isNaN(aboveLeft)) {
                sum.push(extractNumbers(arrays, x - 1, y - 1))
            }
            const aboveRight = arrays[x - 1][y + 1];
            if (!isNaN(aboveRight)) {
                sum.push(extractNumbers(arrays, x - 1, y + 1))
            }
            const belowLeft = arrays[x + 1][y - 1];
            if (!isNaN(belowLeft)) {
                sum.push(extractNumbers(arrays, x + 1, y - 1))
            }
            const below = arrays[x + 1]?.[y];
            if (!isNaN(below)) {
                sum.push(extractNumbers(arrays, x + 1, y))
            }
            const belowRight = arrays[x + 1][y + 1];
            if (!isNaN(belowRight)) {
                sum.push(extractNumbers(arrays, x + 1, y + 1))
            }
            const next = arrays[x][y + 1];
            if (!isNaN(next)) {
                sum.push(extractNumbers(arrays, x, y + 1))
            }
            const prev = arrays[x][y - 1];
            if (!isNaN(prev)) {
                sum.push(extractNumbers(arrays, x, y - 1))
            }
        }
    }
}
function extractNumbers(arrays, x, y) {
    let num = ''
    if (!isNaN(arrays[x][y - 1])) {
        if (!isNaN(arrays[x][y - 2])) {
            num += arrays[x][y - 2]
            arrays[x][y - 2] = '.'
        }
        num += arrays[x][y - 1]
        arrays[x][y - 1] = '.'
    }
    num += arrays[x][y]
    arrays[x][y] = '.'
    if (!isNaN(arrays[x][y + 1])) {
        num += arrays[x][y + 1]
        arrays[x][y + 1] = '.'
        if (!isNaN(arrays[x][y + 2])) {
            num += arrays[x][y + 2]
            arrays[x][y + 2] = '.'
        }
    }
    return num;
}
const total = sum.reduce((acc, curr) => {
    return acc + parseInt(curr, 10);
}, 0);

console.log(total);

