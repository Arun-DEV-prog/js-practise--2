const scores=[10,20,30,10,40,20];

const results=[];

let index;
let fromIndex=0;

while(index !== -1){
   index=scores.indexOf(20,fromIndex);

     if(index !== -1){
         results.push(index);
         fromIndex=index+1;
     }
}

console.log(results);


function allIndexOf(needle,haystack){
    const results=[];
}