const caesarCipher = require('../code/caesarCipher.js');

test('Test 1', () => {
    expect(caesarCipher("Hello",1)).toBe("Ifmmp");
});

test('Test 2', () => {
    expect(caesarCipher("Ifmmp",-1)).toBe("Hello");
});