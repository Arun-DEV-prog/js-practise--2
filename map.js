const numbers=[1,3,4,5,6,7];
//  let temp=[]
//  for(let i=0;i<numbers.length;i++){
//      const element=numbers[i];
//      const increses=element+1
//      temp.push(increses);
//  }

//  console.log(temp);

const newArr=numbers.map(value=>value+1);
console.log(newArr);

const squareArr=numbers.map(value=>value*value);
console.log(squareArr);

const NewArr=numbers.map((value,index)=>{
 console.log(`value : ${value}, Index: ${index}`);
})



const products=[
    {id:1,name:"Iphone",color:"black",price:12000,brand:'apple'},
    {id:2,name:"Iphone",color:"blue",price:1200000,brand:'samsung'},
    {id:3,name:"Iphone",color:"glod",price:19000,brand:'apple'},
    {id:5,name:"Iphone",color:"navy-blue",price:16000,brand:'Hot-Infix'}
]

// products.forEach(product=>{
//     if(product.color==='black'){
//          console.log(product.color);
//     }
// })

// Filtering array of object
const p=1000;
products.filter(product=>{
    if(product.brand=='apple'){
       const r=product.price+p;
       console.log(r);
    }
})

// const finding=products.find(p=>p.id===3 )
// console.log(finding);


const n=products.map(P=>{
    if(P.brand==='apple'){
       P.price=P.price+1000;
    }
    return P;
})

console.log(n);
