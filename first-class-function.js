function add(a,b){
     return a+b;
}

let sum=add;


function average(a,b,fn){
     return fn(a,b)/2;
}

let result=average(1,3,sum);
console.log(result);


function compareBy(propertyName){
     return function(a,b){
         let x=a[propertyName],
         y=b[propertyName];


         if(x>y){
             return 1;
         }else if(x<y){
             return -1;
         }else{
            return 0;
         }
     };
}

let products=[
    {name:'Iphone',price:900},
    {name:'Samsung Galaxy',price:850},
    {name:'sony Xpera',price:700}
];

console.log('Product sorted by name: ');
products.sort(compareBy('price'));
console.table(products);


setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);

setTimeout(function(){
     console.log('Execute later after 1 second')
},1000);

(function(){
    console.log("immediately invoked function")
})();