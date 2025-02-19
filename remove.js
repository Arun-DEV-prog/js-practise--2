// function removeDuplicant(num){
//     const unique=[];

//     for(const item of num){
//         if(unique.includes(item)===false){
//              unique.push(item);
//         }
//     }

//     return unique;
// }



// let arr=[12,12,3,4,5,3,3];
// console.log(removeDuplicant(arr));


// function oddAverage(numbers){
//      const odds=[];

//        for(const num of numbers){
//          if(num%2===1){
//              odds.push(num);
//          }
//        }

//        let sum=0;
//         for(const num of odds){
//              sum+=num;
//         }

//         const count=odds.length;


//         console.log(sum,count);
// }

// let Arr=[2,1,3,4,5,6,7,2];
// oddAverage(Arr);


// const rray=[3,3,4,50,3];
// console.log(Array.isArray(rray));

function say(message){
   if( !message){
     return
   }
   console.log(message);
}

say('Hi');