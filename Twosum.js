//Question-1 Two Sum

/*
Given an integer array nums and an integer target, return the indices of the two numbers that add up to target. You may assume exactly one solution exists and you may not use the same element twice.

Input:

nums = [2, 7, 11, 15], target = 9
*/

function twoSum(arr,target)
{
    let seen = new Map();
    for(let i =0;i<arr.length;i++)
    {
        let diff = target-arr[i];
        if(seen.has(diff))
        {
            return [seen.get(diff),i]
        }
        seen.set(arr[i],i)
    }
    return []
}

console.log(twoSum([2, 7, 11, 15],9));

//The time complexity will be o(n) and space complexity is o(1)