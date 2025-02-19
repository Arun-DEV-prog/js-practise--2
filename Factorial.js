function factorial(n){
  
   if(n===0 || n===1){
     return 1;
   }
   return n*factorial(n-1);
}

console.log(factorial(4));


// function fact(n){
//      let res=1;
//       while(n>1){
//          res*=n;
//          n--;
//       }
//       return res;
// }

console.log(Math.PI);