/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = new Map();
for (let num of nums) {
  freq.set(num, (freq.get(num) || 0) + 1);
}

let maxFreq = Math.max(...freq.values());

let buckets = Array.from({ length: maxFreq + 1 }, () => []);

for (let [num, count] of freq.entries()) {
  buckets[count].push(num);
}

let ans = [];
for (let i = maxFreq; i >= 1; --i) {
  buckets[i].sort((a, b) => b - a);

  for (let num of buckets[i]) {
    ans.push(num);
    if (ans.length === k) {
      return ans;
    }
  }
}

return ans;

};