/*
Q3. Maximum Swap

Given a non-negative integer num, you may swap two digits at most once to get the maximum valued number. Return the maximum valued number you can get.

Input:

num = 2736

 

Output:

7236
*/

function MaxSwap(number)
{
    let diff = 0;
    let originalNumber = number;
    let num = number.toString().split("");
    console.log(num);
    for(let i =0; i<2; i++)
    {
        [num[i],num[i+1]] = [num[i+1],num[i]]
    }
    let newNumber = num.join("")
    console.log(newNumber);
    let minus = newNumber - originalNumber;
    if(minus > diff)
    {
        diff = minus
    }
    
}

MaxSwap(2736)