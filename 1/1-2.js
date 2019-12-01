function calculateTotalModuleFuel(remainingMass, totalFuel=0){
    const fuel = Math.floor(Number(remainingMass) / 3) - 2;
    return fuel <= 0 ? totalFuel : calculateTotalModuleFuel(fuel, totalFuel + fuel)
}

console.log(
    require('fs').readFileSync('masses.txt')
        .toString().split("\n").map(Number)
        .reduce((a, b) => a + calculateTotalModuleFuel(b), 0)
);
