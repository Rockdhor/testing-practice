function analyzeArray(array) {
    
    return {
        average: array.reduce((x, y) => x+y)/array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}
module.exports = analyzeArray;