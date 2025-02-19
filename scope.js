var a=200;
{
    var a=400;
}
let b=a;
{
    let b=-400
}
console.log(b);

const n=[1,3,4,5,6];
console.log(n.includes(1));

let str1='Krisha';
let str2='Veni';

function mereStr(str1,str2){
     let result="";

     for(let i=0;i<Math.max(str1.length,str2.length);i++){
        result+=(str1[i] || "")+(str2[i] || "")
     }
     return result;
}
let r=mereStr(str1,str2);
console.log(r);
