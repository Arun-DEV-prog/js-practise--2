function square(x){
    x=x*x;
     return x;
}

let y=10;
let result=square(y);

console.log(result);
console.log(y);


let person={
    name:'John',
    age:25
};

function increaseAge(obj){
    obj.age+=1;

    obj={name:'Dalim KUmar', age:22};
}

increaseAge(person);
console.log(person);


let showr=(a,b)=>a+b;
console.log(showr(3,5));



function recurse(){
    if(condition){
        // stop calling itselg
    }else{
        recurse();
    }
    
}


function countDown(fromNumber){
    console.log(fromNumber);
    let nextNumber=fromNumber-1;

     if(nextNumber>0){
         countDown(nextNumber);
     }
}

countDown(3);


function sum(n){
    if(n<=1){
         return n;
    }
    return n + sum(n-1);
}

console.log(sum(10));

function say(message){
    message = typeof message !=='undefined' ? message :'hi';
     console.log(message);
}

say();
say("Yahoo.com")



function date(d=today()){
     console.log(d);
}

function today(){
    return (new Date()).toLocaleDateString('en-US');
}

date();


function requireArg(){
     throw new Error('The argument is required');
}

function add(x=requireArg(),y=requireArg()){
    return x + y;
}

add(10,19);


function add(x=1,y=x,z=x+y){
     return x + y +z;
}

console.log( add ());


let textRate=()=>0.1;

let getPrice=function(price, tax=price * textRate()){
     return price + tax;
}

let fullPrice= getPrice(100);
 console.log(fullPrice);