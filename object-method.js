let person={
    firstName:'John',
    lastName:'Doe',
    // greet:function (){
    //       console.log("h@gamil.com");
    // }

    getFullName:function (){
         return this.firstName + " " +this.lastName;
    }
}

function greet (){
     console.log("heee")
}

 person.greet=greet;
 person.greet();
 console.log( person.toString());

 console.log(person.getFullName());


 function Document(firstName,lastName){
       if(!new.target){
          return new Document(firstName,lastName);
       }

     this.firstName=firstName;
     this.lastName=lastName;

     this.getFullName=function (){
        return this.firstName + " "+ this.lastName;
     }
 }


 let document=Document('john','Doe');
 console.log(document.firstName);


 console.log(Object.prototype);