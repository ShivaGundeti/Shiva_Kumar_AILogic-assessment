/*
Q3. Maximum Swap

Given a non-negative integer num, you may swap two digits at most once to get the maximum valued number. Return the maximum valued number you can get.

Input:

num = 2736



Output:

7236
*/

function swap(swapNumber) {
let num = swapNumber.toString().split("");
    console.log(num);
    for(let i =0; i<2; i++)
    {
        [num[i],num[i+1]] = [num[i+1],num[i]]
    }
    return num
}


function MaxSwap(number)
{
    let hash = {}
    let originalNumber = number;
    var swapped = swap(originalNumber)
    let newNumber = swapped.join("")
    if(newNumber > originalNumber)
    {
        hash[newNumber] = 1;
    }
    else{
        for(let i =0;i<2;i++)
        {
            swapped = swap(originalNumber)
        }
    }
    console.log("NewNum",newNumber);
    console.log("NewNum",hash);
    
    // let newNumber = num.join("")
    // console.log(newNumber);
    // let minus = newNumber - originalNumber;
    // if(minus > diff)
    // {
    //     diff = minus
    // }
    
}

MaxSwap(2736)





/*
2736

2,7,3,6
7,2,3,6 = 7236
first 2736 > 7236 no 7236 is bigger
store in hash
{7236}
2736
2376 > 2736 no so 2736 is big do not touch
2736
2763 > 2736 yes , is it bigger than 7236 no return 7236




*/