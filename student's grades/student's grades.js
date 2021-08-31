// Here's a template you can use:
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
// your code goes here
function range(arr){
let finalerange= Math.max(...arr)-Math.min(...arr)
 return finalerange
}
console.log(range([73, 91, 88, 56, 62, 84, 95, 96, 88, 92]))


function median(arr1){
 let medi=arr1.sort()
  let finaelMedian=medi.length/2
  let Hazion=medi[finaelMedian]
  return Hazion
 
  
 }
console.log(median([73, 91, 88, 56, 62, 84, 95, 96, 88, 92]))


function halfrange(arr3){
 let Halfrange=arr3.slice(5,10);
 let finaelhalfrange=Math.max(...Halfrange)-Math.min(...Halfrange);
 return finaelhalfrange
}
console.log(halfrange([73, 91, 88, 56, 62, 84, 95, 96, 88, 92]))
