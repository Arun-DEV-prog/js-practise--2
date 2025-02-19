// function square(number){
//     return number*number;
// }


// console.log(square(2));





// function myFunc(theObject){
//      theObject.make="Toyata";
// }

// const myCar={
//     make:"Honda",
//     model:"Accord",
//     year:1998
// };

// console.log(myCar.make);
// myFunc(myCar);
// console.log(myCar.make);



// function myArr(theArr){
//     theArr[2]=900;

// }

// const arr=[1,3,4,2,13,4];
// console.log(arr);

// myArr(arr);
// console.log(arr[2]);


// function addSquare(a,b){
     
// }

// // Functon Scope
// const num1=20;
// const num2=3;
// const name='Chamakh';

// function multiply(){
//     return num1*num2;
// }

// console.log(multiply());


// function getScore(){
//      const num1=2;
//      const num2=3;

//      function add(){
//         return `${name} scored ${num1+num2}`;
//      }

//      return add();
// }

// console.log(getScore());


//  const Factorial=function fac(n){
//     return n<2 ? 1: n*fac(n-1);
//  };

//  console.log(Factorial(4));

//  const numbers=[1,3,42,3,4,5];
//  const nwArr=numbers.map((x)=>x*2);
 
// //  map() creates a new array from calling a function for every array element.
//  console.log(nwArr)
 
// //  function myFunction(num){
// //     return num*10;
// //  }


// const kvArray=[
//     { key : 1,value: 10},
//     { key: 2, value: 20},
//     { key : 3 , value : 30},
// ]


// const reformattedArray=kvArray.map(({key,value})=>({
//     [key]: value
// }));

// console.log(reformattedArray);
// console.log(kvArray);


// const filteredNumbers=numbers.map((num,index)=>{
//     if(index<3){
//          return num;
//     }
// })

// console.log(filteredNumbers);

// const cart=[5,15,25];
// const Total=cart.reduce((acc,cost)=>acc+cost,0);
// console.log(Total);


// const products = [
//     { name: "sports car" },
//     { name: "laptop" },
//     { name: "phone" },
//   ];
  
//  const p= products.map((product) => {
//     product.price = 100;
//   });

//   console.log(p)


//   function loop(x){
//      if(x>=10){
//          return
//      }
//      console.log(x);
//     loop(x+1);
    
//   }

//   loop(0);


//   function isEven(n){
//      if(n%2==0){
//          return true
//      }
//      return false;
//   }

//   console.log(isEven(9));


  let arryy=[1,3,5,6,7,8];
    
 
  function sumArray(nums){
    let even=[];
    let odd=[];
     for(let num of nums){
        if(num%2==0){
            even.push(num);
        }else{
            odd.push(num);
        }
     }
  console.log(odd);
  console.log(even);
    
  }

  (sumArray(arryy));
