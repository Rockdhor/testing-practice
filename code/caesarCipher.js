function caesarCipher(string, shift) {
    return string.split("").map((char) => {
        let cChar = char.charCodeAt(0);
        if (cChar >= 65 && cChar <= 90) {
            cChar += shift;
            cChar = cChar > 90 ? cChar - 26 :
            cChar < 65 ? cChar + 26 :
            cChar
        }

        if (cChar >= 97 && cChar <= 122) {
            cChar += shift;
            cChar = cChar > 122 ? cChar - 26 :
            cChar < 97 ? cChar + 26 :
            cChar
        }

        return String.fromCharCode(cChar);
    }).join("");
}
module.exports = caesarCipher;