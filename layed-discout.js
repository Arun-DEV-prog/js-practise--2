/* 
*first100--->100
*101to 200-->90
*above 200--->70
*/


function layeredDiscountPrice(quantity){
     const first100=100;
     const second100=90;
     const above200Price=70;

      if(quantity<=100){
         const total=quantity*first100;
         return total;
      }
      else if(quantity<=200){
        const first100Total=100*first100;
        const remainQuantity=quantity-100;
        const remainQuantityTotal=remainQuantity*second100;
        
      }
}