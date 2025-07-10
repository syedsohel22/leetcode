/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const charCount = new Array(26).fill(0);
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  charCount.fill(0);
  left = 0;
  right = 0;
  maxCharCount = 0;

  for (right = 0; right < s.length; ++right) {
    charCount[s.charCodeAt(right) - "A".charCodeAt(0)]++;

    maxCharCount = Math.max(
      maxCharCount,
      charCount[s.charCodeAt(right) - "A".charCodeAt(0)]
    );

    if (right - left + 1 - maxCharCount > k) {
      charCount[s.charCodeAt(left) - "A".charCodeAt(0)]--;
      left++;
    }
  }
  return right - left;
};
