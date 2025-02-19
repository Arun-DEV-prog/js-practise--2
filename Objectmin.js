const mobile=[
    {name:'Samsung',price:1112000,camere:'14mp',color:'black'},
    {name:'Opps',price:10000,camere:'14mp',color:'black'},
    {name:'Xiomi',price:38000,camere:'14mp',color:'black'},
    {name:'Iphone',price:4400,camere:'14mp',color:'black'},
    {name:'walton',price:22100,camere:'14mp',color:'black'},
    {name:'Realme',price:13400,camere:'14mp',color:'black'},
]
function print(p){
     for(const i of p){
         console.log(i.price);
     }
}

(print(mobile));

function getCheapestPhone(phones){
    let min=phones[0];
   for(const phone of phones){
     if(phone.price<min.price){
         min=phone;
     }
   }
   return min;
}

const cheap=getCheapestPhone(mobile);

console.log(cheap);



const products=[
    {name:'Shampoo',price:300},
    {name:'Loson',price:400},
    {name:'dal',price:500}
]

function getShoopinTotal(products){
    let totalPrice=0;
  for(const product of products){
      totalPrice=totalPrice+product.price;
  }

  return totalPrice;
}

console.log(getShoopinTotal(products));