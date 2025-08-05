/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let count = 0
    let used = Array.from(baskets.length).fill(false)

    for(let i=0;i<fruits.length;i++){
        let isPlased = false
        for(let j=0;j<baskets.length;j++){
            if(fruits[i]<=baskets[j] && !used[j]){
                isPlased = true
                used[j] = true
                break;
            }
        }

        if(!isPlased){
            count+=1
        }
    }

    return count
};