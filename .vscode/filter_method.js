let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredArr=[];

const myFilter=(value)=>{
     return Boolean(value%2);
}

arr.filter((Element)=>{
     if(myFilter(Element)===false){
         filteredArr.push(Element);
     }
})

console.log(filteredArr);