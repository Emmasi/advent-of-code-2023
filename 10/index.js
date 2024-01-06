const maze = [
    ['.', '.', 'F', '7', '.'],
    ['.', 'F', 'J', '|', '.'],
    ['S', 'J', '.', 'L', '7'],
    ['|', 'F', '-', '-', 'J'],
    ['L', 'J', '.', '.', '.']
]

for (let y = 0; y < maze.length; x++) {
    for (let x = 0; x < maze[x].length; y++) {
        const myPlace = maze[x][y];
        if ( myPlace === 'S'){
            console.log("hitta startplatsen")
        }
        const north = maze[x - 1]?.[y]
        const south = maze[x + 1]?.[y];
        const east = maze[x][y + 1];
        const west = maze[x][y - 1];

    }
}
function rightWay(place, step,) {
    switch (place) {
        case 1:
            if (step === 1 || step === 3 || step === 4 || step === 5 || step === 6) {
                console.log("kanske denna väg")
            }
            break;
        case 2:
            if (step === 2 || step === 3 || step === 4 || step === 5 || step === 6) {
                console.log("kanske denna väg")
            }
            break;
        case 3:
            if (step !== 3) {
                console.log("kanske denna väg")
            }
            break;
        case 4:
            if (step !== 4) {
                console.log("kanske denna väg")
            }
            break;
        case 5:
            if (step !== 5) {
                console.log("kanske denna väg")
            }
            break;
        case 6:
            if (step !== 6) {
                console.log("kanske denna väg")
            }
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}
rightWay(1, 6)