
function sum(...args){
      return args
           .filter(function(e){
                return typeof e=='number'
           })

           .reduce(function(prev,curr){
                return prev +curr;
           });
}

let result=sum(10,'hi',null,undefined,20);
console.log(result);



const combine=(...args)=>{
      return args.reduce(function(prev,curr){
           return prev + " "+curr;
      });
};

let message=combine('JavaScript',"Rest","Parameter");
console.log(message);


const odd=[1,3,4,5];
const combined=[2,1,3,4,...odd];
console.log(combined);

function compare(a,b){
      return a-b;
}

let r=compare(...[1,3]);
console.log(r);


let rivers=['Nile','Gange',"Yangte"];
let moreRivers=['Danube',"Amazon"];

rivers.push(...moreRivers);
console.log(rivers)


let chars=['A',...'BC',"D"];
console.log(chars);



function createMachine(name,status){
      return {
           name,
           status
      };
}


console.log(createMachine('Arun',"shraboni"));




let server={
      name:'Server',
      restart(){
           console.log('The ' + this.name + " is restarting.....")

      },
      'Starting up'(){
           console.log('The '+ this.name + " is starting up!");
      }
}

 server['Starting up']();

 let colors=['Red',"Green","Blue"];
console.log(colors.entries());

 for(const[index,color] of colors.entries()){
      console.log(`${color} is at index ${index}`)
 }


 const ratings = [
     {user: 'John',score: 3},
     {user: 'Jane',score: 4},
     {user: 'David',score: 5},
     {user: 'Peter',score: 2},
 ];
 
 let Sum = 0;
 for (const {score} of ratings) {
     Sum += score;
 }
 
 console.log(`Total scores: ${Sum}`); //