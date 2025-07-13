/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    let reversed = 0;

    while (x !== 0) {
        const digit = x % 10;


        if (
            reversed > Math.floor(INT_MAX / 10) || 
            (reversed === Math.floor(INT_MAX / 10) && digit > 7)
        ) return 0;

        if (
            reversed < Math.ceil(INT_MIN / 10) || 
            (reversed === Math.ceil(INT_MIN / 10) && digit < -8)
        ) return 0;

        reversed = reversed * 10 + digit;
        x = Math.trunc(x / 10);
    }

    return reversed;
};