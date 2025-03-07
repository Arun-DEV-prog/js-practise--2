function sum(){
     let counter=0;
     return function(){
         counter++;
          console.log(counter);
     }
}

const reusult=sum();
reusult();
reusult();