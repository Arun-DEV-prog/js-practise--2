function ghotok(patri,name){
    //  console.log('say callback later',patri);
    patri(name);
   
}

// const patri='Rahima'
const patri=function (name){
     console.log("okay call asce!!",name)
}
const patri2=function (name){
     console.log("ar call dio na",name);
}
ghotok(patri,'Rahima');
ghotok(patri2,'masud');