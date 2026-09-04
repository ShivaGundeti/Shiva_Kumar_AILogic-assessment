/*
Q2. Majority Element

Given an array nums of size n, return the element that appears more than ⌊n/2⌋ times. You may assume the majority element always exists.

Input:

nums = [2, 2, 1, 1, 1, 2, 2]
*/

function MajorityElement(arr)
{
    let hash = {}
    for(let num of arr)
    {
        hash[num] = (hash[num]|| 0)+1
    }
    let max = 0
    let maxKey;
    for(let key in hash)
    {
        if(hash[key] > max)
        {
            maxKey = key;
            max = hash[key] 
        }
        
    }
   
    return maxKey
}

console.log(MajorityElement([2, 2, 1, 1, 1, 2, 2]));


/*
My approach=>
1. First I have checked the frequency of the number
2. I have returned the key that has max value

*/