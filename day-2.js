// // Reverse a number using two pointer approach

// function reverse_array(array) {
    
//     left = 0 
//     right = array.length - 1 
//     while(left<right)
//     {
//         let temp = array[left]
//         array[left] = array[right]
//         array[right] = temp
//         left++
//         right--
//     }
//     return array
// }

// let result = reverse_array([54,23,345,234,432,436,43])

// console.log(result)



// // searching a pair which sum upto x(single pair)

// function sum_pair()
// {



// }

// 2-D array

arr = [[1,2,3],[1,2,3],[1,2,3]]

n = arr.length
m = arr[0].length

for(let i = 0 ; i<n ;i++)
    {
        for(let j = 0 ; j<m ;j++)
            {
                console.log(arr[i][j] + " ")
            }
    }