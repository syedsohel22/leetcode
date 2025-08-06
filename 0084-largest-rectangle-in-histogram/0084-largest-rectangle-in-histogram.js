/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack =[]
    let max_area  =0
    let index =0
    while(index<heights.length){
        if(stack.length ==0 || heights[stack[stack.length-1]]<=heights[index]){
            stack.push(index)
            index+=1
        }else{
            let top_of_stack = stack.pop()
            let area = (heights[top_of_stack]* (stack.length>0?(index-stack[stack.length-1]-1):index))

            max_area = Math.max(max_area,area)
        }
    }

    while(stack.length>0){
        let top_of_stack= stack.pop()
        let area  = (heights[top_of_stack]*(stack.length>0 ? (index - stack[stack.length-1]-1):index))
        max_area = Math.max(max_area,area)
    }

    return max_area
};