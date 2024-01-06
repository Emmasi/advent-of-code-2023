const data = {
    'Time': [42, 68, 69, 85],
    'Distance': [284, 1005, 1122, 1341]
}
const all = []
for (let i = 0; i < data['Time'].length; i++) {
    const time = data.Time[i]
    const raceDistances = data.Distance[i]
    const collectedRace = []
    for (let z = 0; z < raceDistances; z++) {
        let timeLeft = time - z
        let distance = timeLeft * z
        if (distance > raceDistances) {
            collectedRace.push(z)
        }
    }
    all.push(collectedRace.length)
}

const product = all.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product);