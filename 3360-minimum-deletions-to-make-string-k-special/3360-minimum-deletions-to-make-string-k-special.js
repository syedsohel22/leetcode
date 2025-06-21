/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
  const myMap = new Map();

    for (const ch of word) {
        myMap.set(ch, (myMap.get(ch) || 0) + 1);
    }

    const freqVals = Array.from(myMap.values());
    let ans = Infinity;

    for (const minFreq of freqVals) {
        let del = 0;

        for (const freq of freqVals) {
            if (freq < minFreq) {
                del += freq;
            } else {
                del += Math.max(0, freq - (minFreq + k));
            }
        }

        ans = Math.min(ans, del);
    }
     return ans;
};