/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramMap = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        anagramMap.get(key).push(str);
    }
    return Array.from(anagramMap.values());
};