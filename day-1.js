// 1 : Find the sum of two numbers
let num4 = 10
let num5 = 20
let sum1 = num4+num5
console.log(sum1)

// 2 : Find the smallest of three numbers
let num1 = 100
let num2 = 20
let num3 = 10

    num1<num2 
    ? 
        num1<num3
        ? 
        console.log(num1 + " is the smallest")
        :
        console.log(num3 + " is smallest")
    :   num2<num3 
        ? 
        console.log(num2 + " is the smallest") 
        :
        console.log(num3 + " is smallest")

// 3 : Check if the given number is a prime number
let num6 = 10
let factor = 0

for(let i = 1 ; i<100 ; i++)
{
    if(num6%i==0)
    {
        factor++;
    }
}

if(factor == 2 )
{
    console.log(num1 + " is prime")
}else{
    console.log(num1 + " is not prime")
}


// 4 : Find if the given string is a palindrome

let string1 = "nayan"
let left2 = 0
let right2 = string1.length - 1

function pallindrome(){
    while(left2<=right2)
        {
            if(string1[left2] !== string1[right2])
            {
                return false
            }
            left2++
            right2--   
        }
    return true
}

let result2 = pallindrome()

if(result2){
    console.log(string1 + " is pallindrome")
}else{
console.log(string1 + " is not pallindrome")
}

// 5 : Check if a given year is a leap year

let year = 20

if((year%4==0&&year%100!==0)||year%400==0)
{
    console.log(year+ " is leap year")
}else{
    console.log(year+ " is not leap year")
}

// 6 :Given a number n, add all the numbers from 1 to n

let num7 = prompt("enter number")
let sum = 0

for(let i = 1 ; i <=num7 ;i++)
{
    sum = sum + i        
}

console.log("Sum of 1 - n is " + sum)

// 7 : Find if a string is an isogram

let string3 = "arti"

let left = 0
let right = 1

function isogram()
{
    for(let i = 0 ; i<string3.length ; i++)
        {
            for(let j = i +1; j<string3.length ; j++)
                {
                    if(string3[i]==string3[3])
                    {
                        return false
                    }
                }
        }
    return true
}

let result3 = isogram()

if(result3)
{
    console.log(string3 + " is isogram")
}else{
    console.log(string3 + " is not isogram")
}

// 8 : Find the number of times each character is repeated in a string

let string = "1223456789";

function charFreq(str) {
    let frequency = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

let result = charFreq(string);

for (let char in result) {
    console.log(char + ": " + result[char]);
}
