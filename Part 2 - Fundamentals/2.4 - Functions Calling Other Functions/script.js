function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    // cutting fruit into 4 pieces
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges 🧃`; // the process of producing
    return juice; // returning juice we produced
}

console.log(fruitProcessor(2,3));