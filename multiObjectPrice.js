/* 
*upt 100--->100
*more than 101-200--->90
*moret than 200:--->70


*/


function discountPrice(prices){
     if(prices <=100){
         const total=prices*100;
         return total;
     }else if(prices <=200){
         const total=prices*90;
         return total;
     }else{
        const total=prices*70;
        return total;

     }
}

const discout=discountPrice(160);
console.log(discout);