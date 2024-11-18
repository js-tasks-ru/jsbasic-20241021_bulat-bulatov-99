function getMinMax(str) {
    let elements = str.split(' ');

    let numbers = elements
        .map(item => parseFloat(item))
        .filter(item => !isNaN(item));
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}
