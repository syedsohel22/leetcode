/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
      if (word.length < 3) return false;

    const isVowel = (c) => 'aeiouAEIOU'.includes(c);
    const isLetter = (c) => /[a-zA-Z]/.test(c);
    const isDigit = (c) => /[0-9]/.test(c);
    const isConsonant = (c) => isLetter(c) && !isVowel(c);

    let hasVowel = false;
    let hasConsonant = false;

    for (let char of word) {
        if (!(isLetter(char) || isDigit(char))) {
            return false;
        }

        if (isVowel(char)) hasVowel = true;
        if (isConsonant(char)) hasConsonant = true;
    }

    return hasVowel && hasConsonant;
};