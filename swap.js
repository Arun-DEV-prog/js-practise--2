let a=4;
let b=5;
function swapNumber(i,j){
    let temp=i;
    i=j;
    j=temp;

     console.log("a =",i, "b =",j);
}

swapNumber(a,b);


const data={
 name:'Hero alam',
 age:20,
 distrit:"dhaka",
 email:"h@gamil.com"
}
const henaData={
 name:'Hena',
 age:20,
 distrit:"Rangpur",
 email:"h@gamil.com"
}

function sendProposal(herodata,henadata){
    if(herodata.distrit===henaData.distrit){
         console.log("Prosal Done")
    }else{
        console.log("No distric mass")
    }
}

sendProposal(data,henaData);