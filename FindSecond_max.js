// function getSecondLargest(nums) {
//     return nums.reduce((largest,current)=>
//      (current > largest ? current : largest),nums[1]
//     );
// }
let num1=[2, 3 ,6 ,6 ,5];
// console.log(getSecondLargest(num1));


function findMax(arr){
     let currentMax=arr[0];
     let secondeMax=-1;
   
      for(let i = 0; i < arr.length; i++){
            if(arr[i]>currentMax){
                currentMax=arr[i];
                    
            }
      }

     for(let i=0;i<arr.length;i++){
         if(arr[i]>secondeMax && arr[i]!==currentMax){
            secondeMax=arr[i];
         }
     }

     return secondeMax;
}


console.log(findMax(num1));