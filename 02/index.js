const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8').split("\n\r").flatMap(x => x.split("\n"))
const restructuredGames = data.map(game => {
    const gameData = {};
    const gameInfo = game.split(':');
    const gameTitle = gameInfo[0].trim();
    const gameValues = gameInfo[1].split(/[;,]/);;

    const values = gameValues.map(value => {
        const items = value.split(',').map(item => item.trim());
        return items.join(' ');
    });
    gameData[gameTitle] = values;
    return gameData;
});

const sum = restructuredGames.flatMap(game =>
    Object.entries(game)
        .filter(([key, cubes]) =>
            cubes.every(cube => {
                const numbers = parseInt(cube.replace(/[a-zA-Z]/g, ''));
                const letters = cube.replace(/[^a-zA-Z]/g, '');

                if (numbers <= 14) {
                    if ((numbers > 13 && letters === 'green') || (numbers > 12 && letters === 'red')) {
                        return false;
                    }
                    return true;
                } else {
                    return false;
                }
            })
        )
        .map(([key]) => parseInt(key.replace(/[a-zA-Z]/g, '')))
).reduce((total, currentNumber) => total + currentNumber, 0);

console.log("total sum " + sum);






