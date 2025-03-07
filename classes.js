class product{
 

     constructor(name,price,brand,color){
       this.name=name,
       this.price=price,
       this.brand=brand,
       this.color=color
     }

    details(){
        console.log(this.name);
    }

}
const n=new product('yesphone',99999,'apple','black');

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y)


function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);