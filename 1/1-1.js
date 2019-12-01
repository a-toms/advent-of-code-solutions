console.log(
    require('fs').readFileSync('1/masses.txt')
        .toString().split("\n").map(Number)
        .reduce((a, b) => {return a + Math.floor(b / 3) - 2;})
);