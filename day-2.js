// Reverse a number using two pointer approach

function reverse_array(array) {
    
    left = 0 
    right = array.length - 1 
    while(left<right)
    {
        let temp = array[left]
        array[left] = array[right]
        array[right] = temp
        left++
        right--
    }
    return array
}

let result = reverse_array([54,23,345,234,432,436,43])

console.log(result)

