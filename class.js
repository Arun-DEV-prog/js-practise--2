// class Person {
//     constructor(name) {
//         this.setName(name);
//     }
//     getName() {
//         return this.name;
//     }
//     setName(newName) {
//         newName = newName.trim();
//         if (newName === '') {
//             throw 'The name cannot be empty';
//         }
//         this.name = newName;
//     }
// }

// let person = new Person('Jane Doe');
// console.log(person); // Jane Doe

// person.setName('Jane Smith');
// console.log(person.getName()); // Jane Smith

class Person{
    constructor(name){
         this._name=name;
    }
    get name(){
         return this._name;
    }
    set name(newName){
         newName=newName.trim();
         if(newName === ''){
             throw 'The name cannot be empty';
         }
         this._name=newName;
    }
}

let person= new Person('jone Doe');
console.log(person.name);
person.name='Jane Smith';
console.log(person.name);