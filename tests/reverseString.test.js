const reverseString = require('../code/reverseString.js')

test('Test 1', () => {
    expect(reverseString("a")).toBe("a");
});

test('Test 2', () => {
    expect(reverseString("Annabelle")).toBe("ellebannA");
});

test('Test 3', () => {
    expect(reverseString("End of the world.")).toBe(".dlrow eht fo dnE");
});