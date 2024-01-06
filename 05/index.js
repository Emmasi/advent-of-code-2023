const ingredients = [
    // { 'seeds': [79, 14, 55, 13] },

    {
        'seed-to-soil map': [
            [50, 98, 2],
            [52, 50, 48]
        ]
    },

    {
        'soil-to-fertilizer map': [
            [0, 15, 37],
            [37, 52, 2],
            [39, 0, 15]
        ]
    },

    {
        'fertilizer - to - water map': [
            [49, 53, 8],
            [0, 11, 42],
            [42, 0, 7],
            [57, 7, 4]
        ]

    },
    {
        'water - to - light map': [
            [88, 18, 7],
            [18, 25, 70]
        ]

    },
    {
        'light - to - temperature map': [
            [45, 77, 23],
            [81, 45, 19],
            [68, 64, 13]
        ]

    },
    {
        'temperature - to - humidity map': [
            [0, 69, 1],
            [1, 0, 69]
        ]

    },
    {
        'humidity - to - location map': [
            [60, 56, 37],
            [56, 93, 4]
        ]
    }

]
const newNumberList = numbersArray()

ingredients.forEach((obj) => {
    console.log(Object.keys(obj))
    const objektValue = Object.values(obj)[0][0]
    const destinationStart = objektValue[0]
    const sourceStart = objektValue[1]
    const ranges = objektValue[2]
    newArrayList(destinationStart, sourceStart, ranges)
})
function rangeArrayFunc(indexNum, numberList, ranges) {
    const rangeArray = []
    if (indexNum !== -1) {
        for (let i = indexNum; i <= indexNum + ranges - 1; i++) {
            rangeArray.push(numberList[i % numberList.length]);
        }
        return rangeArray
    }
}
function numbersArray() {
    let numArray = []
    for (let a = 0; a < 100; a++) {
        numArray.push(a)
    }
    return numArray
}

function newArrayList(destinationStart, sourceStart, ranges) {

    const DindexNum = newNumberList.indexOf(destinationStart)
    const SindexNum = newNumberList.indexOf(sourceStart)
    const rangeArrayNumbers = rangeArrayFunc(DindexNum, newNumberList, ranges)
    newNumberList.splice(DindexNum, ranges);
    newNumberList.splice(SindexNum, 0, ...rangeArrayNumbers);
    return newNumberList
}
