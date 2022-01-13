const capitalize = require('../code/capitalize.js')

test('Should capitalize a single letter', () => {
    expect(capitalize("a")).toBe("A");
});

test('Should capitalize a sentence', () => {
    expect(capitalize("old McDonalds had a farm.")).toBe("Old McDonalds had a farm.");
});

test('Should handle gibberish.', () => {
    expect(capitalize("_ld McDonalds had a farm.")).toBe("_ld McDonalds had a farm.");
});