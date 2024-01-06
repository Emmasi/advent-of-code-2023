
const fs = require('fs')
const array = fs.readFileSync('input.txt', 'utf8').split("\n").map(item => {
    const card = item.slice(0, 5);
    const point = parseInt(item.slice(6));
    return { card, point };
});

const order = { 'A': 14, 'K': 13, 'Q': 12, 'J': 11, 'T': 10, 9: 9, 8: 8, 7: 7, 6: 6, 5: 5, 4: 4, 3: 3, 2: 2 };
const handWithScore = []

array.forEach((hand) => {
    let handArray = [...hand.card]
    let handValue = getScore(handArray)
    handWithScore.push({
        card: hand.card,
        point: hand.point,
        score: handValue
    })
})
function getScore(cards) {
    const ocurrences = {}
    cards.forEach((card) => {
        if (card in ocurrences) {
            ocurrences[card] += 1
        } else {
            ocurrences[card] = 1
        }
    })
    const counts = Object.values(ocurrences);
    let handValue = 0;
    counts.forEach((num) => {
        if (num === 5) {
            handValue = 6
        }
        if (num === 4) {
            handValue = 5
        }
        if (num === 3) {
            handValue = handValue + 3
        }
        if (num === 2) {
            handValue = handValue + 1
        }
    })
    return handValue
}
const sortHandWithScore = handWithScore.sort((a, b) => {
    if (a.score === b.score) {
        const cardA = a.card;
        const cardB = b.card;
        for (let i = 0; i < Math.min(cardA.length, cardB.length); i++) {
            if (order[cardA[i]] !== order[cardB[i]]) {
                return order[cardA[i]] - order[cardB[i]];
            }
        }
        return cardA.length - cardB.length;
    } else {
        return a.score - b.score;
    }
})
pointDistribution(sortHandWithScore)

function pointDistribution(array) {
    let result = 0
    array.forEach((obj, i) => {
        let num = obj.point * (i + 1)
        result += num;
    })
    console.log(result)
}

