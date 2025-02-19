 let arr=[1,3,2,1,4,5,6,8]
 
 const max=Math.max(...arr);
 console.log(max);


 function getMax(numbers){
    let max=numbers[0];
     for(const num of numbers){
        if(num>max){
             max=num;
        }
     }

     return max;
 }

 console.log(getMax(arr));


 const price=[2000,3000,5000,8000,3000];
 function getMin(numbers){
   let min=numbers[0];
    for(const num of numbers){
        if(num<min){
          min=num;
        }
    }

    return min;
 }

 const result=getMin(price)

console.log(result);