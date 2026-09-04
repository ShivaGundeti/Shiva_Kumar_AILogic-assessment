/*Given an array height where each element is the height of a vertical line at that index, find two lines that together with the x-axis form a container holding the most water. Return that maximum area.

Input:

height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

 //lenght = 9
 width 8-0 = 8, 
1,7 =1
Output:8 - 8 * 1
move left
w=8-1 = 7
h = (8,7)=7
7x7 = 49


49
*/

function containerWithMostWater(arr)
{
  let left = 0;
  let right = arr.length - 1;
  let maxiumArea = 0;

  while (left < right)
  {
    const width = right - left;
    const height = Math.min(arr[left], arr[right]);
    maxArea = Math.max(maxiumArea, width * height);
    console.log(maximumArea);
    
    if (arr[left] < arr[right])
    {
      left++;
    }
    else
    {
      right--;
    }
  }

  return maxiumArea;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
